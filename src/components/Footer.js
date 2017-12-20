import React from 'react';
import {Link} from 'office-ui-fabric-react/lib/Link';
import './_styles/footer.css';

const Footer = () => (
  <div className='footer-container'>
    {'@ Bro-awesome App 2018. '}
      <Link > Don't get in touch</Link>
      {' -- Made out of anger '}
      <span className='text-red'> ♥ </span>
      { ' by '}
      <Link >  Gerald R.</Link>
  </div>
);

export default Footer;
