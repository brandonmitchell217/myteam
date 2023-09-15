import Landing from "@/components/Landing";
import Staff from "@/components/Staff";
import React from "react";

export default function AboutPage() {
  return (
    <main>
      <Landing
        title="About"
        description="We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We'll bring those teams to you."
      />
      <Staff />
    </main>
  );
}
