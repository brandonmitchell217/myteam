import ContactLanding from "@/app/contact/_components/ContactLanding";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "MyTeam Multipage - Contact",
  description: "Design by Frontend Mentor",
};

export default function ContactPage() {
  return (
    <main>
      <ContactLanding />
    </main>
  );
}
