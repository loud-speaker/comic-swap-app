import { CATALOG_ADD, CATALOG_LOAD  } from './reducers';
import { postCatalog, getUserCatalog } from '../../services/catalogApi';

export const addCatalog = (catalog) => {
  return {
    type: CATALOG_ADD,
    payload: postCatalog(catalog)
  };
};

export const loadUserCatalog = () => {
  return {
    type: CATALOG_LOAD,
    payload: getUserCatalog()
  };
};