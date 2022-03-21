// import LoginPage from '@modules/Login';
// import TodoList from '@modules/TodoList/TodoList';
import React from 'react';
import ReactDOM from 'react-dom';
import { ToastProvider } from 'react-toast-notifications';
// import Navigation from './components/Navigation';
import AppRouter from './components/RootApp';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      {/* <Navigation /> */}
      <AppRouter />
      {/* <TodoList /> */}
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
