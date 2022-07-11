import React from "react";

export default (props: any) => {
     return (
          <div className="w-[267px] h-[350px] rounded-lg bg-red-50 drop-shadow-xl mb-10">
               <div className="w-[267px] h-[175px] rounded-t-lg bg-red-700"></div>
               <div className='p-5 space-y-5'>
                    <h2 className="font-['Merriweather'] text-lg font-bold tracking-wider">Título do card</h2>
                    <p className="font-['Lato'] text-md">
                         Lorem ipsum dolor sit ame, consectetur adipiscing elit. Vestibulum in neque et nisl.
                    </p>
               </div>
          </div>
     )
}