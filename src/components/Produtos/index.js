//Cards de Produtos Mais Vendidos
import Blusapng from "../Produtos/cards/images/blusa-preta.png";
import Chaveirospng from "../Produtos/cards/images/chaveiros.png";
import Moletompng from "../Produtos/cards/images/moletom-kdrama.png";
import Quadropng from "../Produtos/cards/images/quadro-pousando-no....png";
import Almofadapng from "../Produtos/cards/images/almofada-goblin.png";
import CanecaTudoBempng from "../Produtos/cards/images/caneca-tudobem.png";
import Cadernopng from "../Produtos/cards/images/caderno.png";
import Canecapng from "../Produtos/cards/images/caneca-vincenzo.png";
import Camisapng from "../Produtos/cards/images/camisa-tudo-bem....png";
import Caixapng from "../Produtos/cards/images/caixa.png";
import { Divider } from '@chakra-ui/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
//react icons
import { BiHeart } from "react-icons/bi";

function Produtos() {
  return (
    <>
      <div className="produtos">
        <Divider />
        <div>
          <span class="mytext" contenteditable>Produtos</span>
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="card"><BiHeart />
              <div class="side front">
                <div class="img img1">
                  <img src={Blusapng} />
                </div>
                <div class="info">
                  <h2>Super S</h2>
                  <div class="reviews">
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                      <defs><path d="M0 0h24v24H0V0z" id="a" /></defs><clipPath id="b"><use overflow="visible" href="#a" /></clipPath><path clip-path="url(#b)" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                    </svg>
                  </div>
                  <button className="btn">Add card</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card"><BiHeart />
              <div class="side front">
                <div class="img img1">
                  <img src={Chaveirospng} />
                </div>
                <div class="info">
                  <h2>Super S</h2>
                  <div class="reviews">
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                      <defs><path d="M0 0h24v24H0V0z" id="a" /></defs><clipPath id="b"><use overflow="visible" href="#a" /></clipPath><path clip-path="url(#b)" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                    </svg>
                  </div>
                  <button className="btn">Add card</button>
                </div>
              </div>
            </div>
          </SwiperSlide >
          <SwiperSlide>
            <div class="card"><BiHeart />
              <div class="side front">
                <div class="img img1">
                  <img src={Moletompng} />
                </div>
                <div class="info">
                  <h2>Super S</h2>
                  <div class="reviews">
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                      <defs><path d="M0 0h24v24H0V0z" id="a" /></defs><clipPath id="b"><use overflow="visible" href="#a" /></clipPath><path clip-path="url(#b)" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                    </svg>
                  </div>
                  <button className="btn">Add card</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card"><BiHeart />
              <div class="side front">
                <div class="img img1">
                  <img src={Quadropng} />
                </div>
                <div class="info">
                  <h2>Super S</h2>
                  <div class="reviews">
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                      <defs><path d="M0 0h24v24H0V0z" id="a" /></defs><clipPath id="b"><use overflow="visible" href="#a" /></clipPath><path clip-path="url(#b)" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                    </svg>
                  </div>
                  <button className="btn">Add card</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card"><BiHeart />
              <div class="side front">
                <div class="img img1">
                  <img src={Almofadapng} />
                </div>
                <div class="info">
                  <h2>Super S</h2>
                  <div class="reviews">
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                      <defs><path d="M0 0h24v24H0V0z" id="a" /></defs><clipPath id="b"><use overflow="visible" href="#a" /></clipPath><path clip-path="url(#b)" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                    </svg>
                  </div>
                  <button className="btn">Add card</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card"><BiHeart />
              <div class="side front">
                <div class="img img1">
                  <img src={CanecaTudoBempng} />
                </div>
                <div class="info">
                  <h2>Super S</h2>
                  <div class="reviews">
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                      <defs><path d="M0 0h24v24H0V0z" id="a" /></defs><clipPath id="b"><use overflow="visible" href="#a" /></clipPath><path clip-path="url(#b)" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                    </svg>
                  </div>
                  <button className="btn">Add card</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card"><BiHeart />
              <div class="side front">
                <div class="img img1">
                  <img src={Cadernopng} />
                </div>
                <div class="info">
                  <h2>Super S</h2>
                  <div class="reviews">
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                      <defs><path d="M0 0h24v24H0V0z" id="a" /></defs><clipPath id="b"><use overflow="visible" href="#a" /></clipPath><path clip-path="url(#b)" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                    </svg>
                  </div>
                  <button className="btn">Add card</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card"><BiHeart />
              <div class="side front">
                <div class="img img1">
                  <img src={Canecapng} />
                </div>
                <div class="info">
                  <h2>Super S</h2>
                  <div class="reviews">
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                      <defs><path d="M0 0h24v24H0V0z" id="a" /></defs><clipPath id="b"><use overflow="visible" href="#a" /></clipPath><path clip-path="url(#b)" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                    </svg>
                  </div>
                  <button className="btn">Add card</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card"><BiHeart />
              <div class="side front">
                <div class="img img1">
                  <img src={Camisapng} />
                </div>
                <div class="info">
                  <h2>Super S</h2>
                  <div class="reviews">
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                      <defs><path d="M0 0h24v24H0V0z" id="a" /></defs><clipPath id="b"><use overflow="visible" href="#a" /></clipPath><path clip-path="url(#b)" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                    </svg>
                  </div>
                  <button className="btn">Add card</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card"><BiHeart />
              <div class="side front">
                <div class="img img1">
                  <img src={Caixapng} />
                </div>
                <div class="info">
                  <h2>Super S</h2>
                  <div class="reviews">
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    <svg fill="#FFC324" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                      <defs><path d="M0 0h24v24H0V0z" id="a" /></defs><clipPath id="b"><use overflow="visible" href="#a" /></clipPath><path clip-path="url(#b)" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                    </svg>
                  </div>
                  <div className="price">
                    <span>R$ 55,00 </span>
                  </div>
                  <div classname="button">
                    <button className="btn">Add card</button>
                  </div>
                  
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper >
      </div >
    </>
  )
}

export default Produtos;