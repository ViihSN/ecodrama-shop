import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import { extendTheme } from '@chakra-ui/react';
import Banner from './components/Banner';


// Posso criar do jeito que eu quiser
const colors = {
  text: {
    100: '#fff',
    600: '#6B46C1'
  },
}

// cores seguindo o padrao chakra UI
const styles = {

}

const theme = extendTheme({ colors, styles })

function App() {


  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Banner/>
    </ChakraProvider>
  );
}

export default App;
