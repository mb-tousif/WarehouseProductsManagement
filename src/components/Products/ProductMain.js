import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductMain = () => {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(0);
  const [pageData, setPageData] = useState(0);
  const [pageSize, setPageSize] = useState(6);

   useEffect(() => {
     fetch(`http://localhost:4000/products?page=${pageData}&size=${pages}`)
       .then((res) => res.json())
       .then((data) => setProducts(data));
       console.log(products);
   }, [pageData,pageSize]);

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
              onClick={() => setPageData(page)}
              className={pageData === page ? "btn m-3 bg-lime-800" : "btn m-3"}
            >
              {page}
            </button>
          ))}
          {
            <select
              className="btn m-3"
              onChange={(e) => setPageSize(e.target.value)}
            >
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
            </select>
          }
        </div>
      </section>
    </div>
  );
};

export default ProductMain;