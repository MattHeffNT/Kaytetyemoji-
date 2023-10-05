type CapacitorConfig = {
  appId: string;
  appName: string;
  bundledWebRuntime?: boolean;
  webDir?: string;
  // Other configuration options...

  // Splash Screen configuration
  splashScreen?: {
    launchShowDuration?: number;
    backgroundColor?: string;
    imageSplash?: string;
    resizeMode?: 'cover' | 'contain' | 'fill';
  };
};

// Example usage:
const config: CapacitorConfig = {
  appId: 'io.kaytetyemoji.app',
  appName: 'Kaytetyemoji',
  bundledWebRuntime: true,
  webDir: 'build',
  splashScreen: {
    launchShowDuration: 9000,
    backgroundColor: '#ffffff',
    imageSplash: 'src/assets/splash.png',
    resizeMode: 'cover',
  },
  // Other configuration options...
};

export default config;
