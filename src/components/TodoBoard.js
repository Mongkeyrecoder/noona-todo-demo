import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({todoList}) => {
  
  return (
    <div>
      <h2>Todo List</h2>
      {
        todoList.length>0?todoList.map((item,i)=>{
          return <TodoItem item={item} key={i}/>
        }):""
      }
      {/* <TodoItem/> will be here once we get the todoList */}
      
    </div>
  );
};

export default TodoBoard;
