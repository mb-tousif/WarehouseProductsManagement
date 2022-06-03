import React, { useEffect, useState } from 'react';
import useProductsData from '../../Hooks/useProductsData';
import ProductCard from './ProductCard';

const ProductMain = () => {
  const [products] = useProductsData();
  const [pages, setPages] = useState(0);
  const [pageData, setPageData] = useState(0);

  useEffect(()=>{
    const url = "http://localhost:4000/productCount";
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      const count = data.count;
      const countPage = Math.ceil(count/6);
      setPages(countPage)
    })
  },[])

  return (
    <div>
      <section>
        <h1>All available products of Luxury E-commerce.</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-4 mb-4">
          {[...Array(pages).keys()].map((page) => (
            <button
              onClick={() =>setPageData(page)}
              className={pageData === page ? 'btn m-3 bg-lime-800': 'btn m-3'}>
              {page + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductMain;