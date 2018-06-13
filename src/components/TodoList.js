import React from 'react';
import Title from "./Title";
import ToDo from "./ToDo";

const TodoList = props => {
    return (
      <div>
      <Title name={props.titleName}  />
        <ul>
          {props.todos.map((todo, index) => {
            return <ToDo key={index} todo={todo}  />;
          })}
        </ul>
      </div>
    );
  };

  export default TodoList;