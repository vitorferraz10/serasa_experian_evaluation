import { useRef } from "react";
import { ButtonForm } from "../../ui/Button";
import { TextField } from "../../ui/TextField";
import * as S from './styled'
import useFormStore from "store/useFormStore";

const FormEvaluation = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { name, description, sendForm, setDescription, setName } = useFormStore();
  return (
    <S.Form onSubmit={sendForm}>
      <TextField
        placeholder="Nome"
        inputRef={inputRef}
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <TextField
        placeholder="Comentário (Opcional)"
        inputRef={inputRef}
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <ButtonForm textContent="Enviar avaliação" size="large" />
    </S.Form>
  );
};

export default FormEvaluation;
