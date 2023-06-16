import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { RootState } from "../../redux/configureStore";
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
  const hacks = useSelector((state: RootState) => state.hacks.hacks);

  const [selectedOption, setSelectedOption] = useState("");
  const [showFilteredHacks, setShowFilteredHacks] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowFilteredHacks(true);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [selectedOption]);

  const handleSelectChange = (selectedOption: any) => {
    setSelectedOption(selectedOption.value);
  };

  const options = [
    { value: "", label: "All" },
    { value: "android", label: "Android" },
    { value: "iphone", label: "iPhone" },
  ];

  const filteredHacks = hacks.filter((hack: { os: string }) => {
    if (selectedOption === "") {
      return true;
    } else {
      return hack.os === selectedOption;
    }
  });

  const animatedComponents = makeAnimated();

  const capitalize = (str: string) => {
    return str.toUpperCase();
  };

  return (
    <div className="py-10 px-4 tablet:px-20 flex flex-col gap-4">
      <section className="pt-5 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl">Hacks You Will Like!</h1>
        <p className="text-xl py-3">
          Here are some simple hacks you can perform to help you secure and
          utilize your smart phone.
        </p>
      </section>
      <section className="tablet:flex tablet:flex-row tablet:justify-center items-center gap-10">
        <h3>Choose Your Device</h3>
        <Select
          options={options}
          components={animatedComponents}
          defaultValue={[options[0]]}
          onChange={handleSelectChange}
          className="tablet:min-w-[10vw]"
        />
      </section>
      {showFilteredHacks && Array.isArray(filteredHacks) ? (
        <section className="flex flex-col gap-6 desktop:flex-row flex-wrap justify-between px-[3vw]">
          {filteredHacks.map((hack: Hack) => (
            <div
              key={hack.id}
              className="border-2 rounded-lg flex flex-col px-5 py-3 items-center gap-4 desktop:max-w-[40vw]"
            >
              <ul className="flex flex-row justify-between items-center gap-10">
                <li>
                  <h1 className="text-3xl border-b-2">{hack.title}</h1>
                </li>
                <li>
                  <h2 className="bg-yellow-300 text-primary rounded-md py-2 px-1">
                    {capitalize(hack.os)}
                  </h2>
                </li>
              </ul>
              <section>{hack.advantages}</section>
              <ol className="flex flex-col gap-2">{hack.description}</ol>
              <iframe
                title="YouTube video player"
                width="300"
                height="300"
                src={hack.video_url}
                frameBorder="0"
                allowFullScreen
                className="py-3"
              ></iframe>
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
