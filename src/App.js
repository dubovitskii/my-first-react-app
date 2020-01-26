import React from 'react';
import TodoApp from './components/todo/TodoApp'
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="header">Header</div>
        <div className="nav">
          <Navbar />
        </div>
        <div className="content">
          <Route path='/todos' component={TodoApp}/>
          <Route path='/message' component={Dialogs}/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
