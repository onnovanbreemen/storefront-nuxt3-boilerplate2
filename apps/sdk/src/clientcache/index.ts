import { type AxiosInstance } from 'axios';

const clientCache = {
  cache: null as any,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  init(cache: any, factory: () => AxiosInstance): void {
    this.cache = cache;
    if (!this.cache.__sdkclient) {
      this.cache.__sdkclient = factory();
    }
  },
  get() : AxiosInstance {
    if (!this.cache?.__sdkclient) {
      throw 'client not initialized';
    }
    return this.cache.__sdkclient;
  }
};

export { clientCache };
