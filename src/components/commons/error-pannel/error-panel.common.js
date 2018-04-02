export default {
	props: {
		message: {
			type: String,
			default: 'Something Error'
		},
		showButton: {
			type: Boolean,
			default: true
		},
		buttonText: {
			type: String,
			default: 'Reload'
		}
	},
	methods: {
		fireEvent() {
			this.$emit('onErrorHandled');
		}
	}
}