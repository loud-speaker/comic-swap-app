import { get, post, put, del } from './request';

const URL = '/api';
const CATALOG_URL = `${URL}/catalogs`;

export const postCatalog = catalog => post(CATALOG_URL, catalog);
export const getUserCatalog = userId => get(`${CATALOG_URL}/${userId}`);
export const updateUserCatalog = catalog => put(`${CATALOG_URL}/${catalog._id}`, catalog);
export const removeUserCatalog = catalog => del(`${CATALOG_URL}/${catalog._id}`, catalog);