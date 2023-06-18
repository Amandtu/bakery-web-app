import React from 'react';
import Header from './header';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ marginTop: '80px' }}>{children}</div>
    </div>
  );
}
