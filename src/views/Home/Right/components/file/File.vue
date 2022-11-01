<template>
   <div class="file">
      <div class="file-header">
         <div class="file-header-left">
            文件
         </div>
         <div class="file-header-right">
            <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
               上传文件
            </el-button>
            <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false" class="drawer" >
               <div>
                  <el-upload class="upload-demo" drag action="#" :file-list="fileList" :show-file-list="false" multiple ref="upload" :auto-upload="false" :on-change="changeUpload">
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
               </el-upload>
               </div>
               <div>
                  <el-button type="primary" @click="submitUpload">上传</el-button>
               </div>
            </el-drawer>
         </div>
      </div>
      <div class="file-body">
         <el-card>
            <el-table :data="fileData" style="width: 100%" border>
               <el-table-column type="index" label="序号" width="80" align="center">
               </el-table-column>
               <el-table-column prop="name" label="文件名" width="200">
               </el-table-column>
               <el-table-column prop="name" label="文件大小" width="200">
               </el-table-column>
               <el-table-column prop="name" label="上传时间" width="200">
               </el-table-column>
               <el-table-column label="操作" prop="prop">
                  <template slot-scope="{row,$index}">
                     <el-button type="danger" icon="el-icon-delete"></el-button>
                  </template>
               </el-table-column>
            </el-table>
         </el-card>
      </div>
   </div>
</template>

<script>
import { getFileList, uploadFile } from '@/api/user';
export default {
   name: 'File',
   data() {
      return {
         fileData: [
            {
               name: '王小虎',
            }
         ],
         // 抽屉的展示
         drawer: false,
         fileList:[]

      }
   },
   components: {},
   methods: {
      submitUpload(){
         
      },
      // 上传文件之前的回调
      changeUpload(file,fileList){
         console.log(file);
         console.log(fileList);
      }
   }
}
</script>

<style scoped>
.file {
   height: 100vh;
}

.file-header {
   width: 100%;
   height: 10%;
   display: flex;
   align-items: center;
   /* 垂直居中 */
   justify-content: space-between;
   border-bottom: 1px solid #f5f5f6;
}

.file-body {
   width: 100%;
   height: 90%;
}

.file-header-left {
   font-size: 20px;
   margin-left: 20px;
}

.file-header-right {
   display: flex;
   justify-content: center;
   font-size: 20px;
   margin-right: 20px;
}

.file-folder-img {
   margin: 0 0 0 20px;
}

.file-folder-title {
   margin: 0 0 0 50px;

}
.upload-demo{
   
}
.drawer{
   display: flex;
   align-items: center;
   justify-content: center;
   
}
</style>
