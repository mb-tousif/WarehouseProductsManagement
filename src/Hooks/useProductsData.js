import { useEffect, useState } from 'react';

const useProductsData = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const url = "http://localhost:4000/products";
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return [products, setProducts];
};

export default useProductsData;