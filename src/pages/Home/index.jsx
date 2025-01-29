import { Box, Divider } from "@mui/material"
import { CarouselSection } from "../../components/CarouselSection"
import { HeroSection } from "../../components/HeroSection"
import { Header } from "../../components/Header"
import { AboutUs } from "../../components/AboutUs"
import { Footer } from "../../components/Footer"

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
]

export function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "primary",
        color: "black",
      }}
    >
      <Box>
        <Header />
        <HeroSection />
        <CarouselSection />
        <Divider
          color="lightblue"
          sx={{ width: 1000, height: 1, marginBlock: 10, marginInline: "auto" }}
        />
        <AboutUs />
        <Footer />
      </Box>
    </Box>
  )
}
