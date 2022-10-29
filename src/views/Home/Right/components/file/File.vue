<template>
   <div class="file">
      <div class="file-header">
         <div class="file-header-left">
            文件
         </div>
         <div class="file-header-right">
            <el-upload class="upload-demo">
               <el-button icon="el-icon-upload" style="border:0;">上传</el-button>
            </el-upload>
         </div>
      </div>
      <div class="file-body">
         <!-- 文件件 -->
         <div class="file-folder">
            <div class="file-folder-img">
               <!-- title="文件尚未显现" -->
               <svg t="1667058934060" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3128" width="128" height="128"><path d="M892 248H515.008q-2.016-0.992-3.008-2.016l-16-56q-4.992-26.016-27.008-43.488t-48-17.504H133.984q-28 0-48.512 20.512T64.96 200v624.992q0 28.992 20.512 49.504t48.512 20.512h758.016q28.992 0 48.992-20 20.992-20.992 20.992-51.008V317.984q0-28.992-20.512-49.504t-49.504-20.512z m-760-48q0-4 2.016-4h287.008q3.008 0 6.016 2.496t4 5.504L446.048 256H132.032V200z m762.016 624.992q0 0.992-0.992 2.016 0 0.992-0.992 0.992H134.016q-2.016 0-2.016-4V327.008h762.016v498.016z" p-id="3129" fill="#8a8a8a"></path></svg>            </div>
            <div class="file-folder-title">
               文件名
            </div>
         </div>
         <!-- 空白页面 -->
         <el-empty style="margin-top:50px;" v-show="showEmpty">
            <!-- action="https://jsonplaceholder.typicode.com/posts/"
               :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3"
               :on-exceed="handleExceed" :file-list="fileList" -->
            <el-upload class="upload-demo">
               <el-button icon="el-icon-upload">上传</el-button>
            </el-upload>
         </el-empty>
      </div>
   </div>
</template>

<script>
export default {
   name: 'File',
   data() {
      return {
         showEmpty: false
      }
   },
   components: {}
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
.file-folder-img{
   margin: 0 0  0 20px;
}
.file-folder-title{
   margin: 0 0  0 50px;

}
</style>
