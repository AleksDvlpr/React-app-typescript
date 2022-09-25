import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeList.css';
import RemoveEmployee from './RemoveEmployee';

interface Props {
  employee: {
    id: string,
    name: string,
    secondName: string,
    profession: string
  }
}

const EmployeeLink: React.FC<Props> = ({employee}) => {
  const employeeTitle = `${employee.name} ${employee.secondName} (${employee.profession})`;

  return (
    <Link
      to={employee.id}
      className="list-group-item list-group-item-action employee-link"
      aria-current="true"
    >
      {employeeTitle}
      <RemoveEmployee id={employee.id} />
    </Link>
  );
};

export default EmployeeLink;
