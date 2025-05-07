interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly AUTH_TOKEN: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }