import React from 'react';
import styles from './button.module.scss';

const Button = ({ title, nextButton }) => {
	return (
		<button
			className={
				nextButton ? styles['form__button-next'] : styles['form__button-prev']
			}>
			{title}
		</button>
	);
};

export default Button;
