export const MATCH_LOAD = 'MATCH_LOAD';

export const getMatches = state => state.matches;

export function matches(state = [], { type, payload }) {
  switch(type) {
    case MATCH_LOAD:
      return payload;
    default: 
      return state;
  }
}