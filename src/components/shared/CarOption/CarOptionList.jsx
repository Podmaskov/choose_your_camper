import styled from "@emotion/styled";
import { CarOption } from "src/components/shared";
import AC from "src/assets/Wind.svg?react";
import TV from "src/assets/TV.svg?react";
import Kitchen from "src/assets/Kitchen.svg?react";
import Bed from "src/assets/Bed.svg?react";
import CD from "src/assets/CD.svg?react";
import Radio from "src/assets/Radio.svg?react";
import Hob from "src/assets/Hob.svg?react";
import Toilet from "src/assets/Toilet.svg?react";
import Shower from "src/assets/Shower.svg?react";
import Freezer from "src/assets/Freezer.svg?react";
import Gas from "src/assets/Gas.svg?react";
import Water from "src/assets/Water.svg?react";
import Microwave from "src/assets/Microwave.svg?react";

const CarOptionListScrollWrap = styled.div({
  position: "relative",

  ":hover::after": {
    content: '""',
    position: "absolute",
    bottom: -7,
    left: 0,
    right: 0,
    height: "10px",
    background:
      "linear-gradient(to top, rgba(242,244,247,0.3), rgba(242,244,247,0))",
    borderRadius: "0 0 20px 20px",
  },
});

const CarOptionListStyle = styled.ul({
  maxHeight: 100,
  overflowY: "auto",
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  marginBottom: 24,
  "::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
  "-ms-overflow-style": "none",

  ":hover": {
    cursor: "pointer",
  },
});

const OptionLabelMap = {
  airConditioner: "AC",
  bathroom: "Bathroom",
  kitchen: "Kitchen",
  beds: "Bed",
  TV: "TV",
  CD: "CD",
  radio: "Radio",
  shower: "Shower",
  toilet: "Toilet",
  freezer: "Freezer",
  hob: "Hob",
  microwave: "Microwave",
  gas: "Gas",
  water: "Water",
};

const IconMap = {
  airConditioner: AC,
  bathroom: Shower,
  kitchen: Kitchen,
  beds: Bed,
  TV: TV,
  CD: CD,
  radio: Radio,
  shower: Shower,
  toilet: Toilet,
  freezer: Freezer,
  hob: Hob,
  microwave: Microwave,
  gas: Gas,
  water: Water,
};

export const CarOptionList = ({ carOptions }) => {
  const peeperCarOption = Object.keys(carOptions).reduce((acc, key) => {
    if (carOptions[key] > 0 && typeof carOptions[key] === "number") {
      acc.push({
        icon: IconMap[key],
        label: `${carOptions[key] > 1 ? carOptions[key] : ""} ${
          carOptions[key] > 1 ? OptionLabelMap[key] + "s" : OptionLabelMap[key]
        }`,
      });
    }

    if (typeof carOptions[key] === "string" && carOptions[key]) {
      acc.push({ icon: IconMap[key], label: OptionLabelMap[key] });
    }
    return acc;
  }, []);

  return (
    <CarOptionListScrollWrap>
      <CarOptionListStyle>
        {peeperCarOption.map((option, index) => {
          return <CarOption key={index} option={option} />;
        })}
      </CarOptionListStyle>
    </CarOptionListScrollWrap>
  );
};
