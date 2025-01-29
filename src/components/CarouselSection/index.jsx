import { Box, Typography } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import { ProductCard } from "../ProductCard";

const mockProducts = [
  {
    id: 1,
    name: "Air Force",
    value: "759,99",
    description:
      "O brilho perdura no Nike Air Force 1 ’07, o tênis original do basquete que dá um toque de inovação naquilo que você conhece bem: sobreposições costuradas e duráveis, acabamentos simples e a quantidade perfeita de brilho para fazer você se destacar.",
    brand: "Nike",
    imageUrl: "/air-force.avif",
  },
  {
    id: 2,
    name: "Air Jordan",
    value: "1.599,90",
    description:
      "O Tênis Air Jordan 1 Chicago colorway foi introduzido pela primeira vez em 1985 e só foi retroado algumas vezes desde então. Mas 2022 é o ano em que a colorway retorna com um visual vintage adicional. Acentos pré-amarelados e cabedal de couro rachado exibem uma aparência fabricada de idade e desgaste. Adquira já na Sportline Store.",
    brand: "Nike",
    imageUrl: "/air-jordan.webp",
  },
  {
    id: 3,
    name: "Dunk Low",
    value: "854,99",
    description:
      "Criado para as quadras mas adorado nas ruas, o Nike Dunk Low Retro retorna com sobreposições viçosas e cores originais do time. Este ícone do basquete canaliza a vibe dos anos 80 com um couro premium e elegante na parte de cima que envelhece com estilo. A tecnologia moderna de calçados permite trazer o conforto para o século XXI.",
    brand: "Nike",
    imageUrl: "/dunk-low.avif",
  },
];

export function CarouselSection() {

  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "black",
        textAlign: "center",
        py: 8,
        px: 4,
        maxWidth: 600,
        margin: "auto",
      }}
    >
      <Typography variant="h5" textAlign="center" gutterBottom sx={{ marginBottom: 10 }}>
        NOSSOS PRODUTOS POPULARES
      </Typography>
      <Carousel
        autoPlay={false}
        navButtonsAlwaysVisible
        navButtonsProps={{
          style: {
            backgroundColor: "#007bff",
            color: "white",
          },
        }}
      >
        {mockProducts.map((product, index) => (
          <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}