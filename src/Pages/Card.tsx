import { Link } from "react-router-dom";
import { MenuHeader } from "../component/MenuHeader"
import { WrapperWidth } from "../component/WrapperWidth"
import { Product } from "../type"

interface CardInterface {
    product: Product | null;
    handleAddToCart: (product: Product) => void;
}

export const Card = ({ product, handleAddToCart }: CardInterface) => {

    if(!product) {
        return (
            <>
            <div className="bg-bg-header h-24">
                <MenuHeader />
            </div>
            <WrapperWidth  className="text-center m-auto my-24">
                <div>Nie wybrano produktu</div>
                <Link to='/decathlon-task/shop'>
                    <button className="border rounded-lg px-5 py-2">Przejdź do sklepu</button>
                </Link>
            </WrapperWidth>
            </>
        )
    }

    return (
        <>
            <div className="bg-bg-header h-24">
                <MenuHeader />
            </div>
            <WrapperWidth className="relative pr-0 mr-0 max-w-full">
                <div className="w-1/2 overflow-x-hidden absolute -top-1 left-1/2 z-0">
                    <div className="w-[100vw] bg-regular h-[100vh] rounded-full"></div>
                </div>
                <div className="w-full lg:w-2/3 lg:my-10 mx-auto border rounded-xl lg:p-10 bg-white absolute z-10 lg:left-[15%]"> 
                    <div className="flex w-full justify-between">
                        <div className="w-1/3 m-auto p-5">
                           <img src={product?.image} alt={product?.title} /> 
                        </div>
                        <div className="w-2/3 flex flex-col justify-between">
                            <div className="lg:text-[50px] text-center truncate whitespace-normal max-h-[160px]">
                                <p>{product?.title}</p>
                            </div>

                            <div  className="flex justify-between lg:text-[20px] m-3">
                                <p>USD {product?.price}</p>
                                <p>Rating {product?.rating.rate}</p>
                            </div>

                            <div className="p-5 items-center text-justify">
                                <p>{product?.description}</p>
                            </div> 
                            <div className="text-center mx-auto">
                                <button 
                                    className="text-white bg-regular px-8 py-3 border rounded-2xl hover:bg-bg-header hover:text-regular"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    Dodaj do koszyka
                                </button>
                            </div>
                        </div>
                    </div> 
               
                </div>
               
            </WrapperWidth>
        </>
       
    )
}