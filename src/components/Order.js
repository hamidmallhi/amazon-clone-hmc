import React from 'react'
import moment from "moment"
import NumberFormat from 'react-number-format'

function Order({id, amount, amount_shipping, items, timestamp, images}) {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format('DD MMM YYYY')}</p>
        </div>
        <div>
          <p className="text-xs font-bold ">TOTAL</p>
          <p>
          <NumberFormat value={amount} displayType={'text'} thousandSeparator={true} prefix={'$'} className="m-1"/>
          - including Next Day Delivery{" "}
          <NumberFormat value={amount_shipping} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          </p>       
        </div>
        <p className="text-sm whitespace-nowrap sm:text-lg self-end flex-1 text-right text-blue-500">
          {items.length} Item(s)
        </p>
        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER # {id}
        </p>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
            {images.map( (image, i) => (
              <img src={image} alt="" key={i} className="h-20 object-contain sm:h-32" /> // any thing above small screen
            ))}
        </div>
      </div>
    </div>
  )
}

export default Order

{/* <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} /> */}