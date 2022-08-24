<template>
  <router-view />
</template>

<script setup>
// 重整保留 admin 登入，登入後重新整理抓的資料
import { useUserStore } from '@/stores/example-store'
useUserStore().getUser()
// import { defineComponent } from 'vue'

// export default defineComponent({
//   name: 'App'
// })
</script>
