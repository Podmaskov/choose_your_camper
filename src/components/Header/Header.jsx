import styled from "@emotion/styled";
import { rootStyle } from "src/styles/global";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderStyled>
      <NavigationStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
        <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
      </NavigationStyled>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header({
  padding: "20px 30px",
  boxShadow: "0px 8px 13px -6px rgba(0, 0, 0, 0.75)",
});

const NavigationStyled = styled.nav({
  display: "flex",
  justifyContent: "center",
  gap: 96,
});

const NavLinkStyled = styled(NavLink)({
  display: "block",
  textDecoration: "none",
  color: rootStyle.color.black,

  "&.active": {
    color: rootStyle.color.red,
  },
});
