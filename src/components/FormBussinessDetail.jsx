import React from 'react';
import styles from '../css/FormBussinessDetail.module.scss';
import FormTopBar from './FormTopBar';

const FormBussinessDetail = () => {
	return (
		<>
			<div className={styles['banner__title']}>Registrasi</div>

			<div className={styles['parent__container']}>
				<div className={styles['inner__container']}>
					<div className={styles['form__regis__wrapper']}>
						<div className={styles['form__regis__content']}>
							<FormTopBar />
							<div className={styles['form__regis__content-wrapper']}>
								<div className={styles['form__regis__title']}>Detail</div>

								<div className={styles['form__regis-column-two']}>
									<div className={styles['form__regis-column-right']}>
										<div className={styles['form__regis__input__wrapper']}>
											<label for='gelar' className={styles['form__label']}>
												Gelar <span>*</span>
											</label>
											<input
												type='text'
												className={styles['form__regis__input']}
												id='gelar'
											/>
										</div>
										<div className={styles['form__regis__input__wrapper']}>
											<label
												for='bidang-studi'
												className={styles['form__label']}>
												Bidang Studi <span>*</span>
											</label>
											<input
												type='text'
												className={styles['form__regis__input']}
												id='bidang-studi'
											/>
										</div>

										<div className={styles['form__regis__input__wrapper']}>
											<label
												for='deskripsi-pendidikan'
												className={styles['form__label']}>
												Deskripsi Pendidikan <span>*</span>
											</label>
											<input
												type='text'
												className={styles['form__regis__input']}
												id='deskripsi-pendidikan'
											/>
										</div>
										<div className={styles['form__regis__input__wrapper']}>
											<label for='tipe-kelas' className={styles['form__label']}>
												Tipe Kelas <span>*</span>
											</label>
											<div className={styles['form__regis__input-radio']}>
												<input type='radio' id='workshop' />
												<label for='workshop'>Workshop</label>
												<input type='radio' id='kursus' />
												<label for='kursus'>Kursur</label>
											</div>
										</div>
										<div className={styles['form__regis__input__wrapper']}>
											<label
												for='jadwal-kelas'
												className={styles['form__label']}>
												Jadwal Kelas <span>*</span>
											</label>
											<input
												type='text'
												className={styles['form__regis__input']}
												id='jadwal-kelas'
											/>
										</div>
									</div>
									<div className={styles['form__regis-column-left']}>
										<div className={styles['form__regis__input__wrapper']}>
											<label for='bank' className={styles['form__label']}>
												Bank <span>*</span>
											</label>
											<input
												type='text'
												className={styles['form__regis__input']}
												id='bank'
												placeholder='Nama Nasabah'
											/>
										</div>
										<div className={styles['form__regis__input__wrapper']}>
											<input
												type='text'
												className={styles['form__regis__input']}
												id='nomor-rekening'
												placeholder='Nomor Rekening'
											/>
										</div>
										<div className={styles['form__regis__input__wrapper']}>
											<input
												type='text'
												className={styles['form__regis__input']}
												id='nama-bank'
												placeholder='Nama Bank'
											/>
										</div>
										<div className={styles['form__regis__input__wrapper']}>
											<input
												type='text'
												className={styles['form__regis__input']}
												id='kantor-cabang'
												placeholder='Kantor Cabang'
											/>
										</div>
									</div>
								</div>

								<div className={styles['form__button__wrapper']}>
									<button
										className={styles['form__button__wrapper-button-prev']}>
										Sebelumnya
									</button>

									<button
										className={styles['form__button__wrapper-button-next']}>
										Selanjutnya
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FormBussinessDetail;
