import React, { useState } from 'react';
import styles from '../css/Pendaftaran.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {
	ArrowDown,
	ArrowLeftNavigation,
	ArrowRightNavigation,
	ArrowUp,
} from '../images';
import {
	tokpedImg,
	kemenakerImg,
	kariermuImg,
	pijarImg,
	pintariaImg,
	thumbnailClass,
	InstructorImg,
	CustomerServiceIcon,
	TopPageIcon,
	MindMapHeroImg,
	EnrollPrakerjaHero,
} from '../images';
import { useEffect } from 'react';

const HalamanPendaftaran = () => {
	const [faqOpen, setFaqOpen] = useState(false);
	const [listClass, setListClass] = useState([]);

	const getClassList = async () => {
		fetch('https://api.greatedu.co.id/api/v2/home/prakerja')
			.then((response) => response.json())
			.then((responJson) => setListClass(responJson.data));
	};

	useEffect(() => {
		getClassList();
	}, []);

	const faqData = [
		{
			id: 1,
			question: 'Bagaimana cara mendaftar Kartu Prakerja?',
			asnwer:
				'Kamu bisa mendaftar sebagai penerima Kartu Prakerja di www.prakerja.go.id Pastikan kamu sudah berusia minimal 18 tahun dan sedang tidak sekolah atau kuliah, ya.',
		},
		{
			id: 2,
			question:
				'Apa yang akan saya dapatkan setelah mengikuti kelas pelatihan Kartu Prakerja?',
			asnwer:
				'Kamu bisa mendaftar sebagai penerima Kartu Prakerja di www.prakerja.go.id Pastikan kamu sudah berusia minimal 18 tahun dan sedang tidak sekolah atau kuliah, ya.',
		},
		{
			id: 3,
			question: 'Bagaimana cara mengakses kelas pelatihan Kartu Prakerja?',
			asnwer:
				'Kamu bisa mendaftar sebagai penerima Kartu Prakerja di www.prakerja.go.id Pastikan kamu sudah berusia minimal 18 tahun dan sedang tidak sekolah atau kuliah, ya.',
		},
		{
			id: 4,
			question: 'Apakah pembelian kelas pelatihan bisa dibatalkan?',
			asnwer:
				'Kamu bisa mendaftar sebagai penerima Kartu Prakerja di www.prakerja.go.id Pastikan kamu sudah berusia minimal 18 tahun dan sedang tidak sekolah atau kuliah, ya.',
		},
		{
			id: 5,
			question: 'Kapan saya bisa menerima sertifikat pelatihan?',
			asnwer:
				'Kamu bisa mendaftar sebagai penerima Kartu Prakerja di www.prakerja.go.id Pastikan kamu sudah berusia minimal 18 tahun dan sedang tidak sekolah atau kuliah, ya.',
		},
		{
			id: 6,
			question: 'Kapan saya bisa menerima insentif Kartu Prakerja?',
			asnwer:
				'Kamu bisa mendaftar sebagai penerima Kartu Prakerja di www.prakerja.go.id Pastikan kamu sudah berusia minimal 18 tahun dan sedang tidak sekolah atau kuliah, ya.',
		},
		{
			id: 7,
			question:
				'Apakah saya akan tetap mendapatkan sertifikat jika tidak hadir dalam pelatihan?',
			asnwer:
				'Kamu bisa mendaftar sebagai penerima Kartu Prakerja di www.prakerja.go.id Pastikan kamu sudah berusia minimal 18 tahun dan sedang tidak sekolah atau kuliah, ya.',
		},
		{
			id: 8,
			question:
				'Apakah semua kelas workshop di GreatEdu bisa dibeli dengan Kartu Prakerja?',
			asnwer:
				'Kamu bisa mendaftar sebagai penerima Kartu Prakerja di www.prakerja.go.id Pastikan kamu sudah berusia minimal 18 tahun dan sedang tidak sekolah atau kuliah, ya.',
		},
		{
			id: 9,
			question:
				'Apa yang harus saya lakukan jika mengalami kendala kelas workshop GreatEdu?',
			asnwer:
				'Kamu bisa mendaftar sebagai penerima Kartu Prakerja di www.prakerja.go.id Pastikan kamu sudah berusia minimal 18 tahun dan sedang tidak sekolah atau kuliah, ya.',
		},
	];

	return (
		<>
			<div className={styles['parent-container']}>
				<div className={styles['client__info']}>
					<CustomerServiceIcon />
					<TopPageIcon />
				</div>
				<div className={styles['inner-container']}>
					{/* about */}
					<section className={styles['about__prakerja']}>
						<div className={styles['title']}>Tentang Kartu Prakerja</div>
						<div className={styles['columns__about']}>
							<div className='columns__about-left'>
								<MindMapHeroImg />
							</div>
							<div className={styles['columns__about-right']}>
								<ul style={{ listStyleType: 'disc' }}>
									<li>
										Program Kartu Prakerja adalah program pengembangan
										kompetensi kerja dan kewirausahaan yang digagas oleh
										Pemerintah untuk membantu para pekerja dan buruh yang
										terdampak PHK serta pelaku usaha mikro & kecil yang
										membutuhkan peningkatan kompetensi
									</li>
									<li>
										Diperuntukkan bagi WNI berusia min. 18 tahun, tidak sedang
										menempuh pendidikan formal
									</li>
									<li>
										Bantuan berupa subsidi pelatihan non tunai yang dapat
										digunakan untuk mengikuti pelatihan online di Mitra Prakerja
										dan lembaga pelatihan terpilih
									</li>
									<li>
										Penerima Kartu Prakerja akan memperoleh insentif setelah
										menyelesaikan seluruh pelatihan dan mengisi survey
									</li>
								</ul>
							</div>
						</div>
					</section>
					{/* end about */}

					{/* enroll__prakerja */}

					<section className={styles['enroll__prakerja']}>
						<div className={styles['title']}>Cara mengikuti Kelas Prakerja</div>
						<div className={styles['enroll_prakerja__content__parent']}>
							<Swiper
								spaceBetween={50}
								slidesPerView={3}
								// onSlideChange={() => console.log('slide change')}
								// onSwiper={(swiper) => console.log(swiper)}
							>
								<SwiperSlide>
									<EnrollPrakerjaHero />
								</SwiperSlide>
								<SwiperSlide>
									<EnrollPrakerjaHero />
								</SwiperSlide>
								<SwiperSlide>
									<EnrollPrakerjaHero />
								</SwiperSlide>
								<SwiperSlide>
									<EnrollPrakerjaHero />
								</SwiperSlide>
								<SwiperSlide>
									<EnrollPrakerjaHero />
								</SwiperSlide>
							</Swiper>
						</div>
						<div className={styles['enroll__prakerja__navigation__parent']}>
							<div className={styles['enroll__prakerja__navigation']}>
								<div className=''>
									<ArrowLeftNavigation />
								</div>
								<div className={styles['enroll__prakerja__navigation-info']}>
									Daftar sebagai penerima Kartu Prakerja di{' '}
									<a href='#'>www.prakerja.go.id</a>
								</div>
								<div className=''>
									<ArrowRightNavigation />
								</div>
							</div>
						</div>
					</section>
					{/* end enroll__prakerja */}

					{/* workshop */}
					<section className={styles['partner__section']}>
						<div className={styles['title']}>
							Mau ikut Workshop Prakerja GreatEdu?
						</div>
						<div className={styles['summary-title']}>
							Beli Voucher Kelasnya di Mitra Prakerja Ini, Yuk!
						</div>
						<div className={styles['partner']}>
							<div className={styles['partner-box']}>
								<img className={styles['partner-img']} src={tokpedImg} alt='' />
								<img
									className={styles['partner-img']}
									src={kariermuImg}
									alt=''
								/>
								<img
									className={styles['partner-img']}
									src={kemenakerImg}
									alt=''
								/>
								<img className={styles['partner-img']} src={pijarImg} alt='' />
								<img
									className={styles['partner-img']}
									src={pintariaImg}
									alt=''
								/>
							</div>
						</div>
					</section>
					{/* end workshop */}

					{/* prakerja class */}
					<section className={styles['prakerja-class-section']}>
						<div className={styles['title']}>Kartu Prakerja</div>
						<div className={styles['class-parent']}>
							{listClass.map((data) => {
								return (
									<div key={data.id} className={styles['class-item']}>
										<div className={styles['class-item-inner']}>
											<img src={thumbnailClass} alt='' />
											<div className={styles['class-title']}>{data.title}</div>
											<div className={styles['class-instructor-parent']}>
												<img
													src={InstructorImg}
													className={styles['class-instructor-avatar']}
													alt='Avatar'
												/>
												<div className={styles['class-instructor-name']}>
													Ayana Moon
												</div>
											</div>
											<div className={styles['class-item-body']}>
												Sticky notes serbaguna, indah men...
											</div>
											<div className={styles['class-item-price-parent']}>
												<div className={styles['class-item-price']}>
													Rp500.000
												</div>
												<div className={styles['class-item-price-dicount']}>
													1,550,000
												</div>
											</div>

											<div className={styles['class-item-sold']}>
												Terjual 105
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</section>
					{/* end prakerja class */}

					{/* faq */}
					<section className={styles['faq__section']}>
						<div className={styles['title']}>FAQ</div>
						<div className={styles['center']}>
							<div className={styles['faq-parent']}>
								{faqData.map((faq, i) => {
									return (
										<div key={faq.id} className={styles['faq-item']}>
											<div className={styles['faq-item-parent']}>
												<div
													className={styles['faq-question-wrapper']}
													onClick={() => setFaqOpen(!faqOpen)}>
													{faqOpen ? <ArrowUp /> : <ArrowDown />}
													<div className={styles['faq-question']}>
														{`${i + 1}. ${faq.question}`}
													</div>
												</div>
												{faqOpen ? (
													<div className={styles['faq-answer-wrapper']}>
														<div className={styles['faq-answer']}>
															Kamu bisa mendaftar sebagai penerima Kartu
															Prakerja di www.prakerja.go.id Pastikan kamu sudah
															berusia minimal 18 tahun dan sedang tidak sekolah
															atau kuliah, ya.
														</div>
													</div>
												) : (
													''
												)}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</section>
					{/* end faq */}
				</div>
			</div>
		</>
	);
};

export default HalamanPendaftaran;
