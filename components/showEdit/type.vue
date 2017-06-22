<template>
    <div>
       <div v-show="edit">
           <el-form label-width="100px">
               <el-form-item v-for="(val,key,index) in value" :label="key">
                   <el-input v-model="value[key]"></el-input>
               </el-form-item>
               <el-form-item>
                   <el-button size="small" type="primary"  @click="onSubmit">确定</el-button>
                   <el-button size="small" @click="onCancel">取消</el-button>
               </el-form-item>
           </el-form>
       </div>
        <div v-show="!edit">
            <span v-for="(val,key,index) in value">{{val}}</span>
            <div v-if="!isAdd">
                <a href="javascript:;" @click="showEdit">修改</a>
                <a href="javascript:;" @click="add">增加</a>
            </div>
            <el-form ref="addForm" :inline="true" :model="addObj" :rules="addRules" v-show="isAdd" label-width="100px">
                <el-form-item label="简称" prop="name">
                    <el-input v-model="addObj.name" placeholder="只能为字母或数字"></el-input>
                </el-form-item>
                <el-form-item label="名称" prop="value">
                    <el-input v-model="addObj.value"></el-input>
                </el-form-item>
                <el-form-item >
                    <el-button size="small" type="primary" @click="onAddSave">确定</el-button>
                    <el-button size="small" @click="onAddCancel">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    function typeValidate(rule, value, callback) {
        if (!(/^[a-zA-Z0-9]+$/).test(value)) {
            callback(new Error('只能为字母或数字'));
        } else {
            callback();
        }
    }
    export default {
        name: 'ms-show-edit-type',
        data () {
            return {
                edit: false,
                value: this.initValue,
                oldValue: this.initValue,
                isAdd: false,
                addObj: {
                    name : '',
                    value : ''
                },
                addRules: {
                    name: [
                        { required: true, message: '请输入简称', trigger: 'blur' },
                        { validator: typeValidate,  trigger: 'blur' }
                    ],
                    value: [
                        { required: true, message: '请输入名称', trigger: 'blur' }
                    ]
                }
            };
        },
        props: {
            initValue: Object,
            dataName: String
        },
        watch: {
            isAdd: function (val) {
                if(!val) {
                    this.addObj = {
                        name : '',
                        value : ''
                    };
                }
            }
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
            },
            add: function () {
                this.isAdd = true;
            },
            onAddSave: function () {
                let _this = this;
                this.$refs.addForm.validate((valid) => {
                    if (valid) {
                        _this.value[_this.addObj.name] = _this.addObj.value;
                        console.log(_this.value);
                        _this.oldValue = _this.value;
                        _this.isAdd = false;
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            onAddCancel: function () {
                this.value = this.oldValue;
                this.isAdd = false;
            }
        }
    }
</script>