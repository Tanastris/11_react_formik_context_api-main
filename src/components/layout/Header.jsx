import { Link, NavLink } from 'react-router-dom';

export default function Header({ isUserLoggedIn, onLogout }) {
  return (
    <header className='bg-slate-300'>
      <div className='container flex justify-between items-center'>
        <Link to={'/'}>
          <h2 className='text-3xl leading-none p-3'>Logo</h2>
        </Link>
        <nav className='flex items-center'>
          <NavLink className='text-lg p-3 hover:bg-slate-700 hover:text-white' to={'/'}>
            Home
          </NavLink>
          <NavLink className='text-lg p-3 hover:bg-slate-700 hover:text-white' to={'/products'}>
            Products
          </NavLink>
          {isUserLoggedIn && (
            <NavLink
              className='text-lg p-3 hover:bg-slate-700 hover:text-white'
              to={'/products/add'}>
              Add Product
            </NavLink>
          )}

          {!isUserLoggedIn && (
            <NavLink className='text-lg p-3 hover:bg-slate-700 hover:text-white' to={'/auth/login'}>
              Login
            </NavLink>
          )}
          {isUserLoggedIn && (
            <>
              <Link
                to={'/auth/login'}
                onClick={onLogout}
                className='text-lg p-3 hover:bg-slate-700 hover:text-white'>
                Logout
              </Link>
              <p className='text-base d-inline-block px-1 p-3 hover:bg-slate-700 hover:text-white'>
                cia emailas
              </p>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
