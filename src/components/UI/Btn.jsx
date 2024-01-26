export default function Btn({ children, type = 'button', className = '' }) {
  return (
    <button
      className={
        'mt-6 place-self-start text-lg border px-6 py-2 border-slate-600 rounded-md hover:bg-indigo-600 hover:text-white transition-colors ' +
        className
      }
      type={type}>
      {children}
    </button>
  );
}
