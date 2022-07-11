import React from "react";
import imgBanner from '../assets/illustration.svg'

export default function Banner() {
     return (
          <div className="flex items-center justify-between bg-[#D7D4FF] w-full mobileP:h-screen tablet:h-auto mobileP:flex-col mobileP:space-y-10 mobileP:p-5 tablet:py-20 tablet:px-24 tablet:flex-row tablet:space-y-0">

               <div className="w-1/2 flex flex-col tablet:items-start space-y-5 justify-around mobileP:w-full mobileP:items-center">
                    <h1 className="font-['Merriweather'] font-bold mobileP:text-xl tablet:text-3xl  ">
                         Lorem ipsum dolor sit amet
                    </h1>
                    <p className="w-full font-['Lato'] text-justify mobileP:text-sm tablet:text-md">
                         Lorem ipsum dolor soo amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.
                    </p>
                    <button className="bg-[#6C63FF] text-white px-9 py-3 rounded-lg font-['Lato'] font-bold tracking-wider ease-linear hover:bg-[#564FCC] mobileP:w-full tablet:w-auto mobileP:text-md mobileP:px-6">Botão</button>
               </div>

               <div className="w-full flex justify-center">
                    <img src={imgBanner} alt="" className="w-96" />
               </div>
          </div>
     )
}