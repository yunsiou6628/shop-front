<template>
  <q-page>
    <!-- 輪播圖 -->
    <div class="relative">
      <q-carousel id="top_carousel" animated v-model="slide" navigation infinite :autoplay="autoplay" arrows
        transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false"
        @mouseleave="autoplay = true">

        <q-carousel-slide :name="1" img-src="https://i.imgur.com/1Jbuwv0.jpg" class="relative-position cursor-pointer ">
          <div class="column absolute-center justify-center content-center items-center text-center text-white q-pa-xl"
            style="width: 100%; font-weight: 900; text-shadow: 0.1em 0.2em 0.3em black; z-index: 2;">

            <div class="text-h3  q-pb-lg">百岳探險 <br></div>
            <div class="q-my-sm" style="width: 40%; border: 1px solid #fff;"></div>
            <div class="text-h6 q-py-lg">
              <div>生活需要來點大自然的療癒力量</div>
              <div>帶你/妳走進山林遇見台灣百岳之美</div>
            </div>
            <div class="q-py-lg">
              <q-btn :to="'/ProductViewAll/'" style=" text-shadow: 0.1em 0.2em 0.3em black;">＞＞ 點我更多 百岳 / 中級山行程 ＞＞
              </q-btn>
            </div>

          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="2" img-src="https://i.imgur.com/Rd3aLY4.jpg" class="relative-position cursor-pointer">
          <div class="column absolute-center justify-center content-center items-center text-center text-white q-pa-xl"
            style="width: 100%; font-weight: 900; text-shadow: 0.1em 0.2em 0.3em black; z-index: 2;">
            <div class="text-h3  q-pb-lg">古道時空之旅<br></div>
            <div class="q-my-sm" style="width: 40%; border: 1px solid #fff;"></div>
            <div class="text-h6 q-py-lg">
              <div>每條古道都是通往台灣歷史故事的軌跡</div>
              <div>帶你/妳一起尋找先民遺留下來的生活痕跡</div>
            </div>
            <div class="q-py-lg">
              <q-btn :to="'/ProductViewAll/'" style=" text-shadow: 0.1em 0.2em 0.3em black;">＞＞ 點我更多 歷史古道 / 秘境步道行程 ＞＞
              </q-btn>
            </div>

          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="3" img-src="https://i.imgur.com/3JtHGzb.png" class="relative-position cursor-pointer">
          <div class="column absolute-center justify-center content-center items-center text-center text-white q-pa-xl"
            style="width: 100%; font-weight: 900; text-shadow: 0.1em 0.2em 0.3em black; z-index: 2;">
            <div class="text-h3  q-pb-lg">小百岳山徑 <br></div>
            <div class="q-my-sm" style="width: 40%; border: 1px solid #fff;"></div>
            <div class="text-h6 q-py-lg">
              <div>一起前進戶外感受大自然的擁抱</div>
              <div>帶你/妳欣賞每一瞬擦身而過的風景</div>
            </div>

            <div class="q-py-lg">
              <q-btn :to="'/ProductViewAll/'" style=" text-shadow: 0.1em 0.2em 0.3em black;"> ＞＞ 點我更多 小百岳行程 ＞＞</q-btn>
            </div>

          </div>
        </q-carousel-slide>

        <!-- img-src="https://i.imgur.com/3JtHGzb.png" -->
      </q-carousel>
    </div>

    <!-- 帶你去爬山文+圖區塊 -->
    <div class="flex flex-center" style="width: 100%; height: auto; background: #F4F8EE;">

      <div class="row" style="width: 90%;">
        <!-- 左-文字區塊 -->
        <div class="col-12 col-lg-5 column justify-center content-center items-center q-py-xl q-py-lg-none">

          <img src="https://i.imgur.com/0U2S3Xo.png" class="col-auto" style="width: 85%;">

          <div class="col-auto" style="width: 70%; font-size: 18px; padding: 30px 5px 0px 2px; color: #5E8A4B;">
            <p>走進山裡，感受大自然的寬闊，對應自己的渺小，山給予的震撼感，不僅僅只是生理上的變化，還有更多無法言喻的感動，爬山不僅僅是一項活動，更是一場愛上山林、愛上生活的過程。</p>
          </div>

          <div class="col-auto"
            style="width: 70%; font-size: 18px; padding: 20px 5px 20px 2px; color: #5E8A4B; text-align: center;">
            <p>帶你走進山林看見前所未見的台灣！</p>
          </div>

          <q-btn to="/ProductViewAll" label="Read More" class="col-auto"
            style="width: 200px; border-radius: 30px; background: #9AB98D; color: #fff; font-size: 18px;">
          </q-btn>
        </div>
        <!-- 右-圖片區塊 -->
        <!-- 最大尺寸 -->
        <div class="col-12 col-lg-7" id="indexImg-lg">
          <img
            src="https://kitpro.site/hayka/wp-content/uploads/sites/75/2022/03/hiking-sunrise-2022-03-05-20-21-43-utc-800x533.jpg"
            style="width: 600px; height: 400px; border: 10px solid white ; z-index: 1; position: absolute; top:10%; left: 25%; transform: translate(0%); transform: rotate(5deg); box-shadow: 0 0 10px rgba(0,0,0,0.3);">
          <img
            src="https://kitpro.site/hayka/wp-content/uploads/sites/75/2022/03/female-hiker-looking-up-in-forest-sarsy-village-2022-03-07-23-58-37-utc.jpg"
            style="width: 250px; height: 250px; border: 10px solid white ; z-index: 3; position: absolute; top:40%; left: 8%; transform: translate(-50%, -50%); transform: rotate(-5deg); box-shadow: 0 0 10px rgba(0,0,0,0.3);">
          <img
            src="https://kitpro.site/hayka/wp-content/uploads/sites/75/2022/03/hikers-uphilling-at-mountain-forest-back-view-2021-08-29-03-30-49-utc-800x550.jpg"
            style="width: 400px; height: 300px; border: 10px solid white ; z-index: 2; position: absolute; top:55%; left: 30%; transform: translate(-50%, -50%); transform: rotate(-3deg); box-shadow: 0 0 10px rgba(0,0,0,0.3);">
        </div>
        <!-- 最小尺寸 -->
        <div class="col-12 column justify-center content-center items-center q-py-xl" id="indexImg-xs">
          <img
            src="https://kitpro.site/hayka/wp-content/uploads/sites/75/2022/03/hiking-sunrise-2022-03-05-20-21-43-utc-800x533.jpg"
            style="width: 400px; height: 280px; border: 10px solid white; margin: 10px 0; box-shadow: 0 0 10px rgba(0,0,0,0.3);">
          <img
            src="https://kitpro.site/hayka/wp-content/uploads/sites/75/2022/03/female-hiker-looking-up-in-forest-sarsy-village-2022-03-07-23-58-37-utc.jpg"
            style="width: 400px; height: 280px; border: 10px solid white ; margin: 10px 0; box-shadow: 0 0 10px rgba(0,0,0,0.3);">
          <img
            src="https://kitpro.site/hayka/wp-content/uploads/sites/75/2022/03/hikers-uphilling-at-mountain-forest-back-view-2021-08-29-03-30-49-utc-800x550.jpg"
            style="width: 400px; height: 280px; border: 10px solid white ; margin: 10px 0; box-shadow: 0 0 10px rgba(0,0,0,0.3);">
        </div>
      </div>
    </div>

    <div class="flex flex-center" style="width: 100%; height: 900px;">
      <div class="row" style="width: 90%; height: 90%;">

        <div class="col-12 text-weight-bold" style="font-size: 18px; color: #5E8A4B; text-align: center;">
          <h3>最新行程</h3>
        </div>

        <!-- 商品卡片輪播圖 -->
        <!-- slice(0,parseInt(products.length / 3)) => 顯示 products.length 所有商品，除 3 個一組，parseInt 有小數點強制轉換成整數 -->
        <!-- 大尺寸 -->
        <div class="gt-md text-grey-7" id="cardCarousel3">
          <q-carousel v-model="slide2" transition-prev="slide-right" transition-next="slide-left" arrows navigation
            swipeable animated infinite :autoplay="autoplay2" control-color="light-green-5 padding" height="600px">

            <q-carousel-slide v-for="(product, index) in products.slice(0, 3)" :key="index" :name="index">

              <div class="row q-pa-xl justify-center" style="height: 510px;">

                <div class="col-4 q-pa-md" v-for="(img, idx) in [0, 1, 2]" :key="idx">

                  <q-card style="height: 400px;" @click="toProduct(products[index + index * 3 + idx]?._id)">

                    <img style="width: 100%; height: 200px;" :src="products[index + index * 3 + idx]?.image"
                      v-if="products[index + index * 3 + idx]?.image.length" />

                    <div class="text-h6 q-px-md q-py-lg text-weight-bold">
                      {{ products[index + index * 3 + idx]?.name }}
                    </div>

                    <div class="text-body1 q-px-md text-weight-bold description-textbox">
                      {{ products[index + index * 3 + idx]?.description }}
                    </div>

                  </q-card>
                </div>

              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
        <!-- 中尺寸 -->
        <div class=" gt-xs lt-lg " id="cardCarousel2" style=" color: #5E8A4B;">
          <q-carousel v-model="slide3" transition-prev="slide-right" transition-next="slide-left" arrows navigation
            swipeable animated infinite :autoplay="autoplay3" control-color="light-green-5 padding" height="600px">

            <q-carousel-slide v-for="(product, index) in products.slice(0, 3)" :key="index" :name="index">

              <div class="row q-pa-xl " style="height: 510px;">
                <div class="col-6 q-pa-md" v-for="(img, idx) in [0, 1]" :key="idx">

                  <q-card style="height: 400px;" @click="toProduct(products[index + index * 3 + idx]?._id)">

                    <img style="width: 100%; height: 200px;" :src="products[index + index * 3 + idx]?.image"
                      v-if="products[index + index * 2 + idx]?.image.length" />

                    <div class="text-h6 q-px-md q-py-lg text-weight-bold">
                      {{ products[index + index * 2 + idx]?.name }}
                    </div>

                    <div class="text-body1 q-px-md text-weight-bold description-textbox">
                      {{ products[index + index * 2 + idx]?.description }}
                    </div>

                  </q-card>

                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>

        <!-- 小尺寸 -->
        <div class=" lt-sm" id="cardCarousel1" style=" color: #5E8A4B;">
          <q-carousel v-model="slide4" transition-prev="slide-right" transition-next="slide-left" arrows navigation
            swipeable animated infinite :autoplay="autoplay4" control-color="light-green-5 padding" height="600px">
            <!-- products.length - 5 => 商品總長度 - 最新的 5 筆資料顯示 -->
            <q-carousel-slide v-for="(product, index) in products.slice(products.length - 5, parseInt(products.length))"
              :key="index" :name="index">

              <div class="row q-pa-xl " style="height: 510px;">
                <div class="col-12 q-pa-md">

                  <q-card style="height: 400px;" @click="toProduct(product._id)">

                    <img style="width: 100%; height: 200px;" :src="product?.image" />

                    <div class="text-h6 q-px-md q-py-lg text-weight-bold">
                      {{ product?.name }}
                    </div>

                    <div class="text-body1 q-px-md text-weight-bold description-textbox">
                      {{ product?.description }}
                    </div>

                  </q-card>

                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>

      </div>
    </div>

  </q-page>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { api } from '../boot/axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const slide = ref(1)
const slide2 = ref(1)
const slide3 = ref(1)
const slide4 = ref(1)
const autoplay = ref(false)
const autoplay2 = ref(false)
const autoplay3 = ref(false)
const autoplay4 = ref(false)

const toProduct = (productId) => {
  router.push('/product/' + productId)
}
const products = reactive([])
console.log(products)

const init = async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}
init()
</script>
