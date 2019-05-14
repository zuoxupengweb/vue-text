<template>
<div>
    <div>这些到底是什么</div>
    <button type="button" @click="add()">添加</button>
</div>
</template>

<script>
// @ is an alias to /src
import store from '@/store'
import { debuglog } from 'util';

export default {
  name: 'info',
  store,
  data(){
      return{
          msg:'asdasdasd'
      }
  },
  methods:{
      add(){
          console.log("wo 是测试内容")
          debugger
          store.commit('inzuoxu')
      }
  }
}
</script>
