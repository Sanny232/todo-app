import React from 'react';
import {Checkbox} from "antd";
import {removeTodo, toggleTodo} from "../../Redux/todosSlice";
import Text from "antd/es/typography/Text";
import {CloseOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import './TodoRow.css';

const TodoRow = ({todo}) => {
  const dispatch = useDispatch();
  return (
    <>
      <Checkbox key={todo.uid}
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.uid))}>
        <Text delete={todo.completed} className="todoText">{todo.text}</Text>
      </Checkbox>
      <CloseOutlined onClick={() => dispatch(removeTodo(todo.uid))}>X</CloseOutlined>
    </>
  );
};

export default TodoRow;
