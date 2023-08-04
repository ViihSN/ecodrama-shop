import { Flex } from '@chakra-ui/react';
import { FaTruckPlane } from "react-icons/fa6";
import React, { useEffect, useRef } from 'react';


const Nav = () => {
  const fraseRef = useRef(null);
  let xPosition = 0;
  const speed = 1;

  const moveFraseInLine = () => {
    fraseRef.current.style.left = xPosition + 'px';
    xPosition += speed;
    if (xPosition > window.innerWidth) {
      xPosition = -fraseRef.current.offsetWidth;
    }
    requestAnimationFrame(moveFraseInLine);
  };

  useEffect(() => {
    moveFraseInLine();
  }, []);

  return (
    <Flex

      fontWeight='bold'
      position='absolute'
      whiteSpace='nowrap'
      w="100%"
      top={0}
      right={0}
      zIndex={999}
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      maxH={95}
      background="#ffe5da"
    >
      <Flex
        ref={fraseRef}
        fontWeight='bold'
        position='absolute'
        whiteSpace='nowrap'
        w="100%"
        top={0}
        right={0}
        zIndex={999}
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        maxH={95}
        background="#ffe5da"
      >
        <i>
          <span style={{ display: 'inline-block', marginRight: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <FaTruckPlane size={15} />
          </span>
        </i>
        <a href="#">
          FRETE GRÁTIS PARA O MUNDO TODO!
        </a>
      </Flex>
    </Flex>
  );
};


export default Nav;