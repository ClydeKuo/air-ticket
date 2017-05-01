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
					<router-link tag="button" class="draw" :to="{ name: 'airTickets'}">开始你的行程</router-link>
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
				src: [{
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
		button {
			background: none;
			border: 0;
			box-sizing: border-box;
			/*box-shadow: inset 0 0 0 2px #f45e61;*/
			color: #3399ff;
			font-size: 16px;
			font-weight: 700;
			margin: 1em;
			padding: 15px 20px;
			cursor: pointer;
			text-align: center;
			text-transform: capitalize;
			position: relative;
			vertical-align: middle;
			&::before,
			&::after {
				box-sizing: border-box;
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
			}
		}
		.draw {
			-webkit-transition: color 0.25s;
			transition: color 0.25s;
			&::before,
			&::after {
				border: 2px solid transparent;
				width: 0;
				height: 0;
			}
			&::before {
				top: 0;
				left: 0;
			}
			&::after {
				bottom: 0;
				right: 0;
			}
			&:hover {
				color: #3399ff;
				&::before,
				&::after {
					width: 100%;
					height: 100%;
				}
				&::before {
					border-top-color: #3399ff;
					border-right-color: #3399ff;
					-webkit-transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
					transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
				}
				&::after {
					border-bottom-color: #3399ff;
					border-left-color: #3399ff;
					-webkit-transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
					transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
				}
			}
		}
		.spin {
			width: 6em;
			height: 6em;
			padding: 0;
			&:hover {
				color: #0eb7da;
				&::before {
					border-top-color: #0eb7da;
					border-right-color: #0eb7da;
					border-bottom-color: #0eb7da;
					-webkit-transition: border-top-color 0.15s linear, border-right-color 0.15s linear 0.1s, border-bottom-color 0.15s linear 0.2s;
					transition: border-top-color 0.15s linear, border-right-color 0.15s linear 0.1s, border-bottom-color 0.15s linear 0.2s;
				}
				&::after {
					border-top: 2px solid #0eb7da;
					border-left-width: 2px;
					border-right-width: 2px;
					-webkit-transform: rotate(270deg);
					-ms-transform: rotate(270deg);
					transform: rotate(270deg);
					-webkit-transition: -webkit-transform 0.4s linear 0s, border-left-width 0s linear 0.35s;
					transition: transform 0.4s linear 0s, border-left-width 0s linear 0.35s;
				}
			}
			&::before,
			&::after {
				top: 0;
				left: 0;
			}
			&::before {
				border: 2px solid transparent;
			}
			&::after {
				border: 0 solid transparent;
			}
		}
		.circle {
			border-radius: 100%;
			box-shadow: none;
			&::before,
			&::after {
				border-radius: ;
			}
		}

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
			background: url('http://ootid8wao.bkt.clouddn.com/bg.jpg') no-repeat;
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
				font-size: 35px;
			}
			.sub_head {
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