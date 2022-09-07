const plugin = require('tailwindcss/plugin');

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
	},
	content: ['./pages/*/.{js,ts,jsx,tsx}', './components/*/.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				neutral: {
					10: '#FFFFFF',
					20: '#DCDCDC',
					30: '#D5D5D5',
					40: '#C9C9C9',
					50: '#AEAEAE',
					60: '#8E8E8E',
					70: '#696969',
					80: '#575757',
					90: '#393939',
					100: '#040404',
				},
				primary: {
					blue: {
						main: '#1993AB',
						surface: '#D1E9EE',
						border: '#B2DBE3',
						hover: '#157A8E',
						pressed: '#0C4955',
						focus: '#1993AB33',
					},
					orange: {
						main: '#F4B82B',
						surface: '#FDF1D5',
						border: '#FBE7B8',
						hover: '#CB9924',
						pressed: '#7A5C15',
						focus: '#F4B82B33',
					},
				},
				danger: {
					main: '#CB3A31',
					surface: '#FFF4F2',
					border: '#EEB4B0',
					hover: '#BD251C',
					pressed: '#731912',
				},
				warning: {
					main: '#CD7B2E',
					surface: '#FFF9F2',
					border: '#EECEB0',
					hover: '#BF6919',
					pressed: '#734011',
				},
				success: {
					main: '#43936C',
					surface: '#F7F7F7',
					border: '#B8DBCA',
					hover: '#367A59',
					pressed: '#20573D',
				},
				info: {
					main: '#3267E3',
					surface: '#F0F3FF',
					border: '#B1C5F6',
					hover: '#114CD6',
					pressed: '#11317D',
				},
			},
			boxShadow: {
				normal:
					'0px 6px 6px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4)',
				medium:
					'0px 12px 12px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4)',
				large:
					'0px 8px 24px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4)',
				'extra-large':
					'0px 32px 32px -8px rgba(0, 0, 0, 0.08), 0px 0px 32px -8px rgba(0, 0, 0, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.2)',
				input: 'inset 1px 2px 2px rgba(0, 0, 0, 0.12)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio'),
		require('@headlessui/tailwindcss')({ prefix: 'ui' }),
		plugin(function ({ addComponents }) {
			addComponents({
				'.ds-text-tiny': {
					'font-size': '11px',
					'line-height': '15px',
					'letter-spacing': '0.005em',
				},
				'.ds-text-tiny-m': {
					'font-size': '11px',
					'line-height': '15px',
					'letter-spacing': '0.005em',
					'font-weight': '500',
				},
				'.ds-text-mini': {
					'font-size': '12px',
					'line-height': '16px',
					'font-feature-settings': "'haln' on",
				},
				'.ds-text-mini-m': {
					'font-size': '12px',
					'line-height': '16px',
					'font-feature-settings': "'haln' on",
					'font-weight': '500',
				},
				'.ds-text-small': {
					'font-size': '13px',
					'line-height': '18px',
					'letter-spacing': '-0.003em',
				},
				'.ds-text-small-m': {
					'font-size': '13px',
					'line-height': '18px',
					'letter-spacing': '-0.003em',
					'font-weight': '500',
				},
				'.ds-text-medium': {
					'font-size': '14px',
					'line-height': '20px',
					'letter-spacing': '-0.006em',
				},
				'.ds-text-medium-m': {
					'font-size': '14px',
					'line-height': '20px',
					'letter-spacing': '-0.006em',
					'font-weight': '500',
				},
				'.ds-text-large': {
					'font-size': '16px',
					'line-height': '22px',
					'letter-spacing': '-0.011em',
				},
				'.ds-text-large-m': {
					'font-size': '16px',
					'line-height': '22px',
					'letter-spacing': '-0.011em',
					'font-weight': '500',
				},
				'.ds-text-jumbo': {
					'font-size': '18px',
					'line-height': '25px',
					'letter-spacing': '-0.014em',
				},
				'.ds-text-jumbo-m': {
					'font-size': '18px',
					'line-height': '25px',
					'letter-spacing': '-0.014em',
					'font-weight': '500',
				},
				'.ds-text-heading-s': {
					'font-size': '20px',
					'line-height': '28px',
					'letter-spacing': '-0.017em',
				},
				'.ds-text-heading-m': {
					'font-weight': '500',
					'font-size': '28px',
					'line-height': '36px',
					'letter-spacing': '-0.021em',
				},
				'.ds-text-heading-l': {
					'font-weight': '500',
					'font-size': '36px',
					'line-height': '44px',
					'letter-spacing': '-0.022em',
				},
			});
		}),
	],
};
