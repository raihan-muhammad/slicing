import React from 'react';
import styles from '../css/FormTopBar.module.scss';

const FormTopBar = () => {
	return (
		<>
			<div className={styles['form__regis__content-topbar']}>
				<div className={[styles['form__regis__content-topbar-item']].join(' ')}>
					<input
						type='checkbox'
						name='informasi'
						id='infomasi'
						readOnly
						disabled
						checked
					/>
					<label for='infomasi'>Informasi</label>
				</div>
				<div className={styles['form__regis__content-topbar-item']}>
					<input
						type='checkbox'
						name='detail'
						id='detail'
						readOnly
						disabled
						checked
					/>
					<label for='detail'>Detail</label>
				</div>
				<div
					className={[
						styles['form__regis__content-topbar-item'],
						styles['active'],
					].join(' ')}>
					<input
						type='checkbox'
						name='alamat'
						id='alamat'
						readOnly
						disabled
						checked
					/>
					<label for='alamat'>Alamat</label>
				</div>
				<div className={[styles['form__regis__content-topbar-item']]}>
					<input
						type='checkbox'
						name='unggahDokumen'
						id='unggahDokumen'
						readOnly
						disabled
					/>
					<label for='unggahDokumen'>Unggah Dokumen</label>
				</div>
				<div className={[styles['form__regis__content-topbar-item']]}>
					<input
						type='checkbox'
						name='selesai'
						id='selesai'
						readOnly
						disabled
					/>
					<label for='selesai'>Selesai</label>
				</div>
			</div>
		</>
	);
};

export default FormTopBar;
