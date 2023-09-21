import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXTAUTH_SECRET: z.string().min(1).default("secret"),

    GITHUB_ROADMAP_ACCESS_TOKEN: z.string(),

    BETTERUPTIME_STATUS_PAGE_ID: z.string(),
    BETTERUPTIME_API_TOKEN: z.string(),
  },

  client: {
    NEXT_PUBLIC_APP_URL: z.string().url().default("https://app.pedaki.fr"),
    NEXT_PUBLIC_DOCS_URL: z.string().url().default("https://docs.pedaki.fr"),
    NEXT_PUBLIC_DISCORD_INVITE: z.string().default("pedaki"),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,

    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_DOCS_URL: process.env.NEXT_PUBLIC_DOCS_URL,

    NEXT_PUBLIC_DISCORD_INVITE: process.env.NEXT_PUBLIC_DISCORD_INVITE,

    GITHUB_ROADMAP_ACCESS_TOKEN: process.env.GITHUB_ROADMAP_ACCESS_TOKEN,

    BETTERUPTIME_STATUS_PAGE_ID: process.env.BETTERUPTIME_STATUS_PAGE_ID,
    BETTERUPTIME_API_TOKEN: process.env.BETTERUPTIME_API_TOKEN,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
