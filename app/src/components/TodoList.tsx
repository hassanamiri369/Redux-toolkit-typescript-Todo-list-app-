import React , {useState , useEffect} from 'react';
import {useDispatch , useSelector} from "react-redux";
import type { RootState } from '../store'; 
import { ITodo, addTodo , deleteTodo , editTodo } from '../features/todoSlice';
import { changeColor } from '../features/themeSlice';

const TodoList = () => {

    const todoList : ITodo[] = useSelector((state : RootState) => state.todos.todoList)
    const theme = useSelector((state : RootState)  => state.theme.color)
    console.log('theme', theme)

    const dispatch = useDispatch()

    const [todo, setTodo] = useState("")
    const [caption, setCaption] = useState("")

    const [editMode, setEditMode] = useState<ITodo | null>(null)

    console.log("editmode" , editMode)

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!todo) {
            alert("Todo field must be complete")
            return
        }

        if (!caption) {
            alert("user Todo field must be complete")
            return
        }


        if (editMode) {
            dispatch(editTodo({ id: editMode.id, todo: todo, caption: caption }))
            setTodo("")
            setCaption("")
            setEditMode(null)
        } else {
            // addUser is action (action creator)
            const newUSer : ITodo = { id: Number(new Date()), todo, caption }
            dispatch(addTodo(newUSer))
            setTodo("")
            setCaption("")
        }

    }


    const [color, setColor] = useState("")

    useEffect(() => {
        dispatch(changeColor({ color : color }))
    }, [color])



    const handleEdit = (item : ITodo) => {
        setEditMode(item)
    }

    useEffect(() => {
        setTodo(editMode?.todo || "")
        setCaption(editMode?.caption || "")
    }, [editMode])


    
    const handleDelete = (item : ITodo)=>{
        dispatch(deleteTodo({ ...item }))
        if(item.id === editMode?.id){
            setEditMode(null)
        }
    }

    return (
        <>                                                                      
            <div style={{ backgroundColor: theme }} className='container'>
           
                <div className='changeTheme'>
                    <p>Change backgroudn color : </p>
                    <select value={color} onChange={(e) => setColor(e.target.value)}>

                        <option value={'white'}>white</option>
                        <option value={'red'}>red</option>
                        <option value={'blue'}>blue</option>
                        <option value={'pink'}>pink</option>
                        <option value={'green'}>green</option>
                    </select>
                </div>

                <div className='content'>

                    <div className='user-box-input'>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div>
                                <label>Name</label>
                                <input 
                                type='text' 
                                value={todo} 
                                onChange={(e) => setTodo(e.target.value)} 
                                placeholder='name' 
                                />
                            </div>
                            <div>
                                <label>User Name</label>
                                <input type='text' value={caption} onChange={(e) => setCaption(e.target.value)} placeholder='name' />
                            </div>
                            <div>
                                {editMode ? <button type='submit'>update </button> : <button type='submit'>create </button>}
                            </div>
                        </form>
                    </div>

                    <div className='user-container'>
                        {todoList.map((item, index) => (
                            <div className='user-content' key={item.id}>
                                <div className='item'>
                                    <p>{item.id}</p>
                                    <p>Name : {item.todo}</p>
                                    <p>UserName : {item.caption}</p>
                                </div>

                                <div className='buttons'>
                                    <button onClick={() => handleDelete(item)}>delete</button>
                                    <button onClick={() => handleEdit(item)}>edit</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoList