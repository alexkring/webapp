import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageIndex from './PageIndex.js';
import UserComponent from './UserComponent.js';
import HttpStatusCodes from './HttpStatusCodes.js';

function EditPage({isActive, onChangePage, user}) {

  const handleUpdateClick = () => {
    onChangePage(PageIndex.ListPage);
  };

  const handleCancelClick = () => {
    onChangePage(PageIndex.ListPage);
  };

  if (!isActive) {
    return (<div/>);
  }

  return (
    <div>
      <h1>Edit team member</h1>
      <p>Edit contact info, location and role.</p>
      <UserComponent initialUser={user} enableDelete={true} enableUpdate={true} onSaveUser={handleUpdateClick} onCancel={handleCancelClick}>
      </UserComponent>
    </div>
  );
}

export default EditPage;
