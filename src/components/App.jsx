import { lazy } from 'react';

const HomePage = lazy(() => import(''));
const RegisterPage = lazy(() => import(''));
const LoginPage = lazy(() => import(''));
const TasksPage = lazy(() => import(''));

export const App = () => {
  return <>App components</>;
};
