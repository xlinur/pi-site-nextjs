'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logoPng from '@/app/assets/logo.png';
import burgerSvg from '@/app/assets/icons/burger.svg';
import SidebarMenu from '@/app/components/SidebarMenu';
import DropdownNav from '@/app/components/DropdownNav';

import styles from './styles.module.scss';

const Naviagation = ({
  mainNav,
  secondaryNav,
  globalDictionary,
  globalSettings,
}) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < 100) {
        setHidden(false);
        return;
      }

      if (scrollTop > lastScrollTop) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const handleOpenSidebar = () => {
    setIsOpenSidebar((prev) => !prev);
  };

  const renderNavItem = (item, idx) =>
    !item.childs ? (
      <a key={item.title} href={item.url} className={styles.navLink}>
        {item.title}
      </a>
    ) : (
      <DropdownNav key={item.title} item={item} idx={idx} />
    );

  return (
    <>
      <header className={`${styles.header} ${hidden ? styles.hidden : ''}`}>
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
