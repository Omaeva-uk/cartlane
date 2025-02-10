import { aboutData } from "@/data/data";
import Image from "next/image";

const About = () => {
  return (
    <div  className=" max-w-[1200] overflow-hidden  pt-8 lg:px-16 px-7  mx-auto">
        <div data-aos="fade-up" className=" relative">
            <p className="leading-normal lg:leading-normal lg:tracking-tight tracking-tight text-4xl lg:text-6xl ">{aboutData.mainPara}</p>
            <div className="doodle-1 absolute top-10 lg:top-20 lg:left-[10vw]"><Image src="/assets/hero/doodle-about.png" alt="about doodle" width={270} height={22} /></div>
            <div className="doodle-2 absolute xl:bottom-20 lg:bottom-16 max-md:bottom-11 "><Image src="/assets/hero/doodle-about.png" alt="about doodle" width={270} height={22} /></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 md:text-3xl text-2xl leading-normal md:leading-normal">
            <p data-aos="fade-right">Cartlane <span className="bg-aboutText">centralizes your orders</span> , transactions, and inventory in one intuitive platform. This empowers your team with<span className="bg-aboutText"> real-time updates</span>  and actionable insights, ensuring you can respond to <span className="bg-aboutText">business needs</span>  with speed and accuracy.</p>
            <p data-aos="fade-left">Our <span className="bg-aboutText">scalable platform</span>  grows with your business, offering tools tailored to meet your evolving requirements. With advanced analytics and <span className="bg-aboutText">cost-effective solutions</span> , Cartlane helps you optimize resources.</p>
        </div>  
    </div>
  )
}

export default About;