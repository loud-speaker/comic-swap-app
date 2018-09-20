export const CATALOG_LOAD = 'CATALOG_LOAD';

export const getUserCatalog = state => state.userCatalog;

export function userCatalog(state = [], { type, payload }) {
  switch(type) {
    case CATALOG_LOAD:
      return payload;
    default:
      return state;
  }
}