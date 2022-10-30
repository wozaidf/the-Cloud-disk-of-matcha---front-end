<template>
   <div class="file">
      <div class="file-header">
         <div class="file-header-left">
            文件
         </div>
         <div class="file-header-right">
            <el-upload class="upload-demo" action="http://127.0.0.1:8081/file/uploadFile" enctype="multipart/form-data"
               :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3"
               :on-exceed="handleExceed" :file-list="fileList">
               <el-button icon="el-icon-upload" style="border:0;">上传</el-button>
            </el-upload>
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
               <el-table-column prop="name" label="描述" width="200">
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
import { getFileList } from '@/api/user';
export default {
   name: 'File',
   data() {
      return {
         fileData: [
            {
               name: '王小虎',
            }
         ],
         fileList: []
      }
   },
   components: {},
   methods: {
      handlePreview() { },
      handleRemove() {
      },
      beforeRemove() { },
      handleExceed() { },
      handleExceed() { },
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
</style>
