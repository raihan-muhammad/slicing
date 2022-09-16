import styles from '../css/FormDetailLembaga.module.scss';
import FormTopBar from './FormTopBar';

const FormDetailLembaga = () => {
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
											<label
												for='nama-lembaga'
												className={styles['form__label']}>
												Nama Lembaga <span>*</span>
											</label>
											<input type='text' id='nama-lembaga' />
										</div>
										<div className={styles['form__regis__input__wrapper']}>
											<label
												for='nomor-telepon-lembaga'
												className={styles['form__label']}>
												Nomor Telepon Lembaga <span>*</span>
											</label>
											<input type='text' id='nomor-telepon-lembaga' />
										</div>
										<div className={styles['form__regis__input__wrapper']}>
											<label
												for='nomor-telepon-pribadi'
												className={styles['form__label']}>
												Nomor Telepon Pribadi <span>*</span>
											</label>
											<input type='text' id='nomor-telepon-pribadi' />
										</div>
										<div className={styles['form__regis__input__wrapper']}>
											<label
												for='kata-kunci-profil'
												className={styles['form__label']}>
												Kata Kunci Profil <span>*</span>
											</label>
											<input type='text' id='kata-kunci-profil' />
										</div>
										<div className={styles['form__regis__input__wrapper']}>
											<label
												for='Deskripsi Profil'
												className={styles['form__label']}>
												Deskripsi Profil <span>*</span>
											</label>
											<input type='text' id='deskripsi-profil' />
										</div>
									</div>
									<div className={styles['form__regis-column-left']}>
										<div className={styles['form__regis__input__wrapper']}>
											<label for='bank' className={styles['form__label']}>
												Bank <span>*</span>
											</label>
											<input type='text' id='bank' placeholder='Nama Nasabah' />
										</div>
										<div className={styles['form__regis__input__wrapper']}>
											<input
												type='text'
												id='nomor-rekening'
												placeholder='Nomor Rekening'
											/>
										</div>
										<div className={styles['form__regis__input__wrapper']}>
											<input
												type='text'
												id='nama-bank'
												placeholder='Nama Bank'
											/>
										</div>
										<div className={styles['form__regis__input__wrapper']}>
											<input
												type='text'
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

export default FormDetailLembaga;
