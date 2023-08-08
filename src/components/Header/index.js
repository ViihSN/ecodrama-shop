import { useState } from 'react';
//Chakra UI
import { Box, Flex, Input, InputGroup, InputLeftElement, ListItem, UnorderedList, Image, Center, List } from '@chakra-ui/react';
//React Icons
import { AiOutlineSearch, AiFillHeart, AiOutlineUser } from 'react-icons/ai';
import { BiCart } from 'react-icons/bi';
//Logo
import Logo from '../Header/nova-logo3.png';
//Framer Motion
import { motion } from 'framer-motion';
//----------------------------------//

function Header() {
  const [isSearchMode, setIsSearchMode] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchMode(!isSearchMode);
  };

  const inputVariants = {
    hidden: { width: '0%', opacity: 0 },
    visible: { width: '100%', opacity: 1 },
  };

  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      transition="0.5s linear"
      background="#fff"
      boxShadow=" 0 2px 4px rgba(250, 250, 250, 0.678)"
      h="75px"
      maxH={95}
    >
      <UnorderedList
        display="flex"
        justifyContent="center"
        listStyleType="none"
        fontFamily="Avenir Next, sans-serif"
        color="#000"
        fontSize="15px"
        fontWeight={500}

        mt="15px"
      >
        <ListItem
          className="hover-container"
          cursor="pointer"
          mx={4}
          mt="8px"
        >
          <p className="hover-text">Início</p>
          <div className="hover-line"></div>
        </ListItem>
        <ListItem
          cursor="pointer"
          mx={4}
          mt="8px"
          className="hover-container"
        >
          <p className="hover-text">Produtos</p>
          <div className="hover-line"></div>
        </ListItem>
        <ListItem
          className="hover-container"
          cursor="pointer"
          mx={4}
          mt="8px"
        >
          <p className="hover-text">Sobre nós</p>
          <div className="hover-line"></div>
        </ListItem>
        <ListItem
          mt="8px"
          className="hover-container"
          cursor="pointer"
          mx={4}
          mt="8px"
        >
          <p className="hover-text">Contatos</p>
          <div className="hover-line"></div>
        </ListItem>
      </UnorderedList>
      <Flex
      >
        <Center>
          <Image src={Logo} h="50px" alt="logo" />
        </Center>
      </Flex>
      <Flex direction="row" gap={5} color="#000">
        <BiCart cursor="pointer" size="23px" />
        <AiFillHeart cursor="pointer" size="23px" />
        <AiOutlineUser cursor="pointer" size="23px" />
      </Flex>
      <Box onClick={handleSearchIconClick} color="#000">
        <InputGroup maxW="350px">
          <InputLeftElement cursor="pointer">
            <AiOutlineSearch size={isSearchMode ? 23 : 27} />
          </InputLeftElement>
          <motion.div
            variants={inputVariants}
            initial="hidden"
            animate={isSearchMode ? 'visible' : 'hidden'}
            transition={{ duration: 0.3 }}
            style={{ width: '100%' }}
          >
            <Input
              pl={10}
              type="text"
              bg="transparent"
              focusBorderColor="transparent"
              sx={{ '::placeholder': { color: '#6b6761' } }}
              borderColor="transparent"
              borderBottom="2px solid #000"
              placeholder="Buscar"
              _focus={{ outline: 'none' }}
            />
          </motion.div>
        </InputGroup>
      </Box>
    </Box>
  );
}

export default Header;
