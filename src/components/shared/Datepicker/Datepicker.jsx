/* eslint-disable react/display-name */
import ReactDatePicker from "react-datepicker";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import { rootStyle } from "src/styles/global";
import { Input, IconButtonStyled } from "src/components/shared";
import Calendar from "src/assets/Calendar.svg?react";
import Arrow from "src/assets/Arrow.svg?react";
import "react-datepicker/dist/react-datepicker.css";

export const DatePicker = ({ ...props }) => {
  const renderDatePickerHeader = ({ date, decreaseMonth, increaseMonth }) => {
    return (
      <DatePickerHeaderWrapStyled>
        <IconButtonStyled type="button" onClick={decreaseMonth}>
          <Arrow />
        </IconButtonStyled>
        <DatePickerDateMonthYearWrapStyled>
          {date.toLocaleString("en-GB", {
            month: "long",
            year: "numeric",
          })}
        </DatePickerDateMonthYearWrapStyled>
        <IconButtonStyled type="button" onClick={increaseMonth}>
          <Arrow css={rotateCss} />
        </IconButtonStyled>
      </DatePickerHeaderWrapStyled>
    );
  };

  return (
    <>
      <Global styles={changedDatePickerOwnStyles} />
      <ReactDatePicker
        {...props}
        placeholderText="Booking date"
        renderCustomHeader={renderDatePickerHeader}
        formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
        minDate={new Date()}
        customInput={<Input type="text" wrightIcon icon={Calendar} />}
        onKeyDown={(e) => {
          e.preventDefault();
        }}
        dateFormat="dd/MM/yyyy"
      />
    </>
  );
};

const DatePickerHeaderWrapStyled = styled.div({
  display: "flex",
  width: "100%",
  alignItems: "center",
  backgroundColor: rootStyle.color.white,
});

const DatePickerDateMonthYearWrapStyled = styled.p({
  fontWeight: 600,
  lineHeight: 1.2,
  flexGrow: 1,
});

const changedDatePickerOwnStyles = css({
  ".react-datepicker": {
    fontFamily: "Inter",
    padding: 16,
    borderRadius: 12,
    border: `1px solid ${rootStyle.color.black_20}`,
  },
  ".react-datepicker__header--custom": {
    backgroundColor: rootStyle.color.white,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: 0,
    border: "none",
    marginBottom: 24,
  },

  ".react-datepicker__day-name": {
    color: rootStyle.color.grey,
    marginTop: 0,
    marginBottom: 0,
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 1.2,
  },
});

const rotateCss = css({
  transform: "rotate(180deg)",
});
