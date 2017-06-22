<template>
    <div>
       <div v-show="edit">
           <el-form :inline="true">
               <el-form-item>
                   <el-input v-model="value"></el-input>
               </el-form-item>
               <el-form-item>
                   <el-button size="small" type="primary" @click="onSubmit">确定</el-button>
                   <el-button size="small" @click="onCancel">取消</el-button>
               </el-form-item>
           </el-form>
       </div>
        <div v-show="!edit">
            <span>{{value}}</span>
            <el-button size="small" icon="edit" @click="showEdit"></el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ms-show-edit-input',
        data () {
            return {
                edit: false,
                value: this.initValue,
                oldValue: this.initValue
            };
        },
        props: {
            initValue: String,
            dataName: String
        },
        methods: {
            onSubmit: function () {
                this.oldValue = this.value;
                this.edit = false;
            },
            onCancel: function () {
                this.value = this.oldValue;
                this.edit = false;
            },
            showEdit: function () {
                this.edit = true;
            }
        }
    }
</script>