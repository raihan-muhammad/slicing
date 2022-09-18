import { useState } from 'react';
import styles from '../css/Form.module.scss';
import { CoutionIcon, QuestionMessageIcon } from '../images';
import Button from './Button';
import FormTopBar from './FormTopBar';
import Input from './Input';
import Select from './Select';
import HeroFormFinish from '../images/hero-form-finished.png';

const CameraIcon = () => {
	return (
		<svg
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M24 8.00008C23.1867 8.00008 22.44 7.53341 22.0667 6.81342L21.1067 4.88008C20.4934 3.66675 18.8934 2.66675 17.5334 2.66675H14.48C13.1067 2.66675 11.5067 3.66675 10.8934 4.88008L9.93335 6.81342C9.56002 7.53341 8.81335 8.00008 8.00002 8.00008C5.10669 8.00008 2.81335 10.4401 3.00002 13.3201L3.69335 24.3334C3.85335 27.0801 5.33335 29.3334 9.01335 29.3334H22.9867C26.6667 29.3334 28.1334 27.0801 28.3067 24.3334L29 13.3201C29.1867 10.4401 26.8934 8.00008 24 8.00008ZM14 9.66675H18C18.5467 9.66675 19 10.1201 19 10.6667C19 11.2134 18.5467 11.6667 18 11.6667H14C13.4534 11.6667 13 11.2134 13 10.6667C13 10.1201 13.4534 9.66675 14 9.66675ZM16 24.1601C13.52 24.1601 11.4934 22.1467 11.4934 19.6534C11.4934 17.1601 13.5067 15.1467 16 15.1467C18.4934 15.1467 20.5067 17.1601 20.5067 19.6534C20.5067 22.1467 18.48 24.1601 16 24.1601Z'
				fill='#696969'
			/>
		</svg>
	);
};

