<template>
    <div>
       <div v-show="edit">
           <el-upload
                   class="avatar-uploader"
                   action="https://jsonplaceholder.typicode.com/posts/"
                   :show-file-list="false"
                   :on-change="imgChange"
                   :auto-upload="false">
               <img v-if="imageUrl" :src="imageUrl">
               <i class="el-icon-plus avatar-uploader-icon" v-else></i>
           </el-upload>
           <el-button size="small" type="primary" :disabled="!imageUrl" @click="onSubmit">上传服务器</el-button>
           <el-button size="small" @click="onCancel">取消</el-button>
       </div>
        <div v-show="!edit">
            <img :src="value" alt="">
            <el-button size="small" icon="edit" @click="showEdit"></el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ms-show-edit-upload',
        data () {
            return {
                edit: false,
                value: this.initValue,
                oldValue: this.initValue,
                imageUrl: null
            };
        },
        props: {
            initValue: String
        },
        methods: {
            onSubmit: function () {
                //上传成功后换成这个
                //this.value = this.imageUrl;
                this.oldValue = this.value;
                this.edit = false;
            },
            onCancel: function () {
                this.value = this.oldValue;
                this.imgUrl = '';
                this.edit = false;
            },
            showEdit: function () {
                this.edit = true;
            },
            imgChange: function (file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            }
        }
    }
</script>