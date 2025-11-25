import {HomePage} from "@/components/HomePage";   
import Image from "next/image";
import NavButton from "@/components/NavButton";
import Cards from "@/components/Cards";
import { Carrosel } from "@/components/Carrosel";

export default function Home() {
  return (
    <div>
      <HomePage />
      <NavButton />
      <Cards />
      <Carrosel />
    </div>
  );
}
