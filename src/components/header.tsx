import React from 'react';
import Navbar from '@/components/navbar/navbar';

const Header: React.FC = () => {
  return (
    <header className='container w-full'>
      <Navbar />
    </header>
  );
};

Header.displayName = 'Header';

export default Header;