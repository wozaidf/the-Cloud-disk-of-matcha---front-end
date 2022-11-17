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
                  <el-upload action="#" :on-remove="handleRemove" :file-list="imageList" :auto-upload="false"
                     :http-request="uploadImages" ref="upload" :on-success="handlerSuccess" list-type="picture-card"
                     :on-preview="handlePictureCardPreview" accept=".jpg,.jpeg,.png,.gif,.JPG,.JPEG"
                     :before-upload="beforeUpload">
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
               <el-table-column prop="fieldname" label="图片展示" width="200">
                  <template slot-scope="{row,$index}">
                     <img :src="row.picture_url" width="80px" height="80px">
                  </template>
               </el-table-column>
               <el-table-column prop="picture_name" label="图片名" width="">
               </el-table-column>
               <el-table-column prop="picture_size" label="文件大小(b)" width="200">
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
import { uploadImage, getImagesList } from '@/api/images'
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
         imageList: [],
      }
   },
   mounted() {
      this.getImagesList();
   },
   components: {},
   methods: {
      // 点击上传
      submitUpload() {
         this.$refs.upload.submit();
      },
      // 删除文件回调
      async deleteFile(row) {
         console.log(row);
      },
      // 删除的回调
      handleRemove(file, fileList) {
         // console.log(file, fileList);
      },
      // 点击放大镜的回调
      handlePictureCardPreview(file) {
         this.dialogImageUrl = file.url;
         this.dialogVisible = true;
      },
      // 上传图片的回调
      async uploadImages(info) {
         const { file } = info;
         let uploadData = new FormData();
         uploadData.append("image", file);
         let result = await uploadImage(uploadData);
         if (result.data.status != 0) {
            this.$message({
               type: "error",
               message: result.data.message
            })
         } else {
            this.$message({
               type: "success",
               message: result.data.message
            })
         }
      },
      // 上传成功的回调
      handlerSuccess(response, file, fileList) {
         this.imageList = fileList;
         setTimeout(() => {
            this.imageList = [];
         }, 2000);
      },
      // 上传之前限制图片格式
      beforeUpload(file) {
         const isPNG = file.type === 'image/png';
         const isJPG = file.type === 'image/jpeg';
         if (!isPNG && !isJPG) {
            this.$message({
               type: "error",
               message: "只能上传png或jpg"
            })
            return false
         } else {
            return (isPNG || isJPG)
         }
      },
      // 获取图片列表的回调
      async getImagesList() {
         let result = await getImagesList();
         if (result.data.status != 0) {
            this.$message({
               type: "error",
               message: result.data.message
            })
         } else {
            this.imagesData = result.data.data
         }

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

.drawer {
   display: flex;
   align-items: center;
   justify-content: center;
}
</style>
