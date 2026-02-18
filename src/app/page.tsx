import Layout from "@/components/layout";
import Content from "@/modules/home/content";
import { Suspense } from "react";

export default function Home() {
  return (
    <Layout>
      <Suspense fallback={<div className="text-gray-600">Loading...</div>}>
        <Content />
      </Suspense>
    </Layout>
  );
}
