import FormEvaluation from "@/components/application/Form";
import React from "react";
import * as S from "./styled";
import Typography from "@/components/ui/Typography";
import { StarRating } from "@/components/application/Form/StarRating";

const TemplateHome = () => {
  return (
    <S.Container>
      <Typography
        textContent="Conte o quanto você está satisfeito com nossos serviços"
        color="dark-low"
        size="heading-l"
      />
      <S.WrapperStar>
        <Typography
          textContent="Marque de 1 à 5 estrelas"
          color="dark-medium"
          size="heading-m"
        />
        <StarRating totalStars={5} />
      </S.WrapperStar>

      <FormEvaluation />
    </S.Container>
  );
};

export default TemplateHome;
