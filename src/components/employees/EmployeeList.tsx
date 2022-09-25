import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeList.css';
import EmployeeLink from './EmployeeLink';
import TotalEmployees from './TotalEmployees';
import { useSelector } from 'react-redux';
import {RootState} from "../../store/store";

const EmployeeList = () => {
  const employees = useSelector((state: RootState) => state.employee);
  return (
    <div className="container employee">
      <h1>Employees</h1>
      <div className="top-side">
        <Link to="/employee/create" className="btn btn-success">
          Create employee
        </Link>
        <TotalEmployees />
      </div>
      <div className="list-group">
        {employees.map((item, index) => {
          return <EmployeeLink key={index} employee={item} />;
        })}
      </div>
    </div>
  );
};

export default EmployeeList;
