import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useState } from "react";
import { useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';


const MAX_RATING = 5;
const MIN_RATING = 1;

function CheckoutProduct({id, title, description, price, category, image, hasPrime}) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
    
    const dispatch = useDispatch()
    
    const addItemToBasket = () => {
      const product = {
        id, 
        title, 
        description, 
        price, 
        category, 
        image,
        hasPrime
      }
      //sending the product to the redux store ...the basket slice as an action
      dispatch(addToBasket(product)) 
    }
    const removeItemFromBasket = () => {
      // remove the product from the redux store
      dispatch(removeFromBasket({id}))
    }

  return (
    <div className="grid grid-cols-5 ">
      <Image src={image} height={200} width={200} objectFit="contain"/>

      {/* Middle */}
        <div className="col-span-3 mx-5 ">
          <p>{title}</p>
          <div className="flex">
            {
              Array(rating).fill().map((_, i) => (
                <StarIcon key={i} className="h-5 text-yellow-500" />
              ))}
          </div>
          <p className="text-xs my-2 line-clamp-3">{description}</p>
          <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          {hasPrime && (
              <div className="flex items-center space-x-2 -mt-1"> 
                <img className="w-12" className="w-12" src="https://links.papareact.com/fdw" alt="" />
                <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
              </div>
          )}
        </div>

        {/* right add/remove buttons */}
        <div className="flex flex-col space-y-2 my-auto justify-self-end">
          <button className="button" onClick={addItemToBasket}>Add to Basket</button>
          <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct
