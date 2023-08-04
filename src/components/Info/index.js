import { Box, Flex, Text, Center } from '@chakra-ui/react';
import { BsFillCreditCard2BackFill, BsFillSendCheckFill, BsArrowLeftRight } from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";

function Info() {
  return (
    <Box>
      <Flex
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <Box textAlign="center">
          <Center p='4'>
            <BsFillCreditCard2BackFill size={25} color="#edb4b4" />
          </Center>
          <h5>PAGAMENTO</h5>
          <Text w="180px">Parcela em até 3 vezes sem juros no cartão!</Text>
        </Box>
        <Box textAlign="center">
          <Center p='4'>
            <TbDiscount2 size={25} color="#edb4b4" />
          </Center>
          <h5>DESCONTO</h5>
          <Text w="180px">10% de desconto na primeira compra!</Text>
        </Box>
        <Box textAlign="center">
          <Center p='4'>
            <BsFillSendCheckFill size={25} color="#edb4b4" />
          </Center>
          <h5>ENTREGA</h5>
          <Text w="180px">Em até 15 dias!</Text>
        </Box>
        <Box textAlign="center">
          <Center p='4'>
            <BsArrowLeftRight size={25} color="#edb4b4" />
          </Center>
          <h5>TROCA</h5>
          <Text w="180px">Trocas de produtos em até 30 dias!</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Info;
