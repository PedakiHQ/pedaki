'use server';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@pedaki/design/ui/tooltip';
import { cn } from '@pedaki/design/utils';
import { StyledLink } from '~/components/StyledLink';
import type { MonitoringStatus } from '~/services/betterstack/status';
import { getMonitoringStatus } from '~/services/betterstack/status';
import React from 'react';

const StatusMap: Record<MonitoringStatus, [string, string]> = {
  degraded: ['bg-yellow-300', 'bg-yellow-500'],
  downtime: ['bg-red-300', 'bg-red-500'],
  operational: ['bg-green-300', 'bg-green-500'],
  unknown: ['bg-gray-300', 'bg-gray-500'],
};

const StatusCircle = ({ status }: { status: MonitoringStatus }) => {
  const statusColor = StatusMap[status];

  return (
    <span className="relative flex h-2.5 w-2.5">
      <span
        className={cn(
          'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
          statusColor[0],
        )}
      />
      <span className={cn('relative inline-flex h-2.5 w-2.5 rounded-full', statusColor[1])} />
    </span>
  );
};

const Status = async () => {
  const status = await getMonitoringStatus();

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <StyledLink
            href="https://status.pedaki.fr"
            prefetch={false}
            variant="subtle_secondary"
            className="flex items-baseline gap-2"
          >
            <StatusCircle status={status} />
            <span>Status</span>
          </StyledLink>
        </TooltipTrigger>
        <TooltipContent side="top" align="center">
          {/*TODO: add translation (use status as key) */}
          {status}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Status;
