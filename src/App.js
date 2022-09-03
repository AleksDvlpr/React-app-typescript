import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import EmployeeCreate from './components/employees/EmployeeCreate';
import EmployeeDetail from './components/employees/EmployeeDetail';
import EmployeeList from './components/employees/EmployeeList';
import LogOut from './components/auth/LogOut';
import { Navigate } from 'react-router-dom';
import NotFound from './components/404';

function App() {
  /*
   * Врапперы использую для защиты роутов если юзер не авторизован.
   * В 5-й версии react-router-dom можно было использовать компонент Redirect,
   * но в 6-й убрали его. Приходится юзать врапперы
   * */
  const LogInWrapper = ({ children }) => {
    const loggedIn = +localStorage.getItem('loggedIn');
    return loggedIn ? <Navigate to="/employee" replace /> : children;
  };

  const EmployeeWrapper = ({ children }) => {
    const loggedIn = +localStorage.getItem('loggedIn');
    return !loggedIn ? <Navigate to="/" replace /> : children;
  };

  return (
    <div className="App">
      <LogOut />

      <Routes>
        <Route
          path="/"
          exact
          element={
            <LogInWrapper>
              <LoginForm />
            </LogInWrapper>
          }
        />

        <Route
          path="/employee"
          element={
            <EmployeeWrapper>
              <EmployeeList />
            </EmployeeWrapper>
          }
        />

        <Route
          path="/employee/:id"
          element={
            <EmployeeWrapper>
              <EmployeeDetail />
            </EmployeeWrapper>
          }
        />

        <Route
          path="/employee/create"
          element={
            <EmployeeWrapper>
              <EmployeeCreate />
            </EmployeeWrapper>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
