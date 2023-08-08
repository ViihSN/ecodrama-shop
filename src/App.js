//Chakra UI
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import Home from './pages/Home';
import './styles.css';
//Components

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
      <Home />
    </ChakraProvider>
  );
}

export default App;
