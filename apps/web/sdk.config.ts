import { SdkModule, sdkModule } from '@vue-storefront/storefront-boilerplate-sdk';
import { createConnector } from 'storefront-nuxt3-boilerplate-sdk';

const createProxiedApi = (occ: any): any => {
  const api = {};
  return new Proxy(api, {
    get: (target, prop, receiver) => {
      const functionName = String(prop);
      if (Reflect.has(target, functionName)) {
        return Reflect.get(target, prop, receiver);
      }
      return async (args: any) => occ.doGet(functionName, args);
    }
  });
}


const determineApiUrl = (): string => {
  const config = useRuntimeConfig();
  let proto: string, host: string, port: string, base: string;
  if (process.server) {
    // on ssr call localhost directly
    proto = 'https:';
    host = ''
    port = '';
    base = 'api';
    return 'https://storefront-nuxt3-boilerplate2.vercel.app/api';
  } else {
    proto = window.location.protocol;
    port = '';
    host = window.location.hostname;
    base = 'api'
  }
  port = port ? `:${port}` : '';
  return `${proto}//${host}${port}/${base}`;

}

export default defineSdkConfig(({ buildModule }) => {
  const cache = {};
  const apiUrl = determineApiUrl();
  const connector = createProxiedApi(createConnector({
    apiUrl,
    cache
  }))
  const commerce = {
    connector
  } as SdkModule;
  return {
    //commerce: buildModule<SdkModule>(sdkModule),
    commerce
  }
}
);
