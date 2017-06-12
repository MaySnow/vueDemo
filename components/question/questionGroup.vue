<template>
    <div>
        <div class="ms-question-wrap">
            <ms-question :que="list[curQue]" ref="question" @answerSelect="answerSelect"></ms-question>
        </div>
        <ul class="ms-question-control">
            <el-button :disabled="curQue === 0" @click="queControl('prev')">上一个</el-button>
            <el-button :disabled="curQue === list.length - 1" @click="queControl('next')">下一个</el-button>
        </ul>
    </div>
</template>

<script>
    import Question from './question.vue';
    export default {
        name: 'ms-question-group',
        data () {
            return {
                curQue: 0,
                answers: {}
            };
        },
        props: {
            list: Array
        },
        methods: {
            answerSelect: function (_id,val) {
                if(val) {
                    this.answers[_id] = val;
                }
            },
            queControl: function (type) {
                this.$nextTick(function () {
                    if(type === 'prev') {
                        this.curQue--;
                    } else {
                        this.curQue++;
                    }
                    let initAnswer = null;

                    if(this.answers[this.list[this.curQue]._id]) {
                        initAnswer = this.answers[this.list[this.curQue]._id];

                    }

                    this.$refs.question.answer = initAnswer;
                });
            }
        },
        components:{
            'ms-question': Question
        }
    }
</script>