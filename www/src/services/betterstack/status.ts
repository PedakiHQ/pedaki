import { cache } from '@pedaki/common/cache';
import { env } from '~/env.mjs';
import * as z from 'zod';

interface JsonResponse {
  data: {
    attributes: {
      aggregate_status: MonitoringStatus;
    };
  };
}

export type MonitoringStatus = 'operational' | 'degraded' | 'downtime' | 'unknown';

// zod schema to validate the response
const schema = z.object({
  attributes: z.object({
    aggregate_state: z.enum(['operational', 'degraded', 'downtime']),
  }),
});

export const getMonitoringStatus = async () => {
  return await cache(
    async () => {
      console.log('Fetching BetterStack status');
      try {
        const response = await fetch(
          `https://betteruptime.com/api/v2/status-pages/${env.BETTERUPTIME_STATUS_PAGE_ID}`,
          {
            headers: {
              Authorization: `Bearer ${env.BETTERUPTIME_API_TOKEN}`,
            },
            next: {
              revalidate: 20, // 20 seconds
            },
          },
        );
        const { data } = (await response.json()) as JsonResponse;
        console.log('Response from BetterStack: ', data);

        // validate the response
        const validated = schema.parse(data);

        const status = validated.attributes.aggregate_state;
        console.log(`BetterStack status: ${status}`);

        return status;
      } catch (e) {
        console.error('Error while fetching BetterStack status: ', (e as Error).message);
        return 'unknown' as MonitoringStatus;
      }
    },
    'monitoring:status',
    {
      ttl: 1000 * 30, // 30 seconds
      keepStale: true,
    },
  );
};
