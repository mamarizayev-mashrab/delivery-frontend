import React from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>{t('order_food')}</h2>
        <p>{t('order_description')}</p>
        <a href="#explore-menu">
          <button className='buttonwl'>{t('view_menu')}</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
