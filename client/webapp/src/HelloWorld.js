import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import addUserIcon from './assets/plus.png';
import userIcon from './assets/user.png';
import PageIndex from './PageIndex.js';
import './HelloWorld.css';

function HelloWorldPage({isActive}) {
  var initialApiResponse = "None";
  var [apiResponse, setApiResponse] = useState(initialApiResponse);
  useEffect(() => {
    axios.get('http://localhost:8080/api/hello_world/')
      .then(response => {
        apiResponse = JSON.stringify(response.data);
        setApiResponse(apiResponse);
        console.log("response: ", apiResponse);
      })
      .catch(error => {
        console.log(error);
      });
  }, [isActive, apiResponse]);

  if (!isActive) {
    return (<div/>);
  }

  return (
    <div className="HelloWorldPage">
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      </div>
      <h1>Hello, World!</h1>
      <div>{apiResponse}</div>
    </div>
  );
}

export default HelloWorldPage;
