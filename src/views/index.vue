<template>
    <div class="layout">
        <div class="layout-header">
            <div class="layout-logo"></div>
            <div class="btn-side">
                <div class="btn btn-title" @click="toChildren('airTickets')">机票</div>
                <div class="btn btn-title" @click="toChildren('hotel')">酒店</div>
                <div class="btn btn-title" @click="toChildren('discovery')">发现</div>
                <div class="btn btn-title" @click="toChildren('about')">关于</div>
            </div>
            <div class='user-side'>
                <div class="btn btn-title" @click="toChildren('signIn')">注册 | 登录</div>
                <div class="btn btn-title" @click="toChildren('advice')">建议</div>
            </div>
        </div>
        <div class='layout-body'>
            <div class='layout-content'>
                <router-view></router-view>
            </div>
        </div>
        <div class="layout-copy">2011-2016 &copy; TalkingData </div>
    </div>
</template>
<script>
    export default {
        methods:{
            toChildren(name){
                // debugger
                // console.log(typeof val)
                // let val=name
                this.$router.push({name:name})
            }
        }
    }
</script>
<style scoped>
    .layout {
        position: relative;
        border-radius: 4px;
        min-height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        .layout-header {
            height: 60px;
            font-size: 18px;
            background: #00b2d6;
            display: flex;
            justify-content:center;
            /*flex-direction: row;*/
            align-items: center;
            box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
            .layout-logo {
                width: 100px;
                height: 30px;
                background: #5b6270;
                border-radius: 3px;
            }
            .user-side {
                /*align-self: flex-end*/
                margin-left:20%;
                font-size: 14px;
                .btn{
                    margin:5px 0
                }
            }
        }
        .layout-body {
            display: flex;
            -webkit-box-flex: 1;
            flex: 1;
            .layout-content {
                flex: 1;
            }
        }
        .layout-copy {
            text-align: center;
            flex: 0 0 auto;
            -webkit-box-flex: 1;
            padding: 10px 0 20px;
            color: #9ea7b4;
        }
    }
</style>