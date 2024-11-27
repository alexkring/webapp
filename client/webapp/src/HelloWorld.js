import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import addUserIcon from './assets/plus.png';
import userIcon from './assets/user.png';
import PageIndex from './PageIndex.js';
import './HelloWorld.css';

function HelloWorldPage({isActive}) {

  useEffect(() => {
    axios.get('http://localhost:8080/api/hello_world/')
      .then(response => {
        console.log("response: ", JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  }, [isActive]);

  if (!isActive) {
    return (<div/>);
  }

  return (
    <div className="HelloWorldPage">
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      </div>
      <h1>Hello, World!</h1>
      <div></div>
    </div>
  );
}

export default HelloWorldPage;
