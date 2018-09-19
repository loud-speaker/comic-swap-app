import { get } from './request';

const URL = '/api';
const COMICS_URL = `${URL}/comics`;

export const getComicsList = (params) => get(`${COMICS_URL}/comic-search`, {}, params);
export const getComicDetail = (comicId) => get(`${COMICS_URL}/comic-detail`, {}, { id: comicId });