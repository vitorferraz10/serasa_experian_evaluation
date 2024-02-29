import React, { ReactNode, useEffect, useState } from "react";
import * as S from "./styled";

export type TooltipTextProps = {
  show: boolean;
};

export type TooltipProps = {
  text: string;
  children?: ReactNode;
  show: boolean;
};

export const Tooltip = ({ text, children, show }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setShowTooltip(show);

    setTimeout(() => {
      setShowTooltip(false);
    }, 3000);
    
  }, [show]);


  return (
    <S.TooltipContainer>
      {children}
      <S.TooltipText show={showTooltip}>{text}</S.TooltipText>
    </S.TooltipContainer>
  );
};

export default Tooltip;
