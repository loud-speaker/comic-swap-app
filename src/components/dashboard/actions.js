import { CATALOG_LOAD } from './reducers';

export const loadUserCatalog = (catalog) => {
  return {
    type: CATALOG_LOAD,
    payload: catalog
  };
};