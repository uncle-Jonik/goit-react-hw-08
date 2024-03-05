import { lazy } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Lauout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LogInPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const { isRefreshing } = useAuth();

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
          />
          <Route
            path="/tasks"
            element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
          />
        </Route>
      </Routes>
    </>
  );
};
