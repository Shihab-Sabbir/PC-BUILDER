import RootLayout from '@/components/Layouts/RootLayout';
import ProductCard from '@/components/UI/ProductCard';
import ProductDetailsCard from '@/components/UI/ProductDetailsCard';
import React from 'react';

export default function ProductDetails(props) {
  const {product} = props;
  return (
    <div>
      <ProductDetailsCard product={product}/>
    </div>
  );
}

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  try {
    const productResponse = await fetch('http://localhost:3000/api/products');
    if (!productResponse.ok) {
      throw new Error('Failed to fetch products');
    }
    const productData = await productResponse.json();
    const products = productData?.data || [];

    const paths = products.map((product) => ({
      params: { id: product._id.toString() }
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  try {
    const productResponse = await fetch(`http://localhost:3000/api/products?id=${id}`);
    if (!productResponse.ok) {
      throw new Error('Failed to fetch product');
    }
    const productData = await productResponse.json();
    const product = productData?.data || null;

    return {
      props: {
        product,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        product: null,
      },
      revalidate: 10,
    };
  }
};
