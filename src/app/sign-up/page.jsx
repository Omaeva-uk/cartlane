import { Navbar } from "@/components";
import "./signup.css"
import Image from "next/image";
import { Footer } from "@/components";
import Link from "next/link";

const SignUp = () => {
  return (
    <div>
    <div className="md:h-screen flex max-md:flex-col-reverse relative">
      <div className="z-50 mx-10 absolute top-0 left-0 right-0 mt-7">
        <Navbar />
      </div>
      <div className="flex-1 pt-8 md:pt-20 lg:pt-24">
        <div className="max-w-[450px] p-8 mx-auto">
          <div className="lg:mt-14">
            <h2 className="text-2xl font-medium">Get Started Now</h2>
            <p className="text-xl mt-3">Enter your credentials to access your account</p>
          </div>
          <div className="mt-6 lg:10">
          <form action="" className="form">
            <div>
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div className="mt-5">
              <label htmlFor="">Email Address</label>
              <input type="text" />
            </div>
            <div className="mt-5">
              <label htmlFor="">Password</label>
              <input type="text" />
            </div>
            <div className="flex gap-2 mt-4 lg:mt-8 justify-start items-center">
              <input type="checkbox" style={{width: "fit-content"}} />
              <p>I agree to terms and services</p>
            </div>
            <div className="flex items-center flex-wrap max-w-[400px] justify-normal mt-4 lg:mt-10 gap-3">
              <button className="flex-1 flex items-center text-white justify-center gap-5 max-w-[180px] bg-gridCardBlack border  p-3 px-5 rounded-xl"><div className=" max-lg:hidden"><Image src="/up-arrow-white.png" width={30} height={30} alt="contact us icon" className="max-md:hidden" /></div>Sign up</button>
              <p>Or</p>
              <Link href="/sign-in" className="flex-1 flex items-center justify-center gap-5 max-w-[180px] border rounded-xl p-3 px-5"><div className="max-lg:hidden"><Image src="/up-arrow-black.png" width={30} height={30} alt="contact us icon" className="max-md:hidden" /></div>Log In</Link>
              {/* <button className="flex-1 flex items-center justify-center gap-5 max-w-[180px] border rounded-xl p-3 px-5"><div className="max-lg:hidden"><Image src="/up-arrow-black.png" width={30} height={30} alt="contact us icon" className="max-md:hidden" /></div>Log In</button> */}
            </div>
          </form>
        </div>  
        </div>
      
      </div>
      <div className="bg-gridCardBrown flex-1 lg:pt-24 pt-16 p-12 overflow-hidden">
        <div className="max-w-[550px] mt-10 font-semibold mx-auto leading-normal">
        <h2 data-aos="fade-up" className="text-3xl  mb-5 md:text-4xl md:leading-snug font-semibold max-w-4xl leading-snug "><span className="text-black/40">Seamless</span> Inventory Management for Sales Teams and Retailers</h2>
        <div className="max-md:relative max-md:-bottom-[100px]">
          <Image src="/assets/showcase/showcase-mob.png" width={350} height={500} className="mx-auto" alt="Cartlane product Demo" />
        </div>
        </div>
        
      </div>

      
    </div>
    <Footer mt={false} />
    </div>
  )
}

export default SignUp;