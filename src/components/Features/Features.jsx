"use client"

import { featuresData } from "@/data/data";
import Image from "next/image";
import "./feature.css";

import { useEffect, useState } from "react";

const Features = () => {

    const [plusHover, setPlusHover] = useState(null);
    console.log(plusHover);

    useEffect(() => {
      
    }, [plusHover])
    


  return (
    <div className=" max-w-[1200]  pt-8 lg:px-16 px-7 my-24  mx-auto">
        <h2 data-aos="fade-up" className="text-5xl leading-snug max-w-3xl font-semibold"><span className="text-aboutText">Smart Solutions</span>, Tailored for Your Business Success</h2>
        <div className="grid-features mt-20 ">
            {
                featuresData.map((item, i) => (
                    <div key={i} className={`p-7 ${plusHover === item.id ? 'bg-gridCardBlack' : item.className} transition-all overflow-hidden relative border rounded-3xl`} style={{gridArea: item.style}}>
                        <div className="">
                            <div className="">
                                {
                                    item.cardMoreiocn && <div onMouseEnter={(e) => setPlusHover(item.id)} onMouseLeave={() => setPlusHover(null)} className="max-w-max cursor-pointer ml-auto"><Image src={item.cardMoreiocn} width={30} height={30} alt="features" /></div>
                                }
                                {
                                    item.cardImg && <div className="max-w-max ml-auto"><Image src={item.cardImg} width={`${item.id === 4 ? '80' : '100'}`} height={60} alt="features" /></div>
                                }
                           
                            </div>
                            <div className={`absolute bottom-5 ${item.id === 1 ? 'text-white' : item.id === 4 ? 'text-white' : item.id === 7 ? "text-white" : ''}`}>
                                {
                                    item.demoImg && <div className="max-w-max mb-2 "><Image src={item.demoImg} width={100} height={100} alt="features" /></div>
                                }
                                <h3 className={`text-2xl font-medium max-w-[180px] ${plusHover === item.id ? 'text-white' : item.id === 1 ? 'text-white' : item.id === 4 ? 'text-white' : item.id === 7 ? "text-white" : ''} `}>{item.cardTitle}</h3>
                                {
                                    item.cardPara && <p className={`${plusHover === item.id ? 'text-white' : item.id === 1 ? 'text-white' : item.id === 4 ? 'text-white' : item.id === 7 ? "text-white" : ''} max-w-[220px] mt-2`}>{item?.cardPara}</p>
                                }
                            </div>
                        </div>
                        
                        
                    </div>
                ))
            }
        </div>
        <div className="grid-features-mob mt-20">
            {
                featuresData.map((item, i) => (
                    <div data-aos="fade-up" key={i} className={`p-7 border ${item?.className} rounded-3xl`}>
                        <div className="">
                            {
                                item.cardMoreiocn && <div className="max-w-max ml-auto"><Image src={item.cardMoreiocn} width={30} height={30} alt="features" /></div>
                            }
                            {
                                item.cardImg && <div className="max-w-max ml-auto"><Image src={item.cardImg}  width={`${item.id === 4 ? '80' : '100'}`} height={60} alt="features" /></div>
                            }
                        </div>
                        <div className={`${item.id === 1 ? 'text-white' : item.id === 4 ? 'text-white' : item.id === 7 ? "text-white" : ''}`}>
                            {
                                item.demoImg && <div className="max-w-max mb-2 "><Image src={item.demoImg} width={100} height={100} alt="features" /></div>
                            }
                            <h3 className="text-2xl font-medium max-w-[180px]">{item.cardTitle}</h3>
                            {
                                item.cardPara && <p className="mt-2">{item?.cardPara}</p>
                            }
                            
                        </div>
                        
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Features;