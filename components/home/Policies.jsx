import React from 'react'

export const Policies = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 mb-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-center justify-center">
                <div className="bg-[#ade6cd] hover:bg-[#76eeb9] text-white grid grid-cols-2 items-center">
                    <div className="">
                        <a href="#">
                            <img className="pl-8 pr-0 py-7 rounded-t-lg" src="/images/icons/icon1.png" alt="Client Image" />
                        </a></div>
                    <div className="text-left ml-[-55px]">
                        <a href="#">15 DAYS RETURN</a>
                        <p>Easy Exchange & Return</p>
                    </div>
                </div>
                <div className="bg-[#9cc1e8] hover:bg-[#84b4e6] text-white grid grid-cols-2 items-center">
                    <div className="">
                        <a href="#">
                            <img className="pl-8 pr-0 py-7 rounded-t-lg" src="/images/icons/icon2.png" alt="Client Image" />
                        </a></div>
                    <div className="text-left ml-[-55px]">
                        <a href="#">FREE SHIPPING</a>
                        <p>On all orders over BDT 5000</p>
                    </div>
                </div>
                <div className="bg-[#bacf8c] hover:bg-[#b3cd7a] text-white grid grid-cols-2 items-center">
                    <div className="">
                        <a href="#">
                            <img className="pl-8 pr-0 py-7 rounded-t-lg" src="/images/icons/icon3.png" alt="Client Image" />
                        </a></div>
                    <div className="text-left ml-[-55px]">
                        <a href="#">BEST DEAL IN TOWN</a>
                        <p>Guarantee</p>
                    </div>

                </div>
                <div className="bg-[#ecaf6b] hover:bg-[#e9a354] text-white grid grid-cols-2 items-center">
                    <div className="">
                        <a href="#">
                            <img className="pl-8 pr-0 py-7 rounded-t-lg" src="/images/icons/icon4.png" alt="Client Image" />
                        </a></div>
                    <div className="text-left ml-[-55px]">
                        <a href="#">EXPORT QUALITY</a>
                        <p>Assurance</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
