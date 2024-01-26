import { Link } from 'react-router-dom';
import Login from '../components/auth/Login';

export default function UnAuthorizedPage() {
  return (
    <div className='container'>
      <h1 className='text-3xl mb-5'>Only for registered users</h1>
      <p>Please login to see the page</p>
      <Link className='underline' to={'/auth/login'}>
        Login page
      </Link>
      <hr />
      {/* neveikia nes neturi onLogin */}
      <Login />
    </div>
  );
}
