import styled, { css } from "styled-components";
import { ColorTypography, SizeTypography } from ".";

export const CustomTypography = styled.span<{
  color?: ColorTypography;
  size?: SizeTypography;
}>`
  ${({ theme, color, size }) =>
    css`
      font-family: ${theme.font.family.body};
      color: ${(color === "dark-low" && theme.colors.text.dark.dark_low) ||
      (color === "dark-medium" && theme.colors.text.dark.dark_medium) ||
      (color === "dark-high" && theme.colors.text.dark.dark_high) ||
      (color === "magenta" && theme.colors.text.brand.default) ||
      (color === "light-solid" && theme.colors.text.neutral.light_solid) ||
      (color === "light-high" && theme.colors.text.neutral.light_high)};

      ${size === "display" &&
      css`
        font-size: ${theme.font.size.desktop.display};
        line-height: ${theme.font.lineHeight.desktop.display};
        font-weight: ${theme.font.weight.bold};
        letter-spacing: ${theme.font.letterSpacing.display};

        @media screen and (max-width: 768px) {
          font-size: ${theme.font.size.mobile.display};
          line-height: ${theme.font.lineHeight.mobile.display};
        }
      `}

      ${size === "heading-l" &&
      css`
        font-size: ${theme.font.size.desktop.heading_l};
        line-height: ${theme.font.lineHeight.desktop.heading_l};
        font-weight: ${theme.font.weight.bold};
        letter-spacing: ${theme.font.letterSpacing.heading_l};

        @media screen and (max-width: 768px) {
          font-size: ${theme.font.size.mobile.heading_l};
          line-height: ${theme.font.lineHeight.mobile.heading_l};
        }
      `}

      ${size === "heading-m" &&
      css`
        font-size: ${theme.font.size.desktop.heading_m};
        line-height: ${theme.font.lineHeight.desktop.heading_m};
        font-weight: ${theme.font.weight.bold};
        letter-spacing: ${theme.font.letterSpacing.heading_m};

        @media screen and (max-width: 768px) {
          font-size: ${theme.font.size.mobile.heading_m};
          line-height: ${theme.font.lineHeight.mobile.heading_m};
        }
      `}
      ${size === "heading-s" &&
      css`
        font-size: ${theme.font.size.desktop.heading_s};
        line-height: ${theme.font.lineHeight.desktop.heading_s};
        font-weight: ${theme.font.weight.bold};
        letter-spacing: ${theme.font.letterSpacing.heading_s};

        @media screen and (max-width: 768px) {
          font-size: ${theme.font.size.mobile.heading_s};
          line-height: ${theme.font.lineHeight.mobile.heading_s};
        }
      `}
      ${size === "heading-xs" &&
      css`
        font-size: ${theme.font.size.desktop.heading_xs};
        line-height: ${theme.font.lineHeight.desktop.heading_xs};
        font-weight: ${theme.font.weight.bold};

        @media screen and (max-width: 768px) {
          font-size: ${theme.font.size.mobile.heading_xs};
          line-height: ${theme.font.lineHeight.mobile.heading_xs};
        }
      `}
      ${size === "subheading" &&
      css`
        font-size: ${theme.font.size.desktop.subheading};
        line-height: ${theme.font.lineHeight.desktop.subheading};
        font-weight: ${theme.font.weight.bold};
      `}

      ${size === "body-m" &&
      css`
        font-size: ${theme.font.size.desktop.body_m};
        line-height: ${theme.font.lineHeight.desktop.body_m};
        font-weight: ${theme.font.weight.regular};

        @media screen and (max-width: 768px) {
          font-weight: ${theme.font.weight.bold};
        }
      `}
    `}
`;
