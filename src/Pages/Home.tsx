import { MainSection } from "../component/MainSection";
import { Header } from "../component/Header";


export function Home() {
    const handleGoToProducts = () => {
        window.location.href = '/decathlon-task/shop'
    };

    return (
        <>
        <Header />
        <MainSection />
            <div className="text-center">
                <button
                    className="flex items-center gap-3 text-main border-2 border-main px-10 py-2 mx-auto my-16 hover:bg-main hover:text-[white] text-[22px] font-header-font button duration-300"
                    onClick={handleGoToProducts}
                    > Show products
                    &rArr;
                </button>
            </div>
        </>
    )
}