import React from 'react';
import { removeEmployee } from '../../features/employee/employeeSlice';
import { useDispatch } from 'react-redux';

interface Props {
  id: string
}

const RemoveEmployee = ({ id }: Props) => {
  const dispatch = useDispatch();

  const removeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
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
