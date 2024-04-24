import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { getAdvertById } from "src/store/adverts/selectors";
import { getModalStatus } from "src/store/modal/selectors";
import { closeModal } from "src/store/modal/modalSlice";
import { rootStyle } from "src/styles/global";
import { Modal } from "src/components/shared";
import {
  ModalToggler,
  MODAL_TOGGLER_STATE,
} from "src/components/ModalDetails/ModalToggler";
import { ModalFeatures } from "src/components/ModalDetails/ModalFeatures";
import { ModalReviewList } from "src/components/ModalDetails/ModalReviewList";
import { ModalReviewCard } from "src/components/ModalDetails/ModalReviewCard";
import { ModalForm } from "src/components/ModalDetails/ModalForm";
import Cross from "src/assets/Cross.svg?react";
import {
  Rating,
  IconButton,
  Located,
  Image,
  BigText,
  DescriptionText,
} from "src/components/shared";

const ModalWrapStyled = styled.div({
  position: "relative",
  width: 982,
  height: 675,
  padding: "40px 16px 40px 40px",
  borderRadius: 20,
  backgroundColor: rootStyle.color.white,
});

const ScrollWrapStyled = styled.div({
  overflowY: "auto",
  paddingRight: 20,
  marginTop: 24,
  height: 460,

  "::-webkit-scrollbar": {
    width: 8,
  },
  "::-webkit-scrollbar-track": {
    borderRadius: 7,
    backgroundColor: "#fff",
  },
  "::-webkit-scrollbar-thumb": {
    borderRadius: 7,
    backgroundColor: "#D9D9D9",
    height: 264,
  },
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

const AdditionInfoWrapStyled = styled.div({
  display: "flex",
  gap: 24,
  justifyContent: "center",
  paddingTop: 44,
});

export const ModalDetails = () => {
  const dispatch = useDispatch();
  const advert = useSelector(getAdvertById);
  const isModalOpen = useSelector(getModalStatus);

  const [detailsState, setDetailsState] = useState(
    MODAL_TOGGLER_STATE.features
  );
  return (
    <Modal isModalOpen={isModalOpen} closeModal={() => dispatch(closeModal())}>
      <ModalWrapStyled>
        <TitleWrapStyled>
          <BigText>{advert?.name}</BigText>
          <IconButton type="button" onClick={() => dispatch(closeModal())}>
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
          <ModalToggler onClick={setDetailsState} activeState={detailsState} />
          <AdditionInfoWrapStyled>
            {detailsState === MODAL_TOGGLER_STATE.reviews && (
              <ModalReviewList>
                {advert?.reviews.map(
                  ({ reviewer_name, reviewer_rating, comment }, index) => (
                    <ModalReviewCard
                      key={index}
                      name={reviewer_name}
                      rating={reviewer_rating}
                      description={comment}
                    />
                  )
                )}
              </ModalReviewList>
            )}
            {detailsState === MODAL_TOGGLER_STATE.features && (
              <ModalFeatures advert={advert} />
            )}
            <ModalForm />
          </AdditionInfoWrapStyled>
        </ScrollWrapStyled>
      </ModalWrapStyled>
    </Modal>
  );
};
