
//Chakra UI
import { Box, Button, Image, Flex } from '@chakra-ui/react';
//imagens principal
import imagem1 from "../../components/Banner/img/caneca.png";
import imagem2 from "../../components/Banner/img/camisa-removebg-preview.png";
import imagem3 from "../../components/Banner/img/almofada-goblin.png";


function Banner() {

  return (
    <>
      <Box className="hero w-100 h-100" w="100%" h="100vh">
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
                    <div className="button"></div>
                  </span>
                </div>
                <Flex>
                  <Image src={imagem1} w="500px" />
                </Flex>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container d-flex justify-content-between background">
                <div class="d-flex justify-content-center align-items-start flex-column ms-5">
                  <span class="text-white title mb-3 fw-bold">
                    K-drama Shop
                  </span>
                  <span class="discription" >
                    Camisas Exclusivas
                  </span>
                  <span class="d-info mt-5">
                    <div className="button"></div>
                  </span>
                </div>
                <Box>
                  <Image src={imagem2} w="352px" />
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
                    Almofadas Personalisadas
                  </span>
                  <span class="d-info mt-5">
                    <div className="button"></div>
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