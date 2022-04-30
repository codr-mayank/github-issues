import React from 'react';
import { Icon } from '@iconify/react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <Icon icon="ci:bulb" className='icon circle' />
      <span className='bold'>ProTip!</span> no:milestone will show everything without a milestone.
      <div className='bottomText'>
        Made with
        <Icon icon="ant-design:heart-filled" className='icon circle' />
        by Mayank
      </div>
    </div>
  );
};

export default Footer;
