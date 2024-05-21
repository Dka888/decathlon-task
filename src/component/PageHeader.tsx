export function PageHeader(){
    return (
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
            <img src="./public/Mask group.png" alt="mask_group" className="h-full model"/>
            <div className='absolute top-16 right-3 lg:top-32 lg:-right-[27rem] w-16 lg:w-full'>
              <img src="./public/Group 38.svg" alt="points" className="points animation" />
            </div>
            <div className='absolute bottom-16 lg:bottom-28 left-4 w-16 lg:w-full'>
              <img src="./public/Group 38.svg" alt="points" className="points animation"/>
            </div>
            
          </div> 
        </div>
      </section>
    );
}