<template>
	<div class="menu-bar" v-on:scroll="reloadY(event)" >
		current Y : {{focusY}}
		<div>
			<a class="menu-item" v-on:click="moveToSec1">section 1</a>
			<a class="menu-item" v-on:click="moveToSec2">section 2</a>
			<a class="menu-item" v-on:click="moveToSec3">section 3</a>
			<a class="menu-item" v-on:click="load">load</a>	
		</div>
	</div>
</template>
<script>
	export default {
		name: 'MenuBar',
		data () {
			return {
				focusY : 0,
				section1: this.$store.state.oneTop,
				section2: this.$store.state.twoTop,
				section3: this.$store.state.threeTop
			}
		},
		created () {
			window.addEventListener('scroll', this.reloadY);
		},
		mounted : function () {
			this.$store.state.oneTop = document.getElementById('test-section-1').offsetTop;
			this.$store.state.twoTop = document.getElementById('test-section-2').offsetTop;
			this.$store.state.threeTop = document.getElementById('test-section-3').offsetTop;
		},
		destroyed () {
			window.removeEventListener('scroll', this.reloadY);
		},
		methods : {
			reloadY(event) {
				this.focusY = window.scrollY;
			},
			moveToSec1(){
				window.scrollTo(0, Number(this.section1)-80);
			},
			moveToSec2(){
				window.scrollTo(0, Number(this.section2)-80);
			},
			moveToSec3(){
				window.scrollTo(0, Number(this.section3)-80);
			},
			load(){
				this.$store.state.oneTop = document.getElementById('test-section-1').offsetTop;
				this.$store.state.twoTop = document.getElementById('test-section-2').offsetTop;
				this.$store.state.threeTop = document.getElementById('test-section-3').offsetTop;
				alert("load");
			}
		}
	}
</script>
<style scoped>
.menu-bar {
	background-color: #fff;
	border: 1px solid #000;
	width: 100%;
	height: 80px;
	font-size: 32px;
	font-weight: 400;
	color: #000;

	position: fixed;
}

.menu-item {
	border: 1px solid;
	cursor: pointer;
}
</style>