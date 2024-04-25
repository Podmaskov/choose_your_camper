import styled from "@emotion/styled";

export const Container = ({ children }) => {
  return (
    <ContainerWrapStyled>
      <ContainerStyled>{children}</ContainerStyled>
    </ContainerWrapStyled>
  );
};

const ContainerWrapStyled = styled.div({
  display: "flex",
  justifyContent: "center",
});

const ContainerStyled = styled.div({
  width: 1440,
  padding: "100px 64px 0 64px",
});
