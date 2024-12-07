

import Hero from "@/components/hero";
import FreshSales from "@/components/freshsale";
import Category from "@/components/category";
import Products from "@/components/products";
import Music from "@/components/music";
import Explore from "@/components/explore";
import Futured from "@/components/feature";
import Freedelvry from "@/components/free";


export default function Home() {
    return(
      <div >
        
         <Hero/>
         <FreshSales/>
         <Category/>
         <Products/>
         <Music/>
         <Explore/>
         <Futured/>
         <Freedelvry/>
      </div>
    )
}