import DressStyle from "@/components/DressStyle";
import FormSection from "@/components/FormSection";
import Hero from "@/components/Hero";
import NewArrialsItem from "@/components/NewArrialsItem";
import TopSelling from "@/components/TopSelling";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <NewArrialsItem />
      <TopSelling />
      <DressStyle />
      <FormSection />
    </>
  );
}
