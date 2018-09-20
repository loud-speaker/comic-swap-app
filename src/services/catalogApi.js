import { get, post } from './request';

const URL = '/api';
const CATALOG_URL = `${URL}/catalogs`;

export const postCatalog = catalog => post(CATALOG_URL, catalog);
export const getUserCatalog = (userId) => get(`${CATALOG_URL}/${userId}`);
