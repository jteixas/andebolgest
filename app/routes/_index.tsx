import type { MetaFunction } from "@vercel/remix";
import { Blockquote } from "flowbite-react";

export const meta: MetaFunction = () => {
  return [
    { title: "AndebolGest" },
    { name: "description", content: "AndebolGest" },
  ];
};

export default function Index() {
  return (    
    <div className="h-screen bg-slate-700 flex justify-center items-center">
      <Blockquote className="text-blue-600 font-extrabold text-5xl">AndebolGest Is Working!</Blockquote>
    </div>
  );
}
