import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='tomatologofooter' src={assets.logo} alt="" />
          <p>{t('portfolio_note')}</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>{t('company')}</h2>
          <ul>
            <li>{t('home')}</li>
            <li>{t('about_us')}</li>
            <li>{t('delivery')}</li>
            <li>{t('privacy_policy')}</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>{t('get_in_touch')}</h2>
          <ul>
            <li>+99850 004 23 25</li>
            <li>mashrabmamarizayevt@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        {t('copyright')}
      </p>
    </div>
  );
};

export default Footer;
