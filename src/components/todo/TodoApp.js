import React, {useEffect} from 'react';
import TodoList from "./TodoList"
import Context from '../../contest'
import Loader from '../Loader'
import Modal from '../../Modal/Modal';

const AddTodo = React.lazy(() => import('./AddTodo'))

function TodoApp() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=7')
      .then(response => response.json())
      .then(todos => {
          setTodos(todos)
          setLoading(false)
      })
  }, [])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo =>{
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false

    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div >
        <h1>ToDo`s</h1>

        <Modal />

        <React.Suspense fallback={<p>loading....</p>}>
          <AddTodo onCreate={addTodo}/>
        </React.Suspense>       

        {loading && <Loader />}
        {todos.length ? (        
          <TodoList 
          todos={todos} 
          onToggle={toggleTodo}
        /> 
        ) : (
          loading ? null :
          <p>No todos</p>
        )}
      </div>
    </Context.Provider>
  )
}

export default TodoApp;
