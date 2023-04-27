import React, { useState } from "react";
import Select, { ActionMeta } from "react-select";
import makeAnimated from "react-select/animated";

const PhoneHacks = () => {
  const options = [
    { value: null, label: "All" },
    { value: "android", label: "Android" },
    { value: "iphone", label: "iPhone" },
  ];

  const animatedComponents = makeAnimated();

  const [validSelect, setValidSelect] = useState(false);

  const handleSelectChange = (
    newValue: ValueType<OptionType, true>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    actionMeta: ActionMeta<OptionType>
  ) => {
    if (newValue && (Array.isArray(newValue) ? newValue.length > 0 : true)) {
      setValidSelect(true);
    } else {
      setValidSelect(false);
    }
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
          className={validSelect ? "valid:border-green-500" : ""}
          onChange={handleSelectChange}
        />
      </section>
      <section className="flex flex-col gap-6">
        <div className="border-2 rounded-lg flex flex-col px-5 py-3 justify-center items-center">
          <ul className="flex flex-row justify-between gap-10">
            <li>
              <h1>Hack Title</h1>
            </li>
            <li>
              <h2>For iphone / android</h2>
            </li>
          </ul>
          <p>Hack Description</p>
          <section>Video on how to perform hack</section>
          <section>Pros of the hack</section>
        </div>
        <div className="border-2 rounded-lg flex flex-col px-5 py-3 justify-center items-center">
          <ul className="flex flex-row justify-between gap-10">
            <li>
              <h1>Hack Title</h1>
            </li>
            <li>
              <h2>For iphone / android</h2>
            </li>
          </ul>
          <p>Hack Description</p>
          <section>Video on how to perform hack</section>
          <section>Pros of the hack</section>
        </div>
        <div className="border-2 rounded-lg flex flex-col px-5 py-3 justify-center items-center">
          <ul className="flex flex-row justify-between gap-10">
            <li>
              <h1>Hack Title</h1>
            </li>
            <li>
              <h2>For iphone / android</h2>
            </li>
          </ul>
          <p>Hack Description</p>
          <section>Video on how to perform hack</section>
          <section>Pros of the hack</section>
        </div>
        <div className="border-2 rounded-lg flex flex-col px-5 py-3 justify-center items-center">
          <ul className="flex flex-row justify-between gap-10">
            <li>
              <h1>Hack Title</h1>
            </li>
            <li>
              <h2>For iphone / android</h2>
            </li>
          </ul>
          <p>Hack Description</p>
          <section>Video on how to perform hack</section>
          <section>Pros of the hack</section>
        </div>
        <div className="border-2 rounded-lg flex flex-col px-5 py-3 justify-center items-center">
          <ul className="flex flex-row justify-between gap-10">
            <li>
              <h1>Hack Title</h1>
            </li>
            <li>
              <h2>For iphone / android</h2>
            </li>
          </ul>
          <p>Hack Description</p>
          <section>Video on how to perform hack</section>
          <section>Pros of the hack</section>
        </div>
      </section>
    </div>
  );
};

export default PhoneHacks;
