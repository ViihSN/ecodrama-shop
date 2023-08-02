//react icons
import { BsTruck, BsFillEnvelopeAtFill } from "react-icons/bs";
import { BiLogoWhatsapp, BiLogoInstagram, BiLogoFacebook, BiPhoneCall } from "react-icons/bi";
//Chakra UIBox, Menu, MenuButton, MenuList, MenuItem, Image, Button
import { Box, Flex } from '@chakra-ui/react';
//import { BiChevronDown } from "react-icons/bi";

function Nav() {
  return (
    <>
      <Flex
        w="100%"
        top={0}
        right={0}
        zIndex={999}
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        background="#ffe5da"
        maxH={95}
        //position="fixed"
      >
        <Flex
          fontFamily="Avenir Next, sans-serif"
          color="#000"
          fontSize="12px"
          fontWeight={500}
          direction="row"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <i>
            <span style={{ display: 'inline-block', marginRight: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
              <BsTruck />
            </span>
          </i>
          <a href="#">
            Frete grátis para o mundo todo!
          </a>
        </Flex>
        <Flex
          fontFamily="Avenir Next, sans-serif"
          color="#000"
          fontSize="12px"
          fontWeight={500}
          direction="row"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <i>
            <span style={{ display: 'inline-block', marginRight: '8px', display: 'flex', alignItems: 'center', }}>
              <BiPhoneCall />
            </span>
          </i>
          <a href="">
            010-020-8340
          </a>
        </Flex>
        <Flex
          fontFamily="Avenir Next, sans-serif"
          color="#000"
          fontSize="12px"
          fontWeight={500}
          direction="row"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <i>
            <span style={{ display: 'inline-block', marginRight: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <BsFillEnvelopeAtFill/>
            </span>
          </i>
          <a href="#" >
            kdramashop@gmail.com
          </a>
        </Flex>
        <Flex color="#000" cursor="pointer" direction="row" gap={3}>
          <a href="">
            <i><BiLogoWhatsapp size={19}/></i>
          </a>
          <a href="">
            <i><BiLogoInstagram size={19}/></i>
          </a>
          <a href="">
            <i><BiLogoFacebook size={19}/></i>
          </a>
        </Flex>
      </Flex >
    </>
  )
}



export default Nav;