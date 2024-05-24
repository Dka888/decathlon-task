import { useMemo, useState } from "react";
import { MenuHeader } from "../component/MenuHeader";
import { ProductItem } from "../component/ProductItem";
import { Product } from "../type";
import Select from 'react-select';

interface ShopProps {
    products: Product[];
    message: string;
    handleClickProductCard: (product: Product) => void;
    handleAddToCart: (product: Product) => void;
}

const filterCategories = [
    { value: 'all', label: 'All' },
    { value: "men's clothing", label: 'Men Clothing' },
    { value: "women's clothing", label: 'Women Clothing' },
    { value: 'jewelery', label: 'Jewelery' },
    { value: 'electronics', label: 'Electronics' }
  ];


  const sortProductsOptions = [
    { value: '', label: 'No sort' },
    { value: 'price_up', label: 'Price ↑'},
    { value: 'price_down', label: 'Price ↓'},
    { value: 'rating', label: 'Rating'},
  ]

export function Shop({ products, message, handleClickProductCard, handleAddToCart }: ShopProps) {
    const [filter, setFilter] = useState(filterCategories[0]);
    const [sort, setSort] = useState(sortProductsOptions[0]);

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

    const handleFilter = (event: {value: string, label: string} | null) => {
        if (event) {
            setFilter(event);
        }
    }

    const handleSort = (event: {value: string, label: string} | null) => {
        if(event) {
            setSort(event);
        }
    }
    
    const filteredProducts = useMemo(() => {
        let FilteredProducts = products;

        if(filter.value !== 'all') {
           FilteredProducts = FilteredProducts.filter(product => product.category === filter.value);
         
        } 
        if(sort.value === 'price_up') {
              FilteredProducts = FilteredProducts.sort((a, b) => a.price - b.price);
        }

        if(sort.value === 'price_down') {
            FilteredProducts = FilteredProducts.sort((a, b) => b.price - a.price);
        }

        if(sort.value === 'rating') {
            FilteredProducts = FilteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
        }

        if(sort.value === '') {
            FilteredProducts = FilteredProducts.sort((a, b) => a.id - b.id);
        }

        return FilteredProducts;
    }, [sort, filter]);




    return (
        <>
            <div className="bg-bg-header h-24">
                <MenuHeader />
            </div>
            <div className="w-full h-24 bg-white px-16 flex justify-between items-center text-[12px]">
                <div className="w-32">
                    <Select options={filterCategories} onChange={(event) => handleFilter(event)}/>
                </div>
                <div className="w-32">
                    <Select options={sortProductsOptions} onChange={(event) => handleSort(event)}/>
                </div> 
            </div>
            <div className="flex flex-wrap gap-2 justify-center content-between bg-white pt-5">
                {filteredProducts.map(product =>
                    <ProductItem product={product} key={product.id} handleClickProductCard={handleClickProductCard} handleAddToCart={handleAddToCart}/>)}
            </div>
        </>
    )
}