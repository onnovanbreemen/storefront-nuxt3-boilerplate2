import { type AxiosInstance } from 'axios';
import { clientCache } from '../clientcache';
const getClient = () : AxiosInstance => {
  return clientCache.get();
};
export { getClient };

