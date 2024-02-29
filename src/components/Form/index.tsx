import React, { useRef } from "react";
import { ButtonForm } from "./Button";
import { TextField } from "./TextField";
import { StarRating } from "./StarRating";

const FormEvaluation = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
    <StarRating totalStars={5}/>
      <TextField
        placeholder="Nome"
        inputRef={inputRef}
        onChange={() => {}}
        value=""
      />
      <ButtonForm textContent="Enviar avaliação" />
    </>
  );
};

export default FormEvaluation;
