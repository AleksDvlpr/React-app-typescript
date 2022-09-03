import React from 'react';
import BackBtn from './BackBtn';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const EmployeeDetail = () => {
  const { id } = useParams();
  const employees = useSelector((state) => state.employee);
  const employee = employees.find((item) => item.id === id);

  if (typeof employee === 'undefined') {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <h1>Detail employee</h1>
      <BackBtn />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Field</th>
            <th scope="col">Item</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>{employee.name}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Second name</td>
            <td>{employee.secondName}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Age</td>
            <td>{employee.age}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Profession</td>
            <td>{employee.profession}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetail;
