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
    Badge,
    List,
    ListItem,
Wrap,
  WrapItem,
  Tag,
 
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
  <Flex key={item.nome} mb={5}>
    <Flex
      w="100%"
      bg="#FFF9EA"
      borderRadius="10px"
      p={4}
      // Garante que o conteúdo alinhe corretamente na responsividade
      align={{ base: "flex-start", md: "center" }} 
      // Muda a direção: coluna para mobile, linha para desktop
      direction={{ base: "column", md: "row" }}
      boxShadow="sm"
      _hover={{ boxShadow: "md" }}
      position="relative" // Para posicionar o badge de calorias se necessário
    >
      
      {/* 1. Container da Imagem (Responsivo) */}
      <Box 
        // No mobile: centraliza e dá margem inferior
        // No desktop: margem direita e sem margem inferior
        mr={{ base: 0, md: 4 }} 
        mb={{ base: 4, md: 0 }}
        alignSelf={{ base: "center", md: "flex-start" }}
        flexShrink={0} // Impede que a imagem diminua
      >
       {item.img}
      </Box>

      {/* 2. Conteúdo Central (Nome, Descrição, Ingredientes, Tamanho) */}
      <Flex flex="1" direction="column" w="100%">
        {/* Nome */}
        <Text
          fontWeight="700"
          fontSize={{ base: "20px", md: "24px" }} // Fonte menor no mobile
          cursor="pointer"
          onClick={() => {
            setModalData(item)
            onOpen()
          }}
        >
          {item.nome}
        </Text>

        {/* Descrição */}
        <Text
          mt={1}
          color="gray.700"
          fontSize={{ base: "14px", md: "16px" }}
          noOfLines={2}
          cursor="pointer"
          onClick={() => {
            setModalData(item)
            onOpen()
          }}
        >
          {item.descricao}
        </Text>

        {/* Ingredientes */}
        <Text mt={3} fontWeight="600" fontSize="14px" color="gray.800">
          Ingredientes
        </Text>
        <Flex wrap="wrap" gap={2} mt={2}>
          {item.ingredientes?.slice(0, 4).map((ingrediente) => (
            <Badge
              key={ingrediente}
              px={3}
              py={1}
              bg="green.50"
              color="green.700"
              borderRadius="full"
              fontSize="12px"
              textTransform="none" // Chakra Badge é uppercase por padrão
            >
              {ingrediente}
            </Badge>
          ))}
          {item.ingredientes?.length > 4 && (
            <Badge
              px={3}
              py={1}
              bg="gray.100"
              color="gray.600"
              borderRadius="full"
              fontSize="12px"
              textTransform="none"
            >
              +{item.ingredientes.length - 4}
            </Badge>
          )}
        </Flex>

        {/* Tamanho */}
        <Text mt={3} fontWeight="600" fontSize="14px" color="gray.800">
          Tamanho
        </Text>
        <Flex gap={2} mt={2} wrap="wrap">
          {Object.keys(item.porcoes).map((p) => (
            <Box
              key={p}
              px={3}
              py={1}
              border="1px solid"
              borderColor="gray.200"
              bg="white"
              borderRadius="8px"
              fontSize="13px"
              color="gray.700"
            >
              {p}
            </Box>
          ))}
        </Flex>
      </Flex>

      {/* 3. Coluna da Direita / Inferior (Preço e Ações) */}
      <Flex
        direction="column"
        // No mobile: alinha à esquerda, largura total, margem superior
        // No desktop: alinha à direita, largura fixa, margem esquerda
        align={{ base: "flex-start", md: "flex-end" }}
        justify="space-between"
        ml={{ base: 0, md: 6 }}
        mt={{ base: 6, md: 0 }}
        w={{ base: "100%", md: "auto" }}
        minW={{ base: "100%", md: "170px" }}
      >
        
        {/* Preço e Botão 'Saiba mais' */}
        <Flex 
          direction={{ base: "row", md: "column" }} 
          justify={{ base: "space-between", md: "flex-end" }}
          align={{ base: "center", md: "flex-end" }}
          w="100%"
        >
          {/* Preço */}
          <Box textAlign={{ base: "left", md: "right" }} mb={{ base: 0, md: 3 }}>
            <Text fontSize="12px" color="gray.500">
              A partir de
            </Text>
            <Text
              fontSize="24px"
              color="green.700"
              fontWeight="800"
              lineHeight={1}
            >
              R$ {Number(item.preco).toFixed(2).replace(".", ",")}
            </Text>
          </Box>

          {/* Botão */}
          <Button
            size="sm"
            variant="outline"
            colorScheme="green"
            borderRadius="8px"
            onClick={() => {
              setModalData(item)
              onOpen()
            }}
          >
            Saiba mais
          </Button>
        </Flex>

        {/* Seletor de Quantidade */}
        <Flex
          mt={4}
          bg="#FFF5DD"
          borderRadius="10px"
          px={3}
          py={2}
          align="center"
          // No mobile: ocupa largura total para facilitar o clique
          w={{ base: "100%", md: "auto" }} 
          justify="center"
        >
          <IoRemoveOutline
            size={20}
            cursor="pointer"
            color="#4A5568" // gray.600
            onClick={() => RemoverItem(item.nome)}
          />
          <Text mx={4} fontWeight="bold" fontSize="16px" color="gray.800">
            {accountRequest[item.nome] ?? 0}
          </Text>
          <IoIosAdd
            size={20}
            cursor="pointer"
            color="#4A5568" // gray.600
            onClick={() => adicionarItem(item.nome)}
          />
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






  <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="xl" p={2}>
        <ModalHeader paddingBottom={1}>
          <Flex justifyContent="center" alignItems="center" flexDirection={'column'}>
            {modalData?.imgBanner}
            <Heading size="md" mt={3} color="gray.800">
              {modalData?.nome}
            </Heading>
          </Flex>
        </ModalHeader>
        <ModalCloseButton />

        {modalData && (
          <ModalBody>
            <Stack spacing={4}>
              {/* Descrição Longa */}
              <Text color="gray.600" fontSize="sm" lineHeight="relaxed">
                {modalData.descricao}
              </Text>

              {/* Seção de Ingredientes */}
              {modalData.ingredientes && modalData.ingredientes.length > 0 && (
                <Box>
                  <Text fontWeight="bold" fontSize="sm" mb={2} color="gray.700">
                    Ingredientes
                  </Text>
                  <Wrap spacing={2}>
                    {modalData.ingredientes.map((ingrediente, index) => (
                      <WrapItem key={index}>
                        <Tag
                          size="md"
                          borderRadius="full"
                          variant="subtle"
                          bg="#E6F4EA"
                          color="#137333"
                          px={3}
                          py={1}
                          fontSize="xs"
                        >
                          {ingrediente}
                        </Tag>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Box>
              )}

              {/* Seção de Tamanhos */}
              {modalData.tamanhos && modalData.tamanhos.length > 0 && (
                <Box>
                  <Text fontWeight="bold" fontSize="sm" mb={2} color="gray.700">
                    Tamanho
                  </Text>
                  <Flex gap={2}>
                    {modalData.tamanhos.map((tamanho) => {

                      return (
                        <Button
                          key={tamanho}
                          size="sm"
                          variant={ "outline"}
                          borderColor={ "gray.600" }
                          borderWidth="1px"
                          bg={"gray.100"}
                          color="gray.800"
                          fontWeight={"bold"}
                          borderRadius="md"
                        
                        >
                          {tamanho}
                        </Button>
                      );
                    })}
                  </Flex>
                </Box>
              )}
            </Stack>
          </ModalBody>
        )}

        <Divider my={2} />

        {/* Footer com Preço, Contador e Botão Voltar */}
        <ModalFooter justifyContent="space-between" alignItems="center" pt={1}>
          <Flex alignItems="center" gap={4}>
            <Text fontSize="xl" fontWeight="bold" color="gray.800">
              R$ {modalData?.preco}
            </Text>

            {/* Controle de Quantidade */}
            <Flex
              background="#FFF5DD"
              alignItems="center"
              justifyContent="center"
              borderRadius="md"
              px={2}
              py={1}
            >
              <Box
                cursor="pointer"
                display="flex"
                alignItems="center"
                onClick={() => RemoverItem(modalData?.nome)}
              >
                <IoRemoveOutline size={18} color="#000" />
              </Box>

              <Text mx={3} fontWeight="bold" fontSize="sm">
                {accountRequest[modalData?.nome] ? accountRequest[modalData?.nome] : 0}
              </Text>

              <Box
                cursor="pointer"
                display="flex"
                alignItems="center"
                onClick={() => adicionarItem(modalData?.nome)}
              >
                <IoIosAdd size={18} color="#000" />
              </Box>
            </Flex>
          </Flex>

          <Button onClick={onClose} variant="gray" bg="gray.100" color="gray.700" size="sm" px={5}>
            Voltar
          </Button>
        </ModalFooter>
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