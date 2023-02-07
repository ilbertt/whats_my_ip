import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import EnvironmentPlugin from 'vite-plugin-environment';
// this is the only way to import json files in vite configuration during build time
// @ts-ignore
import localCanisters from '../../.dfx/local/canister_ids.json';
// @ts-ignore
import prodCanisters from '../../canister_ids.json';

const initCanisterEnv = () => {
  const network =
    process.env.DFX_NETWORK ||
    (process.env.NODE_ENV === "production" ? "ic" : "local");

  const canisterConfig = network === "local" ? localCanisters : prodCanisters;

  return Object.entries(canisterConfig).reduce((prev, current) => {
    const [canisterName, canisterDetails] = current;
    prev[canisterName.toUpperCase() + "_CANISTER_ID"] =
      canisterDetails[network];
    return prev;
  }, {});
}

const canisterEnvVariables = initCanisterEnv();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin({
      ...canisterEnvVariables,
      NODE_ENV: process.env.NODE_ENV,
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943",
        changeOrigin: true,
        rewrite(path) {
          return path.replace(/^\/api/, '')
        },
      },
    },
  }
});
