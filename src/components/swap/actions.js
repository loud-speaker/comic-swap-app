import { MATCH_LOAD } from './reducers';
import { getUserMatches } from '../../services/catalogApi';

export const loadMatches = match => {
  return {
    type: MATCH_LOAD,
    payload: getUserMatches(match)
  };
};