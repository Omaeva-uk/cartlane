import { About, Cta, Features, Footer, Hero, Navbar, ProductShowcase } from "@/components";

import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Features />
      <ProductShowcase />
      <Cta />
      <Footer mt={true} />
    </div>
  )
}
