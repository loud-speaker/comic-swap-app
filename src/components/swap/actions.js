import { MATCH_LOAD } from './reducers';
import { getUserMatches } from '../../services/catalogApi';

export const loadUserMatches = match => {
  return {
    type: MATCH_LOAD,
    payload: getUserMatches(match)
  };
};