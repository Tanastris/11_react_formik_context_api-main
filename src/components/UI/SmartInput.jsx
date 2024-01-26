function SmartInput({ name, formik, type = 'text', placeholder }) {
  if (!name) {
    console.warn('SmartInput nera name');
  }
  if (!formik) {
    console.warn('SmartInput nera Formik');
    return <h2>Nera formiko!!!</h2>;
  }

  return (
    <label className='block mb-4'>
      <span className='text-lg block first-letter:uppercase'>{name}</span>
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        name={name}
        className={`border w-full px-3 py-[6px] rounded-md ${
          formik.touched[name] && formik.errors[name]
            ? 'border-red-500 bg-red-50'
            : 'border-slate-300'
        } `}
        type={type}
        placeholder={placeholder || 'Enter ' + name}
      />
      {formik.touched[name] && formik.errors[name] && (
        <p className='bg-red-100 text-red-800 rounded-md px-4 py-1 mt-2'>{formik.errors[name]}</p>
      )}
    </label>
  );
}

export default SmartInput;
