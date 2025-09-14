
import { ChakraProvider } from '@chakra-ui/react'



function Index({children}) {
    return(
         <ChakraProvider>
    {children}
    </ChakraProvider>)
}

export default Index