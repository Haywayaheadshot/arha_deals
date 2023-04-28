import React, { useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import RootState from "../../redux/phoneHacks/PhoneHacks";

const PhoneHacks = () => {
  const hacks = useSelector((state: typeof RootState) => state.hacks.hacks);

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption.value);
  };

  const filteredHacks = hacks.filter((hack) => {
    if (selectedOption === "") {
      return true;
    } else {
      return hack.os === selectedOption;
    }
  });

  const options = [
    { value: "", label: "All" },
    { value: "android", label: "Android" },
    { value: "iphone", label: "iPhone" },
  ];

  const animatedComponents = makeAnimated();

  const capitalize = (str) => {
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
      <section className="flex flex-col gap-6">
        {filteredHacks.map((hack: typeof hacks) => (
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
              src="https://www.youtube.com/embed/VIDEO_ID_HERE"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <section>{hack.advantages}</section>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PhoneHacks;
