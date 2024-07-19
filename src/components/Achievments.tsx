import React, { Suspense } from "react";
import AnimatedNumbers from "react-animated-numbers";

interface AnimatedNumbersContainerProps {
  children: React.ReactNode;
  configs: (configIndex: number) => {
    mass: number;
    friction: number;
    tensions: number;
  };
}

const AnimatedNumbersContainer: React.FC<AnimatedNumbersContainerProps> = ({
  children,
  configs,
}) => <div>{children}</div>;

const achievementsList = [
  {
    metric: "Courses",
    value: "30",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Clients",
    value: "100",
  },
  {
    metric: "Testimonial",
    value: "99",
    postfix: "%",
  },
  {
    metric: "Years",
    value: "2",
  },
];

const Achievements = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <Suspense fallback={<div>Loading...</div>}>
                  <AnimatedNumbersContainer
                    configs={(configIndex: number) => ({
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (configIndex + 1),
                    })}
                  >
                    <AnimatedNumbers
                      includeComma
                      animateToNumber={parseInt(achievement.value, 10)}
                      locale="en-US"
                      className="text-white text-4xl font-bold"
                    />
                  </AnimatedNumbersContainer>
                </Suspense>
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
