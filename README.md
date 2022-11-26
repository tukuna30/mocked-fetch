# mocked-fetch [![NPM version](https://img.shields.io/npm/v/mocked-fetch.svg?style=flat)](https://www.npmjs.com/package/mocked-fetch) [![NPM monthly downloads](https://img.shields.io/npm/dm/mocked-fetch.svg?style=flat)](https://npmjs.org/package/mocked-fetch) [![NPM total downloads](https://img.shields.io/npm/dt/mocked-fetch.svg?style=flat)](https://npmjs.org/package/mocked-fetch)
fetch mocked for better development

mocked-fetch mocks the **fetch** API on browser and node. It helps you make GET, PUT, POST, DELETE calls to get resources without making any network calls. It serves data from a local file. 

Start writing your code using mockedFetch and in production build just replace it with fetch and the API endpoint. 

## Quick Start 
Install mocked-fetch 

```bash
npm install mocked-fetch
```

Get Todos using mocked-fetch 

```js 
   import { mockedFetch } from 'mocked-fetch'; 

    
    async function awaitTodos () {
        const data = await mockedFetch('https://skillrazr.com/todos'); 
        const finalData = await data.json();
        console.log('data todos', finalData);
    }

    awaitTodos();
```
Get a todo by given todoId :- 
    
```js
    async function awaitTodo (todoId) {
        const data = await mockedFetch(`https://skillrazr.com/todos/${todoId}`); 
        const finalData = await data.json();
        console.log('got todo', finalData);
    }
```

Update a todo :-
```js 
   mockedFetch('https://skillrazr.com/todos/1', {
    method: 'PUT',
    body: JSON.stringify({
        title: 'Write test cases',
        completed: false,
    }),
    headers: {
        "Content-type": 'application/json; charset=UTF-8',
    }
  });
  ```
Create a new todo :-

```js 
mockedFetch('https://skillrazr.com/todos/', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Create shopping list',
    completed: false,
  }),
  headers: {
    "Content-type": 'application/json; charset=UTF-8',
  }
  })
  .then((response) => response.json())
  .then((json) => console.log('add new todo response', json));
  ```
    
  Delete a todo :- 
  ```js 
  mockedFetch('https://skillrazr.com/todos/1', {
    method: 'DELETE',
    headers: {
        "Content-type": 'application/json; charset=UTF-8',
    }
  })
  .then((response) => response.json())
  .then((json) => console.log('deleted todo response', json));
  ```
  
  ## Running tests ( Jasmine integration pending) 
  ```bash
npm run test
```

## Contributions are open (Raise PRs)
  
