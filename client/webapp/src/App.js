import React, { useState, useEffect } from 'react';
import './App.css';
import ListPage from './ListPage.js';
import AddPage from './AddPage.js';
import EditPage from './EditPage.js';
import PageIndex from './PageIndex.js';

function App() {

  const [pageIndex, setPageIndex] = useState(PageIndex.ListPage);
  const [userContext, setUserContext] = useState(null);

  const handleChangePage = (pageIndex) => {
    setPageIndex(pageIndex);
  };

  const handleChangeUserContext = (user) => {
    setUserContext(user);
  };

  return (
      <div className="App">
        <header className="App-header">
        </header>
        <ListPage isActive={pageIndex === PageIndex.ListPage} onChangePage={handleChangePage} onChangeUserContext={handleChangeUserContext}>
        </ListPage>
        <AddPage isActive={pageIndex === PageIndex.AddPage} onChangePage={handleChangePage}>
        </AddPage>
        <EditPage isActive={pageIndex === PageIndex.EditPage} onChangePage={handleChangePage} user={userContext}>
        </EditPage>
        <footer className="App-footer">
        </footer>
      </div>
  );
}

export default App;
