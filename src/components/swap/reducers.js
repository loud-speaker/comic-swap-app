export const MATCH_LOAD = 'MATCH_LOAD';

export const getUserMatches = state => state.matches;

export function matches(state = [], { type, payload }) {
  switch(type) {
    case MATCH_LOAD:
      return payload;
    default: 
      return state;
  }
}