import React from "react";
import * as S from "./styled";

export type SizeTypography =
  | "display"
  | "heading-l"
  | "heading-m"
  | "heading-s"
  | "heading-xs"
  | "subheading"
  | "body-m";
export type ColorTypography =
  | "dark-low"
  | "dark-medium"
  | "dark-high"
  | "magenta"
  | "light-solid"
  | "light-high";

type TypographyProps = {
  textContent: string;
  size?: SizeTypography;
  color?: ColorTypography;
};

const Typography = ({ textContent, color, size }: TypographyProps) => {
  return (
    <S.CustomTypography color={color} size={size}>
      {textContent}
    </S.CustomTypography>
  );
};

export default Typography;
