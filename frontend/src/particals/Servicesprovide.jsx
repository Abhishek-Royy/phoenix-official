import { GrDeploy } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { TbSeo } from "react-icons/tb";
import { DiAndroid } from "react-icons/di";

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: <GrDeploy />,
  },
  {
    name: "Web & App Services",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: <DiAndroid />,
  },
  {
    name: "SEO Mangement",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: <TbSeo />,
  },
  {
    name: "UI/UI Designing",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: <CgWebsite />,
  },
];

export default function Servicesweprovide() {
  return (
    <div className="dark:bg-[#111C29] bg-[#fff] py-8 sm:py-16">
      <div className="mx-auto max-w-full px-2 lg:px-32">
        <div className="mx-auto max-w-full lg:text-center">
          <h2 className="text-3xl font-semibold leading-7 text-black dark:text-white">
            Deploy faster
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-[#C6AE32] sm:text-5xl lg:text-balance">
            We Provide everythings that you need
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-800 dark:text-gray-300">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-full">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-full lg:grid-cols-4 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-xl font-semibold leading-7 dark:text-gray-100">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#C6AE32]">
                    {feature.icon}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 dark:text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
