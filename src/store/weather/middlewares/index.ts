import { fetchMiddlewares } from './list';
import { fetchMiddlewaresDel } from './deleteCity';
import { fetchMiddlewaresAdd } from './search';
import { fetchMiddlewaresSetCity } from './setCity';
import { fetchMiddlewaresGetNewCity } from './getNewCity';

export const weatherMiddleWares = [...fetchMiddlewares, ...fetchMiddlewaresDel, ...fetchMiddlewaresAdd, ...fetchMiddlewaresSetCity, ...fetchMiddlewaresGetNewCity];