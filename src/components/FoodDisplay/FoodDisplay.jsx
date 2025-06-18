import React, { useContext, useState, useEffect } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import { useTranslation } from 'react-i18next'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)
  const { t } = useTranslation()

  const [priceFilter, setPriceFilter] = useState('')
  const [ingredientFilter, setIngredientFilter] = useState('')
  const [filteredFood, setFilteredFood] = useState([])

  useEffect(() => {
    if (priceFilter === '' && ingredientFilter === '') {
      // Show first 20 food items regardless of category when no filters are applied
      setFilteredFood(food_list.slice(0, 20))
    } else {
      const newFiltered = food_list.filter(item => {
        const matchCategory = category === 'All' || category === item.category
        const matchPrice = priceFilter === '' || Number(item.price) === Number(priceFilter)
        const matchIngredient = ingredientFilter === '' ||
          (item.ingredients && item.ingredients.some(ing => ing.toLowerCase().includes(ingredientFilter.toLowerCase()))) ||
          (item.description && item.description.toLowerCase().includes(ingredientFilter.toLowerCase()))

        return matchCategory && matchPrice && matchIngredient
      })
      setFilteredFood(newFiltered)
    }
  }, [food_list, category, priceFilter, ingredientFilter])

  return (
    <div className='food-display' id='food-display'>
      <h2 className='h2we'>{t('top_dishes')}</h2>

      <div className='filters'>
        <input
          type='number'
          placeholder={t('$')}
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className='filter-input'
        />

        <input
          type='text'
          placeholder={t('Tomato')}
          value={ingredientFilter}
          onChange={(e) => setIngredientFilter(e.target.value)}
          className='filter-input'
        />
      </div>

      <div className='food-display-list'>
        {filteredFood.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default FoodDisplay
