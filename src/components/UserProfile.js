import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const UserProfile = () => (
  <div>
    <FontAwesomeIcon icon={faUser} className="fa-lg user-icon" />
  </div>
);

export default UserProfile;
