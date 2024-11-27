import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageIndex from './PageIndex.js';
import Roles from './Roles.js';
import HttpStatusCodes from './HttpStatusCodes.js';
import UserComponent from './UserComponent.js';
import {User} from './User.js';

function AddPage({isActive, onChangePage}) {

  const initialUser = new User("", "", "", "", Roles.TeamMember);
  const [user, setUser] = useState(initialUser);

  const handleCreateClick= (updatedUser) => {
    setUser(updatedUser);
    onChangePage(PageIndex.ListPage);
  };

  const handleCancelClick= () => {
    onChangePage(PageIndex.ListPage);
  };

  if (!isActive) {
    return (<div/>);
  }

  return (
    <div>
      <h1>Add a team member</h1>
      <p>Set email, location and role.</p>
      <UserComponent initialUser={user} onSaveUser={handleCreateClick} onCancel={handleCancelClick}>
      </UserComponent>
    </div>
  );
}

export default AddPage;
