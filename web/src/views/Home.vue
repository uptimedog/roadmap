<!-- @format -->

<template>
	<div class="home">
		<br />
		<img alt="logo" src="../assets/logo.png" width="200" />
		<div class="hello">
			<br /><br /><br />
			<strong>Welcome to Uptimedog</strong>
			<p>
				If you have any suggestions, bug reports, or annoyances
				<br />please report them to our
				<a
					href="https://github.com/uptimedog/Uptimedog/issues"
					target="_blank"
					rel="noopener"
					>issue tracker</a
				>.
			</p>
			<br />
			<small>
				<b-icon pack="fas" icon="broadcast-tower" size="is-small"> </b-icon>
				<strong
					v-bind:class="{
						'has-text-info': api_server_status != 'down',
						'has-text-danger': api_server_status == 'down',
					}"
				>
					API Server is {{ api_server_status }}</strong
				><br />
				Made with
				<span class="icon has-text-danger"><i class="fas fa-heart"></i></span>
				by
				<a href="https://github.com/clivern" target="_blank" rel="noopener"
					>Clivern</a
				><br />
			</small>
		</div>
	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
	color: #42b983;
}
</style>

<script>
export default {
	name: "home",

	data() {
		return {
			api_server_status: "down",

			// Loader
			loader: {
				isFullPage: true,
				ref: null,
			},
		};
	},

	methods: {
		loading() {
			this.loader.ref = this.$buefy.loading.open({
				container: this.loader.isFullPage ? null : this.$refs.element.$el,
			});
		},
	},

	mounted() {
		this.$emit("refresh-state");

		this.loading();

		this.$store.dispatch("api_server/fetchApiServerReadiness").then(
			() => {
				this.api_server_status =
					this.$store.getters["api_server/getApiServerReadiness"].status;

				this.loader.ref.close();
			},
			(err) => {
				this.$buefy.toast.open({
					message: err,
					type: "is-danger is-light",
				});

				this.loader.ref.close();
			}
		);
	},
};
</script>
