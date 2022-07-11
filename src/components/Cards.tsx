import React from "react";
import Card from "../templates/Card";

export default function Cards() {
     return (
          <div className="p-20 flex flex-col space-y-10 bg-[#F9F9F9]">

               <div className="w-full justify-around flex-wrap flex items-center">
                    <Card />
                    <Card />
                    <Card />
               </div>

               <div className="w-full justify-around flex-wrap flex items-center">
                    <Card />
                    <Card />
                    <Card />
               </div>

          </div>
     )
}