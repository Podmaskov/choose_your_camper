import { useForm, Controller } from "react-hook-form";
import styled from "@emotion/styled";
import { rootStyle } from "src/styles/global";

import {
  Input,
  DescriptionText,
  Textarea,
  Button,
  DatePicker,
} from "src/components/shared";

const ModalFormStyled = styled.form({
  padding: 24,
  borderRadius: 10,
  border: `1px solid ${rootStyle.color.black_20}`,
  flexShrink: 0,
});

const TitleStyled = styled.h2({
  fontSize: 20,
  fontWeight: 600,
  lineHeight: 1.2,
});

const InputListStyled = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 14,
  margin: "24px 0",
});

export const ModalForm = () => {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = () => {
    window.location.reload();
  };

  return (
    <ModalFormStyled onSubmit={handleSubmit(onSubmit)}>
      <TitleStyled>Book your campervan now</TitleStyled>
      <DescriptionText>
        Stay connected! We are always ready to help you.
      </DescriptionText>
      <InputListStyled>
        <Input
          {...register("name", { required: true })}
          type="text"
          name="name"
          placeholder="Name"
        />
        <Input
          {...register("email", { required: true })}
          name="email"
          type="email"
          placeholder="Email"
        />

        <Controller
          control={control}
          name="date"
          render={({ field: { onChange, onBlur, value } }) => (
            <DatePicker onChange={onChange} onBlur={onBlur} selected={value} />
          )}
          rules={{
            required: true,
          }}
        />

        <Textarea
          {...register("comment")}
          name="comment"
          placeholder="Comment"
        />
      </InputListStyled>
      <Button type="submit">Send</Button>
    </ModalFormStyled>
  );
};
