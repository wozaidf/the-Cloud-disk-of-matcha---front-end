<template>
   <div class="file">
      <div class="file-header">
         <div class="file-header-left">
            图片
         </div>
         <div class="file-header-right">
            <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
               上传图片
            </el-button>
            <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false" class="drawer">
               <!-- 照片墙 -->
               <div>
                  <el-upload  action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
                     :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :file-list="imageList">
                     <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                     <img width="100%" :src="dialogImageUrl" alt="">
                  </el-dialog>
               </div>
               <div>
                  <el-button type="primary" @click="submitUpload">上传</el-button>
               </div>
            </el-drawer>
         </div>
      </div>
      <div class="file-body">
         <el-card>
            <el-table :data="imagesData" style="width: 100%" border>
               <el-table-column type="index" label="序号" width="80" align="center">
               </el-table-column>
               <el-table-column prop="filename" label="文件名" width="">
               </el-table-column>
               <el-table-column prop="size" label="文件大小(b)" width="200">
               </el-table-column>
               <el-table-column prop="fieldname" label="文件类型" width="200">
               </el-table-column>
               <el-table-column label="操作" prop="prop">
                  <template slot-scope="{row,$index}">
                     <el-button type="danger" icon="el-icon-delete" @click="deleteFile(row, $index)"></el-button>
                  </template>
               </el-table-column>
            </el-table>
         </el-card>
      </div>
   </div>
</template>

<script>
export default {
   name: 'imageJIa',
   data() {
      return {
         // 照片数据
         imagesData: [],
         // 抽屉的展示
         drawer: false,
         // 预览展示的图片地址
         dialogImageUrl: '',
         // 预览的展示
         dialogVisible: false,
         // 照片墙数组
         imageList: []
      }
   },
   mounted() {
   },
   components: {},
   methods: {
      // 点击上传
      submitUpload() {
         // this.$refs.upload.submit();
      },
      // 删除文件回调
      async deleteFile(row) {
      },
      handleRemove(file, fileList) {
         console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
         this.dialogImageUrl = file.url;
         this.dialogVisible = true;
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

.upload-demo {}

.drawer {
   display: flex;
   align-items: center;
   justify-content: center;
}

</style>
