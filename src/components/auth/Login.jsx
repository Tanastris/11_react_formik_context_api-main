// sukurti login forma

import { useFormik } from 'formik';
import SmartInput from '../UI/SmartInput';
import Btn from '../UI/Btn';
import axios from 'axios';
import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
  const navigate = useNavigate();

  // 1. sukurti state isError
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: 'kminchelle',
      password: '0lelplR',
    },
    validationSchema: Yup.object({
      email: Yup.string().min(4).max(255).required(),
      password: Yup.string().min(4).max(255).required(),
    }),
    onSubmit: (values) => {
      setIsError('');
      setIsLoading(true);
      console.log(values);
      sendAxiosRequest({
        username: values.email,
        password: values.password,
      });

      //   const valuesIs = {
      //     email: 'kminchelle',
      //     password: '0lelplR',
      //   };

      //   const needsBe = {
      //     username: 'kminchelle',
      //     password: '0lelplR',
      //   };
    },
  });

  function sendAxiosRequest(data) {
    axios
      .post('https://dummyjson.com/auth/login', data)
      .then((resp) => {
        console.log('resp ===', resp);
        console.log('resp.data ===', resp.data);
        const token = resp.data.token;
        onLogin(token);
        // onLogin(token, email);

        // redirect
        // navigate('/products');
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
        console.log('error.response.data ===', error.response.data); // axios klaida back
        // 2. Set errror
        setIsError(error.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // 4 ivalyti klaida jei klaidos nera

  return (
    <div className=''>
      <h2 className='text-3xl mb-8'>Login</h2>

      {/* 3. Show error in p tag formated as errror */}
      {isError && (
        <p className='text-2xl text-center border text-red-500 my-3 border-red-500 rounded-md px-5 py-3'>
          {isError}
        </p>
      )}

      {isLoading && (
        <h2 className='text-2xl text-center border text-blue-500 my-3 border-blue-500 rounded-md px-5 py-3'>
          Loading...
        </h2>
      )}

      {!isLoading && (
        <form onSubmit={formik.handleSubmit}>
          <SmartInput name={'email'} formik={formik} />
          <SmartInput type='password' name={'password'} formik={formik} />
          <Btn type='submit'>Login</Btn>
        </form>
      )}
    </div>
  );
}

// email ir password

// valdyti su formik

// validuoti su Yup

// pirma pasirasyti patiems

// kai veikia panaudoti SmartInput

// sekmningai supildzius siusti i login
// dokumentacija siuo adresu https://dummyjson.com/docs/auth

// gavus token issisaugom i localStorage

/*
{
 username: 'kminchelle',
 password: '0lelplR',
}
*/
