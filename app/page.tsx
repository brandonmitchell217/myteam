import BuildProp from "@/components/BuildProp";
import Cta from "@/components/Cta";
import Landing from "@/components/Landing";
import Test from "@/components/Test";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="">
      {/* <Test /> */}
      <Landing />
      <BuildProp />
      <Testimonials />
      <Cta />
    </main>
  );
}
