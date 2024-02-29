import React from "react";
import * as S from "./styled";
import Image from "next/image";

const Header = () => {
  return (
    <S.ContainerHeader>
      <Image src="/serasa-logo-full.svg" alt="Logo serasa" width={200} height={40}/>
    </S.ContainerHeader>
  );
};

export default Header;
