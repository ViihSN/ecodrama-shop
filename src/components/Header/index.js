import { useState } from 'react';
import { Image, Box, Flex, Input, InputGroup, InputLeftElement, ListItem, UnorderedList } from '@chakra-ui/react';
import { AiOutlineSearch, AiFillHeart, AiOutlineUser } from 'react-icons/ai';
import { BiCart } from 'react-icons/bi';
import { motion } from 'framer-motion';
import Logo from '../../assets/images/logotipo.png'

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
      bgGradient="linear(to-l, #6a91c0, #5b4099)"
      maxH={95}
    >
      <Image 
       boxSize='100px'
       objectFit="fill"
       src={Logo} 
       alt="logo" 
        
      />

      <UnorderedList display="flex" justifyContent="center" 
        listStyleType="none" fontSize="1rem"
        fontWeight={600} size={25}>
        <ListItem
          _hover={{ transform: 'scale(1.2)', transition: 'transform .5s'}}
          cursor="pointer"
          color="white"
          mx={4}
        >
          Home
        </ListItem>
        <ListItem
          _hover={{ transform: 'scale(1.2)', transition: 'transform .5s' }}
          cursor="pointer"
          color="white"
          mx={4}
        >
          Produtos
        </ListItem>
        <ListItem
          _hover={{ transform: 'scale(1.2)', transition: 'transform .5s' }}
          cursor="pointer"
          color="white"
          mx={4}
        >
          Sobre Nós
        </ListItem>
        <ListItem
          _hover={{ transform: 'scale(1.2)', transition: 'transform .5s' }}
          cursor="pointer"
          color="white"
          mx={4}
        >
          Contatos
        </ListItem>
      </UnorderedList>

      <Flex direction="row" gap={5}>
        <BiCart cursor="pointer" color="white" size="25px" />
        <AiFillHeart cursor="pointer" color="white" size="25px" />
        <AiOutlineUser cursor="pointer" color="white" size="25px" />
      </Flex>
      <Box onClick={handleSearchIconClick}>
        <InputGroup maxW="300px">
          <InputLeftElement cursor="pointer" children={<AiOutlineSearch color="white" size={isSearchMode ? 25 : 30} />} />
          <motion.div
            variants={inputVariants}
            initial="hidden"
            animate={isSearchMode ? 'visible' : 'hidden'}
            transition={{ duration: 0.3 }}
            style={{ width: '100%' }}
          >
            <Input pl={10} color="#fff" type="text" bg="transparent" focusBorderColor="transparent"sx={{'::placeholder': {  color: '#fff',},
              }}borderColor="transparent" borderBottom="2px solid #fff" placeholder="Buscar" _focus={{ outline: 'none' }} 
            />
          </motion.div>
        </InputGroup>
      </Box>
    </Box>
  );
}

export default Header;
