import React, { createContext, useReducer, useState } from 'react';


const TodoContext = createContext();


const initialState = {
    todoList: [],
    // filteredTodos: []
}
//! ------------ add ve filter işlemlerin yapıldığı reducer

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            };

        // case 'FILTER_TODOS':
        //     return {
        //         ...state,
        //         filteredTodos: state.todoList.filter((todo) => {
        //             return todo.includes(action.payload)
        //         })
        //     };

        case 'REMOVE_ALLTODOS':
            return {
                ...state,
                todoList: []
            };
        case 'REMOVE_TODO':
            return {
                ...state,
                todoList: state.todoList.filter((todo) => todo.id !== action.payload)
            };
        case 'UPDATED_TODO': {
            const updatedTodos = state.todoList.map((todo) => {
                if (todo.id !== action.payload.id) {
                    return todo;
                } else {
                    return action.payload;
                }
            });
            return {
                ...state,
                todoList: updatedTodos
            }
        }
        default:
            return state;
    }
}

//! ----------- context api ye gelen veri setim

const TodoProvider = ({ children }) => {
    // const [todoList, setTodoList] = useState(['görev 1', 'görev 2', 'görev 3']);

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = (todo) => {
        dispatch({ type: 'ADD_TODO', payload: todo });
    };

    // const filterTodos = (keyword) => {
    //     dispatch({ type: 'FILTER_TODOS', payload: keyword });
    // };

    const removeAllTodos = () => {
        dispatch({ type: 'REMOVE_ALLTODOS' });
    };

    const removeTodo = (id) => {
        dispatch({ type: 'REMOVE_TODO', payload: id });
    };

    const updatedTodo = (newTodo) => {
        dispatch({ type: 'UPDATED_TODO', payload: newTodo });
    };

    return (
        <TodoContext.Provider
            value={{
                todoList: state.todoList,
                // filteredTodos: state.filteredTodos,
                // filterTodos,
                addTodo,
                removeAllTodos,
                removeTodo,
                updatedTodo,
            }}>
            {children}
        </TodoContext.Provider>
    );

};


export { TodoContext, TodoProvider };