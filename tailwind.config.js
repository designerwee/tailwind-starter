/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./build/*.html'],
	theme: {
		extend: {
			fontFamily: {
				exo2: "'Exo 2', sans-serif",
			},
			fontSize: {
				'display-1': [
					'4.209rem',
					{
						lineHeight: '1.1',
					},
				],
				'display-2': [
					'3.157rem',
					{
						lineHeight: '1.1',
					},
				],
				'display-3': [
					'2.369rem',
					{
						lineHeight: '1.1',
					},
				],
				'display-4': [
					'1.777rem',
					{
						lineHeight: '1.1',
					},
				],
				'display-5': [
					'1.333rem',
					{
						lineHeight: '1.1',
					},
				],
			},
		},
	},
	plugins: [],
};
