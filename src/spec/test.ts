import { mockedFetch } from '../mockedFetch';

console.log('starting unit tests');

console.log('get all todos');
mockedFetch('https://skillrazr.com/todos')
    .then((response:any) => {
        console.log('resp details', response, response.status);
        return response.json()
    })
    .then((todos) => {
        console.log('got todos', todos);
    }).catch((e) => {
        console.log('error in data fetch', e);
    });

    console.log('using await ');
    async function awaitTodos () {
        const data = await mockedFetch('https://skillrazr.com/todos'); 
        const finalData = await data.json();
        console.log('data using await', finalData);
    }

    awaitTodos();

console.log('get a todo');
mockedFetch('https://skillrazr.com/todos/2')
    .then((response:any) => {
        // console.log('resp details', response, response.status);
        return response.json()
    })
    .then((todo) => {
        console.log('got todo', todo);
    }).catch((e) => {
        console.log('error in data fetch', e);
    })

console.log('create a new todo'); 
// pending 
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
  .then((json) => console.log(json));