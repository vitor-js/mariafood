import { Flex, useBreakpointValue, Box, Image } from '@chakra-ui/react'
import Logo from '../assets/logo_deitada.png'

function Layout({ children }) {
  const containerWidth = useBreakpointValue({ 
    base: "100%", 
    md: "90%", 
    lg: "80%", 
    xl: "40%" 
  });
  const isMobile = useBreakpointValue({ base: true, md: false });
  
  return (
    <Flex background={"#FFF5DD"} width={"100%"} minH={"100vh"} height={"100%"}>
      <Flex 
        width={containerWidth}
        marginX="auto"
        direction="column"
        p={4}
      > 
        <Flex mb={0} alignItems={"center"} justifyContent={"center"} textAlign="center">
            <Image width={"30%"} height={"80&"} src={Logo}/>
        </Flex>
        <Box p={3}>
            {children}
        </Box>
      </Flex>
    </Flex>
  )
}


export default Layout;