import { EnvironmentConfig } from './env.types';

const getConfig = () => {
  let config: EnvironmentConfig = {
    apiUrl: '',
  };
  const loadConfig = async (env: string) => {
    switch (env) {
      case 'dev':
        config = (await import('./envs/dev')).default;
        break;
      case 'sit':
        config = (await import('./envs/sit')).default;
        break;
      case 'uat':
        config = (await import('./envs/uat')).default;
        break;
      case 'prod':
        config = (await import('./envs/prod')).default;
        break;
      default:
        config = (await import('./envs/dev')).default;
    }
  };

  return {
    loadConfig,
    get config() {
      return config;
    },
  };
};

const Config = getConfig();

export default Config;
