import { COMICS_LOAD } from './reducers';
import { getComicsList } from '../../services/comicsApi';

export const loadComics = () => {
  return {
    type: COMICS_LOAD,
    payload: getComicsList()
  };
};