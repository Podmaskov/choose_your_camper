import styled from "@emotion/styled";
import { rootStyle } from "src/styles/global";
import { Input, FilterBtn, Button } from "src/components/shared";
import { useForm } from "react-hook-form";
import MapPin from "src/assets/MapPin.svg?react";
import AC from "src/assets/Wind.svg?react";
import TV from "src/assets/TV.svg?react";
import Kitchen from "src/assets/Kitchen.svg?react";
import Gearbox from "src/assets/Gearbox.svg?react";
import Shower from "src/assets/Shower.svg?react";
import Van from "src/assets/Car_2.svg?react";
import FullyIntegrated from "src/assets/Car.svg?react";
import Alcove from "src/assets/Car_3.svg?react";

const FormStyled = styled.form({
  width: 360,
});

const SmallText = styled.p({
  color: rootStyle.color.grey,
  lineHeight: 1.5,
  marginTop: 32,
  marginBottom: 14,
});

const Title = styled.h2({
  fontSize: 20,
  fontWeight: 600,
  lineHeight: 1.2,
  paddingBottom: 24,
  marginBottom: 24,
  borderBottom: `1px solid ${rootStyle.color.black_10}`,
});

const FilterBtnWrap = styled.div(({ extraMargin }) => ({
  display: "flex",
  columnGap: 10,
  rowGap: 8,
  flexWrap: "wrap",
  marginBottom: extraMargin ? 64 : 32,
}));

export const FilterForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      location: "",
      form: "",
      details: [],
    },
  });

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("location")}
        placeholder="Location"
        label="Location"
        type="text"
        leftIcon
        icon={MapPin}
      />
      <SmallText>Filters</SmallText>
      <Title>Vehicle equipment</Title>
      <FilterBtnWrap>
        <FilterBtn
          {...register("details")}
          label="AC"
          value="airConditioner"
          icon={AC}
          type="checkbox"
          name="details"
        />
        <FilterBtn
          {...register("details")}
          label="Automatic"
          value="transmission"
          icon={Gearbox}
          type="checkbox"
          name="equipment"
        />
        <FilterBtn
          {...register("details")}
          label="Kitchen"
          value="kitchen"
          icon={Kitchen}
          type="checkbox"
          name="details"
        />
        <FilterBtn
          {...register("details")}
          label="TV"
          value="TV"
          icon={TV}
          type="checkbox"
          name="details"
        />
        <FilterBtn
          {...register("details")}
          label="Shower/WC"
          icon={Shower}
          value="shower"
          type="checkbox"
          name="details"
        />
      </FilterBtnWrap>
      <Title>Vehicle type</Title>
      <FilterBtnWrap extraMargin>
        <FilterBtn
          {...register("form")}
          label="Van"
          icon={Van}
          type="radio"
          value="panelTruck"
          name="form"
        />
        <FilterBtn
          {...register("form")}
          label="Fully integrated"
          icon={FullyIntegrated}
          type="radio"
          value="fullyIntegrated"
          name="form"
        />
        <FilterBtn
          {...register("form")}
          label="Alcove"
          icon={Alcove}
          type="radio"
          value="alcove"
          name="form"
        />
      </FilterBtnWrap>
      <Button type="submit">Search</Button>
    </FormStyled>
  );
};
