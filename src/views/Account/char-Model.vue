<template>
  <div>
    <el-dialog :title="title" :visible="visible" width="30%" @close="close">
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="角色" prop="character">
          <el-select
            v-model="form.character"
            placeholder="请选择角色"
            style="width: 100%"
          >
            <el-option label="业务人员" value="1"></el-option>
            <el-option label="审核人员" value="2"></el-option>
            <el-option label="风控经理" value="3"></el-option>
            <el-option label="管理员" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark"></el-input>
        </el-form-item>
        <el-form-item label="原因" prop="reason">
          <el-input type="textarea" v-model="form.reason"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="makesure"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  props:["visible"],
  computed:{...mapState(["rowData"])},
  watch:{
      visible(){
          const {character,remark,reason}=this.rowData
          if(character){
              this.title="管理角色"
          }else{
              this.title="新建角色"
          }
          this.form={character,remark,reason}
      }
  },
  data() {
    return {
      title:"新建角色",
      form: {
        character: "",
        remark: "",
        reason: "",
      },
      rules: {
        character: [
          { required: true, message: "请选择角色", trigger: "blur" },
        ],
        remark: [
          { required: true, message: "请输入备注", trigger: "blur" },
        ],
        reason: [
          { required: true, message: "请输入原因", trigger: "blur" },
        ],
      },
    };
  },
  methods:{
      close(){
          this.$emit("close")
          this.form.character="",
          this.form.remark="",
          this.form.reason=""
      },
      makesure(){
          this.$refs["form"].validate((valid) =>{
              if(valid){
                  this.close()
              }
          }) 
          
      }
  }
};
</script>

<style lang="less" scoped>
</style>