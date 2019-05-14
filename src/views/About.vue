<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{msg}}</div>
  </div>
</template>
<script>
import store from "@/store";

export default{
  name:"about",
  store,
  data(){
    return{
      msg:store.state.zhuangtai1
    } 
  }
}

</script>

