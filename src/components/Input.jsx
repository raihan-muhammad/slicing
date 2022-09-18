import React from 'react';
import styles from './Input.module.scss';

const Input = ({ label, isRequired, placeholder, type }) => {
	return (
		<div className={styles['form__input']}>
			<label for={label} className={styles['form__label']}>
				{label} {isRequired ? <span>*</span> : ''}
			</label>
			<input
				type={type ? type : 'text'}
				className={styles['form__input-element']}
				id={label}
				style={label ? {} : { marginTop: '30px' }}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
