import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Products() {
    const [products, setProducts] = useState();

    // useEffect(async () => {
    //     const product = await axios.get('https://fakestoreapi.com/products');
    //     console.log(product.data);
    //     setProducts(product.data);
    // }, [])
    return (
        <div className='products'>
            {products.data}
        </div>
    )
}

export default Products
