import React from 'react';
import { useSelector } from 'react-redux';
import {RootState} from "../../store/store";

const TotalEmployees = () => {
  const employees = useSelector((state: RootState) => state.employee);
  return <span className="text-dark">Total employees: {employees.length}</span>;
};

export default TotalEmployees;
