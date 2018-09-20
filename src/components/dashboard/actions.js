import { CATALOG_LOAD } from './reducers';
import { getUserCatalog } from '../../services/catalogApi';

export const loadUserCatalog = () => {
  return {
    type: CATALOG_LOAD,
    payload: getUserCatalog()
  };
};