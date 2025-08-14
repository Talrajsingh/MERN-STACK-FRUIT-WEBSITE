import React from 'react'
import Product from './Product'
import { useAppContext } from '../context/AppContext'

const BestSeller = () => {
    const { products } = useAppContext();

    return (
        <div className='mt-8 px-2 sm:px-4'>
            <p className='text-2xl md:text-3xl font-medium'>Best Sellers</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 mt-6'>
                {products
                    .filter(product => product.inStock)
                    .slice(0, 5)
                    .map((product, index) => (
                        <div key={index} className="h-full">
                            <Product product={product} />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default BestSeller
