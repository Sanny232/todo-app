import React from 'react';
import {Button, Input, List} from "antd";
import TodoRow from "../TodoRow/TodoRow";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../../Redux/todosSlice";
import {uid} from "uid";
import './Todos.css';

const Todos = () => {
  const todos = useSelector((state => state.todos.todos));
  const [input, setInput] = React.useState('');
  const dispatch = useDispatch();

  const addNewTodo = () => {
    setInput('');
    dispatch(addTodo({
      uid: uid(),
      text: input,
      completed: false
    }));
  }

  return (
    <>
      <List size="small"
            header={<h2>TodoList</h2>}
            bordered
            dataSource={todos}
            renderItem={todo => <List.Item><TodoRow todo={todo}/></List.Item>}
      />
      <Input type="text"
             value={input}
             onChange={(e) => setInput(e.target.value)}
             placeholder="Your great plans..."
      />
      <Button onClick={() => addNewTodo()}
              disabled={input.length < 1}
              type="primary"
              className="submitButton">
        Add todo
      </Button>
    </>
  );
};

export default Todos;
