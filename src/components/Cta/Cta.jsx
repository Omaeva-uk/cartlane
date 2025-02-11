import { CtaData } from "@/data/data";
import { PrimaryButton } from "..";
import Image from "next/image";

const Cta = () => {
  return (
    <div id="contact-us" className="bg-bgbrown pt-8 lg:h-[130vh] relative">
      <div className=" max-w-[1200] lg:px-16 px-7 my-24 flex flex-col items-center gap-5  mx-auto">
        <p data-aos="fade-up" className="text-black/70 text-center">
            {CtaData.subPara}
        </p>
        <h2 data-aos="fade-up" className="text-4xl md:text-5xl md:leading-snug font-semibold text-center max-w-4xl leading-snug "><span className="text-black/40">Seamless</span>{CtaData.heading}</h2>
        <div data-aos="fade-up  " style={{position: "relative", zIndex: 100}}>
          <PrimaryButton href="/sign-in" text="Start Your Free Trial Today" />
        </div>
        
        <div data-aos="zoom-in" className="relative -top-[10px]  md:-top-[100px] ">
            <Image src={CtaData.img} width={1000} height={100} alt="Cartlane product" />
        </div>
        <div data-aos="zoom-in" className="bg-black bg-[url('/assets/cta/radar.png')] max-w-[1400px] bg-no-repeat bg-center bg-contain flex flex-wrap justify-between gap-12 p-8 px-12 rounded-3xl absolute -bottom-52  items-center">
          <div className="flex justify-between items-center max-w-xs gap-5">
            <Image src="/assets/cta/location.png" width={50} height={50} alt="Location" />
            <p className="text-white">25F, 2nd Floor, Cathedral Garden Rd,Chennai, Tamil Nadu 600034, India</p>
          </div>
          {/* <div>
            <Image src="/assets/cta/radar.png" width={300} height={50} alt="Style image" />
          </div> */}
          <div className="flex justify-around items-center gap-5">
            <Image src="/assets/cta/instagram.png" width={50} height={50} alt="Instagram" />
            <Image src="/assets/cta/facebook.png" width={50} height={50} alt="Facebook" />
            <Image src="/assets/cta/twitter.png" width={50} height={50} alt="Twitter" />
            <Image src="/assets/cta/linkedin.png" width={50} height={50} alt="Linkedin" />
          </div>
      </div>
      </div>

      
    </div>
    
  )
}

export default Cta;