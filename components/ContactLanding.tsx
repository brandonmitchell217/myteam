import React from "react";
import PersonIcon from "../public/icon-person.svg";
import CogIcon from "../public/icon-cog.svg";
import ChartIcon from "../public/icon-chart.svg";

export default function ContactLanding() {
  const props = [
    {
      icon: <PersonIcon width={72} height={72} />,
      title: "The quality of our talent network",
    },
    {
      icon: <CogIcon width={72} height={72} />,
      title: "Usage & implementation of our software",
    },
    {
      icon: <ChartIcon width={72} height={72} />,
      title: "How we help drive innovation",
    },
  ];
  const inputStyles =
    "w-full bg-transparent font-semibold text-[18px] border-b border-white pb-[16px] pl-[14px]";

  return (
    <section className="relative bg-sherpa pt-8 pb-32 md:py-32">
      <div className="max-w-6xl m-auto relative z-10 px-4 sm:px-8 md:px-4 lg:px-0">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="font-bold text-[64px]">Contact</h1>
            <h2 className="font-bold text-[32px] text-flory">Ask us about</h2>

            <ul className="space-y-2">
              {props.map((prop, index) => (
                <li key={index} className="flex items-center gap-5">
                  <div>{prop.icon}</div>
                  <div>
                    <p className="text-[18px] font-semibold">{prop.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full md:w-auto">
            <form className="flex flex-col gap-6">
              <div>
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  className={inputStyles}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="Email"
                  placeholder="Email Address"
                  className={inputStyles}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="Company_Name"
                  placeholder="Company Name"
                  className={inputStyles}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="Title"
                  placeholder="Title"
                  className={inputStyles}
                />
              </div>
              <div>
                <textarea
                  name="Message"
                  placeholder="Message"
                  className={inputStyles}
                />
              </div>

              <button
                type="submit"
                className="py-2 bg-white text-sherpa font-bold rounded-2xl lowercase w-[125px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
