import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

interface Product {
  title: string,
  id: number,
  image: string,
  description: string,
  rating: {
    rate: number,
    count: number
  },
  price: number
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showProducts, setShowProducts] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);


useEffect(() => {
  const loadingData = async() => {
     const response = await axios.get('https://fakestoreapi.com/products');
     setProducts(response.data);
  }

  loadingData();
},[]);

const handleOpenMenu = useCallback(() => {
  setOpenMenu(!openMenu);
  setTimeout(() => setOpenMenu(false), 10000);
}, [openMenu])

  return (
    <>
    <div className="bg-bg-header min-h-screen w-full max-h-[1117px]">
      <header className="flex gap-2 justify-around pt-3 pb-16 md:pb-32 items-center 2xl:pr-32 relative z-1">
        <div>
          <img src="/Rivo.png" alt="logo" className='w-16 md:w-full'/>
        </div>
        <nav>
          <ul className="hidden md:flex justify-between uppercase w-5/12 gap-12 font-header-font text-main text-[22px] ">
            <a href='#' className='relative option'><li className="cursor-pointer hover:font-semibold option-li py-2">Home</li></a>
            <a href='#' className='relative option'><li className="cursor-pointer hover:font-semibold option-li py-2">Shop</li></a>
            <a href='#' className='relative option'><li className="cursor-pointer hover:font-semibold option-li py-2">Features</li></a>
            <a href='#' className='relative option'><li className="cursor-pointer hover:font-semibold option-li py-2">Contact</li></a>
          </ul>
        </nav>
        <div 
          className='mx-2 cursor-pointer md:hidden'
          onClick={handleOpenMenu}
        >          
          <img src='/menu-mobile.svg' alt='menu' className='w-9'/>
        </div>
        <div className="flex justify-between item-center">
          <img src="/Group 1.png" alt="basket" className="my-3 cursor-pointer w-[32px] h-[32px]"/>
          <button 
            className="border-2 rounded-sm border-text-header px-2 my-3 ml-2 md:px-7 md:my-2 md:ml-9 hover:bg-main hover:text-bg-header uppercase md:text-[20px] duration-300">Login</button>
        </div>
      </header>

     
      <div className={`absolute top-0 ${openMenu ? 'right-0' : 'right-[200%]'} duration-1000 w-full h-1/6 px-2 py-6 z-999 bg-bg-header`}>
          <ul className="uppercase w-full gap-3 text-main flex justify-around items-baseline mx-2">
            <a href='#' className='relative option'><li className="cursor-pointer option-li pb-2">Home</li></a>
            <a href='#' className='relative option'><li className="cursor-pointer option-li pb-2">Shop</li></a>
            <a href='#' className='relative option'><li className="cursor-pointer option-li pb-2">Features</li></a>
            <a href='#' className='relative option'><li className="cursor-pointer option-li pb-2">Contact</li></a>
            <div className='cursor-pointerflex items-center'
              onClick={handleOpenMenu}
            >
              <img src='/public/menu_open.svg' alt='menu' className='h-7 w-7 '/>
            </div>
          </ul>
      </div>


      <section className="lg:grid lg:grid-cols-12 lg:grid-rows-6 p-1 2xl:mx-16">
        <div className="lg:col-start-2 lg:col-end-7 lg:row-start-1 lg:row-end-4">
          <h1 className="text-main font-bold text-center lg:text-left font-title-ruf text-mobileTitle md:text-title md:leading-title-line-h">
            Discover and Find Your Own Fashion!
          </h1>
          <div className="w-3/4 mx-auto lg:mx-0 text-center lg:text-start">
            <p className="text-regular my-7  font-header-font leading-text-line-h md:text-[24px]">
            Explore our curated collection of stylish clothing and accessories tailored to your unique taste.
          </p>
          </div>
          <div className='text-center lg:text-start '>
            <button className="my-2 mb-6 md:my-6 p-3 px-9 text-[white] font-header-font bg-main uppercase shadow-box-shadow text-[20px] hover:bg-regular duration-300">
              Explore now
            </button>
          </div>
        </div>
        <div className="lg:col-start-8 lg:col-end-12 lg:row-start-1 lg:row-end-6 pb-1">
          <div className='relative w-[320px] lg:w-[570px] lg:h-[717px] mx-auto my-4 lg:m-0'>
            <img src="/Mask group.png" alt="mask_group" className="h-full"/>
            <div className='absolute top-16 right-3 lg:top-32 lg:-right-[27rem] w-16 lg:w-full'>
              <img src="/Group 38.svg" alt="points" className="" />
            </div>
            <div className='absolute bottom-16 lg:bottom-28 left-4 w-16 lg:w-full'>
              <img src="/Group 38.svg" alt="points" className=""/>
            </div>
            
          </div> 
        </div>
      </section>
    </div>
    <section className="pt-32 px-5 md:px-1">
      <div className="text-center">
        <h2 className="text-main  font-roboto-slab text-[64px] leading-subtitle">Best selling</h2>
        <p className="text-main m-10 font-header-font">Get in on the trend with our curated selection of best-selling styles.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mx-auto mt-20 text-[22px]">
        <div>
          <div className="bg-[#93B9A2] hover:scale-105 w-4/5 mx-auto duration-300"><img src="/1.png"/></div>
          <div className="font-header-font text-center m-7">
            <p className="font-semibold">Regular Fit Long Sleeve Top</p>
            <p className="text-price my-1 flex justify-center">$38.99 <span className="mx-5">|</span> 5.0 <img src='/fi-ss-star.png' className="m-0.5 ml-1  w-fit h-fit"/></p>
          </div>
        </div>
        <div>
          <div className="bg-[#A9D4BA] hover:scale-105 w-4/5 mx-auto duration-300"><img src="/2.png"/></div>
          <div className="font-header-font text-center m-7">
            <p className="font-semibold">Black Crop Tailored Jacket</p>
            <p className="text-price my-1 flex justify-center">$62.99 <span className="mx-5">|</span> 4.9 <img src='/fi-ss-star.png' className="m-0.5 ml-1  w-fit h-fit"/></p>
          </div>
        </div>
        <div>
          <div className="bg-[#CADCD0] hover:scale-105 w-4/5 mx-auto duration-300"><img src="/3.png"/></div>
          <div className="font-header-font text-center m-7">
            <p className="font-semibold">Textured Sunset Shirt</p>
            <p className="text-price my-1 flex justify-center">$49.99 <span className="mx-5">|</span> 5.0 <img src='/fi-ss-star.png' className="m-0.5 ml-1  w-fit h-fit"/></p>
          </div>
          </div>
      </div>
      
    {showProducts &&
    <>
      <h3 className='text-main text-[68px] text-center font-header-font mt-16'>Other products</h3>
          <div className='flex flex-wrap gap-20 justify-center mx-auto  mt-20 text-[22px]'>
          {products.map(product => 
                <div className='w-[350px] h-[650px]' key={product.id}>
                    <div className="hover:scale-105 h-[500px] flex items-end w-4/5 mx-auto duration-300">
                      <img src={product.image} alt={product.title} className='max-h-full w-full'/>
                    </div>
                    <div className="font-header-font text-center m-7">
                      <p className="font-semibold">{product.title}</p>
                      <p className="text-price my-1 flex justify-center">{product.price} 
                        <span className="mx-5">|</span> {product.rating.rate} 
                        <img src='/fi-ss-star.png' alt='star' className="m-0.5 ml-1  w-fit h-fit"/>
                      </p>
                    </div>
                  </div>
          )}
          </div>
      </>
      }

    </section>
    <div className="text-center">
      <button 
        className="flex items-center gap-3 text-main border-2 border-main px-10 py-2 mx-auto my-16 hover:bg-main hover:text-[white] text-[22px] font-header-font button duration-300"
        onClick={() => setShowProducts(!showProducts)}
      >{showProducts ? 'Hide products' : 'See all'}
      <img src="/Line 2.svg" alt="arrow" className="img"/>
      </button>
    </div>
    </>
  )
}

export default App
