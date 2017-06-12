<template>
    <div>
        <ms-question-group :list="queList"></ms-question-group>
    </div>
</template>
<script>
    import QuestionGroup from '../components/question/questionGroup.vue';
    export default {
        data() {
            return {
                queList: [{
                    _id: 'jsjjs',
                    question: '这是一个有关选项的',
                    a : 'A',
                    b : 'B',
                    c : 'C',
                    d : 'D',
                },{
                    _id: 'jsjjs2',
                    question: '这是一个有关选项的2',
                    a : 'A2',
                    b : 'B2',
                    c : 'C2',
                    d : 'D2',
                },{
                    _id: 'jsjjs3',
                    question: '这是一个有关选项的3',
                    a : 'A3',
                    b : 'B3',
                    c : 'C3',
                    d : 'D3',
                },{
                    _id: 'jsjjs4',
                    question: '这是一个有关选项的4',
                    a : 'A4',
                    b : 'B4',
                    c : 'C4',
                    d : 'D4',
                },{
                    _id: 'jsjjs5',
                    question: '这是一个有关选项的5',
                    a : 'A5',
                    b : 'B5',
                    c : 'C5',
                    d : 'D5',
                }]
            }
        },
        methods: {

        },
        components:{
            'ms-question-group': QuestionGroup
        }
    }
</script>