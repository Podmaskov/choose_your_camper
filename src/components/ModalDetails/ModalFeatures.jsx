import styled from "@emotion/styled";
import { rootStyle } from "src/styles/global";

import { CarOptionList } from "src/components/shared";

const VehicleDetailsTitle = styled.h3({
  fontSize: 20,
  fontWeight: 600,
  lineHeight: 1.2,
  paddingBottom: 24,
  marginBottom: 24,
  borderBottom: `1px solid ${rootStyle.color.black_10}`,
});

const VehicleDetailsList = styled.ul({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  listStyle: "none",
  rowGap: 14,
});

const VehicleDetailsListItem = styled.li({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: 18,
  lineHeight: 1.3,
});

const CAR_OPTIONS = [
  "form",
  "length",
  "width",
  "height",
  "tank",
  "consumption",
];
export const ModalFeatures = ({ advert }) => {
  const renderCarOption = (advert) => {
    return CAR_OPTIONS.reduce((acc, option) => {
      if (advert[option]) {
        return [
          ...acc,
          <VehicleDetailsListItem key={option}>
            <span>{option.charAt(0).toUpperCase() + option.slice(1)}</span>
            <span>{advert[option]}</span>
          </VehicleDetailsListItem>,
        ];
      }
      return acc;
    }, []);
  };
  return (
    <div>
      <CarOptionList carOptions={advert.details} wrapHeight={200}>
        ModalFeatures
      </CarOptionList>
      <VehicleDetailsTitle>Vehicle details</VehicleDetailsTitle>
      <VehicleDetailsList>{renderCarOption(advert)}</VehicleDetailsList>
    </div>
  );
};
