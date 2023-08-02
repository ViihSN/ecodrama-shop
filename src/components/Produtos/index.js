
import BlusaBranca from "../Produtos/cards/images/blusa-dorama-branca.jpg";
import { Box, Card, Stack, Image, Heading, Text, Divider, Button, ButtonGroup, CardBody, CardFooter } from '@chakra-ui/react'

function Produtos() {
    return (
        <Box>
            <Text>
                Produtos
            </Text>
            <Divider color="#000" />
            <br />
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={BlusaBranca}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='3' spacing='1'>
                        <Heading size='md'>Blusa Dorama</Heading>
                        <Text>
                            Blusa Dorama - Cor Branca
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Comprar agora
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Adicionar
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
            <div class="card" style={{width: "18rem"}}>
                <img src={BlusaBranca} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </Box>
    )
}

export default Produtos;