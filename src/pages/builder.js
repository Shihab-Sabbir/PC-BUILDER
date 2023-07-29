/* eslint-disable @next/next/no-img-element */
import RootLayout from '@/components/Layouts/RootLayout';
import { removeProduct } from '@/redux/build/buildSlice';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { BsMotherboard, BsCpu, BsPower, BsMemory, BsDeviceHdd,BsFillStarFill } from 'react-icons/bs';
import { CiMonitor } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';

export default function Builder(props) {
  const { categories } = props;
  const build = useSelector((state) => state.build);
  const router = useRouter();
  const dispatch = useDispatch()
  const categoryIcons = {
    Motherboard: <BsMotherboard />,
    CPU: <BsCpu />,
    "Power Supply Unit": <BsPower />,
    RAM: <BsMemory />,
    Storage: <BsDeviceHdd />,
    Monitor: <CiMonitor />,
  };

  const handleRemove = (category) => {
    dispatch(removeProduct({ category }));
  };


  const allItemsSelected = () => {
    return Object.values(build).every((value) => value !== null);
  };


  const handleComplete = () =>{
    const completed = Object.values(build).every((value) => value !== null);
    if(completed){
      const confirmed = window.confirm('Congratulations! Your build has completed. Are you sure you want to leave this page?');
      if (confirmed) {
        router.push('/');
      }
    }
  }

  return (
    <div className='p-[20px] flex flex-col gap-4 max-w-[1000px] mx-auto'>
      {categories?.map((category, idx) => (
        <div key={idx} className='w-full rounded-lg bg-white p-4  shadow-lg'>
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-5xl mt-2'> {categoryIcons[category] || category}</p>
            </div>
            <div className='h-[100px] w-[120px] flex flex-col justify-center items-center gap-2'>
              <p className='text-xs font-bold'> {category}</p>
              {build[category] ? <Button
                onClick={() => handleRemove(category)}
                size='sm'>Remove</Button> : <Link href={`/products/${category}?forbuild=true`}>
                <Button size='sm'>Select</Button>
              </Link>}
            </div>
          </div>
          <div className='p-1'>
            {
              build[category] && (
                <div className='flex items-start gap-2'>
                  <img src={build[category]?.img} className='w-[90px] h-[100px] border-4 rounded-lg' alt="" />
                  <div>
                    <p className='text-xs'>{build[category]?.product_name}</p>
                    <p className='text-xs'>{build[category]?.category}</p>
                    <p className='text-xs'>{build[category]?.price} ৳</p>
                    <p className='text-xs'>{build[category]?.status}</p>
                    <p className='text-xs flex gap-2 items-center'>{build[category]?.average_rating} <BsFillStarFill className='text-yellow-700'/> </p>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      ))}
      {allItemsSelected() && <Button onClick={handleComplete}>Complete Build</Button>}
    </div>
  )
}

Builder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


export const getStaticProps = async () => {
  try {
    // Fetch products
    const productResponse = await fetch("http://localhost:3000/api/products");
    if (!productResponse.ok) {
      throw new Error("Failed to fetch products");
    }
    const productData = await productResponse.json();
    const products = productData?.data || [];

    // Fetch categories
    const categorieResponse = await fetch("http://localhost:3000/api/categories");
    if (!categorieResponse.ok) {
      throw new Error("Failed to fetch categories");
    }
    const categorieData = await categorieResponse.json();
    const categories = categorieData?.data || [];

    return {
      props: {
        products,
        categories,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: {
        products: [],
        categories: [],
      },
      revalidate: 10,
    };
  }
};