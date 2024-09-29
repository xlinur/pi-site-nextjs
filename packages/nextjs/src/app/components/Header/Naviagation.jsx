'use client';

import Image from 'next/image';
import logoPng from '@/app/assets/logo.png';
import burgerSvg from '@/app/assets/icons/burger.svg';
import styles from './styles.module.scss';
import SidebarMenu from '../SidebarMenu';
import { useState } from 'react';

const Naviagation = ({
  mainNav,
  secondaryNav,
  globalDictionary,
  globalSettings,
}) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setIsOpenSidebar((prev) => !prev);
  };

  const renderNavItem = (item) =>
    !item.childs ? (
      <a key={item.title} href={item.url} className={styles.navLink}>
        {item.title}
      </a>
    ) : (
      <div className={styles.dropdown}>
        <a key={item.title} href={item.url} className={styles.navLink}>
          {item.title}
        </a>
        <div className={styles.caretDown}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5303 9.46967C16.8232 9.76256 16.8232 10.2374 16.5303 10.5303L12.5303 14.5303C12.2374 14.8232 11.7626 14.8232 11.4697 14.5303L7.46967 10.5303C7.17678 10.2374 7.17678 9.76256 7.46967 9.46967C7.76256 9.17678 8.23744 9.17678 8.53033 9.46967L12 12.9393L15.4697 9.46967C15.7626 9.17678 16.2374 9.17678 16.5303 9.46967Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <ul className={styles.dropdownMenu}>
          {item.childs.map((childItem) => (
            <li key={childItem.url}>
              <a href={childItem.url}>{childItem.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.container}`}>
          <div className={styles.logo}>
            <a href="/">
              <Image src={logoPng} alt="Logo" width="68" height="99" />
            </a>
          </div>
          <nav className={styles.nav}>{mainNav.map(renderNavItem)}</nav>

          <button
            type="button"
            className="btnOpenSideMenu"
            onClick={handleOpenSidebar}
          >
            <Image
              src={burgerSvg}
              alt="Open side bar icon"
              width="32"
              height="32"
            />
          </button>
        </div>
      </header>

      <SidebarMenu
        isOpen={isOpenSidebar}
        onClose={handleOpenSidebar}
        mainNav={mainNav}
        secondaryNav={secondaryNav}
        globalDictionary={globalDictionary}
        globalSettings={globalSettings}
      />
    </>
  );
};

export default Naviagation;
