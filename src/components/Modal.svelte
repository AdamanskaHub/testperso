<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(28, 13, 29, 0.8313725490196079);
		z-index: 90;
	}

	.modal {
		position: fixed;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		max-width: 80vw;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%,-50%);
		/* padding: 1em; */
		border-radius: 0.2em;
		background: -webkit-gradient(linear, left top, right top, from(#f8c40e75), to(#c00a7d78));
		background: -webkit-linear-gradient(left, #f8c40e75, #c00a7d78);
		background: -o-linear-gradient(left, #f8c40e75, #c00a7d78);
		background: linear-gradient(90deg, rgba(248, 196, 14, 0.6705882352941176), rgba(192, 10, 125, 0.79));
		z-index: 91;
		color: #1c0d1d;
	}
	

	.close-button {
	    display: block;
		position: absolute;
		top: 20px;
		right: 20px;
		font-size: 1.6em;
		color: #1c0d1d;
		cursor: pointer;
		}
</style>

<div class='modal-background' on:click='{() => dispatch("close")}'></div>

<div class='modal'>
	<span class="close-button" on:click='{() => dispatch("close")}'>X</span>
	<slot name='header'></slot>
	<slot></slot>
</div>