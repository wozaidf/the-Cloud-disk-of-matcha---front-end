<template>
   <el-row>
      <el-col :span="4">
         <LeftMenu></LeftMenu>
      </el-col>
      <el-col :span="20">
         <RightContent></RightContent>
      </el-col>
   </el-row>
</template>

<script>
import RightContent from '@/views/Home/Right/right.vue'
import LeftMenu from '@/views/Home/Left/left.vue'
export default {
   name: 'Home',
   data() {
      return {}
   },
   components: { LeftMenu, RightContent }
}
</script>

<style>

</style>
