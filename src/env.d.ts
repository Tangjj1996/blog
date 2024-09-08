/// <reference path="../.astro/types.d.ts" />

declare namespace NodeJS {
  interface ProcessEnv {
    GITHUB_TOKEN: string;
  }
}
