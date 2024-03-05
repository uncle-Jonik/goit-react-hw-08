import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LogInPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  return <>App components</>;
};
