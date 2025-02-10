

import Image from "next/image";
import "./productshowcase.css";
import { showcaseData } from "@/data/data";

const ProductShowcase = () => {

    
    // useEffect(() => {
    //     //console.log("hello");
    //   const bar = document.querySelectorAll(".showcase-progress");
    //   console.log(bar);

    //     let newBar = 0
    //     let activeBar = bar[newBar];
    //     activeBar.style.backgroundColor = "red";
    //     console.log(newBar);

    //   setInterval(() => {
    //     activeBar.style.backgroundColor = "blue";
    //     newBar++;
    //     if(newBar <= 2){
    //         activeBar = bar[newBar];
            
    //     console.log(activeBar);
    //     }else{
    //         newBar = 0;
    //         console.log("resetted");
    //     }
        
    //   }, 3000);
    // }, [])
    





  return (
    <div className=" max-w-[1200]  pt-8 lg:px-16 px-7 my-24   mx-auto">
        <h2 className="showcase-h1-intro text-5xl leading-snug max-w-3xl font-semibold"><span className="text-aboutText">Simplify</span> Workflows and <span className="text-aboutText">Supercharge</span> Decision-Making</h2>
        <div className="w-full mt-24 showcase-bg relative p-20">
            <div className=" flex justify-between items-centre">
                <div className="">
                    <div>
                        <div className="mt-5 max-md:hidden">
                            <Image src="/assets/showcase/showcase-lap.png" width={700} height={500} alt="Cartlane Product showcase" />
                        </div>
                       
                        <div className="mt-7 max-md:hidden flex gap-5 absolute bottom-10">
                        <div className=" flex-none">
                            <Image src="/assets/showcase/showcase-plus.png" width={40} height={40} alt="Plus Icon" />
                        </div> 
                            <p className="text-white/80 rounded-2xl p-5 bg-white/40  max-w-xs">Spend Less Time on Stats and More Time on Strategy</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="mb-7 flex gap-5 max-md:hidden absolute top-12 right-32">
                        <p className="text-white/80 rounded-2xl p-5 bg-white/40  max-w-xs">Make Informed Decisions Without the Hassle of Manual Calculations</p>
                        <div className=" flex-none">
                            <Image src="/assets/showcase/showcase-plus.png" width={40} height={40} alt="Plus Icon" />
                        </div>  
                    </div>
                    <div className="relative -bottom-[16%]">
                       <Image src="/assets/showcase/showcase-mob.png" width={400} height={500} alt="Cartlane Product showcase" /> 
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="grid gap-7 grid-cols-1 md:grid-cols-3  mt-8 px-7">
            {
                showcaseData.map((item, i) => (
                    <div key={i}>
                        <div className="showcase-progress w-full  h-[7px] rounded-xl">

                        </div>
                        <div className="flex flex-col justify-between">
                            <h3 className="text-2xl max-w-[300px] font-medium mt-7 mb-3">
                                {item.heading}
                            </h3>
                            <p className="max-w-[300px] mt-auto text-black/80">
                                {item.para}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ProductShowcase;