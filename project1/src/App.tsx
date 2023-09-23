import { ChangeEvent, useState } from 'react';
import ToDoList from './ToDoList';

function App() {
  const [toDo, setToDo] = useState<string>("");
  const [toDoList, setToDoList] = useState<string[]>([]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => { 
    setToDo(event.target.value)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo === "") {
      return ;
    }
    setToDoList([toDo, ...toDoList]);
    setToDo("");
  }

  return (
    <div>
      <h1>My ToDos ({toDoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" name="toDo"></input>
        <button>추가하기</button>
      </form>
      <ToDoList toDoList={toDoList}/>
    </div>
  )
}
export default App;
