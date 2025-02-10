import Image from "next/image";
import { Navbar, PrimaryButton } from "..";
import Link from "next/link";
import "./hero.css";

const Hero = () => {
  return (
    <div className="bg-bgbrown pt-10 overflow-hidden ">
        <div className="scroll-watcher"></div>
        <Navbar />
    <div className="h-screen max-w-[1200]  pt-8 lg:px-16 px-7  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 max-md:gap-10 mt-5 md:mt-20 mx-auto">
            <div className="max-w-md mt-5">
                <h1 className="text-4xl leading-[130%] main-title fade-in lg:text-6xl lg:leading-[130%] font-semibold">Simplify Order Processing<span className="max-sm:hidden"><Image className="ml-4 inline-block" src="/assets/hero/cart-logo.png" alt="cart logo" width={51} height={61} /></span> and Invoicing with Cartlane</h1>
                <PrimaryButton classname="mt-5 mb-7 primary-btm fade-in" href="/sign-in" text="Join our platform now" />
                <p className="ml-2 sign-in fade-in">Existing customer? <Link href="/" target="_blank" className=" underline underline-black">Sign Up</Link> </p>
            </div>
            <div className=" relative">
                <div className=" absolute top-5 left-0 ring-animate max-md:hidden">
                    <Image src="/assets/hero/main-img-ring.png" width={541} height={466} alt="img ring effect" />
                </div>
                <div className="mr-20 hero-img-animate md:mr-10">
                    <Image priority={true} src="/assets/hero/main-img-2.png" className="md:scale-[1.5] max-sm:max-w-[100%] max-w-[92%]" width={500} height={544} alt="Cartlane app" />
                </div>
                <div className="left-slide-in feature-card-1 absolute -top-[2%] max-md:-right-[7%] md:top-0 md:left-[10%] "><Image src="/assets/hero/feature-card-1.png" className="max-sm:max-w-[60%] max-lg:max-w-[80%] " width={150} height={66} alt="Feature card" /></div>
                <div className="left-slide-in feature-card-2 absolute top-[20%] md:top-[40%] md:-left-[10%]"><Image src="/assets/hero/feature-card-2.png" className="max-sm:max-w-[60%] max-lg:max-w-[80%] " width={150} height={66} alt="Feature card" /></div>
                <div className="left-slide-in feature-card-3 absolute bottom-[30%] md:bottom-[10%] left-[10%]"><Image src="/assets/hero/feature-card-3.png" className="max-sm:max-w-[60%] max-lg:max-w-[80%] " width={150} height={66} alt="Feature card" /></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero;