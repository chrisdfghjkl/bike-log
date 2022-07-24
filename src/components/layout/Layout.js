import { Fragment } from 'react';
import Navbar from './Navbar';

import styles from './Layout.module.css';

const Layout = (props) => {
  return <Fragment>
    <Navbar />
    <main className={styles.layout}>{props.children}</main>
  </Fragment>
};

export default Layout;