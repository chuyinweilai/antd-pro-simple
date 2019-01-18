import { stringify } from 'qs';
import { requestGet, requestPost } from '@/utils/request';

export async function furnitures(params) {
  return await requestGet('/api/equity/furnitures', params)
}