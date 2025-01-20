import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../context/GlobalContext';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

function TodoCreate() {

    const { addTodo } = useContext(TodoContext);

    const [alert, setAlert] = useState(null);
    const [newTodo, setNewTodo] = useState('');

    // --------------------------------- INPUT TEMIZLEME
    const clearInput = () => {
        setNewTodo('');
    }
    // --------------------------------- TODO EKLEME  (CONTEXT API YARDIMI)
    const createTodo = (e) => {
        e.preventDefault();
        if (!newTodo) {
            setAlert({ type: 'danger', message: 'Eklenecek todo yok !!!' })
            return;
        }

        const request = {
            id: Math.floor(Math.random() * 10000),
            content: newTodo
        }
        console.log(request)
        addTodo(request);
        clearInput();
        setAlert({ type: 'success', message: 'Todo eklendi' })
    }
    //----------------------------- ALERT MESAJI SIFIRLAMA
    useEffect(() => {
        if (alert) {
            setTimeout(() => {
                setAlert(null);
            }, 1500);
        }
    }, [alert])

    //! ------------------------------------------------------------------
    return (

        <div>
            <Form className='d-flex flex-column' onSubmit={createTodo}>
                <Form.Group className="mb-3" >
                    <Form.Label className='d-flex justify-content-center text-uppercase fw-bold text-secondary fs-3'
                        style={{ letterSpacing: '4px' }}>
                        Todo Projesi
                    </Form.Label>
                    {/* // ---------------- */}
                    <Form.Control type="text" placeholder="todo giriniz"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    {/* // ---------------- */}
                    <Form.Text className="text-muted fst-italic" style={{ fontSize: '12px' }}>
                        lütfen yazılım alanı ile ilgili yapılacakları giriniz !!
                    </Form.Text>
                </Form.Group>


                {/* // ---------------- */}
                <Button variant="warning" type="submit" className='d-flex w-50 align-self-end justify-content-center fw-bold'>
                    todo oluştur
                </Button>
            </Form>
            {/* // ------------------------------- ALERT YAZMA */}
            <div>
                {
                    alert && (
                        <Alert variant={alert.type} className='mt-3  alert-sm '>
                            {alert.message}
                        </Alert>
                    )
                }
            </div>
        </div>
    )
}

export default TodoCreate