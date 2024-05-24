import { Link } from "react-router-dom";
import { Product } from "../type";

interface ProductProps {
    product: Product;
    handleClickProductCard: (product: Product) => void;
    handleAddToCart: (product: Product) => void;
}

export function ProductItem({ product, handleClickProductCard, handleAddToCart }: ProductProps) {
    const {image, title, price, rating } = product;


    return (
        
        <div className='w-[350px] max-h-[650px] border rounded flex flex-col justify-between' onClick={() => handleClickProductCard(product)}>
            <Link to='/decathlon-task/card'>
                <div className="hover:scale-105 max-h-[450px] md:h-[400px] flex items-end w-4/5 mx-auto duration-300 pt-3">
                    <img src={image} alt={title} className='max-h-full w-full' />
                </div>
                <div className="font-header-font text-center m-7">
                    <p className="font-semibold">{title}</p>
                    <p className="text-price my-1 flex justify-center">{price}
                        <span className="mx-5">|</span> {rating.rate}
                        <img src='./public/fi-ss-star.png' alt='star' className="m-0.5 ml-1 star w-fit h-fit" />
                    </p>
                </div> 
            </Link>
            <div className="text-center mb-2">
               <button 
                    className="border rounded bg-regular px-9 py-2 cursor-pointer text-white hover:text-regular hover:bg-[white]"
                    onClick={() => handleAddToCart(product)}
                >Kup</button> 
            </div>
           
        </div>
        
    )
}