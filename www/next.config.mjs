import {env} from "./src/env.mjs";
import million from "million/compiler";

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,

    swcMinify: true,
    poweredByHeader: false,
    experimental: {
        serverActions: true,
        esmExternals: true,
    },

    transpilePackages: ["@pedaki/common"],

    images: {
        domains: ["pedaki.fr"],
    },


    redirects: async () => [
        {
            source: '/login',
            destination: `${env.NEXT_PUBLIC_APP_URL}/auth/login`,
            permanent: false,
        },
        {
            source: '/community',
            destination: `https://discord.gg/${env.NEXT_PUBLIC_DISCORD_INVITE}`,
            permanent: false,
        },
        {
            source: '/support',
            destination: `https://github.com/vahor/pedaki-pedaki.fr/issues/new/choose`,
            permanent: false,
        }
    ],

    modularizeImports: {
        "@pedaki/design/ui/icons": {
            transform: "@pedaki/design/ui/icons/{{member}}",
            preventFullImport: true,
        },
        "@pedaki/common/hooks": {
            transform: "@pedaki/common/hooks/{{member}}",
            preventFullImport: true,
            skipDefaultConversion: true,
        }
    },

    compiler: {
        // removeConsole: process.env.NODE_ENV === "production"
    },

    eslint: {
        // Already checked in ci
        ignoreDuringBuilds: true
    },

    typescript: {
        // Already checked in ci
        ignoreBuildErrors: true
    }

};

// million is not needed here, it's just a test to see if it works
//  before adding it to the other apps
export default million.next(config, {
    auto: {rsc: true},
});
