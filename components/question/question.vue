<template>
    <div>
        <mt-radio
                :title="que.question"
                align="left"
                v-model="answer"
                :options="options">
        </mt-radio>
    </div>
</template>

<script>
    export default {
        name: 'ms-question',
        data () {
            return {
                answer: null
            };
        },
        props: {
            que: Object
        },
        computed: {
            options: function () {
                let que = this.que;
                let optArr = [];
                for (let key in que) {
                    if(que.hasOwnProperty(key) && ['a','b','c','d'].indexOf(key) !== -1) {
                        optArr.push({
                            label: key.toUpperCase() + ':' + que[key],
                            value: key
                        })
                    }
                }
                return optArr;
            }
        },
        watch: {
            answer: function (val) {
                this.$emit('answerSelect',this.que._id,val)
            }
        }
    }
</script>