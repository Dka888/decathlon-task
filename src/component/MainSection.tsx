
import { Product } from "../type"
import { ProductItem } from "./ProductItem";

interface MainSectionProps {
    products: Product[];
    showProducts: boolean;
    message: string;
}

export function MainSection({ products, showProducts, message }: MainSectionProps) {
    return (
        <section className="pt-32 px-5 md:px-1">
            <div className="text-center">
                <h2 className="text-main  font-roboto-slab text-[64px] leading-subtitle">Best selling</h2>
                <p className="text-main m-10 font-header-font">Get in on the trend with our curated selection of best-selling styles.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-10 mx-auto mt-20 text-[22px]">
                <div>
                    <div className="bg-[#93B9A2] hover:scale-105 w-4/5 mx-auto duration-300">
                        <img src="./public/1.png" alt='1product' className='product1' /></div>
                    <div className="font-header-font text-center m-7">
                        <p className="font-semibold">Regular Fit Long Sleeve Top</p>
                        <p className="text-price my-1 flex justify-center">$38.99 <span className="mx-5">|</span> 5.0
                            <img src='./public/fi-ss-star.png' className="m-0.5 ml-1  w-fit h-fit star" /></p>
                    </div>
                </div>
                <div>
                    <div className="bg-[#A9D4BA] hover:scale-105 w-4/5 mx-auto duration-300">
                        <img src="./public/2.png" className='product2' /></div>
                    <div className="font-header-font text-center m-7">
                        <p className="font-semibold">Black Crop Tailored Jacket</p>
                        <p className="text-price my-1 flex justify-center">$62.99 <span className="mx-5">|</span> 4.9
                            <img src='./public/fi-ss-star.png' className="m-0.5 ml-1 star w-fit h-fit" /></p>
                    </div>
                </div>
                <div>
                    <div className="bg-[#CADCD0] hover:scale-105 w-4/5 mx-auto duration-300">
                        <img src="./public/3.png" className='product3' /></div>
                    <div className="font-header-font text-center m-7">
                        <p className="font-semibold">Textured Sunset Shirt</p>
                        <p className="text-price my-1 flex justify-center">$49.99 <span className="mx-5">|</span> 5.0
                            <img src='../public/fi-ss-star.png' className="m-0.5 ml-1 star w-fit h-fit" /></p>
                    </div>
                </div>
            </div>

            {showProducts &&
                <>
                    <h3 className='text-main text-[68px] text-center font-header-font mt-16'>Other products</h3>
                    <div className='flex flex-wrap gap-20 justify-center mx-auto  mt-20 text-[22px]'>
                        {products.map(product =>
                            <ProductItem product={product} key={product.id}/>
                        )}
                    </div>
                </>
            }
            {message && <div>{message}</div>}

        </section>
    )
}