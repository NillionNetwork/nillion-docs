import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import { useLocation } from '@docusaurus/router';

function useIsHomePage() {
  const location = useLocation();
  return location.pathname === '/';
}

export default function NavbarWrapper(props) {
  const isHomePage = useIsHomePage();

  if (isHomePage) {
    return null;
  }

  return <OriginalNavbar {...props} />;
}