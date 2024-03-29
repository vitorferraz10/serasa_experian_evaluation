import * as S from "./styled";

type ButtonProps = {
  textContent: string;
  disabled?: boolean;
  size?: "large" | "medium" | "small";
  handleClick?: () => void;
};

export const ButtonForm = ({
  textContent,
  disabled,
  handleClick,
  size,
}: ButtonProps) => {
  return (
    <S.Button
      disabled={disabled}
      type="submit"
      onClick={handleClick}
      size={size}
      aria-label={textContent}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick && handleClick();
        }
      }}
    >
      {textContent}
    </S.Button>
  );
};
