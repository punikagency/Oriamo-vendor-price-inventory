import { ChakraProvider, Heading } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Heading>Welcome</Heading>
      </div>
    </ChakraProvider>
  );
}

export default App;
