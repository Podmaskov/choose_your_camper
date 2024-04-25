import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { getAdvertById } from "src/store/adverts/selectors";
import { getModalStatus } from "src/store/modal/selectors";
import { closeModal } from "src/store/modal/modalSlice";
import { rootStyle } from "src/styles/global";
import { Modal } from "src/components/shared";
import Cross from "src/assets/Cross.svg?react";
import {
  ModalFeatures,
  ModalReviewList,
  ModalReviewCard,
  ModalForm,
  ModalToggler,
  MODAL_TOGGLER_STATE,
} from "src/components/ModalDetails";
import {
  Rating,
  IconButtonStyled,
  Located,
  ImageStyled,
  BigTextStyled,
  DescriptionTextStyled,
} from "src/components/shared";

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
          <BigTextStyled>{advert?.name}</BigTextStyled>
          <IconButtonStyled
            type="button"
            onClick={() => dispatch(closeModal())}
          >
            <Cross />
          </IconButtonStyled>
        </TitleWrapStyled>
        <RatingLocatedWrapStyled>
          <Rating rating={advert?.rating} reviews={advert?.reviews.length} />
          <Located text={advert?.location} />
        </RatingLocatedWrapStyled>
        <BigTextStyled>{`€${advert?.price}`}</BigTextStyled>
        <ScrollWrapStyled>
          <ImageWrapStyled>
            {advert?.gallery.map((imageSrc, index) => (
              <ImageStyled key={index} src={imageSrc} alt="car"></ImageStyled>
            ))}
          </ImageWrapStyled>
          <DescriptionTextStyled>{advert?.description}</DescriptionTextStyled>
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

const ModalWrapStyled = styled.div({
  position: "relative",
  width: 980,
  padding: "40px 16px 40px 40px",
  borderRadius: 20,
  backgroundColor: rootStyle.color.white,
});

const ScrollWrapStyled = styled.div({
  overflowY: "auto",
  paddingRight: 20,
  marginTop: 24,
  height: 540,

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
