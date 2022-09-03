import React from 'react';
import { useSelector } from 'react-redux';

const TotalEmployees = () => {
  const employees = useSelector((state) => state.employee);
  return <span className="text-dark">Total employees: {employees.length}</span>;
};

export default TotalEmployees;
