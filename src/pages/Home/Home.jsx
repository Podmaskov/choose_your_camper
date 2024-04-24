import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { rootStyle } from "src/styles/global";
import videoLing from "src/assets/caravan.mp4";
import { Button } from "src/components/shared";

const VideoStyled = styled.video({
  position: "absolute",
  zIndex: -1,
  top: 60,
  left: 0,
  width: "100%",
  height: "calc(100% - 60px)",
  objectFit: "cover",
  filter: "blur(5px)",
});

const SloganTextStyled = styled.h1({
  background: `linear-gradient(45deg, ${rootStyle.color.white}, ${rootStyle.color.yellow})`,
  backgroundClip: "text",
  textFillColor: "transparent",
  color: "white",
  fontSize: 48,
  fontWeight: 600,
  textAlign: "center",
});

const SloganButtonWrapStyled = styled.div({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const CTABtnStyled = styled(Button)({
  width: "fit-content",
  margin: "auto",
});

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <VideoStyled autoPlay muted loop id="caravan">
        <source src={videoLing} type="video/mp4" />
      </VideoStyled>
      <SloganButtonWrapStyled>
        <SloganTextStyled>
          Rent a caravan and embark on an unforgettable journey!
        </SloganTextStyled>
        <CTABtnStyled type="button" onClick={() => navigate("/catalog")}>
          Go to journey
        </CTABtnStyled>
      </SloganButtonWrapStyled>
    </>
  );
};

export default Home;
