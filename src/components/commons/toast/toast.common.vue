<template>
	<div toast>
		<div class="wrapper" :ckass="{'active': config.show}">
			<div class="message">
				{{ message }}
			</div>
		</div>
	</div>
</template>

<style src="./toast.common.scss"></style>
<script src="./toast.common.js"></script>