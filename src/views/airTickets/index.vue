<template>
    <div class='panel'>
        <div class="panel-header">
            <div class="background"></div>
            <div class='search-card'>
                <div class="group">
                    <Radio-group v-model="airType" class='radio'>
                        <Radio label="single">
                            <span>单程</span>
                        </Radio>
                        <Radio label="double">
                            <span>往返</span>
                        </Radio>
                        <Radio label="mix">
                            <span>含缺口</span>
                        </Radio>
                    </Radio-group>
                </div>
                <div class='group float'>
                    <div class="">
                        <div>出发城市</div>
                        <!--<span></span>-->
                        <Input v-model="originCity" placeholder="请输入..." style="width: 280px"></Input>
                    </div>
                    <div class="">
                        <div>目的城市</div>
                        <!--<span>目的城市</span>-->
                        <Input v-model="targetCity" placeholder="请输入..." style="width: 280px"></Input>
                    </div>
                </div>
                <div class="group">
                    <div>
                        <div>旅游时间</div>
                        <Date-picker type="daterange" :options="options2" placement="bottom-start" placeholder="选择日期" style="width: 280px"></Date-picker>
                    </div>
                </div>
            </div>
        </div>

        airtickets</div>

</template>

<script>
    export default {
        data() {
            return {
                airType: 'double',
                originCity: '',
                targetCity: '',
                options2: {
                    shortcuts: [{
                            text: '最近一周',
                            value() {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '最近一个月',
                            value() {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '最近三个月',
                            value() {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                }
            }
        },
        mounted() {}
    }
</script>

<style>
    .panel {
        .background {
            /*background: url('http://ootid8wao.bkt.clouddn.com/beach.jpg') no-repeat;*/
            background: url('../../static/images/beach.jpg') no-repeat;
            width: 100%;
            position: relative;
            background-repeat: no-repeat;
            background-position: center bottom;
            height: 500px;
            top: 0;
            padding-top: 120px;
            z-index: -1;
            background-size: cover;
            background-attachment: fixed
        }
        .search-card {
            background: rgba(69, 61, 84, 0.85) none repeat scroll 0 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 250px;
            width: 665px;
            padding: 15px 20px;
            border-radius: 20px;
            .group {
                margin: 20px 10px;
                .radio {
                    color: #5cadff;
                }
            }
            .float {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                color: #9ea7b4
            }
        }
    }
</style>
