import styled from "@emotion/styled";

const ContainerWrap = styled.div({
  display: "flex",
  justifyContent: "center",
});

const ContainerStyle = styled.div({
  width: 1440,
  padding: "100px 64px 0 64px",
});

export const Container = ({ children }) => {
  return (
    <ContainerWrap>
      <ContainerStyle>{children}</ContainerStyle>
    </ContainerWrap>
  );
};
