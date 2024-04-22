import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { getAdvertById } from "src/store/adverts/selectors";
import { rootStyle } from "src/styles/global";
import { Modal } from "src/components/shared";
import Cross from "src/assets/Cross.svg?react";
import {
  Rating,
  IconButton,
  Located,
  Image,
  CarOptionList,
  BigText,
  DescriptionText,
} from "src/components/shared";

const ModalWrapStyled = styled.div({
  position: "relative",
  width: 982,
  height: 720,
  padding: "40px 16px 40px 40px",
  borderRadius: 20,
  backgroundColor: rootStyle.color.white,
});

const ScrollWrapStyled = styled.div({
  overflowY: "auto",
  paddingRight: 20,
  marginTop: 24,
  height: 460,
});

const TitleWrapStyled = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 8,
});

const RatingLocatedWrapStyled = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 16,
  marginBottom: 16,
});

const ImageWrapStyled = styled.div({
  display: "flex",
  gap: 16,
  marginBottom: 24,
});

export const ModalDetails = ({ carId, isModalOpen, closeModal }) => {
  const advert = useSelector(getAdvertById(carId));
  console.log("advert", advert);
  return (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
      <ModalWrapStyled>
        <TitleWrapStyled>
          <BigText>{advert?.name}</BigText>
          <IconButton type="button" onClick={closeModal}>
            <Cross />
          </IconButton>
        </TitleWrapStyled>
        <RatingLocatedWrapStyled>
          <Rating rating={advert?.rating} reviews={advert?.reviews.length} />
          <Located text={advert?.location} />
        </RatingLocatedWrapStyled>
        <BigText>{`€${advert?.price}`}</BigText>
        <ScrollWrapStyled>
          <ImageWrapStyled>
            {advert?.gallery.map((imageSrc, index) => (
              <Image key={index} src={imageSrc} alt="car"></Image>
            ))}
          </ImageWrapStyled>
          <DescriptionText>{advert?.description}</DescriptionText>
        </ScrollWrapStyled>
      </ModalWrapStyled>
    </Modal>
  );
};
