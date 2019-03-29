import React, { useReducer } from 'react';
import Inputs from '../../src/components/InputsIndex';
import Form from '../components/Form';

const form = {
  firstName: {
    className: 'col-6',
    label: 'First Name',
    placeholder: 'Vi',
    type: 'text',
    validations: {
      required: true,
      uppercase: true,
    },
  },
  lastName: {
    className: 'col-6',
    label: 'Last Name',
    placeholder: 'Ky',
    type: 'text',
    validations: {
      required: true,
    },
  },
  email: {
    className: 'col-6',
    label: 'Email',
    placeholder: 'hi@strapi.io',
    type: 'email',
    validations: {
      required: true,
      min: 7,
    },
  },
};

export const reducer = (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case 'ON_CHANGE':
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
};

const InputsStory = () => {
  const [values, dispatch] = useReducer(reducer, {});

  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      type: 'ON_CHANGE',
      key: name,
      value,
    });
  };

  return (
    <Form>
      {Object.keys(form).map(input => (
        <div key={input} className={form[input].className}>
          <Inputs
            style={{ maxWidth: '100%' }}
            {...form[input]}
            name={input}
            onChange={handleChange}
            value={values[input] || ''}
          />
        </div>
      ))}
    </Form>
  );
};

export default InputsStory;