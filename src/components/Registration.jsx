import React from 'react';
import styles from '../css/Registration.module.scss';
import { RegistrationHero } from '../images';

const Registration = () => {
	return (
		<>
			<div className={styles['banner__title']}>Registrasi</div>
			<div className={styles['parent__container']}>
				<div className={styles['inner__container']}>
					<div className={styles['content__registration']}>
						<div className={styles['content__title']}>Syarat & Ketentuan</div>
						<div className={styles['content__registration-point-parent']}>
							<div className={styles['content__registration-point-item']}>
								<div className={styles['hero']}>
									<RegistrationHero />
								</div>

								<div
									className={styles['content__registration-point-item-title']}>
									Persetujuan
								</div>
								<div
									className={styles['content__registration-point-item-info']}>
									Diperlukan waktu sekitar lima belas hari kerja agar
									pengajuanmu dapat disetujui oleh admin kami. Hanya lembaga,
									komunitas, dan guru privat yang dapat menyelenggarakan atau
									berbagi kelas yang akan disetujui.
								</div>
							</div>
							<div className={styles['content__registration-point-item']}>
								<RegistrationHero />
								<div
									className={styles['content__registration-point-item-title']}>
									Akun Gratis
								</div>
								<div
									className={styles['content__registration-point-item-info']}>
									Semua akun instruktur tidak dikenakan biaya. Namun, dianjurkan
									untuk login di <span>greatedu.com</span> secara berkala untuk
									mencegah sebagai pengguna akun yang tidak aktif. Hal ini
									disebabkan setiap akun yang tidak aktif atau kemungkinan akan
									dihapus secara permanen dari database kami
								</div>
							</div>
							<div className={styles['content__registration-point-item']}>
								<RegistrationHero />
								<div
									className={styles['content__registration-point-item-title']}>
									Workshop
								</div>
								<div
									className={styles['content__registration-point-item-info']}>
									Hanya akun instruktur yang terdaftar yang dapat membuat kurus
									dan workshop. Silakan kirim email kepada kami di
									<span> workshop@greatedu.com </span> untuk permintaan apapun
									terkait penyelenggaraan workshop-mu sendiri jika kamu bukan
									seorang instruktur
								</div>
							</div>
						</div>

						<div className={styles['registration__assent']}>
							<p>
								Dengan mengklik “Saya Setuju”, menunjukkan bahwa kamu telah
								membaca dan menyetujui persyaratan yang disajikan dalam{' '}
								<a href='#'>Syarat dan Ketentuan</a> kami.
							</p>
						</div>
						<div className={styles['divider']}>
							<hr />
						</div>

						<div className={styles['content__registration_action_wrapper']}>
							<div className={styles['btn__wrapper']}>
								<button
									className={[styles['btn-disagree'], styles['btn']].join(' ')}>
									Tidak Setuju
								</button>
								<button
									className={[styles['btn-agree'], styles['btn']].join(' ')}>
									{' '}
									Setuju
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Registration;
