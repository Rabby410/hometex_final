import React from 'react'

const BoxBanner = () => {
  return (
    <>
    <div className="max-w-screen-xl mx-auto px-3 mb-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <div className="bg-[url('/images/hhh/bnbnbt.png')] w-[100%] h-[100%]">
                {/*  */}
                <div className="flex flex-col items-center pb-8 px-8 pt-8 bg-[#eeeeeea8] shadow-lg shadow-[#c3c1c1]-500/50 w-[80%] justify-center m-[45px]">
                  <h3 className="text-[35px] ">
                    Welcome to Hometex Bangladesh
                  </h3>
                  <p className="text-[18px] text-justify">
                    {" "}
                    How do you make your space look it&apos;s best while reflecting
                    your personal sense of style? Try it with us and you will
                    end up with a comfortable and happy home. Your Home, Your
                    Style
                  </p>
                  <br />
                  <a
                    className="uppercase bg-[#ffd741] hover:bg-[#ffd741f0] text-[#fff] font-bold px-[25px] py-[9px] items-center"
                    href="https://hometex.ltd/index.php?route=extension/simple_blog/article" >
                    Our blog
                  </a>
                </div>
                {/*  */}
              </div>
            </div>
            <div>
              <div className="bg-[url('/images/hhh/Hotelfab.jpg')] w-[100%] h-[100%]">
                {/*  */}
                <div className="flex flex-col items-center pb-8 px-8 pt-8 bg-[#eeeeeea8] shadow-lg shadow-[#c3c1c1]-500/50 w-[80%] justify-center m-[45px]">
                  <h3 className="text-[55px] text-[#fff] text-center ">
                    HOTEL LINEN
                  </h3>
                  <br />
                  <br />
                  <a
                    className="uppercase bg-[#ffd741] hover:bg-[#ffd741f0] text-[#fff] font-bold px-[25px] py-[9px] items-center"
                    href="https://hometex.ltd/index.php?route=extension/simple_blog/article"
                  >
                    CHOOSE YOURS
                  </a>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default BoxBanner