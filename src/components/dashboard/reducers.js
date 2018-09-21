export const CATALOG_ADD = 'CATALOG_ADD';
export const CATALOG_LOAD = 'CATALOG_LOAD';
export const CATALOG_UPDATE = 'CATALOG_UPDATE';
export const CATALOG_REMOVE = 'CATALOG_REMOVE';

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
    case CATALOG_UPDATE:
      return state.map(catalog => {
        if(catalog._id == payload._id) return { ...catalog, condition: payload.condition, exchange: payload.exchange };
        return catalog;
      });
    case CATALOG_REMOVE:
      return state.filter(catalog => catalog._id != payload._id);
    default:
      return state;
  }
}

