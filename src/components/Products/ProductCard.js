import React from 'react';
import { BsFillStarFill } from "react-icons/bs";
const ProductCard = ({product}) => {
    const {name, description, img, Warranty, price, minOrderQuantity, availableQuantity} = product;
return (
<div className="card card-compact mb-2 container p-2 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Product" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}!</h2>
    <div className="flex items-center">
        <BsFillStarFill className='w-5 h-5'/>
        <BsFillStarFill className='w-5 h-5'/>
        <BsFillStarFill className='w-5 h-5'/>
        <BsFillStarFill className='w-5 h-5'/>
        <span className="text-gray-600 ml-3">Reviews</span>
    </div>
    <p className="leading-relaxed">{description}</p>
    <p className="title-font text-gray-900">Price: ${price}</p>
    <p className="title-font text-gray-900">Warranty: {Warranty}</p>
    <p className="title-font text-gray-900">Min quantity ${minOrderQuantity}</p>
    <p className="title-font text-gray-900">Available quantity ${availableQuantity}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary w-full max-w-xs">Buy Now</button>
    </div>
  </div>
</div>

    );
};

export default ProductCard;