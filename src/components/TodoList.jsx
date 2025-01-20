import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../context/GlobalContext'

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Todo from './Todo';


function TodoList() {

    const { todoList, removeAllTodos } = useContext(TodoContext);
    // console.log(todoList)
    const [alert, setAlert] = useState(null);

    //----------------------------- TÜM TODOLARI TEMİZLE
    const clearAllTodos = () => {
        if (!todoList || todoList.length === 0) {
            setAlert({ type: 'warning', message: 'Todo listesi zaten boş !!' })
        } else {
            removeAllTodos();
            setAlert({ type: 'success', message: 'Tüm todolar temizlendi' })
        }
    }

    //----------------------------- ALERT MESAJI SIFIRLAMA
    useEffect(() => {
        if (alert) {
            setTimeout(() => {
                // setAlert(null);
                setAlert(null)
            }, 2000);
        }
    }, [alert])
    //! -----------------------------------------------------------------
    return (
        <div>
            {/* // ----------------------- ALERT */}
            <div>
                {
                    alert && (
                        <Alert variant={alert.type} className='mt-3  alert-sm '>
                            {alert.message}
                        </Alert>
                    )
                }
            </div>
            {/* // ----------------------- TODO LİST HEADER  */}

            <ListGroup as="ul" className='mt-4 gap-2 '>
                <ListGroup.Item as="li" className='d-flex justify-content-center text-uppercase fw-bold text-secondary fs-3  '
                    style={{ border: 'none', outline: 'none', letterSpacing: '4px' }}>
                    Todo Listesi
                </ListGroup.Item>
                {/* // ----------------------- TODO LİST */}
                {
                    todoList && todoList.map((todo) => (
                        <Todo key={todo.id} todoCreate={todo} />
                    ))
                }
                {/* // ----------------------- TODO ALL CLEAR */}
                <Button variant="secondary" type="submit" onClick={clearAllTodos}
                    className='d-flex w-50 align-self-end justify-content-center fw-bold mt-3'>
                    temizle
                </Button>
            </ListGroup>
        </div>
    )
}

export default TodoList