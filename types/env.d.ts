declare namespace NodeJS {
  interface ProcessEnv {
    SITE_URL: string;
    NEXT_PUBLIC_SANITY_PROJECT_ID: string;
    NEXT_PUBLIC_SANITY_DATASET: string;
    NEXT_PUBLIC_SANITY_API_VERSION: string;
  }
}
