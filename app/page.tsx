import Card from "@/components/Card";
import Test from "@/components/Test";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-green-950 h-screen">
      {/* <Test /> */}
      <Card />
      <h3 className="text-red-500 uppercase font-bold text-5xl">Hello!</h3>
    </main>
  );
}
