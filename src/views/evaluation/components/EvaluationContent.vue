<template>
  <div class="evaluationContent">
    <div class="content" v-for="item in 2">
      <van-divider :style="{ color: '#bebebe', borderColor: '#bebebe' }"></van-divider>
      <van-image
        round
        width="1rem"
        height="1rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg">
      </van-image>
      <span class="nickName">hehe</span>
      <div class="rate">
        <van-rate
          v-model="value"
          allow-half
          :readonly="true"
          void-icon="star"
          void-color="#eee">
        </van-rate>
      </div>
      <div class="text">
        这是一条评价!这是一条评价!这是一条评价!这是一条评价!这是一条评价!这是一条评价!这是一条评价!
      </div>
      <div class="img">
        <van-image
          width="100"
          height="100"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          @click="previewImg(0)">
        </van-image>
        <van-image
          width="100"
          height="100"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          @click="previewImg(1)">
        </van-image>
        <van-image
          width="100"
          height="100"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          @click="previewImg(2)">
        </van-image>
        <van-image
          width="100"
          height="100"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          @click="previewImg(3)">
        </van-image>
        <van-image
          width="100"
          height="100"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          @click="previewImg(4)">
        </van-image>
        <van-image
          width="100"
          height="100"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          @click="previewImg(5)">
        </van-image>
      </div>
    </div>
  </div>
</template>

<script>
    import { ImagePreview } from 'vant';
    export default {
        name: "EvaluationContent",
        data() {
            return{
                value: 3.5
            }
        },
        methods:{
            previewImg(index){
                ImagePreview({
                    images: [
                        'https://img.yzcdn.cn/vant/cat.jpeg',
                        'https://img.yzcdn.cn/vant/cat.jpeg',
                        'https://img.yzcdn.cn/vant/cat.jpeg',
                        'https://img.yzcdn.cn/vant/cat.jpeg',
                        'https://img.yzcdn.cn/vant/cat.jpeg',
                        'https://img.yzcdn.cn/vant/cat.jpeg'
                    ],
                    startPosition: index,
                    onClose() {
                        // do something
                    }
                });
            }
        }
    }
</script>

<style lang="stylus" scoped>
  .evaluationContent{
    .content{
      padding .5rem
      .nickName{
        font-size .8rem
        position absolute
        margin-top .1rem
        margin-left .2rem
      }
      .rate{
        margin-left 1.2rem
      }
      .text{
        font-size .5rem
        font-weight 300
        margin-left 1.2rem
      }
      .img{
        margin-left 1.2rem
        margin-top .2rem
      }
    }
  }
</style>
