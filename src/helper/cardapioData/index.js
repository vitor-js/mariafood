
import Lasanha from '../../assets/marmitas/lasanha.png'

import Moida from '../../assets/marmitas/moida.png'
import Frango_tomate from '../../assets/newMarmitas/frango_milanesa.png'
import File from '../../assets/newMarmitas/file.png'
import Moqueca from '../../assets/newMarmitas/moqueca.png'
import Frango_curry from '../../assets/newMarmitas/frango_curry.png'
import Fricasse from '../../assets/newMarmitas/fricasse.png'
import Carne from '../../assets/newMarmitas/carne.png'

import Lasanha_frango from '../../assets/newMarmitas/lasanha_frango.png'
 import Escondidinho from '../../assets/newMarmitas/escondidinho.png'
 import Strogonoff_Carne from '../../assets/newMarmitas/strogonoff_Carne.png'
 import Strogonoff_Frango from '../../assets/newMarmitas/strogonoff_Frango.png'
// import Carne from '../../assets/newMarmitas/carne.png'
// import Carne from '../../assets/newMarmitas/carne.png'
// import Carne from '../../assets/newMarmitas/carne.png'
// import Carne from '../../assets/newMarmitas/carne.png'

import {  Image } from '@chakra-ui/react'


const data = [

  // Novos itens adicionados conforme texto fornecido
  {
    "nome": "Coxa e sobrecoxa desossadas ao curry",
    "descricao": "Coxa e sobrecoxa desossadas temperadas com alho, limão, páprica, Lemon pepper, curry e sal, posteriormente seladas até dourar dos dois lados e acrescidas de caldo de legumes, batata e cenoura, deixadas em fogo baixo até o cozimento completo.",
    "ingredientes": ["coxa e sobrecoxa desossadas", "batata inglesa", "cenoura", "cebola", "alho", "limão", "páprica doce", "Lemon pepper", "curry", "sal", "azeite de oliva"],
    "preco": 76.5,
    "porcoes": {
      "1kg": {"preco": 76.5, "descricao": "1kg frango cru"}
    },
        img:  <Image
          src={Frango_curry} // Ajuste para a propriedade correta da sua imagem
         
          // Tamanho fixo e responsivo
          boxSize={{ base: "150px", md: "120px" }}
          objectFit="cover" // Garante que a imagem preencha o espaço sem distorcer
          borderRadius="12px"
          border="1px solid"
          borderColor="gray.100"
        />,
      imgBanner: <Image src={Frango_curry} width={"90%"} height={300}   borderRadius={5} />

  },
  {
    "nome": "Coxa e sobrecoxa desossada ao molho de tomate e mussarela",
    "descricao": "Coxa e sobrecoxa desossadas temperadas com alho, limão, páprica, Lemon pepper, sal e azeite, posteriormente seladas até dourar. Cobertas por molho de tomate temperado com cebola, alho, azeite e folha de louro, finalizado com queijo mussarela por cima.",
    "ingredientes": ["coxa e sobrecoxa desossadas", "extrato de tomate", "mussarela", "folha de louro", "alho", "limão", "páprica doce", "Lemon pepper", "sal", "azeite de oliva"],
    "preco": 88.5,
    "porcoes": {
      "1kg": {"preco": 88.5, "descricao": "1kg frango cru"}
    },
       img:  <Image
          src={Frango_tomate} // Ajuste para a propriedade correta da sua imagem
         
          // Tamanho fixo e responsivo
          boxSize={{ base: "150px", md: "120px" }}
          objectFit="cover" // Garante que a imagem preencha o espaço sem distorcer
          borderRadius="12px"
          border="1px solid"
          borderColor="gray.100"
        />,
      imgBanner: <Image src={Frango_tomate} width={"90%"} height={300}   borderRadius={5} />

  },
  {
    "nome": "Fricassê",
    "descricao": "Peito de frango desfiado temperado com páprica, alho, cebola, limão, Lemon pepper, sal e azeite de oliva. Acrescido de milho em conserva processado, requeijão e azeitonas picadas, finalizado com queijo mussarela por cima.",
    "ingredientes": ["peito de frango", "milho em conserva", "requeijão", "mussarela", "azeitona", "cebola", "alho", "limão", "páprica doce", "Lemon pepper", "sal", "azeite de oliva"],
    "preco": 111.5,
    "porcoes": {
      "1kg": {"preco": 111.5, "descricao": "1kg frango cru"}
    },
      img:  <Image
          src={Fricasse} // Ajuste para a propriedade correta da sua imagem
         
          // Tamanho fixo e responsivo
          boxSize={{ base: "150px", md: "120px" }}
          objectFit="cover" // Garante que a imagem preencha o espaço sem distorcer
          borderRadius="12px"
          border="1px solid"
          borderColor="gray.100"
        />,
      imgBanner: <Image src={Fricasse} width={"90%"} height={300}   borderRadius={5} />
  },
  {
    "nome": "Strogonoff de frango",
    "descricao": "Peito de frango cortado em cubinhos temperado com cebola, alho, páprica, Lemon pepper, limão, sal e azeite, em seguida cozido até dourar, acrescido de creme de leite ao final.",
    "ingredientes": ["peito de frango", "creme de leite", "cebola", "alho", "Lemon pepper", "limão", "páprica", "sal", "azeite"],
    "preco": 76.5,
    "porcoes": {
      "1kg": {"preco": 76.5, "descricao": "1kg frango cru"}
    },
     img:  <Image
          src={Strogonoff_Frango} // Ajuste para a propriedade correta da sua imagem
         
          // Tamanho fixo e responsivo
          boxSize={{ base: "150px", md: "120px" }}
          objectFit="cover" // Garante que a imagem preencha o espaço sem distorcer
          borderRadius="12px"
          border="1px solid"
          borderColor="gray.100"
        />,
      imgBanner: <Image src={Strogonoff_Frango} width={"90%"} height={300}   borderRadius={5} />
  },
  {
    "nome": "Lasanha de frango",
    "descricao": "Peito de frango desfiado temperado com alho, cebola, páprica, Lemon pepper, pimenta calabresa, sal e azeite, acrescido de creme de leite, caldo de frango e azeitonas picadas. Montado em camadas de frango ao molho, massa, presunto, requeijão e queijo.",
    "ingredientes": ["peito de frango", "creme de leite", "azeitonas", "cebola", "limão", "alho", "páprica", "Lemon pepper", "pimenta calabresa", "sal", "azeite", "mussarela", "presunto", "massa para lasanha"],
    "preco": 157.0,
    "porcoes": {
      "1kg": {"preco": 157.0, "descricao": "1kg frango cru"}
    },
  img:  <Image
          src={Lasanha_frango} // Ajuste para a propriedade correta da sua imagem
         
          // Tamanho fixo e responsivo
          boxSize={{ base: "150px", md: "120px" }}
          objectFit="cover" // Garante que a imagem preencha o espaço sem distorcer
          borderRadius="12px"
          border="1px solid"
          borderColor="gray.100"
        />,
      imgBanner: <Image src={Lasanha_frango} width={"90%"} height={300}   borderRadius={5} />
  },
  {
    "nome": "Lasanha bolonhesa",
    "descricao": "Carne moída temperada com alho, cebola, sal, azeite, páprica, Lemon pepper, pimenta calabresa e limão cozida até dourar, depois acrescida de extrato de tomate, água e folha de louro. Montada em camadas de bolonhesa, massa, presunto, requeijão e queijo.",
    "ingredientes": ["músculo bovino", "folha de louro", "azeite", "sal", "cebola", "alho", "páprica", "Lemon pepper", "pimenta calabresa", "limão", "mussarela", "presunto", "massa para lasanha", "requeijão", "extrato de tomate"],
    "preco": 167.0,
    "porcoes": {
      "1kg": {"preco": 167.0, "descricao": "1kg músculo cru"}
    },
  img:  <Image
          src={Lasanha} // Ajuste para a propriedade correta da sua imagem
         
          // Tamanho fixo e responsivo
          boxSize={{ base: "150px", md: "120px" }}
          objectFit="cover" // Garante que a imagem preencha o espaço sem distorcer
          borderRadius="12px"
          border="1px solid"
          borderColor="gray.100"
        />,
      imgBanner: <Image src={Lasanha} width={"90%"} height={300}   borderRadius={5} />
  },
  {
    "nome": "Escondidinho de mandioca",
    "descricao": "Músculo bovino moído temperado com alho, cebola, páprica, limão, pimenta do reino, azeite e sal, cozido até dourar, acrescido de extrato de tomate e água. Coberto por purê de mandioca temperado com sal e manteiga e finalizado com mussarela.",
    "ingredientes": ["músculo bovino", "manteiga", "mandioca", "sal", "azeite", "limão", "pimenta do reino", "páprica", "cebola", "alho", "mussarela", "extrato de tomate"],
    "preco": 139.0,
    "porcoes": {
      "1kg": {"preco": 139.0, "descricao": "1kg músculo cru"}
    },
   img:  <Image
          src={Escondidinho} // Ajuste para a propriedade correta da sua imagem
         
          // Tamanho fixo e responsivo
          boxSize={{ base: "150px", md: "120px" }}
          objectFit="cover" // Garante que a imagem preencha o espaço sem distorcer
          borderRadius="12px"
          border="1px solid"
          borderColor="gray.100"
        />,
      imgBanner: <Image src={Escondidinho} width={"90%"} height={300}   borderRadius={5} />
  },
  {
    "nome": "Carne de panela",
    "descricao": "Acém em cubos cozidos até dourar, temperado com alho, sal, azeite, cebola, páprica, pimenta do reino, pimenta calabresa e limão, posteriormente acrescido de água, cenoura e batata inglesa e levado à pressão até cozimento completo.",
    "ingredientes": ["acém", "cenoura", "batata", "cebola", "alho", "páprica", "pimenta do reino", "pimenta calabresa", "limão"],
    "preco": 109.0,
    "porcoes": {
      "1kg": {"preco": 109.0, "descricao": "1kg acém cru"}
    },
      img:  <Image
          src={Carne} // Ajuste para a propriedade correta da sua imagem
         
          // Tamanho fixo e responsivo
          boxSize={{ base: "150px", md: "120px" }}
          objectFit="cover" // Garante que a imagem preencha o espaço sem distorcer
          borderRadius="12px"
          border="1px solid"
          borderColor="gray.100"
        />,
      imgBanner: <Image src={Carne} width={"90%"} height={300}   borderRadius={5} />
  },
  {
    "nome": "Strogonoff de carne",
    "descricao": "Miolo de alcatra cortado em cubinhos temperado com cebola, alho, páprica, pimenta do reino, limão, sal e azeite, em seguida cozido até dourar, acrescido de creme de leite ao final.",
    "ingredientes": ["miolo de alcatra", "creme de leite", "cebola", "alho", "limão", "páprica", "pimenta do reino", "sal", "azeite"],
    "preco": 120.5,
    "porcoes": {
      "1kg": {"preco": 120.5, "descricao": "1kg miolo de alcatra cru"}
    },

      img:  <Image
          src={Strogonoff_Carne} // Ajuste para a propriedade correta da sua imagem
         
          // Tamanho fixo e responsivo
          boxSize={{ base: "150px", md: "120px" }}
          objectFit="cover" // Garante que a imagem preencha o espaço sem distorcer
          borderRadius="12px"
          border="1px solid"
          borderColor="gray.100"
        />,
      imgBanner: <Image src={Strogonoff_Carne} width={"90%"} height={300}   borderRadius={5} />
  },
  {
    "nome": "Filé mignon ao molho de queijo e bacon",
    "descricao": "Bife de filé mignon grelhado temperado com sal, pimenta do reino, alho e limão, coberto por molho de queijo parmesão e bacon em cubinhos.",
    "ingredientes": ["filé mignon", "alho", "cebola", "limão", "sal", "azeite de oliva", "parmesão", "bacon", "creme de leite"],
    "preco": 237.0,
    "porcoes": {
      "1kg": {"preco": 237.0, "descricao": "1kg filé mignon"}
    },
       img:  <Image
          src={File} // Ajuste para a propriedade correta da sua imagem
         
          // Tamanho fixo e responsivo
          boxSize={{ base: "150px", md: "120px" }}
          objectFit="cover" // Garante que a imagem preencha o espaço sem distorcer
          borderRadius="12px"
          border="1px solid"
          borderColor="gray.100"
        />,
      imgBanner: <Image src={File} width={"90%"} height={300}   borderRadius={5} />
  },
  {
    "nome": "Moqueca de tilápia",
    "descricao": "Filé de tilápia cortado em cubos temperados com sal, azeite, alho, pimenta do reino e páprica, grelhado em frigideira. Posteriormente acrescido de cebola, alho e pimentões selados, leite de coco e creme de leite.",
    "ingredientes": ["filé de tilápia", "pimentão vermelho", "pimentão amarelo", "leite de coco", "creme de leite", "cebola", "alho", "pimenta do reino", "páprica", "azeite", "sal"],
    "preco": 132.5,
    "porcoes": {
      "800g": {"preco": 132.5, "descricao": "800gr filé de tilápia cru"}
    },
       img:  <Image
          src={Moqueca} // Ajuste para a propriedade correta da sua imagem
         
          // Tamanho fixo e responsivo
          boxSize={{ base: "150px", md: "120px" }}
          objectFit="cover" // Garante que a imagem preencha o espaço sem distorcer
          borderRadius="12px"
          border="1px solid"
          borderColor="gray.100"
        />,
      imgBanner: <Image src={Moqueca} width={"90%"} height={300}   borderRadius={5} />
  }
]


export default data