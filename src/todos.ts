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