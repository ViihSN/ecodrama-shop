//Chakra UI
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
//Components
import Nav from "./components/Nav";
import Banner from './components/Banner';
import Produtos from "./components/Produtos";
import Header from "./components/Header";
import Info from "./components/Info";

// Cores padrão
const colors = {
  text: {
    100: '#fff',
    600: '#6B46C1',
    400: '#48BB78',
  },
}


const theme = extendTheme({ colors })


function App() {

  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Header />
      <Banner />
      <Info />
      <Produtos />
    </ChakraProvider>
  );
}

export default App;
