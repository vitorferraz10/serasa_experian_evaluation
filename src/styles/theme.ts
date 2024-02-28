import { tokens } from "ds-serasa";

export const theme = {
  colors: {
    text: {
      brand: {
        default: tokens.color.text.brand.default,
      },
      neutral: {
        light_solid: tokens.color.text.neutral.light_solid,
        light_high: tokens.color.text.neutral.light_high,
      },
      dark: {
        dark_low: tokens.color.text.dark.dark_low,
        dark_medium: tokens.color.text.dark.dark_medium,
        dark_high: tokens.color.text.dark.dark_high,
      },
    },
  },
  font: {
    family: {
      body: tokens.font.family.body,
    },
    size: {
      desktop: {
        display: tokens.font.size.desktop.display,
        heading_l: tokens.font.size.desktop.heading_l,
        heading_m: tokens.font.size.desktop.heading_m,
        heanding_s: tokens.font.size.desktop.heading_s,
        heanding_xs: tokens.font.size.desktop.heading_xs,
        subheading: tokens.font.size.desktop.subheading,
        body_m: tokens.font.size.desktop.body_m,
      },
      mobile: {
        display: tokens.font.size.mobile.display,
        heading_l: tokens.font.size.mobile.heading_l,
        heading_m: tokens.font.size.mobile.heading_m,
        heanding_s: tokens.font.size.mobile.heading_s,
        heanding_xs: tokens.font.size.mobile.heading_xs,
      },
    },
    weight: {
      regular: tokens.font.weight.regular,
      medium: tokens.font.weight.medium,
      bold: tokens.font.weight.bold,
    },
    letterSpacing: {
      display: tokens.font.letterSpacing.display,
      heading_l: tokens.font.letterSpacing.heading_l,
      heading_m: tokens.font.letterSpacing.heading_m,
      heading_s: tokens.font.letterSpacing.heanding_s,
    },
    lineHeight: {
      desktop: {
        display: tokens.font.lineHeight.desktop.display,
        heading_l: tokens.font.lineHeight.desktop.heading_l,
        heading_m: tokens.font.lineHeight.desktop.heading_m,
        heading_s: tokens.font.lineHeight.desktop.heading_s,
        heading_xs: tokens.font.lineHeight.desktop.heading_xs,
        subheading: tokens.font.lineHeight.desktop.subheading,
        body_m: "24px",
      },
      mobile: {
        display: tokens.font.lineHeight.mobile.display,
        heading_l: tokens.font.lineHeight.mobile.heading_l,
        heading_m: tokens.font.lineHeight.mobile.heading_m,
        heading_s: tokens.font.lineHeight.mobile.heading_s,
        heading_xs: tokens.font.lineHeight.mobile.heading_xs,
        subheading: tokens.font.lineHeight.mobile.subheading,
        body_m: tokens.font.lineHeight.mobile.body_m,
      },
    },
  },
};
