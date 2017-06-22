<template>
    <div>
        <ms-question-group :list="queList"></ms-question-group>
        <ms-show-edit-input initValue="测试"></ms-show-edit-input>
        <ms-show-edit-number :initValue="2"></ms-show-edit-number>
        <ms-show-edit-upload initValue="http://bbs.qiuchenglicai.com/uc_server/avatar.php?uid=265534&size=big"></ms-show-edit-upload>
        <ms-show-edit-type :initValue="types"></ms-show-edit-type>
    </div>
</template>
<script>
    import QuestionGroup from '../components/question/questionGroup.vue';
    import InputEdit from '../components/showEdit/input.vue';
    import InputNumber from '../components/showEdit/inputNumber.vue';
    import imgUpload from '../components/showEdit/uploadImg.vue';
    import TypeEdit from '../components/showEdit/type.vue';
    export default {
        data() {
            return {
                queList: [
                    {
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
                }],
                types: {
                    "DRAMA" : "DRAMA",
                    "Movie" : "Movie",
                    "CF" : "CF",
                    "variety" : "哈哈哈",
                    "other" : "其他"
                }
            }
        },
        methods: {

        },
        components:{
            'ms-question-group': QuestionGroup,
            'ms-show-edit-input': InputEdit,
            'ms-show-edit-number': InputNumber,
            'ms-show-edit-upload': imgUpload,
            'ms-show-edit-type': TypeEdit
        }
    }
</script>