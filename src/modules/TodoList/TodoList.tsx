import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import Image from '../../assets/images/item8.png';
import { useToasts } from 'react-toast-notifications';

export interface Task {
  id: number;
  text: string;
  status: boolean;
  image: any;
}
function TodoList() {
  const [todos, setTodos] = useState<Task[]>([
    {
      id: 3,
      text: 'Thịt cho nấu rượu mận ',
      status: false,
      image: Image,
    },
    {
      id: 2,
      text: 'Dồi cho nướng than hoa',
      status: false,
      image: Image,
    },
    {
      id: 6,
      text: 'Ba chỉ chó nướng lá na',
      status: true,
      image: Image,
    },
    {
      id: 4,
      text: 'Thịt cho nấu rượu mận 1',
      status: false,
      image: Image,
    },
    {
      id: 5,
      text: 'Dồi cho nướng than hoa 2',
      status: false,
      image: Image,
    },
    {
      id: 1,
      text: 'Ba chỉ chó nướng lá na 3',
      status: true,
      image: Image,
    },
  ]);

  const { addToast } = useToasts();
  const addTodo = (todo: Task) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      addToast('Failed', {
        appearance: 'error',
        autoDismiss: true,
      });
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
    addToast('Added Success', {
      appearance: 'success',
      autoDismiss: true,
    });
  };

  const updateTodo = (todoId: number, newValue: Task) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
    addToast('Update Success', {
      appearance: 'success',
      autoDismiss: true,
    });
  };

  const removeTodo = (id: number) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
    addToast('Delete Success', {
      appearance: 'success',
      autoDismiss: true,
    });
  };

  const completeTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    setTodos(updatedTodos);
    addToast('Changed Success', {
      appearance: 'warning',
      autoDismiss: true,
    });
  };

  return (
    <>
      <div style={{ backgroundColor: '#1f1b3a', height: '100%' }}>
        <div style={{ paddingTop: 50, paddingBottom: 50, backgroundColor: '#1f1b3a' }}>
          <div className="container section-todos">
            <h1 style={{ color: '#fff', paddingBottom: 40, fontSize: '65px', textAlign: 'center' }}>To-do List</h1>
            <div className="section-form" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <TodoForm onSubmit={addTodo} />
            </div>
            <div
              className="row section-contents"
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 0,
              }}
            >
              <div className="col-12 col-md-6 col-lg-4 item-todo" style={{ display: 'contents' }}>
                <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
