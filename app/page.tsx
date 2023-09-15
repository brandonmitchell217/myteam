import BuildProp from "@/components/BuildProp";
import Cta from "@/components/Cta";
import Landing from "@/components/Landing";
import Testimonials from "@/components/Testimonials";
import { CtaProps, TestimonialProps } from "@/lib/types";

export default function Home() {
  const testimonials: TestimonialProps[] = [
    {
      quote:
        "The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.",
      name: "Kady Baker",
      position: "Product Manager at Bookmark",
      avatar: "/avatar-kady.jpg",
    },
    {
      quote:
        "We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!",
      name: "Aiysha Reese",
      position: "Founder of Manage",
      avatar: "/avatar-aiysha.jpg",
    },
    {
      quote:
        "Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.",
      name: "Arthur Clarke",
      position: "Co-founder of MyPhysio",
      avatar: "/avatar-arthur.jpg",
    },
  ];

  const CtaData = {
    text: "Ready to get started?",
    cta: { text: "Contact Us", link: "/contact" },
  };

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
      <Testimonials testimonials={testimonials} />
      <Cta
        text={CtaData.text}
        button_text={CtaData.cta.text}
        button_link={CtaData.cta.link}
      />
    </main>
  );
}
