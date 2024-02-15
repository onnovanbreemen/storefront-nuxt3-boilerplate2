import axios from 'axios';
import { clientCache } from './clientcache';
import { Options } from './types';
import * as methods from './methods/index';

/**
 * Connector methods.
 */
type Methods = typeof methods;

/**
 * Initialize the occ connector.
 */
export const createConnector = (options: Options): Methods => {
  clientCache.init(options.cache, () => {
    const client = axios.create({
      baseURL: options.apiUrl
    });
    return client;
  });
  return methods;
};
