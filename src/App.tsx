import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import EmployeeCreate from './components/employees/EmployeeCreate';
import EmployeeDetail from './components/employees/EmployeeDetail';
import EmployeeList from './components/employees/EmployeeList';
import LogOut from './components/auth/LogOut';
import { Navigate } from 'react-router-dom';
import NotFound from './components/404';
import React from "react";

class App extends React.Component {
    loggedIn(): number {
        return Number(localStorage.getItem('loggedIn'));
    }
    
    render() {
        type Props = {
            children?: React.ReactNode
        };
        /*
         * Врапперы использую для защиты роутов если юзер не авторизован.
         * В 5-й версии react-router-dom можно было использовать компонент Redirect,
         * но в 6-й убрали его. Приходится юзать врапперы
         * */
        const LogInWrapper = ({children}: Props) => {
            return this.loggedIn() ? <div><Navigate to="/employee" replace/></div> : <div>{children}</div>;
        };

        const EmployeeWrapper = ({children}: Props) => {
            return !this.loggedIn() ? <div><Navigate to="/" replace/></div> : <div>{children}</div>;
        };
        
        return (
            <div className="App">
                <LogOut/>

                <Routes>
                    <Route
                        path="/"
                        element={
                            <LogInWrapper>
                                <LoginForm/>
                            </LogInWrapper>
                        }
                    />

                    <Route
                        path="/employee"
                        element={
                            <EmployeeWrapper>
                                <EmployeeList/>
                            </EmployeeWrapper>
                        }
                    />

                    <Route
                        path="/employee/:id"
                        element={
                            <EmployeeWrapper>
                                <EmployeeDetail/>
                            </EmployeeWrapper>
                        }
                    />

                    <Route
                        path="/employee/create"
                        element={
                            <EmployeeWrapper>
                                <EmployeeCreate/>
                            </EmployeeWrapper>
                        }
                    />

                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        );
    }
}

export default App;
