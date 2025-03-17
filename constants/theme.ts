const TYPOGRAPHY = {
  FONT_FAMILY: {
    DISPLAY: {
      ULTRALIGHT: "SFProDisplay-Ultralight",
      THIN: "SFProDisplay-Thin",
      LIGHT: "SFProDisplay-Light",
      REGULAR: "SFProDisplay-Regular",
      MEDIUM: "SFProDisplay-Medium",
      SEMIBOLD: "SFProDisplay-Semibold",
      BOLD: "SFProDisplay-Bold",
      HEAVY: "SFProDisplay-Heavy",
      BLACK: "SFProDisplay-Black",
    },
    ROUNDED: {
      ULTRALIGHT: "SFProRounded-Ultralight",
      THIN: "SFProRounded-Thin",
      LIGHT: "SFProRounded-Light",
      REGULAR: "SFProRounded-Regular",
      MEDIUM: "SFProRounded-Medium",
      SEMIBOLD: "SFProRounded-Semibold",
      BOLD: "SFProRounded-Bold",
      HEAVY: "SFProRounded-Heavy",
      BLACK: "SFProRounded-Black",
    },
    TEXT: {
      ULTRALIGHT: "SFProText-Ultralight",
      THIN: "SFProText-Thin",
      LIGHT: "SFProText-Light",
      REGULAR: "SFProText-Regular",
      MEDIUM: "SFProText-Medium",
      SEMIBOLD: "SFProText-Semibold",
      BOLD: "SFProText-Bold",
      HEAVY: "SFProText-Heavy",
      BLACK: "SFProText-Black",
    },
  },
  FONT_SIZE: {
    SMALL: 12,
    MEDIUM: 16,
    LARGE: 20,
    XLARGE: 24,

    h2: 20,
    h3: 18,

    h5: 14,

    body1: 16,
    body2: 14,
    body3: 12,
    body4: 10,
    body5: 8,
    body6: 6,
  },
} as const;

export const THEME = {
  ...TYPOGRAPHY,
};
