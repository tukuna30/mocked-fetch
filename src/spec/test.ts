import { mockedFetch } from '../mockedFetch';

console.log('starting unit tests');

console.log('should get all todos');
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

    console.log('using await get todos');
    async function awaitTodos () {
        const data = await mockedFetch('https://skillrazr.com/todos'); 
        const finalData = await data.json();
        console.log('data using await', finalData);
    }

    awaitTodos();

console.log('should get a todo');

mockedFetch('https://skillrazr.com/todos/2')
    .then((response:any) => {
        // console.log('resp details', response, response.status);
        return response.json()
    })
    .then((todo) => {
        console.log('got a todo', todo);
    }).catch((e) => {
        console.log('error in data fetch', e);
    })

console.log('should create a new todo'); 

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

console.log('should give error on delete attempt of a todo with invalid id'); 

mockedFetch('https://skillrazr.com/todos/123', {
  method: 'DELETE',
  headers: {
    "Content-type": 'application/json; charset=UTF-8',
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch(e => console.log('error', e));

  console.log('should delete a todo'); 

  mockedFetch('https://skillrazr.com/todos/1', {
    method: 'DELETE',
    headers: {
        "Content-type": 'application/json; charset=UTF-8',
    }
  })
  .then((response) => response.json())
  .then((json) => console.log('deleted todo response', json));

  console.log('should update a todo')

  mockedFetch('https://skillrazr.com/todos/2', {
    method: 'PUT',
    body: JSON.stringify({
        title: 'Write test cases',
        completed: false,
    }),
    headers: {
        "Content-type": 'application/json; charset=UTF-8',
    }
  })
  .then((response) => response.json())
  .then((json) => console.log('update todo response', json));