import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import addUserIcon from './assets/plus.png';
import userIcon from './assets/user.png';
import PageIndex from './PageIndex.js';
import './ListPage.css';

function ListPage({isActive, onChangePage, onChangeUserContext}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/users/')
      .then(response => {
        console.log("response: ", JSON.stringify(response.data));
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [isActive]);

  const handleEditUserClick = (user) => {
    onChangeUserContext(user);
    onChangePage(PageIndex.EditPage);
  };

  const renderedUsers = users.map((user) =>
    <div key={user.id} className="ListPage-user" onClick={ () => { handleEditUserClick(user); } }>
      <div className="ListPage-user-icon">
        <img src={userIcon} alt="Add User" className="ListPage-user-icon-image" />
      </div>
      <div className="ListPage-user-info">
        <div> First name: {user.first_name} </div>
        <div> Last name: {user.last_name} </div>
        <div> Email: {user.email} </div>
        <div> Phone Number: {user.phone_number} </div>
        <div> Role: {user.role} </div>
      </div>
      <div className="ListPage-user-footer"> </div>
    </div>
  );

  const handleAddUserClick = () => {
    onChangePage(PageIndex.AddPage);
  };

  if (!isActive) {
    return (<div/>);
  }

  return (
    <div className="ListPage">
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className="ListPage-add-user-button" onClick={handleAddUserClick}>
          <img src={addUserIcon} alt="Add User" className="ListPage-add-user-icon" />
        </button>
      </div>
      <h1>Team Members</h1>
      <p>You have {users.length} team members</p>
      <div></div>
      <p>{renderedUsers}</p>
    </div>
  );
}

export default ListPage;
