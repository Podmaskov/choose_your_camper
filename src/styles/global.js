export const rootStyle = {
  color: {
    black: "#101828",
    black_60: "rgba(16, 24, 40, 0.6)",
    black_20: "rgba(16, 24, 40, 0.2)",
    black_10: "rgba(16, 24, 40, 0.1)",
    overlay: "rgba(17, 18, 19, 0.4)",
    white: "#FFFFFF",
    grey: "#475467",
    grey_20: "rgba(71, 84, 103, 0.20)",
    red: "#E44848",
    redHover: "#D84343",
    yellow: "#FFC531",
    lightGrey: "#F2F4F7",
    ultraLightGrey: "#F7F7F7",
  },
  transition: {
    general: (prop = "all") => `${prop} 0.5s linear`,
  },
};
