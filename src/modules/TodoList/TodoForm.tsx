import React, { useState, useRef } from 'react';

function TodoForm(props: any) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [inputImage, setInputImage] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };
  const handleChangeImage = (e: any) => {
    setInputImage(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      image: inputImage,
    });
    setInput('');
    setInputImage('');
  };
  // useEffect(() => {
  //   handleFilter();
  // }, []);
  // const handleFilter = () => {
  //   switch (itemSelect) {
  //     case 'completed':
  //       setFilterTodo(() => {
  //         const arr = filterTodo.filter((td: Task) => td.status);
  //         console.log(filterTodo);
  //         return arr;
  //       });
  //       break;
  //     case 'notCompleted':
  //       setFilterTodo(() => {
  //         const arr = filterTodo.filter((td: Task) => !td.status);
  //         console.log(filterTodo);
  //         return arr;
  //       });
  //       break;
  //     default:
  //       setFilterTodo(() => {
  //         console.log(filterTodo);
  //         return filterTodo;
  //       });
  //       break;
  //   }
  // };

  // const onChangeSelect = (e: any) => {
  //   setItemSelect(e.target.value);
  // };
  return (
    <form onSubmit={handleSubmit} className="todo-form-update" style={{ paddingBottom: '20px' }}>
      {props.edit ? (
        <>
          <div className="Update-form" style={{ display: 'inline-block', height: '100% ' }}>
            <input
              placeholder="Update your item"
              value={input}
              onChange={handleChange}
              name="text"
              ref={inputRef}
              className="todo-input edit"
              style={{ width: 346, height: 36, marginRight: 8 }}
            />
            <input
              placeholder="Update your item"
              value={inputImage}
              onChange={handleChangeImage}
              name="text"
              ref={inputRef}
              className="todo-input edit"
              style={{ width: 346, height: 36, marginRight: 8 }}
            />
            <div
              className="todo-button"
              onClick={handleSubmit}
              style={{
                backgroundColor: 'rgb(24 111 124)',
                textAlign: 'center',
                color: '#fff',
                marginTop: 30,
                height: 30,
                borderRadius: 8,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Update
            </div>
          </div>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit} style={{ display: 'grid', paddingRight: 30 }}>
            <input
              placeholder="Add a Food"
              value={input}
              onChange={handleChange}
              name="text"
              className="todo-input"
              ref={inputRef}
              style={{ height: 35, borderRadius: 7, border: 'none', minWidth: 345, marginBottom: 20 }}
            />
            <input
              placeholder="Image link ..."
              value={inputImage}
              onChange={handleChangeImage}
              name="text"
              className="todo-input"
              ref={inputRef}
              style={{ height: 35, borderRadius: 7, border: 'none', minWidth: 345, marginBottom: 20 }}
            />
            <div
              className="todo-button"
              onClick={handleSubmit}
              style={{
                backgroundColor: 'rgb(46 85 118)',
                textAlign: 'center',
                height: 30,
                borderRadius: 8,
                color: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              {/* <AiOutlinePlus className="icon" /> */}
              Add
            </div>
          </form>
          {/* <div style={{ height: 35 }}>
            <select
              value={itemSelect}
              style={{ height: '100%', borderRadius: 7, border: 'none' }}
              onChange={onChangeSelect}
            >
              <option value={itemSelect} onClick={() => console.log(itemSelect)}>
                All
              </option>
              <option value="completed" onClick={() => console.log(itemSelect)}>
                Completed
              </option>
              <option value="notCompleted">Not Completed</option>
            </select>
          </div> */}
        </>
      )}
    </form>
  );
}

export default TodoForm;
