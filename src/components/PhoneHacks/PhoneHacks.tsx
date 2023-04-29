import React, { useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { PhoneHacksState } from "../../redux/phoneHacks/types";
import LoadingAnimation from "../Shared/LoadingAnimation";

interface Hack {
  id: string;
  title: string;
  os: string;
  description: string | JSX.Element;
  video_url: string;
  advantages: string | JSX.Element;
}

const PhoneHacks = () => {
  const hacks = useSelector((state: PhoneHacksState) => state.hacks);

  console.log(typeof hacks);

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (selectedOption: any) => {
    setSelectedOption(selectedOption.value);
  };

  const options = [
    { value: "", label: "All" },
    { value: "android", label: "Android" },
    { value: "iphone", label: "iPhone" },
  ];

  // const filteredHacks = hacks.filter((hack) => {
  //   if (selectedOption === "") {
  //     return true;
  //   } else {
  //     return hack.os === selectedOption;
  //   }
  // });

  const animatedComponents = makeAnimated();

  const capitalize = (str: string) => {
    return str.toUpperCase();
  };

  return (
    <div className="py-10 px-4 flex flex-col gap-4">
      <section className="pt-5 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl">Hacks You Will Like!</h1>
        <p className="text-xl py-3">
          Here are some simple hacks you can perform to help you secure and
          utilize your smart phone.
        </p>
      </section>
      <section>
        <h3>Choose your device</h3>
        <Select
          options={options}
          components={animatedComponents}
          defaultValue={[options[0]]}
          onChange={handleSelectChange}
        />
      </section>
      {Array.isArray(hacks) ? (
        <section className="flex flex-col gap-6">
          {hacks.map((hack: Hack) => (
            <div
              key={hack.id}
              className="border-2 rounded-lg flex flex-col px-5 py-3 justify-center items-center"
            >
              <ul className="flex flex-row justify-between gap-10">
                <li>
                  <h1>{hack.title}</h1>
                </li>
                <li>
                  <h2>{capitalize(hack.os)}</h2>
                </li>
              </ul>
              <p>{hack.description}</p>
              <iframe
                width="300"
                height="300"
                src={hack.video_url}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <section>{hack.advantages}</section>
            </div>
          ))}
        </section>
      ) : (
        <LoadingAnimation />
      )}
    </div>
  );
};

export default PhoneHacks;
