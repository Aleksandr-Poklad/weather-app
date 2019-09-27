import { fetchMiddlewares } from './list';
import { fetchMiddlewaresDel } from './deleteCity';
import { fetchMiddlewaresAdd } from './search';

export const weatherMiddleWares = [...fetchMiddlewares, ...fetchMiddlewaresDel, ...fetchMiddlewaresAdd];