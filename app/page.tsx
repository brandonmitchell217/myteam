import BuildProp from "@/components/BuildProp";
import Cta from "@/components/Cta";
import Landing from "@/components/Landing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Landing
        title="Find the best talent"
        wordToHighlight="talent"
        description="Finding the right people and building high performing teams can be
          hard. Most companies aren't tapping into the abundance of global
          talent. We're about to change that."
      />
      <BuildProp />
      <Testimonials />
      <Cta />
    </main>
  );
}
