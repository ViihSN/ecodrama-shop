//Bootstrap 

//Chakra UI
import { Box, Button } from '@chakra-ui/react';
//Video Principal
import Video1 from "../../components/Banner/videos/video1.mp4";
import Video2 from "../../components/Banner/videos/video2.mp4";
import Video3 from "../../components/Banner/videos/video3.mp4";
//Components 

//"../Produtos/cards/images/blusa-dorama-branca.jpg"
//import Banner2 from "../../imgs/2.png";
import './style.css';

function Banner() {

  return (
    <>
      <Box className="hero">
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
                  <span class="text-white title mb-3 fw-bold">
                    K-drama Shop
                  </span>
                  <span class="discription">
                    Canecas Personalizadas
                  </span>
                  <span class="d-info mt-5">
                    <Button colorScheme='blackAlpha' size='lg'>Comprar</Button>
                  </span>
                </div>
                <div>
                  <video id="videos" autoPlay loop muted>
                    <source src={Video1} type="video/mp4" class="d-block s-image" alt="video-1" />
                  </video>
                </div>
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
                <div>
                  <video id="videos" autoPlay loop muted>
                    <source src={Video2} type="video/mp4" class="d-block s-image" alt="video-2" />
                  </video>
                </div>
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
                <div>
                  <video id="videos" autoPlay loop muted>
                    <source src={Video3} type="video/mp4" class="d-block" alt="video-3" />
                  </video>
                </div>
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
      </Box>
    </>
  );
}

export default Banner;