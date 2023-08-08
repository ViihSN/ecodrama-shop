import { Flex } from '@chakra-ui/react';
import { FaTruckPlane } from "react-icons/fa6";
import React from 'react';

const Nav = () => {

  const msgFreteGratis = [
    { id: 1, message: "FRETE GRÁTIS PARA O MUNDO TODO" },
    { id: 2, message: "FRETE GRÁTIS PARA O MUNDO TODO" },
    { id: 3, message: "FRETE GRÁTIS PARA O MUNDO TODO" },
    { id: 4, message: "FRETE GRÁTIS PARA O MUNDO TODO" },
    { id: 5, message: "FRETE GRÁTIS PARA O MUNDO TODO" },
    { id: 6, message: "FRETE GRÁTIS PARA O MUNDO TODO" },
    { id: 7, message: "FRETE GRÁTIS PARA O MUNDO TODO" },
    // Adicione mais objetos aqui se necessário
  ];

  return (
    <Flex
      fontWeight='bold'
      whiteSpace='nowrap'
      w="100%"
      zIndex={999}
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      maxH={95}
      background="#ffe5da"
    >
      <Flex
        className="frase-container"  // Adiciona a classe aqui
        alignItems="center"
        maxH={95}
        gap={15}
      >
        <i>
          <span style={{ display: 'inline-block', marginRight: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <FaTruckPlane size={15} />
          </span>
        </i>
        {msgFreteGratis.map((item) => (
          <h8 key={item.id}>
            {item.message}
          </h8>
        ))}
      </Flex>
    </Flex>
  );
};

export default Nav;
