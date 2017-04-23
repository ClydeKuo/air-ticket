<template>
    <div class='panel'>
        <div class="panel-header">
            <div class="background"></div>
            <div class='search-card'>

            </div>
        </div>

        airtickets</div>

</template>

<script>
    export default {
        mounted(){
        }
    }
</script>

<style>
    .panel {
        .background {
            background: url('http://ootid8wao.bkt.clouddn.com/beach.jpg') no-repeat;
            width: 100%;
            position: relative;
            background-repeat: no-repeat;
            background-position: center bottom;
            height: 500px;
            top: 0;
            padding-top: 120px;
            z-index:-1;
            background-size: cover;
            background-attachment:fixed
        }
        .search-card{
            background: rgba(69, 61, 84, 0.85) none repeat scroll 0 0;
            position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			height: 250px;
			width: 665px;
            padding:15px 20px;
            border-radius:20px;
        }
    }
</style>