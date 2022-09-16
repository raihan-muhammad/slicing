import styles from '../css/Form.module.scss';
import { CoutionIcon, QuestionMessageIcon } from '../images';
import FormTopBar from './FormTopBar';

const Form = () => {
	return (
		<>
			<div className={styles['banner__title']}>Registrasi</div>

			<div className={styles['parent__container']}>
				<div className={styles['inner__container']}>
					<div className={styles['form__regis__wrapper']}>
						<div className={styles['form__regis__content']}>
							<FormTopBar />
							<div className={styles['form__regis__content-wrapper']}>
								<div className={styles['form__regis__title']}>Informasi</div>
								<div className={styles['form__regis__select__wrapper']}>
									<label
										htmlFor='form__select'
										className={styles['form__label']}>
										Tipe <span>*</span>
									</label>
									<select id='form__select' aria-label='Default select example'>
										<option selected>Pribadi</option>
										<option value='1'>One</option>
										<option value='2'>Two</option>
										<option value='3'>Three</option>
									</select>
								</div>
								<div className={styles['form__regis__input__wrapper']}>
									<label for='email' className={styles['form__label']}>
										Email <span>*</span>
									</label>
									<input
										type='text'
										id='email'
										placeholder='Contoh: name@email.com'
									/>
								</div>
								<div className={styles['form__regis__input__wrapper']}>
									<label for='kata-sandi' className={styles['form__label']}>
										Kata Sandi <span>*</span>
									</label>
									<input
										type='text'
										id='kata-sandi'
										placeholder='Min. 8 karakter'
									/>
								</div>
								<div className={styles['form__regis__input__wrapper']}>
									<label for='konfirmasi' className={styles['form__label']}>
										Konfirmasi Kata Sandi <span>*</span>
									</label>
									<input
										type='text'
										id='konfirmasi'
										placeholder='Min. 8 karakter'
									/>
								</div>
								<div className={styles['form__toggle']}>
									<label for='konfirmasi' className={styles['form__label']}>
										Registrasi Juga Untuk <span>*</span>
									</label>
									<div className={styles['toggle__wrapper']}>
										<div className={styles['toggle']}>
											<input
												type='checkbox'
												name='toggle'
												id='toggle'
												className={styles['toggle-checkbox']}
											/>
											<label
												for='toggle'
												className={styles['toggle-label']}></label>
										</div>
										<label for='toggle' className={styles['form__label']}>
											Kampus / Unniversits
										</label>
									</div>
									<div className={styles['toggle__wrapper']}>
										<div className={styles['toggle']}>
											<input
												type='checkbox'
												name='toggle-2'
												id='toggle-2'
												className={styles['toggle-checkbox']}
											/>
											<label
												for='toggle-2'
												className={styles['toggle-label']}></label>
										</div>
										<label for='toggle-2' className={styles['form__label']}>
											Prakerja
										</label>
									</div>
								</div>

								<div className={styles['add__document__program__wrapper']}>
									<div className={styles['add__document__program-coution']}>
										<CoutionIcon />
										<p>
											Kamu harus melampirkan profil lembaga dan program
											pelatihan yang akan diajukan
										</p>
									</div>

									<div className={styles['form__add__document-col-2']}>
										<div className={styles['form__regis__input__wrapper']}>
											<label for='NIB' className={styles['form__label']}>
												Nomor Induk Berusaha ( NIB )
											</label>
											<input type='text' id='NIB' placeholder='' />
										</div>
										<div className={styles['form__regis__input__wrapper']}>
											<label
												for='masa-berlaku-nib'
												className={styles['form__label']}>
												Masa Berlaku NIB
											</label>
											<input type='date' id='masa-berlaku-nib' placeholder='' />
										</div>
									</div>

									<div className={styles['form__regis__input__wrapper']}>
										<label
											for='masa-berlaku-nib'
											className={[
												styles['form__label'],
												styles['add__document-label'],
											].join(' ')}>
											Profil Pelatihan Lembaga (PDF maks. 5MB)
											<span className={styles['add__document-label-icon']}>
												<QuestionMessageIcon />
											</span>
										</label>
										<div className={styles['add__document-input-wrapper']}>
											<label className={styles['add__document-input']}>
												<span className={styles['add_document-input-info']}>
													Masukkan file untuk diunggah atau
													<span>cari</span>
												</span>
												<input type='file' className='hidden' />
											</label>
										</div>
									</div>

									<div className={styles['form__regis__input__wrapper']}>
										<label
											for='masa-berlaku-nib'
											className={[
												styles['form__label'],
												styles['add__document-label'],
											].join(' ')}>
											Program Pelatihan (PDF maks. 5MB){' '}
											<span className={styles['add__document-label-icon']}>
												<QuestionMessageIcon />
											</span>
										</label>
										<div className={styles['add__document-input-wrapper']}>
											<label className={styles['add__document-input']}>
												<span className={styles['add_document-input-info']}>
													Masukkan file untuk diunggah atau
													<span>cari</span>
												</span>
												<input type='file' className='hidden' />
											</label>
										</div>
									</div>
								</div>

								<div className={styles['form__button__wrapper']}>
									<button className={styles['form__button__wrapper-button']}>
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

export default Form;
