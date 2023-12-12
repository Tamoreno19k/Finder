import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'co.finder-app',
  appName: 'Finder',
  webDir: 'app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
