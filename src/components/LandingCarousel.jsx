import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import {Pagination, Navigation} from 'swiper';
import {Container} from 'react-bootstrap';
import 'swiper/swiper-bundle.css';

const LandingCarousel = () => {
	return (
		<>
			<Container className='landing-swiper__carousel'>
				<h1 className='landing__h1'>Te van a encantar!...</h1>
				<Swiper slidesPerView={4} spaceBetween={30} slidesPerGroup={2} loop={true} loopFillGroupWithBlank={true} navigation={true} modules={[Pagination, Navigation]} className='mySwiper'>
					<SwiperSlide className='landing-swiper__container'>
						<img className='landing-swiper__img' src='https://res.cloudinary.com/ferjen/image/upload/v1669982923/veggieBox/img/dishes/525x350/bifes_balsamicos_papas_al_horno_qbprex.jpg' />
						<div className='landing-swiper__body px-4 py-2'>
							<h3 className='landing-swiper__title'>Salteado de cerdo con pimientos dulces y repollo</h3>
							<h5 className='landing-swiper__text'>con “Arroz” de Coliflor & Cebollitas Fritas Crujientes</h5>
							<div className='card--tag position-absolute bottom-0 end-0'>Keto</div>
							<div className='card--tag position-absolute bottom-0 start-0 bg-transparent'>🕒 20min</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</Container>
		</>
	);
};

export default LandingCarousel;
