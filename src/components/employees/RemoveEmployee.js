import React from 'react';
import { removeEmployee } from '../../features/employee/employeeSlice';
import { useDispatch } from 'react-redux';

const RemoveEmployee = ({ id }) => {
  const dispatch = useDispatch();

  const removeHandler = (event) => {
    event.preventDefault();
    dispatch(removeEmployee(id));
  };

  return (
    <button
      onClick={removeHandler}
      className="btn btn-danger btn-sm remove-employee"
    >
      Remove
    </button>
  );
};

export default RemoveEmployee;
