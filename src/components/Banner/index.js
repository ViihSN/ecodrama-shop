
//Chakra UI
import { Box, Button, Image } from '@chakra-ui/react';
//Video Principal
import Video1 from "../../components/Banner/videos/video1.mp4";
import Video2 from "../../components/Banner/videos/video2.mp4";
import Video3 from "../../components/Banner/videos/video3.mp4";
import imagem1 from "../../components/Banner/img/caneca-vicenzo-removebg-preview.png";
import imagem2 from "../../components/Banner/img/camisa-removebg-preview.png";
import imagem3 from "../../components/Banner/img/quadro-removebg-preview.png";
//Css
import './style.css';

function Banner() {

  return (
    <>
      <Box className="hero w-100 h-100">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true" autoPlay >
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0" class="active" aria-label="Slide 1">
            </button>
            <button type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container d-flex justify-content-between background">
                <div class="d-flex justify-content-center align-items-start flex-column ms-5">
                  <span class="text-white title mb-3 fw-bold" >
                    K-drama Shop
                  </span>
                  <span class="discription">
                    Canecas Personalizadas
                  </span>
                  <span class="d-info mt-5">
                    <Button bg='#000' color="#fff" size='lg'>Comprar</Button>
                  </span>
                </div>
                <Box>
                  <Image src={imagem1} w="500px" />
                </Box>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container d-flex justify-content-between background">
                <div class="d-flex justify-content-center align-items-start flex-column ms-5">
                  <span class="text-white title mb-3 fw-bold">
                    K-drama Shop
                  </span>
                  <span class="discription">
                    Camisas Exclusivas
                  </span>
                  <span class="d-info mt-5">
                    <Button colorScheme='blackAlpha' size='lg'>Comprar</Button>
                  </span>
                </div>
                <Box>
                  <Image src={imagem2} w="350px" />
                </Box>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container d-flex justify-content-between background">
                <div class="d-flex justify-content-center align-items-start flex-column ms-5">
                  <span class="text-white title mb-3 fw-bold">
                    K-drama Shop
                  </span>
                  <span class="discription">
                    Quadros Personalisados
                  </span>
                  <span class="d-info mt-5">
                    <Button colorScheme='blackAlpha' size='lg'>Comprar</Button>
                  </span>
                </div>
                <Box>
                  <Image src={imagem3} w="500px" />
                </Box>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button"
            data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon .bg-body"
              aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button"
            data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon .bg-body"
              aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </Box >
    </>
  );
}

export default Banner;