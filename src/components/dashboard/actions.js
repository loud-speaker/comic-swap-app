import { CATALOG_ADD, CATALOG_LOAD, CATALOG_UPDATE, CATALOG_REMOVE  } from './reducers';
import { postCatalog, getUserCatalog, updateUserCatalog, removeUserCatalog } from '../../services/catalogApi';

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

export const removeCatalog = id => {
  return {
    type: CATALOG_REMOVE,
    payload: removeUserCatalog(id).then(() => id)
  };
};