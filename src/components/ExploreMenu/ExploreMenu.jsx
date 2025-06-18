import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
import { useTranslation } from 'react-i18next'

const ExploreMenu = ({ category, setCategory }) => {
  const { t } = useTranslation()

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1 className='h1e'>{t('explore_menu')}</h1>
      <p className='explore-menu-text'>{t('explore_description')}</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? 'All' : item.menu_name
                )
              }
              key={index}
              className='explore-menu-list-item'
            >
              <img
                className={category === item.menu_name ? 'active' : ''}
                src={item.menu_image}
                alt=""
              />
              <p className='item_menu'>{t(item.menu_name.toLowerCase().replace(' ', '_'))}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
