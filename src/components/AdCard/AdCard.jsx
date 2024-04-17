import { styles } from "./styles";
import {
  Rating,
  Button,
  Located,
  CarOptionList,
  BigText,
} from "src/components/shared";
import Heart from "src/assets/Heart.svg?react";

const details = {
  airConditioner: 1,
  bathroom: 1,
  kitchen: 1,
  beds: 6,
  TV: 1,
  CD: 1,
  radio: 1,
  shower: 1,
  toilet: 1,
  freezer: 1,
  hob: 3,
  microwave: 1,
  gas: "48kg",
  water: "196l",
};

export const AdCard = () => {
  return (
    <div style={{ width: 890 }}>
      <div css={styles.wrapper}>
        <img
          css={styles.image}
          src="https://ftp.goit.study/img/campers-test-task/1-1.webp"
          alt="#"
        />
        <div>
          <div css={styles.nameAndPriceWrap}>
            <BigText>Mavericks</BigText>
            <div css={styles.priceWrap}>
              <BigText>€8000</BigText>
              <Heart />
            </div>
          </div>
          <div css={styles.ratingAndLocationWrap}>
            <Rating rating={4.5} reviews={2} />
            <Located text="Amsterdam, Netherland" />
          </div>
          <p css={styles.descriptionText}>
            Embrace simplicity and freedom with the Mavericks panel truck, an
            ideal choice for solo travelers or couples seeking a compact and
            efficient way to explore the open roads.
          </p>
          <CarOptionList carOptions={details} />
          <Button>Show more</Button>
        </div>
      </div>
    </div>
  );
};
