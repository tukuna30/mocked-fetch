import { Response } from 'node-fetch';
import { todos } from './data/todos';

export const getAllTodos = () => {
    const resp = new Response(JSON.stringify(todos));
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(resp);
        }, 2000);
    });
}

export const getTodo = (todoId: number) => {
    const todo = todos.find((todo) => {
        return todo.id === todoId;
    });

    if (!todo) {
        return new Promise((resolve, reject) => {
            reject('Todo not found');
        });
    }

    const resp = new Response(JSON.stringify(todo));
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(resp);
        }, 2000);
    });
}

export const addNewTodo = (_data: string) => {
    const data: Record<string, string | boolean> = JSON.parse(_data);

    if (!data.title) {
        return Promise.reject('Invalid data');
    }

    const newTodo = {id: todos.length + 1, 
        title: data.title as string, 
        completed: data.completed as boolean};

    todos.push(newTodo);
    const resp = new Response(JSON.stringify(newTodo), {status: 201});
    // status 201 as new record is created

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(resp);
        }, 2000);
    });
}

export const deleteTodo = (todoId: number) => {
    const index = todos.findIndex((todo) => {
        return todo.id === todoId;
    });

    if (index === -1) {
        return Promise.reject('Todo not found');
    }

    const resp = new Response("{}", {status: 204});    
    todos.splice(index, 1);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(resp);
        }, 2000);
    });
}

export const updateTodo = (todoId: number, _data: string) => {
    const data: Record<string, string | boolean> = JSON.parse(_data);

    const index = todos.findIndex((todo) => {
        return todo.id === todoId;
    });

    if (index === -1) {
        return Promise.reject('Todo not found');
    }

    if (!data.title) {
        return Promise.reject('Invalid data');
    }

    const updatedTodo = {
        title: data.title as string,
        completed: data.completed as boolean,
        id: todos[index].id
    }

    const resp = new Response(JSON.stringify(updatedTodo), {status: 200});
  
    todos.splice(index, 1, updatedTodo);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(resp);
        }, 2000);
    });
}