import React from 'react';
import BackBtn from './BackBtn';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../features/employee/employeeSlice';
import { v4 as uuidv4 } from 'uuid';

type FormValues = {
  id: string,
  name: string,
  secondName: string,
  profession: string,
  age: number
}

const EmployeeCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data: FormValues): void => {
    data.id = uuidv4();
    dispatch(addEmployee(data));
    navigate('/employee');
  };

  return (
    <div className="container">
      <h1>New employee</h1>
      <BackBtn />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register('name', { required: true, minLength: 3 })}
          />
          {errors.name?.type === 'required' && (
            <div id="nameError" className="form-text text-danger">
              This field is required
            </div>
          )}
          {errors.name?.type === 'minLength' && (
            <div id="nameError" className="form-text text-danger">
              This field must contain more than 3 letters
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="secondName" className="form-label">
            Second name
          </label>
          <input
            type="text"
            className="form-control"
            id="secondName"
            {...register('secondName', { required: true, minLength: 3 })}
          />
          {errors.secondName?.type === 'required' && (
            <div id="secondName" className="form-text text-danger">
              This field is required
            </div>
          )}
          {errors.secondName?.type === 'minLength' && (
            <div id="secondName" className="form-text text-danger">
              This field must contain more than 3 letters
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="profession" className="form-label">
            Profession
          </label>
          <input
            type="text"
            className="form-control"
            id="profession"
            {...register('profession', { required: true, minLength: 3 })}
          />
          {errors.profession?.type === 'required' && (
            <div id="secondName" className="form-text text-danger">
              This field is required
            </div>
          )}
          {errors.profession?.type === 'minLength' && (
            <div id="secondName" className="form-text text-danger">
              This field must contain more than 3 letters
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            {...register('age', { required: true, min: 18, max: 99 })}
          />
          {errors.age?.type === 'required' && (
            <div id="secondName" className="form-text text-danger">
              This field is required
            </div>
          )}
          {errors.age?.type === 'min' && (
            <div id="secondName" className="form-text text-danger">
              Minimum age must be 18 years old
            </div>
          )}
          {errors.age?.type === 'max' && (
            <div id="secondName" className="form-text text-danger">
              Maximum age must be 99 years old
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployeeCreate;
