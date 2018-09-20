import { get, post } from './request';

const URL = '/api';
const CATALOG_URL = `${URL}/catalogs`;

export const getUserCatalog = () => get(`${CATALOG_URL}/:userId`);
export const postCatalog = catalog => post(CATALOG_URL, catalog);
