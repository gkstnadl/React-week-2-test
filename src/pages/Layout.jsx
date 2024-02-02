import React from 'react';
import Header from '../components/Header';
import Main from './Main/Main';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
