import React from 'react';
import styles from './select.module.scss';

function Select({ labelName, isRequired }) {
	return (
		<div className={styles['form__regis__select__wrapper']}>
			<label htmlFor='form__select' className={styles['form__label']}>
				{labelName} {isRequired ? <span>*</span> : ''}
			</label>
			<select id='form__select' aria-label='Default select example'>
				<option defaultChecked>Pribadi</option>
				<option value='lembaga'>Lembaga</option>
			</select>
		</div>
	);
}

export default Select;
