import Landing from "@/components/Landing";
import { CtaProps, StaffProps } from "@/lib/types";
import StaffCard from "@/components/StaffCard";
import React from "react";
import Staff from "@/components/Staff";
import Clients from "@/components/Clients";
import Cta from "@/components/Cta";

// TODO: FIX THIS STATE FOR CARD ROTATING

export default function AboutPage() {
  const staff: StaffProps[] = [
    {
      name: "Nikita Marks",
      position: "Founder & CEO",
      image: "/avatar-nikita.jpg",
      quote:
        "It always amazes me how much talent there is in every corner of the globe.",
    },
    {
      name: "Cristian Duncan",
      position: "Co-founder & COO",
      image: "/avatar-christian.jpg",
      quote:
        "Distributed teams required unique processes. You need to approach work in a new way.",
    },
    {
      name: "Cruz Hamer",
      position: "Co-founder & CTO",
      image: "/avatar-cruz.jpg",
      quote:
        "Technology is at the forefront of enabling distributed teams. That's where we come in.",
    },
    {
      name: "Drake Heaton",
      position: "Business Development Lead",
      image: "/avatar-drake.jpg",
      quote:
        "Hiring similar people from similar backgrounds is a surefire way to stunt innovation.",
    },
    {
      name: "Griffin Wise",
      position: "Lead Marketing",
      image: "/avatar-griffin.jpg",
      quote:
        "Unique perspectives shape unique products, which is what you need to survive these days.",
    },
    {
      name: "Aden Allan",
      position: "Head of Talent",
      image: "/avatar-aden.jpg",
      quote:
        "Empowered teams create truly amazing products. Set the north star and let them follow it.",
    },
  ];

  const clients: { label: string; image: string }[] = [
    {
      label: "The Verge",
      image: "/logo-the-verge.png",
    },
    {
      label: "The Jakarta Post",
      image: "/logo-jakarta-post.png",
    },
    {
      label: "The Guardian",
      image: "/logo-the-guardian.png",
    },
    {
      label: "Tech Radar",
      image: "/logo-tech-radar.png",
    },
    {
      label: "Gadgets Now",
      image: "/logo-gadgets-now.png",
    },
  ];

  const CtaData: {
    text: CtaProps["text"];
    cta: { text: CtaProps["button_text"]; link: CtaProps["button_link"] };
  } = {
    text: "Ready to get started?",
    cta: { text: "Contact Us", link: "/contact" },
  };
  return (
    <main>
      <Landing
        title="About"
        description="We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We'll bring those teams to you."
      />
      <Staff staff={staff} />
      <Clients clients={clients} />
      <Cta
        text={CtaData.text}
        button_text={CtaData.cta.text}
        button_link={CtaData.cta.link}
      />
    </main>
  );
}
