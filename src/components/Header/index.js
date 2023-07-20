import { useState } from 'react';
import { Box, Flex, Input, InputGroup, InputLeftElement, ListItem, UnorderedList } from '@chakra-ui/react';
import { AiOutlineSearch, AiFillHeart, AiOutlineUser } from 'react-icons/ai';
import { BiCart } from 'react-icons/bi';
import { motion } from 'framer-motion';
//import Logo from '../../images/logotipo.png';


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
    <>
      <Box
        w="100%"
        top={0}
        right={0}
        zIndex={999}
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        transition="0.5s linear"
        bgGradient="linear(to-l, #ffffff99, #d1cdcd95)"
        maxH={95}
      >

        <Box className="conatiner-fluid "
          color="#94ae89" display="flex"
          justifyContent="center"
          listStyleType="none"
          fontSize="1.5rem"
          fontWeight={500}
          textShadow='3px 3px 3px'
        >
          <a className='navbar-brand fw-bold fs-4' href='#'> K-DRAMA SHOP </a>
        </Box>
        <UnorderedList display="flex" justifyContent="center"
          listStyleType="none" fontSize="1rem"
          fontWeight={600} size={25}>
          <ListItem
            _hover={{ transform: 'scale(1.2)', transition: 'transform .5s', textShadow: '3px 3px 3px'}}
            cursor="pointer"
            color="#5B4099"
            mx={4}
          >
            Home
          </ListItem>
          <ListItem
            _hover={{ transform: 'scale(1.2)', transition: 'transform .5s', textShadow: '3px 3px 3px' }}
            cursor="pointer"
            color="#5B4099"
            mx={4}
          >
            Produtos
          </ListItem>
          <ListItem
            _hover={{ transform: 'scale(1.2)', transition: 'transform .5s', textShadow: '3px 3px 3px' }}
            cursor="pointer"
            color="#5B4099"
            mx={4}
          >
            Sobre Nós
          </ListItem>
          <ListItem
            _hover={{ transform: 'scale(1.2)', transition: 'transform .5s', textShadow: '3px 3px 3px' }}
            cursor="pointer"
            color="#5B4099"
            mx={4}
          >
            Contatos
          </ListItem>
        </UnorderedList>

        <Flex direction="row" gap={5}>
          <BiCart cursor="pointer" color="#94ae89" size="25px" />
          <AiFillHeart cursor="pointer" color="#94ae89" size="25px" />
          <AiOutlineUser cursor="pointer" color="#94ae89" size="25px" />
        </Flex>
        <Box onClick={handleSearchIconClick}>
          <InputGroup maxW="300px">
            <InputLeftElement cursor="pointer" children={<AiOutlineSearch color="#94ae89" size={isSearchMode ? 25 : 30} />} />
            <motion.div
              variants={inputVariants}
              initial="hidden"
              animate={isSearchMode ? 'visible' : 'hidden'}
              transition={{ duration: 0.3 }}
              style={{ width: '100%' }}
            >
              <Input pl={10} color="#94ae89" type="text" bg="transparent" focusBorderColor="transparent" sx={{
                '::placeholder': { color: "#94ae89", },
              }} borderColor="transparent" borderBottom="2px solid #94ae89" placeholder="Buscar" _focus={{ outline: 'none' }}
              />
            </motion.div>
          </InputGroup>
        </Box>
      </Box>
      <Box w='203vh' boxShadow='2px 2px 2px 1px rgba(0, 0, 0, 0.2)'>
        <div id="linha-horizontal"></div>
      </Box>
    </>
  );
}

export default Header;