const Form = () => {
	const [img, setImg] = useState();
	const [profilImg, setProfileImg] = useState();

	return (
		<>
			<div className={styles['banner__title']}>Registrasi</div>

			<div className={styles['parent__container']}>
				<div className={styles['inner__container']}>
					<div className={styles['form__regis__wrapper']}>
						<FormTopBar />
						<div className={styles['form__regis__content']}>
							{/* form register pribadi & lembaga */}
							{/* <div className={styles['form__regis__content-wrapper']}>
								<div className={styles['form__regis__title']}>Informasi</div>
								<Select isRequired={true} labelName='Tipe' />
								<Input
									placeholder={'Contoh: name@email.com'}
									label={'Email'}
									isRequired={true}
								/>
								<Input
									placeholder={'Min. 8 karakter'}
									label={'Kata Sandi'}
									isRequired={true}
								/>
								<Input
									placeholder={'Min. 8 karakter'}
									label={'Konfirmasi Kata Sandi'}
									isRequired={true}
								/>

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
												checked
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
												checked
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
										<Input
											placeholder={''}
											label={'Nomor Induk Berusaha ( NIB )'}
										/>
										<Input
											placeholder={''}
											label={'Masa Berlaku NIB'}
											type={'date'}
										/>
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
							</div> */}
							{/* form register pribadi & lembaga */}

							{/* form registrasi pribadi */}
							<div className={styles['form__regis__content-wrapper']}>
								<div className={styles['form__regis__title']}>Detail</div>

								<div className={styles['form__regis-upload-foto']}>
									<div class={styles['form__regis-input']}>
										<label
											class={[styles['label-wrapper'], styles['full']].join(
												' '
											)}>
											<div className={styles['input-label']}>
												<CameraIcon />
												<span>Logo / Foto</span>
											</div>
											<input
												type='file'
												onChange={(e) => {
													setImg(URL.createObjectURL(e.target.files[0]));
												}}
												class={styles['input-element']}
											/>
											{img && (
												<img
													className={[
														styles['image-preview'],
														styles['full'],
													].join(' ')}
													src={img}
													alt=''
												/>
											)}
										</label>
									</div>

									<div className={styles['form__regis-input']}>
										<label
											class={[styles['label-wrapper'], styles['profile']].join(
												' '
											)}>
											<div
												className={[
													styles['input-label'],
													styles['profile'],
												].join(' ')}>
												<CameraIcon />
												<span>Logo / Foto</span>
											</div>
											<input
												type='file'
												onChange={(e) =>
													setProfileImg(URL.createObjectURL(e.target.files[0]))
												}
												class={styles['input-element']}
											/>
											{setProfileImg && (
												<img
													className={[
														styles['image-preview'],
														styles['profile'],
													].join(' ')}
													src={profilImg}
													alt=''
												/>
											)}
										</label>
									</div>
								</div>

								<div className={styles['form__regis-column-two']}>
									<div className={styles['form__regis-column-left']}>
										<Input label={'Nama'} isRequired />
										<Input label={'Nomor Telepon'} isRequired />
										<Input label={'Kata Kunci Profil'} isRequired />
										<Input label={'Deskripsi Profil'} isRequired />
									</div>
									<div className={styles['form__regis-column-right']}>
										<Input
											label={'Bank'}
											placeholder={'Nama Nasabah'}
											isRequired
										/>
										<Input placeholder={'Nomor Rekening'} />
										<Input placeholder={'Nama Bank'} />
										<Input placeholder={'Kantor Cabang'} />
									</div>
								</div>
							</div>
							{/* form register pribadi */}

							{/* form register pribadi lanjutan */}
							{/* <div className={styles['form__regis__content-wrapper']}>
								<div className={styles['form__regis__title']}>
									Bussiness Detail
								</div>

								<div className={styles['form__regis-upload-foto']}>
									<div class={styles['form__regis-input']}>
										<label
											class={[styles['label-wrapper'], styles['full']].join(
												' '
											)}>
											<div className={styles['input-label']}>
												<CameraIcon />
												<span>Logo / Foto</span>
											</div>
											<input
												type='file'
												onChange={(e) => {
													setImg(URL.createObjectURL(e.target.files[0]));
												}}
												class={styles['input-element']}
											/>
											{img && (
												<img
													className={[
														styles['image-preview'],
														styles['full'],
													].join(' ')}
													src={img}
													alt=''
												/>
											)}
										</label>
									</div>

									<div className={styles['form__regis-input']}>
										<label
											class={[styles['label-wrapper'], styles['profile']].join(
												' '
											)}>
											<div
												className={[
													styles['input-label'],
													styles['profile'],
												].join(' ')}>
												<CameraIcon />
												<span>Logo / Foto</span>
											</div>
											<input
												type='file'
												onChange={(e) =>
													setProfileImg(URL.createObjectURL(e.target.files[0]))
												}
												class={styles['input-element']}
											/>
											{setProfileImg && (
												<img
													className={[
														styles['image-preview'],
														styles['profile'],
													].join(' ')}
													src={profilImg}
													alt=''
												/>
											)}
										</label>
									</div>
								</div>

								<div className={styles['form__regis-column-two']}>
									<div className={styles['form__regis-column-left']}>
										<Input label={'Gelar'} isRequired />
										<Input label={'Bidang Studi'} isRequired />
										<Input label={'Deskripsi Pendidikan'} isRequired />

										<div className={styles['form__regis__input__wrapper']}>
											<label for='tipe-kelas' className={styles['form__label']}>
												Tipe Kelas <span>*</span>
											</label>
											<div className={styles['form__regis__radio']}>
												<div className={styles['form__regis__input-radio']}>
													<input type='radio' id='workshop' checked />
													<label
														className={styles['radio-label']}
														for='workshop'>
														Workshop
													</label>
												</div>
												<div className={styles['form__regis__input-radio']}>
													<input type='radio' id='Prakerja' />
													<label
														className={styles['radio-label']}
														for='Prakerja'>
														Prakerja
													</label>
												</div>
											</div>
										</div>
										<Input label={'Jadwal Kelas'} />
									</div>
									<div className={styles['form__regis-column-right']}>
										<Input
											label={'Bank'}
											placeholder={'Nama Nasabah'}
											isRequired
										/>
										<Input placeholder={'Nomor Rekening'} />
										<Input placeholder={'Nama Bank'} />
										<Input placeholder={'Kantor Cabang'} />
									</div>
								</div>
							</div> */}
							{/* form register pribadi lanjutan */}

							{/* form register alamat pribadi */}
							{/* <div className={styles['form__regis__content-wrapper']}>
								<div className={styles['form__regis__title']}>Alamat</div>

								<div className={styles['form__regis-column-two']}>
									<div className={styles['form__regis-column-left']}>
										<div className={styles['form__regis-text-area']}>
											<label for='tipe-kelas' className={styles['form__label']}>
												Alamat <span>*</span>
											</label>
											<textarea placeholder='Tulis di sini'></textarea>
										</div>

										<Select labelName={'Provinsi'} isRequired />
										<Select labelName={'Kabupaten'} isRequired />
									</div>
									<div className={styles['form__regis-column-right']}>
										<Select
											labelName={'Kecamatan'}
											isRequired
											placeholder={'Nomor Rekening'}
										/>
										<Select
											labelName={'Kelurahan'}
											isRequired
											placeholder={'Nama Bank'}
										/>

										<Input type={'number'} label={'Kode Pos'} isRequired />
									</div>
								</div>
							</div> */}
							{/* form register alamat pribadi */}

							{/* form registrasi lembaga */}
							{/* <div className={styles['form__regis__content-wrapper']}>
								<div className={styles['form__regis__title']}>Alamat</div>

								<div className={styles['form__regis-upload-foto']}>
									<div class={styles['form__regis-input']}>
										<label
											class={[styles['label-wrapper'], styles['full']].join(
												' '
											)}>
											<div className={styles['input-label']}>
												<CameraIcon />
												<span>Logo / Foto</span>
											</div>
											<input
												type='file'
												onChange={(e) => {
													setImg(URL.createObjectURL(e.target.files[0]));
												}}
												class={styles['input-element']}
											/>
											{img && (
												<img
													className={[
														styles['image-preview'],
														styles['full'],
													].join(' ')}
													src={img}
													alt=''
												/>
											)}
										</label>
									</div>

									<div className={styles['form__regis-input']}>
										<label
											class={[styles['label-wrapper'], styles['profile']].join(
												' '
											)}>
											<div
												className={[
													styles['input-label'],
													styles['profile'],
												].join(' ')}>
												<CameraIcon />
												<span>Logo / Foto</span>
											</div>
											<input
												type='file'
												onChange={(e) =>
													setProfileImg(URL.createObjectURL(e.target.files[0]))
												}
												class={styles['input-element']}
											/>
											{setProfileImg && (
												<img
													className={[
														styles['image-preview'],
														styles['profile'],
													].join(' ')}
													src={profilImg}
													alt=''
												/>
											)}
										</label>
									</div>
								</div>

								<div className={styles['form__regis-column-two']}>
									<div className={styles['form__regis-column-left']}>
										<Input label={'Nama Lembaga'} isRequired />
										<Input label={'Nomor Telepon Lembaga'} isRequired />
										<Input label={'Nomor Telepon Pribadi'} isRequired />
										<Input label={'Kata Kunci Profil'} isRequired />
										<Input label={'Deskripsi Profil'} isRequired />
									</div>
									<div className={styles['form__regis-column-right']}>
										<Input
											label={'Bank'}
											placeholder={'Nama Nasabah'}
											isRequired
										/>
										<Input placeholder={'Nomor Rekening'} />
										<Input placeholder={'Nama Bank'} />
										<Input placeholder={'Kantor Cabang'} />
									</div>
								</div>
							</div> */}
							{/* form register lembaga */}

							{/* form registrasi alamat lembaga */}
							{/* <div className={styles['form__regis__content-wrapper']}>
								<div className={styles['form__regis__title']}>Alamat</div>

								<div className={styles['form__regis-column-two']}>
									<div className={styles['form__regis-column-left']}>
										<div className={styles['form__regis-text-area']}>
											<label for='tipe-kelas' className={styles['form__label']}>
												Alamat Lembaga <span>*</span>
											</label>
											<textarea placeholder='Tulis di sini'></textarea>
										</div>

										<Select labelName={'Provinsi'} isRequired />
										<Select labelName={'Kabupaten'} isRequired />
									</div>
									<div className={styles['form__regis-column-right']}>
										<Select
											labelName={'Kecamatan'}
											isRequired
											placeholder={'Nomor Rekening'}
										/>
										<Select
											labelName={'Kelurahan'}
											isRequired
											placeholder={'Nama Bank'}
										/>

										<Input type={'number'} label={'Kode Pos'} isRequired />
									</div>
								</div>
							</div> */}
							{/* form registrasi alamat lembaga */}

							{/* form unggah dokumen */}
							{/* <div className={styles['form__regis__content-wrapper']}>
								<div className={styles['form__regis__title']}>
									Unggah Dokumen
								</div>

								<div className={styles['add__document__program__wrapper']}>
									<div className={styles['form__regis__input__wrapper']}>
										<label
											for='masa-berlaku-nib'
											className={[
												styles['form__label'],
												styles['add__document-label'],
											].join(' ')}>
											NPWP{' '}
										</label>
										<div className={styles['add__document-input-wrapper']}>
											<label
												className={[
													styles['add__document-input'],
													styles['expand'],
												].join(' ')}>
												<span className={styles['add_document-input-info']}>
													Masukkan file untuk diunggah atau
													<span>cari</span>
												</span>
												<input type='file' className='hidden' />
											</label>
											<p>
												Mohon scan atau foto NPWP kamu. File yang diunggah hanya
												dalam bentuk jpg, atau png dengan ukuran maksimal 5 MB.
											</p>
										</div>
									</div>
								</div>
							</div> */}
							{/* form unggah dokumen */}

							{/* form registrasi selesai */}
							{/* <div className={styles['form__regis__content-wrapper']}>
								<div className={styles['form__regis__title']}>Selesai</div>
								<div className={styles['form__regis-finish']}>
									<img src={HeroFormFinish} alt='' width={655} height={225} />
								</div>
							</div> */}
							{/* form registrasi selesai */}

							<div className={styles['form__button']}>
								<Button title={'Sebelumnya'} nextButton={false} />
								<Button title={'Selanjutnya'} nextButton />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Form;
