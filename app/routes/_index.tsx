import type { MetaFunction } from "@vercel/remix";
import { Navbar } from "~/components/nav-bar";

export const meta: MetaFunction = () => {
  return [
    { title: "AndebolGest" },
    { name: "description", content: "AndebolGest" },
  ];
};

export default function Index() {
  return (    
    <Navbar />      
  );
}
