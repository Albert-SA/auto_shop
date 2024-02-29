import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import crownLogo from '../../assets/auto.png'

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
            <img src={crownLogo} className='logo-container' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/auto'>
            АВТО
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;