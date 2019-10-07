import { fetchMiddlewares } from './list';
import { fetchMiddlewaresGetNewCity } from './getNewCity';

export const weatherMiddleWares = [...fetchMiddlewares, ...fetchMiddlewaresGetNewCity];