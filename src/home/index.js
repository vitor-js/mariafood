import { useEffect, useState } from 'react'
import Layout from '../layout'
import { Box, Flex, Text , useBreakpointValue} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    List,
    ListItem,

    ListIcon
} from '@chakra-ui/react'
import { IoIosAdd } from "react-icons/io";
import { IoRemoveOutline } from "react-icons/io5";
import { Card, CardHeader, CardBody, CardFooter, Button, Image, Stack, Heading, Divider, ButtonGroup } from '@chakra-ui/react'
import layoutData from "../helper/cardapioData"
import { toPng } from 'html-to-image';


function Index() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalData, setModalData] = useState()
    const [accountRequest, setAccountRequest] = useState({})

  const containerPosition = useBreakpointValue({ 
    base: "column", 
    md: "column", 
    lg: "column", 
    xl: "column" 
  });


    useEffect(() => {
        const titleArray = layoutData.map(item => item.nome)
        const initialAccountDataRequest = criarObjItens(titleArray)
        setAccountRequest(initialAccountDataRequest)
    }, [])


    function criarObjItens(array) {
        return Object.fromEntries(array.map(item => [item, 0]));
    }

    function adicionarItem(nome) {
        const draft = accountRequest
        draft[nome] = (draft[nome] || 0) + 1;
        setAccountRequest({ ...draft })
    }

    function RemoverItem(nome) {
        const draft = accountRequest
        if (draft[nome] === 0) return

        draft[nome] = (draft[nome] || 0) - 1;

        return setAccountRequest({ ...draft })
    }


    function somarJsonString() {
        if (Object.keys(accountRequest).length === 0) {
            return 0;
        }
        console.log(accountRequest)
        return Object.values(accountRequest).reduce((total, quantidade) => total + quantidade, 0);

    }


    function somarValorMarmitaJsonString() {
        if (Object.keys(accountRequest).length === 0) {
            return 0;
        }
        console.log(accountRequest)
        return Object.values(accountRequest).reduce((total, quantidade) => total + quantidade.preco, 0);

    }


    function calcularTotalPedidoReduce() {
        return Object.entries(accountRequest).reduce((total, [nomeProduto, quantidade]) => {
            const produto = layoutData.find(item => item.nome === nomeProduto);
            return produto && quantidade > 0 ? total + (produto.preco * quantidade) : total;
        }, 0);
    }


    const handleEnviarWhatsApp = async () => {
        try {

            // Mensagem com instruções
            const total = calcularTotalPedidoReduce();
            const mensagem = `🍱 *PEDIDO MARMITERIA* 🍱\n\n${Object.entries(accountRequest)
                .filter(([_, qtd]) => qtd > 0)
                .map(([nome, qtd]) => `• ${qtd}x ${nome}`)
                .join('\n')
                }\n\n💰 *TOTAL: R$ ${total.toFixed(2)}*\n`;

            const whatsappUrl = `https://wa.me/5561994350251?text=${encodeURIComponent(mensagem)}`;
            window.open(whatsappUrl, '_blank');
        } catch (e) {
            console.log(e)
        }
    };




    return (<Layout>
        <Flex width={"100%"} alignItems={"center"} justifyContent={"center"} >
            <Text fontSize={20} fontWeight={800} marginBottom={50}>
                Monte seu pedido
            </Text>

        </Flex>
        {layoutData.map((item) => (
            <Flex width="100%" flexDirection={"column"}>
                <Flex width="100%" cursor={"pointer"} background={"#FFF9EA"} marginBottom={5} alignContent={"center"} justifyContent={"center"} >
                    {item.img}
                    <Flex flexDirection={"column"} p={3} borderRadius={5} >
                        <Text onClick={() => {
                            setModalData(item)
                            onOpen()
                        }} fontWeight={700} fontSize={18} >
                            {item.nome}
                        </Text>
                        <Text onClick={() => {
                            setModalData(item)
                            onOpen()
                        }} fontWeight={400} fontSize={16} >
                            {item.descricao}
                        </Text>

                        <Text onClick={() => {
                            setModalData(item)
                            onOpen()
                        }} fontWeight={400} fontSize={16} >
                            R$ {item.preco}
                        </Text>



                        <Flex marginTop={3} justifyContent={"flex-end"} >
                            <Flex background={"#FFF5DD"} alignItems={"center"} justifyContent={"center"} borderRadius={5} p={2}>
                                <IoRemoveOutline onClick={() => {
                                    RemoverItem(item.nome)
                                }} size={20} color='#000' />

                                <Box marginLeft={3} marginRight={3} >{accountRequest[item.nome] ? accountRequest[item.nome] : 0}</Box>

                                <IoIosAdd size={20} onClick={() => {
                                    adicionarItem(item.nome)
                                }} color='#000' />
                            </Flex>
                        </Flex>

                    </Flex>

                </Flex>


            </Flex>
        ))}



        <Flex background={"#FFF9EA"} w={"100%"} borderRadius={5} padding={4} alignItems={"center"} justifyContent={"space-between"}  >
            <Flex flexDirection={"column"}  >
                <Text fontSize={20} fontWeight={800}>
                    Total
                </Text>

                <Text fontSize={20} fontWeight={800}>
                    R$ {calcularTotalPedidoReduce()}
                </Text>
            </Flex>

            <Flex>
                <Button onClick={handleEnviarWhatsApp} background={"#C15520"} color={"#fff"} fontWeight={800} >Finalizar Pedido</Button>
            </Flex>
        </Flex>






        <Modal isOpen={isOpen} onClose={onClose} p={4}>
            <ModalOverlay />
            <ModalContent background={"none"} p={3}>

                <Card width={"100%"}>
                    {modalData && <>
                        <CardBody>
                            {modalData.imgBanner}
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{modalData.nome}</Heading>
                                <Text>
                                    {modalData.descricao}
                                </Text>

                                <Flex justifyContent={"space-between"} alignItems={
                                    "center"
                                }>

                                    <Text fontSize='2xl'>
                                        R$ {modalData.preco}
                                    </Text>



                                    <Flex marginTop={3} justifyContent={"flex-end"} >
                                        <Flex background={"#FFF5DD"} alignItems={"center"} justifyContent={"center"} borderRadius={5} p={2}>
                                            <IoRemoveOutline onClick={() => {
                                                RemoverItem(modalData.nome)
                                            }} size={20} color='#000' />

                                            <Box marginLeft={3} marginRight={3} >{accountRequest[modalData.nome] ? accountRequest[modalData.nome] : 0}</Box>

                                            <IoIosAdd size={20} onClick={() => {
                                                adicionarItem(modalData.nome)
                                            }} color='#000' />
                                        </Flex>
                                    </Flex>
                                </Flex>




                            </Stack>
                        </CardBody>
                    </>}

                    <Divider />
                    <CardFooter alignItems={"flex-end"} justifyContent={"flex-end"}>
                        <ButtonGroup spacing='2'>
                            <Button onClick={onClose} variant='solid' >
                                Voltar
                            </Button>

                        </ButtonGroup>
                    </CardFooter>
                </Card>



            </ModalContent>
        </Modal>



        <div
            id="comprovante-pedido"
            style={{

                display: 'none', // Invisível na tela
                width: '400px',
                padding: '20px',
                background: 'white',
                color: 'black',
                fontFamily: 'Arial, sans-serif'
            }}
        >
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h2 style={{ color: '#25D366', margin: 0 }}>🍱 Marmitaria Delícia</h2>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>Comprovante de Pedido</p>
                <p style={{ margin: 0, fontSize: '12px', color: '#666' }}></p>
            </div>


        </div>

    </Layout>)
}



export default Index