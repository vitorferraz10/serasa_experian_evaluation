import { useRef } from "react";
import { ButtonForm } from "../../ui/Button";
import { TextField } from "../../ui/TextField";

const FormEvaluation = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <TextField
        placeholder="Nome"
        inputRef={inputRef}
        onChange={() => {}}
        value=""
      />
       <TextField
        placeholder="Comentário (Opcional)"
        inputRef={inputRef}
        onChange={() => {}}
        value=""
      />
      <ButtonForm textContent="Enviar avaliação" size="large"/>
    </>
  );
};

export default FormEvaluation;
