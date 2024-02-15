import { getClient } from '../../client';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-unused-vars
export async function doGet(path: string, arg?: any) : Promise<any> {
  const { data } = await getClient().get<any>(path);
  return data;
}
