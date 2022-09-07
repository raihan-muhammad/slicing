// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../css/Pendaftaran.module.scss';

// Import Swiper styles
import 'swiper/css';
import { ArrowLeftNavigation, ArrowRightNavigation } from '../images';

const EnrollPrakerja = () => {
	return (
		<div className='container'>
			<div className={styles['enroll_prakerja__content__parent']}>
				<Swiper
					spaceBetween={50}
					slidesPerView={3}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}>
					<SwiperSlide>Slide 1</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
				</Swiper>
			</div>
			<div className={styles['enroll__prakerja__navigation']}>
				<ArrowLeftNavigation />
				<div className={styles['enroll__prakerja__navigation-info']}>
					Daftar sebagai penerima Kartu Prakerja di{' '}
					<a href='#'>www.prakerja.go.id</a>
				</div>
				<ArrowRightNavigation />
			</div>
		</div>
	);
};

export default EnrollPrakerja;
