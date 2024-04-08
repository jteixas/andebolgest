import { Card } from "~/components/card";
import { Layout } from "~/components/layout";

import type { MetaFunction } from "@vercel/remix";
export const meta: MetaFunction = () => {
  return [
    { title: "AndebolGest" },
    { name: "description", content: "AndebolGest" },
  ];
};

export default function Index({ children }: { children: React.ReactNode }) {

  return (    
      <Layout >             
          <Card/>                  
      </Layout>    
  );
}
