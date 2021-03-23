import resolve from '@rollup/plugin-node-resolve'

export default {
	input: 'src/editor.js',
	output: {
		file: 'public/editor.js',
		sourcemap: true
	},
	plugins: [
		resolve()
	]
}
