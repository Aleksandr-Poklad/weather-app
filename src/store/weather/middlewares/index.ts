import { fetchMiddlewares } from './list';
import { fetchMiddlewaresDel } from './deleteCity';

export const weatherMiddleWares = [...fetchMiddlewares, ...fetchMiddlewaresDel];