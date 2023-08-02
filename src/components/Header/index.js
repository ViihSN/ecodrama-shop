import { useState } from 'react';
//Chakra UI
import { Box, Flex, Input, InputGroup, InputLeftElement, ListItem, UnorderedList } from '@chakra-ui/react';
//React Icons
import { AiOutlineSearch, AiFillHeart, AiOutlineUser } from 'react-icons/ai';
import { BiCart } from 'react-icons/bi';

//Framer Motion
import { motion } from 'framer-motion';
//----------------------------------//

function Header() {
  const [isSearchMode, setIsSearchMode] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchMode(true);
  };

  const inputVariants = {
    hidden: { width: '0%', opacity: 0 },
    visible: { width: '100%', opacity: 1 },
  };

  return (
    <Box
      w="100%"
      top={0}
      right={0}
      zIndex={999}
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      transition="0.5s linear"
      background="#fff"
      boxShadow=" 0 2px 4px rgba(250, 250, 250, 0.678)"
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
          _hover={{ transform: 'scale(1.2)', transition: 'transform .5s', textShadow: '3px 3px 3px' }}
          cursor="pointer"
          mx={4}
        >
          Home
        </ListItem>
        <ListItem
          _hover={{ transform: 'scale(1.2)', transition: 'transform .5s', textShadow: '3px 3px 3px' }}
          cursor="pointer"
          mx={4}
        >
          Produtos
        </ListItem>
        <ListItem
          _hover={{ transform: 'scale(1.2)', transition: 'transform .5s', textShadow: '3px 3px 3px' }}
          cursor="pointer"
          mx={4}
        >
          Sobre Nós
        </ListItem>
        <ListItem
          _hover={{ transform: 'scale(1.2)', transition: 'transform .5s', textShadow: '3px 3px 3px' }}
          cursor="pointer"
          mx={4}
        >
          Contatos
        </ListItem>
      </UnorderedList>
      <Box
        fontSize="2.5rem"
        fontWeight={700}
        textShadow="3px 3px 3px"
        color="#889d82"
        fontFamily="Cookie"
      >
        <a className="navbar-brand fw-bold fs-4" href="#">
          K-drama Shop
        </a>
      </Box>
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
