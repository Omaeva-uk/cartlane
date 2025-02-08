import Image from "next/image";

const PrimaryButton = ({text, classname}) => {


  return (
    <button className={`flex gap-2 items-center border border-gray-300 rounded-full py-1 pl-1 pr-4 ${classname}`}>
        <div className={`bg-black transition-all w-8 h-8 md:w-10 md:h-10 rounded-full max-sm:text-sm flex justify-center items-center`}><Image src="/assets/up-arrow.png" width={15} height={15} alt="contact us icon" /></div>
        {text}
    </button>
  )
}

export default PrimaryButton;