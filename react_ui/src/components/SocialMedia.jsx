import React from 'react';
//icons
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
        <div>
      <BsInstagram />
    </div>
    <div>
      <BsTwitter />
    </div>

    <div>
      <FaFacebookF />
    </div>
  
  </div>
);

export default SocialMedia;