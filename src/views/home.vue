<template>
	<div id="home-video">
		<div class="container">
			<video class="background_video" loop muted></video>
			<div class="video_cover"></div>
			<div class="overlay"></div>
			<section class="main_content">
				<div>
					<h1>Discovery Land</h1>
					<p class="sub_head">总会找到适合你的旅行轨迹</p>
				</div>
				<div class="links">
					<router-link tag="a" :to="{ name: 'main'}">开始你的行程</router-link>
				</div>
			</section>
		</div>
	</div>
</template>
<script>
	import Bideo from '../libs/bideo.js'
	export default {
		mounted() {
			Bideo.init({
				videoEl: document.querySelector('.background_video'),
				container: document.querySelector('body'),
				resize: true,
				src: [
					{
						src: 'http://ootid8wao.bkt.clouddn.com/fly.webm',
						type: 'video/webm;codecs="vp8,vorbis"'
					},
					{
						src: 'https://www.discoveryland.tk/video/fly.webm',
						type: 'video/webm;codecs="vp8,vorbis"'
					},
					// {
					// 	src: 'http://ossweb-img.qq.com/images/lol/v1/banner/big-v8.webm',
					// 	type: 'video/webm;codecs="vp8,vorbis"'
					// },
				],
				onLoad: function () {
					document.querySelector('.video_cover').style.display = 'none';
				}
			})
		}
	}
</script>
<style>
	#home-video {
		text-align: center;
		height: 100vh;
		overflow: hidden;
		h1 {
			display: block;
			font-size: 2em;
			-webkit-margin-before: 0.67em;
			-webkit-margin-after: 0.67em;
			-webkit-margin-start: 0px;
			-webkit-margin-end: 0px;
			font-weight: bold;
		}
		p {
			display: block;
			-webkit-margin-before: 1em;
			-webkit-margin-after: 1em;
			-webkit-margin-start: 0px;
			-webkit-margin-end: 0px;
		}
		.container {
			overflow: hidden;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}
		.background_video {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
		.video_cover {
			position: absolute;
			width: 100%;
			height: 100%;
			background: url('../static/images/bg.png') no-repeat;
			background-size: cover;
			background-position: center;
		}
		.container {
			height: 100%;
		}
		.overlay {
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			background: rgba(0, 0, 0, 0.005);
		}
		.main_content {
			z-index: 2;
			position: relative;
			display: inline-block;
			top: 50%;
			transform: translateY(-50%);
			h1 {
				text-transform: uppercase;
				font-weight: 600;
				font-family: 'proxima-nova-condensed', Helvetica;
				// color: #3399ff;
				font-size: 35px;
			}
			.sub_head {
				// color: #3399ff;
				font-size: 18px;
			}
			.links {
				margin-top: 50px;
				a {
					border: 2px solid #3399ff;
					border-radius: 61px;
					font-size: 12px;
					color: #3399ff;
					letter-spacing: 1px;
					text-transform: uppercase;
					padding: 10px 25px;
					display: inline-block;
					margin-right: 15px;
				}
			}
		}
	}
</style>