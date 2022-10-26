import { getAllTodos, getTodo } from './todos';

const removeTrailingSlash = (input:string) => {
  return input[input.length-1] === '/' ? input.slice(0, input.length-1) : input;
}

export const mockedFetch = (url:string, options: Record<string,string | any>={}): Promise<any> => {
  let method = options.method || 'GET';

  if (!['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
    return new Promise((res, rej) => {rej('Method not supported!')})
  } 

  if (url.indexOf('https://skillrazr.com/todos') === -1) {
    return new Promise((res, rej) => {rej('API not supported!')});
  }

  const newUrl = removeTrailingSlash(url);

  if (newUrl === 'https://skillrazr.com/todos') {
    return getAllTodos();
  }

  const match = url.match(/[\d]+/);

  if (match) {
    const index = match.index;
    const truncatedUrl = url.slice(0, index);

    const newUrl = removeTrailingSlash(truncatedUrl);
    const itemId = parseInt(match[0]);

    if (newUrl === 'https://skillrazr.com/todos') {
      return getTodo(itemId);
    }
  }

  return new Promise((res, rej) => {rej('API not found!')})
} 