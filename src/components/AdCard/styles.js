import { css } from "@emotion/react";
import { rootStyle } from "src/styles/global";

export const styles = {
  wrapper: css({
    display: "flex",
    justifyContent: "space-between",
    gap: 24,
    padding: 24,
    borderRadius: 20,
    border: `1px solid ${rootStyle.color.black_20}`,
  }),

  nameAndPriceWrap: css({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 8,
  }),

  priceWrap: css({
    display: "flex",
    alignItems: "center",
    gap: 12,
  }),

  ratingAndLocationWrap: css({
    display: "flex",
    gap: 16,
    marginBottom: 24,
  }),
};
