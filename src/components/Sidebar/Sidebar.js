// @flow strict
import React from 'react';
import Title from './Title';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu, title, subtitle } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Title title={title} subtitle={subtitle} />
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
