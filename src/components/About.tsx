import { forwardRef, ReactNode, useState, useTransition } from "react";
import TabButton from "./TabButton";

interface TabData {
  title: string;
  id: string;
  content: ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Microsoft Office</li>
        <li>Machine/Deep Learning</li>
        <li>Python. Video Editing</li>
      </ul>
    ),
  },
  {
    title: "Philosphy",
    id: "philosophy",
    content: <p>We Distribute High Value Digital Products</p>,
  },
  {
    title: "Vision",
    id: "vison",
    content: (
      <ul>
        <li>
          Recommend high-value digital products from leading experts and earn
          money doing so. You may make money by recommending high-value digital
          products on Expertnaire to your subscribers and followers
        </li>
        <li>
          All you have to do is use the unique link for each product that our
          system offers
        </li>
        <li>
          Our advanced tracking system ensures that you are rewarded for any
          sales you refer
        </li>
      </ul>
    ),
  },
  {
    title: "Strategy",
    id: "strategy",
    content: (
      <p>
        Creating of a coding club in the schools environment to promote interest
        in the Computer culture. Teaching of three major skills: Intensive
        keyboarding, MS-Office, javaScript Programming and prize winning gift at
        the end of the year ceremony to motivate passion and efforts.{" "}
      </p>
    ),
  },
];

const About = forwardRef<HTMLDivElement>((_, ref) => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div ref={ref} className="p-5 md:px-24 md:py-16">
      <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <img src="/assets/about-image.png" />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              I have a strong enthusiasm for Machine Learning Programming and
              Digital Product Marketing, and I have a skill for turning
              complicated data into useful insights and creative fixes. Using my
              solid background in data analysis, algorithm development, and
              predictive modelling, I build intelligent solutions that propel
              companies forward. My proficiency in digital marketing enables me
              to plan and market things efficiently, making sure the proper
              people see them.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("philosophy")}
                active={tab === "philosophy"}
              >
                {" "}
                Philosophy{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("vison")}
                active={tab === "vison"}
              >
                {" "}
                Vison{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("strategy")}
                active={tab === "strategy"}
              >
                {" "}
                Strategy{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default About;
