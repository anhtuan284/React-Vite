import { useState } from "react"

const MyComponent = () => {
    const [newToDo, setNewToDo] = useState("")
    const [listToDo, setListToDo] = useState([
        {'id': 0, 'name': 'Planing'},
        {'id': 1, 'name': 'Learning React'}
    ])

    const handleClick = () => {
        setListToDo([...listToDo, {id: Math.floor(Math.random() * 10000), name: newToDo}])
    }
    const handleDel = (id :number) => {
        let newList = listToDo.filter(x => x.id !== id)
        setListToDo(newList)
    }
    return (
        <div>
            <div>To do list:</div>
            {listToDo.map(todo => {
                return (
                  <div>{todo.id}. {todo.name} <button onClick={() => handleDel(todo.id)}>DEL</button></div>
                );
            })}
            <div>I am doing + {newToDo}</div>
            <input type={'text'} onChange={(e) => setNewToDo(e.target.value)} />
            <button onClick={() => handleClick()}>Add to do</button>
        </div>
    )
}
export default MyComponent