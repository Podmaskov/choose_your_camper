import styled from "@emotion/styled";
import { rootStyle } from "src/styles/global";
import Users from "src/assets/Users.svg?react";
import Gearbox from "src/assets/Gearbox.svg?react";
import AC from "src/assets/Wind.svg?react";
import Petrol from "src/assets/Petrol.svg?react";
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

const IconMap = {
  users: Users,
  gearbox: Gearbox,
  ac: AC,
  petrol: Petrol,
  kitchen: Kitchen,
  bed: Bed,
  cd: CD,
  radio: Radio,
  hob: Hob,
  toilet: Toilet,
  shower: Shower,
  freezer: Freezer,
  gas: Gas,
  water: Water,
  microwave: Microwave,
};

export const variantMap = {
  users: "users",
  gearbox: "gearbox",
  ac: "ac",
  petrol: "petrol",
  kitchen: "kitchen",
  bed: "bed",
  cd: "cd",
  radio: "radio",
  hob: "hob",
  toilet: "toilet",
  shower: "shower",
  freezer: "freezer",
  gas: "gas",
  water: "water",
  microwave: "microwave",
};

const LabelWrapStyled = styled.div({
  width: "fit-content",
  display: "flex",
  padding: "12px 18px",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 8,
  borderRadius: 100,
  background: rootStyle.color.lightGrey,
});

export const Label = ({ text, variant }) => {
  const Icon = IconMap[variant];
  return (
    <LabelWrapStyled>
      <Icon />
      <p>{text}</p>
    </LabelWrapStyled>
  );
};
