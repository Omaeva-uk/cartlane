import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-[17rem] text-white  max-w-[1600] bg-black  pt-8 lg:px-16 px-7 p-7  mx-auto">
      <div className="flex flex-wrap justify-between">
        <div>
        <Image src="/assets/footer-logo.png" width={145} height={45} alt="Cartlane Logo" />
        <p className="max-w-xs mt-5 text-white/80">Effortlessly manage your transactions and orders with Cartlane, the ultimate inventory management web app. </p>
      </div>
      <div className="flex max-sm:flex-col max-sm:mt-4 gap-7">
        <div className="flex sm:flex-col gap-3">
          <Link href="">About</Link>
          <Link href="">Join Us</Link>
        </div>
        <div className="flex sm:flex-col gap-3">
          <Link href="">X (Twitter)</Link>
          <Link href="">LinkedIn</Link>
          <Link href="">Instagram</Link>
        </div>
      </div>
      
      </div>
      <div className="h-[1px] my-10 w-full bg-white/30"></div>
      <div className="flex flex-wrap gap-2 justify-between items-center text-white/70 text-sm">
        <p>©Copyrights. All Rights reserved</p>
        <p>Designed & Developed by Omaeva Ltd. </p>
        <Link href="">Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer;