import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ModalDetails } from "src/components/ModalDetails/ModalDetails";
import { Container } from "src/components/shared";
import { Header } from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
      <ModalDetails />
    </>
  );
};

export default Layout;
