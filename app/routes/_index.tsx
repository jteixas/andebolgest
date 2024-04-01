import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
  return [
    { title: "AndebolGest" },
    { name: "description", content: "AndebolGest" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen bg-slate-700 flex justify-center items-center">
      <h2 className="text-blue-600 font-extrabold text-5xl">AndebolGest Is Working!</h2>
    </div>
  );
}
