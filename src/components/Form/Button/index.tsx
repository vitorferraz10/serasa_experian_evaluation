import * as S from './styled'

type ButtonProps = {
  textContent: string;
  disabled?: boolean;
  handleClick?: () => void;
};

export const ButtonForm = ({ textContent, disabled, handleClick }: ButtonProps) => {
  return (
    <S.Button disabled={disabled} type="submit" onClick={handleClick}>
      {textContent}
    </S.Button>
  );
};
