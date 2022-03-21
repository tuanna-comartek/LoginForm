import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

const Todo = (props: any) => {
  const { todos, completeTodo, removeTodo, updateTodo } = props;
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });
  const submitUpdate = (value: string) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo: any, index: number) => (
    <div key={index} className="todo-row" style={{ paddingBottom: 30, padding: 10 }}>
      {/* <h5 className={todo.status ? 'complete' : ''} key={todo.id}>
        {todo.text}
      </h5>
      <div className="icons">
        <div
          onClick={() => completeTodo(todo.id)}
          className="item-icon"
          style={{ backgroundColor: 'rgb(24 111 124)', color: '#fff' }}
        >
          <span>Active</span>
          <IoMdDoneAll className="icon" />
        </div>
        <div
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="item-icon"
          style={{ backgroundColor: 'rgb(24 111 124)', color: '#fff' }}
        >
          <span>Edit</span>
          <FaEdit className="icon" />
        </div>
        <div
          onClick={() => removeTodo(todo.id)}
          className="item-icon"
          style={{ backgroundColor: 'rgb(24 111 124)', color: '#fff' }}
        >
          <span>Delete</span>
          <AiOutlineDelete className="icon" />
        </div>
      </div> */}
      <Card style={{ maxWidth: 345 }} key={todo.id}>
        <CardMedia component="img" height="140" image={todo.image} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className={todo.status ? 'complete' : ''}>
            {todo.text}
          </Typography>
          <Typography variant="body2" style={{ color: 'gray' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
            except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => completeTodo(todo.id)}>
            Active
          </Button>
          <Button size="small" onClick={() => setEdit({ id: todo.id, value: todo.text })}>
            Edit
          </Button>
          <Button size="small" onClick={() => removeTodo(todo.id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  ));
};

export default Todo;
