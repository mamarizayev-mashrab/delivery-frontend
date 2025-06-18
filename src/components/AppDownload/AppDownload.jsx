import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
import { useTranslation } from 'react-i18next'

const AppDownload = () => {
  const { t } = useTranslation()

  return (
    <div className='app-download' id='app-download'>
      <p className='pforbetter'>
        {t('download_prompt')} <br /> {t('download_app')}
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Play Store" />
        <img src={assets.app_store} alt="App Store" />
      </div>
    </div>
  )
}

export default AppDownload
