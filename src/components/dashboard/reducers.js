export const CATALOG_ADD = 'CATALOG_ADD';
export const CATALOG_LOAD = 'CATALOG_LOAD';

export const getCatalog = state => state.catalog;
export const getUserCatalog = state => state.userCatalog;

export function catalog(state = {}, { type, payload }) {
  switch(type) {
    case CATALOG_ADD:
      return payload;
    default:
      return state;
  }
}
export function userCatalog(state = [], { type, payload }) {
  switch(type) {
    case CATALOG_LOAD:
      return payload;
    default:
      return state;
  }
}

