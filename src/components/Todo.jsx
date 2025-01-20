import React, { useContext, useState } from 'react'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import { TodoContext } from '../context/GlobalContext';
import Form from 'react-bootstrap/Form';



function Todo({ todoCreate }) {

    const { content, id } = todoCreate;
    const { removeTodo, updatedTodo } = useContext(TodoContext);

    const [edit, setEdit] = useState(false);
    const [newTodoValue, setNewTodoValue] = useState(content);
    const [isChecked, setIsChecked] = useState(false);



    // ----------------------------------- CHECKBOX

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
        // İlgili işlemleri buraya ekleyebilirsiniz
    };


    // ----------------------------------- TODO UPDATE
    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodoValue
        }
        updatedTodo(request);
        setEdit(false);
    }

    // ----------------------------------- TODO SILME
    const removeTodoId = () => {
        removeTodo(id);
    }
    //! ------------------------------------------------------------------
    return (

        <ListGroupItem className='d-flex justify-content-between align-items-center todoListBox'>




            {/* // ----------------------------------------- CHECKBOX */}
            <div className="d-flex col-1 justify-content-center">
                <Form.Check
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    id="customCheckbox"
                    className='me-2 fs-5'
                />
            </div>



            {/* // ----------------------------------------- TODO LIST */}
            <div className={`col-9 ${isChecked ? 'todo-completed' : ''}`} >
                {
                    edit
                        ? <Form.Control type="text" value={newTodoValue}
                            onChange={(e) => setNewTodoValue(e.target.value)} />
                        : content
                }
            </div>

            {/* // ----------------------------------------- TODO REMOVE */}

            <div className='d-flex gap-3 col-2 justify-content-end '>
                <div onClick={removeTodoId} >
                    <i className="bi bi-trash3-fill icon"></i>
                </div>

                {/* // ---------------------------------------- TODO EDIT */}
                <div>
                    {
                        edit
                            ? <i className="bi bi-check-circle-fill icon " onClick={updateTodo}></i>
                            : <i className="bi bi-pencil-fill icon" onClick={() => setEdit(true)}></i>
                    }
                </div>
            </div>
        </ListGroupItem>
    )
}

export default Todo