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

  image: css({
    display: "block",
    borderRadius: 10,
    objectFit: "cover",
    width: 290,
    height: 310,
    flexShrink: 0,
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

  descriptionText: css({
    width: 525,
    overflow: "hidden",
    height: 24,
    color: rootStyle.color.grey,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontWeight: 400,
    lineHeight: 1.5,
    marginBottom: 24,
  }),
};
