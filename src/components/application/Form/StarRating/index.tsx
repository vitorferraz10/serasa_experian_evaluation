import { useEffect, useState } from "react";
import * as S from "./styled";
import { useFormStore } from "store/useFormStore";

type StarRatingProps = {
  totalStars?: number;
};

export const StarRating = ({ totalStars = 5 }: StarRatingProps) => {
  const { setNumberStar } = useFormStore();
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (starIndex: number) => {
    setSelectedStars(starIndex + 1);
  };

  useEffect(() => {
    setNumberStar(selectedStars);
  }, [selectedStars]);

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <S.Star
          key={index}
          onClick={() => handleStarClick(index)}
          color={index < selectedStars ? "gold" : "gray"}
          data-testid={`star-${index + 1}`}
        >
          ★
        </S.Star>
      ))}
    </div>
  );
};
