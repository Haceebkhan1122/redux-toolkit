import React from 'react';
import './App.css';
import Input from '../src/app/components/Input';
// import Products from '../src/app/components/Products';
import TodoItem from '../src/app/components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';


function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="app">
      <div className='app__conainer'>
        <div className='app__todocontainer'>
            {todoList.map(item =>(
              <TodoItem 
              name={item.item}
              done={item.done}
              id={item.id}
              />
            ))}
        </div>
        <Input />
      </div>

    </div>
  );
}

export default App;
