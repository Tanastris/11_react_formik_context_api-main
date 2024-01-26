import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Btn from '../UI/Btn';
import SmartInput from '../UI/SmartInput';

const product = {
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  isOnSale: true,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: '...',
  adminEmail: '',
};

const formik = {
  values: {
    title: 'title',
  },
};

const arr = [1, 2];
arr[1];
formik['values'];

{
  /* <SmartInput name='title' formik={formik} />; */
}

export default function AddProduct() {
  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      rating: '',
      stock: '50',
      // description: 'Very good phone, but very expensive, makes you look rich',
      description: '',
      isOnSale: false,
      brand: 'apple',
      category: 'smartphones',
      thumbnail: '',
      adminEmail: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().min(3).max(15, 'Gal galetumet trumpiau bisky').required(),
      thumbnail: Yup.string().min(3).required(),
      category: Yup.string().min(3).max(15, 'Max 15 simboliu').required(),
      price: Yup.number().min(0).max(999999999).required(),
      rating: Yup.number().min(0).max(5).required(),
      stock: Yup.number().min(0).integer().required(),
      description: Yup.string().min(5).max(500).required(),
      adminEmail: Yup.string()
        .matches(
          /^[a-ząčęėįšųūA-ZĄČĘĖĮŠŲŪ0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          'Patikrinkite email',
        )
        .required(),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // fetch
      // ulr: https://dummyjson.com/products/add
      // sendFetch(values);
      sendAxios(values);
    },
  });

  function sendAxios(dataToSend) {
    axios
      .post('https://dummyjson.com/products/add', dataToSend)
      .then((resp) => {
        console.log('resp ===', resp);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }

  function sendFetch(dataToSend) {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data ===', data);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }

  // console.log('formik.values ===', formik.values);
  console.log('formik.errors ===', formik.errors);
  console.log('formik.touched ===', formik.touched);

  return (
    <div className='mb-96'>
      <h2 className='text-4xl my-5'>Create new product</h2>
      <div>
        <p>Title: {formik.values.title}</p>
      </div>
      <form noValidate className='grid grid-cols-2 gap-x-5' onSubmit={formik.handleSubmit}>
        <SmartInput name={'title'} formik={formik} placeholder='Iveskite Antraste' />
        <SmartInput name={'price'} type='number' formik={formik} />
        <SmartInput name={'rating'} type='number' formik={formik} />
        <SmartInput name={'stock'} type='number' formik={formik} />

        <label className='block mb-4'>
          <span className='text-lg block'>Brand</span>
          <select
            onChange={formik.handleChange}
            value={formik.values.brand}
            className='border w-full px-3 py-[6px] border-slate-300 rounded-md '
            name='brand'
            id='brand'>
            <option value='apple'>Apple</option>
            <option value='samsung'>Samsung</option>
            <option value='google'>Google</option>
          </select>
        </label>

        <SmartInput name={'category'} formik={formik} />
        <SmartInput name={'thumbnail'} formik={formik} />
        <SmartInput name={'adminEmail'} type='email' formik={formik} />

        {/* <label className='block mb-4'>
          <span className='text-lg block'>Admin Email</span>
          <input
            onChange={formik.handleChange}
            value={formik.values.adminEmail}
            name='adminEmail'
            className='border w-full px-3 py-[6px] border-slate-300 rounded-md '
            type='email'
            placeholder='Enter Admin Email'
          />
          {formik.errors.adminEmail && (
            <p className='bg-red-100 text-red-800 rounded-md px-4 py-1 mt-2'>
              {formik.errors.adminEmail}
            </p>
          )}
        </label> */}
        <label className='block mb-4 col-span-2'>
          <span className='text-lg block'>Description</span>
          <textarea
            onChange={formik.handleChange}
            value={formik.values.description}
            name='description'
            className='border min-h-20 w-full px-3 py-[6px] border-slate-300 rounded-md '
            placeholder='Enter Description'
          />
          {formik.errors.description && (
            <p className='bg-red-100 text-red-800 rounded-md px-4 py-1 mt-2'>
              {formik.errors.description}
            </p>
          )}
        </label>
        <Btn type='submit'>Login</Btn>
      </form>
    </div>
  );
}
