import React, { useState, useEffect } from 'react';
import './App.css';
import ListPage from './ListPage.js';
import AddPage from './AddPage.js';
import EditPage from './EditPage.js';
import PageIndex from './PageIndex.js';
import HelloWorldPage from "./HelloWorld";

function App() {
  //const [pageIndex, setPageIndex] = useState(PageIndex.HelloWorld);
  return (
      <div className="App">
        <header className="App-header">
        </header>
        <HelloWorldPage isActive={true}></HelloWorldPage>
        <footer className="App-footer">
        </footer>
      </div>
  );
}

export default App;
