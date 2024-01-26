import Login from '../components/auth/Login';

export default function AuthPage({ onLogin }) {
  return (
    <div className='container'>
      <h1 className='text-3xl mb-5'>AuthPage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quidem nam fugit dolor</p>
      <hr className='mb-5' />
      <Login onLogin={onLogin} />
    </div>
  );
}
