import React from 'react';
import styles from './css/Pendaftaran.module.scss';
import mindMapImage from './images/mind-map-hero.svg';
import tokpedImg from './images/tokped.png';
import kemenakerImg from './images/kemenaker.png';
import kariermuImg from './images/kariermu.png';
import pijarImg from './images/pijar.png';
import pintariaImg from './images/pintaria.png';
import thumbnail from './images/Thumbnail.png';

const HalamanPendaftaran = () => {
	return (
		<>
			<div className={styles['parent-container']}>
				<div className={styles['inner-container']}>
					<div className={styles['title']}>Tentang Kartu Prakerja</div>
					<div className={styles['columns__about-2']}>
						<div className='columns__about-left'>
							<img className={styles['image-hero']} src={mindMapImage} />
						</div>
						<div className={styles['columns__about-right']}>
							<ul style={{ listStyleType: 'disc' }}>
								<li>
									Program Kartu Prakerja adalah program pengembangan kompetensi
									kerja dan kewirausahaan yang digagas oleh Pemerintah untuk
									membantu para pekerja dan buruh yang terdampak PHK serta
									pelaku usaha mikro & kecil yang membutuhkan peningkatan
									kompetensi
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

					{/* how to */}
					<div className={styles['title']}>Cara mengikuti Kelas Prakerja</div>
					{/* end how to */}

					{/* workshop */}
					<div className={styles['title']}>
						Mau ikut Workshop Prakerja GreatEdu?
					</div>
					<div className={styles['summary-title']}>
						Beli Voucher Kelasnya di Mitra Prakerja Ini, Yuk!
					</div>
					<div className={styles['partner']}>
						<div className={styles['partner-box']}>
							<img className={styles['partner-img']} src={tokpedImg} alt='' />
							<img className={styles['partner-img']} src={kariermuImg} alt='' />
							<img
								className={styles['partner-img']}
								src={kemenakerImg}
								alt=''
							/>
							<img className={styles['partner-img']} src={pijarImg} alt='' />
							<img className={styles['partner-img']} src={pintariaImg} alt='' />
						</div>
					</div>
					{/* end workshop */}

					{/* prakerja class */}
					<div className={styles['title']}>Kartu Prakerja</div>
					<div className={styles['class-parent']}>
						<div className={styles['class-item']}>
							<div className={styles['class-item-inner']}>
								<img src={thumbnail} alt='' />
								<div className={styles['class-title']}>Card TItle</div>
								<div className={styles['class-author-parent']}>
									<img
										src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
										className={styles['class-author-avatar']}
										alt='Avatar'
									/>
									<div className={styles['class-author-name']}>Ayana Moon</div>
								</div>
								<div className={styles['class-item-body']}>
									Sticky notes serbaguna, indah men...
								</div>
								<div className={styles['class-item-price-parent']}>
									<div className={styles['class-item-price']}>Rp500.000</div>
									<div className={styles['class-item-price-dicount']}>
										1,550,000
									</div>
								</div>

								<div className={styles['class-item-sold']}>Terjual 105</div>
							</div>
						</div>
						<div className={styles['class-item']}>2</div>
						<div className={styles['class-item']}>3</div>
						<div className={styles['class-item']}>4</div>
						<div className={styles['class-item']}>5</div>
					</div>
					{/* end prakerja class */}
				</div>
			</div>
		</>
	);
};

export default HalamanPendaftaran;
