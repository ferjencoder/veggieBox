import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Pagination, Navigation } from 'swiper';
import { Container } from 'react-bootstrap';
import '../assets/scss/style.scss';
import 'swiper/swiper-bundle.css';

const LandingCarousel = () => {
  return (
    <>
      <Container className="landing-swiper__carousel">
        <h1 className="landing__h1">Te van a encantar!...</h1>
        <Swiper slidesPerView={4} spaceBetween={30} slidesPerGroup={2} loop={true} loopFillGroupWithBlank={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
          <SwiperSlide className="landing-swiper__container">
            <img className="landing-swiper__img" src="https://res.cloudinary.com/ferjen/image/upload/v1669982923/veggieBox/img/dishes/525x350/bifes_balsamicos_papas_al_horno_qbprex.jpg" />
            <div className="landing-swiper__body px-4 py-2">
              <h3 className="landing-swiper__title">Salteado de cerdo con pimientos dulces y repollo</h3>
              <h5 className="landing-swiper__text">con “Arroz” de Coliflor & Cebollitas Fritas Crujientes</h5>
              <div className="card--tag position-absolute bottom-0 end-0">Keto</div>
              <div className="card--tag position-absolute bottom-0 start-0 bg-transparent">🕒 20min</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="landing-swiper__container">
            <img className="landing-swiper__img" src="https://res.cloudinary.com/ferjen/image/upload/v1669985232/veggieBox/img/dishes/525x350/bunuelos_de_garbanzos_al_curry_ub9e5c.jpg" />
            <div className="landing-swiper__body px-4 py-2">
              <h3 className="landing-swiper__title">Salteado de cerdo con pimientos dulces y repollo</h3>
              <h5 className="landing-swiper__text">con “Arroz” de Coliflor & Cebollitas Fritas Crujientes</h5>
              <div className="card--tag position-absolute bottom-0 end-0">Keto</div>
              <div className="card--tag position-absolute bottom-0 start-0 bg-transparent">🕒 20min</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="landing-swiper__container">
            <img className="landing-swiper__img" src="https://res.cloudinary.com/ferjen/image/upload/v1669989479/veggieBox/img/dishes/525x350/tagliatelle_cremoso_de_camarones_tvsh94.jpg" />
            <div className="landing-swiper__body px-4 py-2">
              <h3 className="landing-swiper__title">Salteado de cerdo con pimientos dulces y repollo</h3>
              <h5 className="landing-swiper__text">con “Arroz” de Coliflor & Cebollitas Fritas Crujientes</h5>
              <div className="card--tag position-absolute bottom-0 end-0">Keto</div>
              <div className="card--tag position-absolute bottom-0 start-0 bg-transparent">🕒 20min</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="landing-swiper__container">
            <img className="landing-swiper__img" src="https://res.cloudinary.com/ferjen/image/upload/v1669991019/veggieBox/img/dishes/525x350/wraps_veganos_de_lechuga_y_garbanzos_al_curry_jbjrvg.jpg" />
            <div className="landing-swiper__body px-4 py-2">
              <h3 className="landing-swiper__title">Salteado de cerdo con pimientos dulces y repollo</h3>
              <h5 className="landing-swiper__text">con “Arroz” de Coliflor & Cebollitas Fritas Crujientes</h5>
              <div className="card--tag position-absolute bottom-0 end-0">Keto</div>
              <div className="card--tag position-absolute bottom-0 start-0 bg-transparent">🕒 20min</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="landing-swiper__container">
            <img className="landing-swiper__img" src="https://res.cloudinary.com/ferjen/image/upload/v1669991877/veggieBox/img/dishes/525x350/chili_de_carne_y_porotos_negros_a_la_olla_l237hg.jpg" />
            <div className="landing-swiper__body px-4 py-2">
              <h3 className="landing-swiper__title">Salteado de cerdo con pimientos dulces y repollo</h3>
              <h5 className="landing-swiper__text">con “Arroz” de Coliflor & Cebollitas Fritas Crujientes</h5>
              <div className="card--tag position-absolute bottom-0 end-0">Keto</div>
              <div className="card--tag position-absolute bottom-0 start-0 bg-transparent">🕒 20min</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="landing-swiper__container">
            <img className="landing-swiper__img" src="https://res.cloudinary.com/ferjen/image/upload/v1669996803/veggieBox/img/dishes/525x350/tostadas_de_carne_con_queso_zoz2l9.jpg" />
            <div className="landing-swiper__body px-4 py-2">
              <h3 className="landing-swiper__title">Salteado de cerdo con pimientos dulces y repollo</h3>
              <h5 className="landing-swiper__text">con “Arroz” de Coliflor & Cebollitas Fritas Crujientes</h5>
              <div className="card--tag position-absolute bottom-0 end-0">Keto</div>
              <div className="card--tag position-absolute bottom-0 start-0 bg-transparent">🕒 20min</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="landing-swiper__container">
            <img className="landing-swiper__img" src="https://res.cloudinary.com/ferjen/image/upload/v1669997361/veggieBox/img/dishes/525x350/tiras_de_pollo_teriyaki_cgtuty.jpg" />
            <div className="landing-swiper__body px-4 py-2">
              <h3 className="landing-swiper__title">Salteado de cerdo con pimientos dulces y repollo</h3>
              <h5 className="landing-swiper__text">con “Arroz” de Coliflor & Cebollitas Fritas Crujientes</h5>
              <div className="card--tag position-absolute bottom-0 end-0">Keto</div>
              <div className="card--tag position-absolute bottom-0 start-0 bg-transparent">🕒 20min</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="landing-swiper__container">
            <img className="landing-swiper__img" src="https://res.cloudinary.com/ferjen/image/upload/v1669998552/veggieBox/img/dishes/525x350/curry_vegano_de_coco_y_garbanzos_zlqzrc.jpg" />
            <div className="landing-swiper__body px-4 py-2">
              <h3 className="landing-swiper__title">Salteado de cerdo con pimientos dulces y repollo</h3>
              <h5 className="landing-swiper__text">con “Arroz” de Coliflor & Cebollitas Fritas Crujientes</h5>
              <div className="card--tag position-absolute bottom-0 end-0">Keto</div>
              <div className="card--tag position-absolute bottom-0 start-0 bg-transparent">🕒 20min</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="landing-swiper__container">
            <img className="landing-swiper__img" src="https://res.cloudinary.com/ferjen/image/upload/v1669999374/veggieBox/img/dishes/525x350/salmon_con_especias_toscanas_y_cuscus_con_ajo_mdldge.jpg" />
            <div className="landing-swiper__body px-4 py-2">
              <h3 className="landing-swiper__title">Salteado de cerdo con pimientos dulces y repollo</h3>
              <h5 className="landing-swiper__text">con “Arroz” de Coliflor & Cebollitas Fritas Crujientes</h5>
              <div className="card--tag position-absolute bottom-0 end-0">Keto</div>
              <div className="card--tag position-absolute bottom-0 start-0 bg-transparent">🕒 20min</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="landing-swiper__container">
            <img className="landing-swiper__img" src="https://res.cloudinary.com/ferjen/image/upload/v1670005286/veggieBox/img/dishes/525x350/bibimbap_coreano_de_carne_cdbs3r.jpg" />
            <div className="landing-swiper__body px-4 py-2">
              <h3 className="landing-swiper__title">Salteado de cerdo con pimientos dulces y repollo</h3>
              <h5 className="landing-swiper__text">con “Arroz” de Coliflor & Cebollitas Fritas Crujientes</h5>
              <div className="card--tag position-absolute bottom-0 end-0">Keto</div>
              <div className="card--tag position-absolute bottom-0 start-0 bg-transparent">🕒 20min</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="landing-swiper__container">
            <img className="landing-swiper__img" src="https://res.cloudinary.com/ferjen/image/upload/v1670005494/veggieBox/img/dishes/525x350/hoagies_de_champinones_y_mozzarella_ozcojg.jpg" />
            <div className="landing-swiper__body px-4 py-2">
              <h3 className="landing-swiper__title">Salteado de cerdo con pimientos dulces y repollo</h3>
              <h5 className="landing-swiper__text">con “Arroz” de Coliflor & Cebollitas Fritas Crujientes</h5>
              <div className="card--tag position-absolute bottom-0 end-0">Keto</div>
              <div className="card--tag position-absolute bottom-0 start-0 bg-transparent">🕒 20min</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="landing-swiper__container">
            <img className="landing-swiper__img" src="https://res.cloudinary.com/ferjen/image/upload/v1670008043/veggieBox/img/dishes/525x350/cuencos_veganos_picantes_de_coliflor_mex-mex_qlusny.jpg" />
            <div className="landing-swiper__body px-4 py-2">
              <h3 className="landing-swiper__title">Salteado de cerdo con pimientos dulces y repollo</h3>
              <h5 className="landing-swiper__text">con “Arroz” de Coliflor & Cebollitas Fritas Crujientes</h5>
              <div className="card--tag position-absolute bottom-0 end-0">Keto</div>
              <div className="card--tag position-absolute bottom-0 start-0 bg-transparent">🕒 20min</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
};

export default LandingCarousel;
