<template>
  <div class="userCell">
    <div>
      <van-cell icon="gem-o" title="可用积分" :value="userInfo.userScore"></van-cell>
      <van-cell icon="idcard" title="个人资料" is-link @click="checkInfo"></van-cell>
    </div>
  </div>
</template>

<script>
  export default {
      name: "UserCell",
      props: ['userInfo'],
      methods: {
          checkInfo(){
              this.$router.push({
                  path: '/userInfo',
                  name: 'userInfo',
                  params: this.userInfo
              })
          }
      }
  }
</script>

<style scoped>

</style>
