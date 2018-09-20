import { CATALOG_ADD, CATALOG_LOAD, CATALOG_UPDATE  } from './reducers';
import { postCatalog, getUserCatalog, updateUserCatalog } from '../../services/catalogApi';

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

export const updateCatalog = (catalog) => {
  return {
    type: CATALOG_UPDATE,
    payload: updateUserCatalog(catalog)
  };
};