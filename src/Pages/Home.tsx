import { useState } from "react";
import { MainSection } from "../component/MainSection";
import { Product } from "../type";
import { Header } from "../component/Header";

interface HomeProps {
    products: Product[],
    message: string,
}

export function Home({products, message}: HomeProps) {
    const [showProducts, setShowProducts] = useState(false);
    return (
        <>
        <Header />
        <MainSection products={products} showProducts={showProducts} message={message} />
            <div className="text-center">
                <button
                    className="flex items-center gap-3 text-main border-2 border-main px-10 py-2 mx-auto my-16 hover:bg-main hover:text-[white] text-[22px] font-header-font button duration-300"
                    onClick={() => setShowProducts(!showProducts)}
                >{showProducts ? 'Hide products' : 'See all'}
                    <img src="/Line 2.svg" alt="arrow" className="img" />
                </button>
            </div>
        </>
    )
}