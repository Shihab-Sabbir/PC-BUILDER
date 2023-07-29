/* eslint-disable @next/next/no-img-element */
import ProductCard from "./ProductCard";

export default function FeaturedProducts({ products }) {
    return (
        <div className="p-2 lg:p-10">
            <p className='text-xl font-bold text-center'>Featured Products</p>
            <p className='pt-[20px] pb-[50px] font-thin text-lg font-[calibri] text-center'>Check & Get Your Desired Product!</p>
            <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                {products?.map(product => <div key={product._id}>
                    {product?.featured && <ProductCard product={product}/>}
                </div>)}
            </div>
        </div>
    )
}

