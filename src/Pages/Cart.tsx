import { Link } from "react-router-dom";
import { MenuHeader } from "../component/MenuHeader"
import { WrapperWidth } from "../component/WrapperWidth"
import { CartItem, Product } from "../type";


interface CartInterface {
    cart: CartItem[];
    handleAddToCart:(product: Product) => void;
    handleRemoveCart: (product: CartItem) => void;
}

export const Cart = ({cart, handleAddToCart, handleRemoveCart}: CartInterface) => {

    const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2);
    const fixedPrice = (_price: number) => {
        return _price.toFixed(2)
    }

    if(!cart.length) {
        return (
            <> 
                <div className="bg-bg-header h-24">
                    <MenuHeader />
                </div>
                <WrapperWidth className="text-center m-auto my-24">
                    <div>Koszyk jest pusty</div>
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
            <WrapperWidth className="my-10 flex">
                <div className="border rounded p-2 m-1">
                    <ul className="grow-1">
                         {cart.map(item => 
                            <li key={item.id} className="border rounded-lg m-2 flex justify-around">
                                <div className="w-1/4">
                                    <img src={item.image} alt={item.title} className="p-2"/>
                                </div>
                                <div className="p-2 my-10 w-1/3">
                                    <p className="font-bold">{item.title}</p>
                                    <p>{item.category}</p>
                                </div>
                                <div className="p-2 my-10 flex w-[100px] gap-3">
                                    <div className=""><button className="border rounded-lg bg-bg-header px-2 h-7" onClick={() => handleAddToCart(item)}>&uarr;</button></div>
                                    <div>{item.quantity}</div>
                                    <div className=""><button className="border rounded-lg bg-bg-header px-2 h-7" onClick={() => handleRemoveCart(item)}>&darr;</button></div>
                                </div>
                                <div className="p-2 font-bold my-10">{fixedPrice(item.price)} USD</div>
                            </li>)} 
                    </ul>
                  
                </div>
                <div className="border rounded-lg p-3 grow-0 w-[400px] h-[200px] ml-3 my-1">
                    <div>
                        <div className="flex justify-between font-bold p-2">
                            <p>Products Total:</p>
                            <p>{total} USD</p>
                        </div>
                        <div className="flex justify-between p-2">
                            <p>Podatek:</p>
                            <p>{(+total * 0.23).toFixed(2)} USD</p>
                        </div>
                        <div className="flex justify-between p-2">
                            <p>Dostawa:</p>
                            <p>20.00 USD</p>
                        </div>
                        <hr/>
                        <div>
                        <div className="flex justify-between font-bold p-2">
                            <p>Total Paid:</p>
                            <p>{(+total + 20).toFixed(2)} USD</p>
                        </div>
                        </div>
                    </div>
                </div>
            </WrapperWidth>
        </>
        
       
    )
}