
import Lasanha from '../../assets/marmitas/lasanha.png'
import Carne from '../../assets/marmitas/carne.png'
import Moida from '../../assets/marmitas/moida.png'
import Frango from '../../assets/marmitas/frango.png'

import {  Image } from '@chakra-ui/react'

const data = [
  {
    "nome": "Marmita de Frango Grelhado",
    "descricao": "Peito de frango grelhado suculento acompanhado de arroz branco e legumes no vapor.",
    "ingredientes": ["Peito de frango", "Arroz branco", "Brócolis", "Cenoura", "Temperos naturais"],
    "calorias": 450,
    "preco": 24,
    "porcoes": {
      "400g": {"preco": 20.00, "calorias": 380},
      "500g": {"preco": 24.00, "calorias": 450},
      "600g": {"preco": 28.00, "calorias": 520}
    },
    img: <Image src={Frango} width={"30%"} height={150} borderRadius={5}/>,
      imgBanner: <Image src={Frango} width={"100%"} height={300}   borderRadius={5} />
  },
  {
    "nome": "Marmita de Carne Grelhada",
    "descricao": "Bife grelhado macio, servido com arroz branco e legumes frescos.",
    "ingredientes": ["Carne bovina", "Arroz branco", "Brócolis", "Cenoura", "Azeite", "Temperos naturais"],
    "calorias": 550,
    "preco": 26,
    "porcoes": {
      "400g": {"preco": 22.00, "calorias": 470},
      "500g": {"preco": 26.00, "calorias": 550},
      "600g": {"preco": 30.00, "calorias": 620}
    },
    img: <Image src={Carne} width={"30%"}   borderRadius={5} height={150}/>,
      imgBanner: <Image src={Carne} width={"100%"} height={300}   borderRadius={5} />
  },
  {
    "nome": "Marmita de Carne Moída",
    "descricao": "Carne bovina moída refogada com temperos, acompanhada de arroz branco e legumes.",
    "ingredientes": ["Carne moída bovina", "Arroz branco", "Brócolis", "Cenoura", "Cebola", "Alho"],
    "calorias": 500,
    "preco": 25,
    "porcoes": {
      "400g": {"preco": 21.00, "calorias": 420},
      "500g": {"preco": 25.00, "calorias": 500},
      "600g": {"preco": 29.00, "calorias": 580}
    },
        img: <Image src={Moida} width={"30%"}  borderRadius={5} height={150}/>,
              imgBanner: <Image src={Moida} width={"100%"} height={300}   borderRadius={5} />
  },
  {
    "nome": "Marmita de Lasanha à Bolonhesa",
    "descricao": "Clássica lasanha de carne à bolonhesa, gratinada com queijo e acompanhada de arroz branco.",
    "ingredientes": ["Massa de lasanha", "Molho de tomate", "Carne moída", "Queijo mussarela", "Arroz branco"],
    "calorias": 650,
    "preco": 28,
    "porcoes": {
      "400g": {"preco": 23.00, "calorias": 520},
      "500g": {"preco": 28.00, "calorias": 650},
      "600g": {"preco": 33.00, "calorias": 760}
    },
        img: <Image src={Lasanha} width={"30%"}   borderRadius={5} height={150}/>,
          imgBanner: <Image src={Lasanha} width={"100%"} height={300}   borderRadius={5} />
  }
]

export default data