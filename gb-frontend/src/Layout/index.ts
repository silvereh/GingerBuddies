import React from 'react';

import  Header from './Header/Header';
import  Footer from './Footer/Footer';

const Layout = ( { children }: { children ?: React.ReactNode } ) => (
	{ children }
);

Layout.Header = Header;
Layout.Footer = Footer;

export default Layout;