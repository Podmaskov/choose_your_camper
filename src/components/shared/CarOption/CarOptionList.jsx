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
import Gearbox from "src/assets/Gearbox.svg?react";
import Users from "src/assets/Users.svg?react";
import Water from "src/assets/Water.svg?react";
import Petrol from "src/assets/Petrol.svg?react";
import Microwave from "src/assets/Microwave.svg?react";

const OPTION_LABEL_MAP = {
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
  transmission: "Automatic",
  adults: "Adult",
  engine: "Petrol",
};

const ICON_MAP = {
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
  transmission: Gearbox,
  adults: Users,
  engine: Petrol,
};

export const CarOptionList = ({ carOptions, wrapHeight = 100 }) => {
  const peeperCarOption = Object.keys(carOptions).reduce((acc, key) => {
    if (carOptions[key] > 0 && typeof carOptions[key] === "number") {
      acc.push({
        icon: ICON_MAP[key],
        label: `${carOptions[key] > 1 ? carOptions[key] : ""} ${
          carOptions[key] > 1
            ? OPTION_LABEL_MAP[key] + "s"
            : OPTION_LABEL_MAP[key]
        }`,
      });
    }

    if (typeof carOptions[key] === "string" && carOptions[key]) {
      const isItPetrolCar = key === "engine" && carOptions[key] === "petrol";
      const isItAutomatic =
        key === "transmission" && carOptions[key] === "automatic";
      if (isItPetrolCar) {
        acc.push({ icon: ICON_MAP[key], label: OPTION_LABEL_MAP[key] });
      }
      if (isItAutomatic) {
        acc.push({ icon: ICON_MAP[key], label: OPTION_LABEL_MAP[key] });
      }
      if (key !== "engine" && key !== "transmission") {
        acc.push({ icon: ICON_MAP[key], label: OPTION_LABEL_MAP[key] });
      }
    }
    return acc;
  }, []);

  return (
    <CarOptionListScrollWrapStyled>
      <CarOptionListStyled wrapHeight={wrapHeight}>
        {peeperCarOption.map((option, index) => {
          return <CarOption key={index} option={option} />;
        })}
      </CarOptionListStyled>
    </CarOptionListScrollWrapStyled>
  );
};

const CarOptionListScrollWrapStyled = styled.div({
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

const CarOptionListStyled = styled.ul(({ wrapHeight }) => ({
  maxHeight: wrapHeight,
  overflowY: "auto",
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  marginBottom: 18,
  "::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
  msOverflowStyle: "none",

  ":hover": {
    cursor: "pointer",
  },
}));
