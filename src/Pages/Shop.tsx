import { MenuHeader } from "../component/MenuHeader";
import { ProductItem } from "../component/ProductItem";
import { Product } from "../type";

interface ShopProps {
    products: Product[];
    message: string
}

export function Shop({ products, message }: ShopProps) {

    if (message) {
        return (
            <>
                <div className="bg-bg-header">
                    <MenuHeader />
                </div>
                <div className="m-auto">{message}</div>
            </>
        )
    }

    return (
        <>
            <div className="bg-bg-header">
                <MenuHeader />
            </div>
            <div className="flex flex-wrap gap-2 justify-center content-between mt-[-50px] lg:mt-[-100px] bg-[white] pt-5">
                {products.map(product =>
                    <ProductItem product={product} key={product.id} />)}
            </div>
        </>
    )
}