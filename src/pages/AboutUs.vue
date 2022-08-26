<!-- AboutUs 關於我們 -->
<template>
  <!-- 大尺寸 -->
  <div class="gt-lg" id="mainbanner">
    <div class="row">
      <q-responsive class="col" :ratio="16 / 9">
        <div style="overflow: hidden; ">
          <!-- 01 背景山雲海 -->
          <!-- <q-img src="../assets/01.jpg" id="banner1" style="width: 100%; height: 100%; position: absolute;" /> -->
          <!-- 02 山 -->
          <!-- <q-img src="../assets/02.png" id="banner2"
            style="width: 110%; height: 100%; position: absolute; top:-5vh; left: -10%;" /> -->
          <!-- 04 大雲 -->
          <!-- <q-img src="../assets/04.png" id="banner4" style="width: 110%; height: 100%; position: absolute;" /> -->
          <!-- 03 最前景人物 -->
          <!-- <q-img src="../assets/03mainbanner.png" id="banner3"
            style="width: 110%; height: 100%; position: absolute;  top:-5vh; left: -10%;" /> -->
          <!-- 05 小雲 -->
          <!-- <q-img src="../assets/05.png" id="banner5" style="width: 110%; height: 100%; position: absolute;" />
        </div>
        <div style="position: absolute; width: 100%; height: 500%; top:80vh; left: 0;" id="banner6">
          <q-img src="../assets/06.cloud_top.png" />
        </div>
        <div style="position: absolute; width: 100%; height: 500%; top:80vh; left: 0;" id="banner6">
          <q-img src="../assets/06.cloud_top.png" />-->

          <q-img src="../assets/02.png" id="banner2" />
          <q-img src="../assets/04.cloud.png" id="banner4" />
          <q-img src="../assets/05.png" id="banner5" />
          <q-img src="../assets/gohiking.png" id="gohiking" />
          <q-img src="../assets/03mainbanner.png" id="banner3" />
          <q-img src="../assets/06.cloud_top.png" id="banner6" />
        </div>
      </q-responsive>
    </div>

    <div class="row" style="background: #fff; color: #5E8A4B;">
      <div class="col-12 text-h4 text-weight-bolder q-ma-xl text-center">
        <span>關於我們</span>
      </div>
    </div>

    <!-- 分隔線 -->
    <div class="col-12 row justify-center" style="background: #fff;">
      <q-separator style="width:80%" />
    </div>

    <div class="row q-px-xxxl" style="background: #fff; color: #5E8A4B;">
      <!-- 置中範圍 -->
      <div class="row justify-center q-ma-lg q-my-xl  q-px-xl" style="width: 100%;">
        <!--圖 -->
        <div class="col-5 q-pa-lg" :ratio="4 / 3">
          <q-img src="https://i.imgur.com/orYXM4o.jpg" style="height: 100%;" />
        </div>

        <!-- 文字 -->
        <div class="col-6 q-pa-xl">
          <div class="text-h5 text-weight-bolder q-ma-lg text-center">
            <span>愛上山林的瞬間</span>
          </div>
          <!-- 分隔線 -->
          <div class="col-12 row justify-center q-pb-lg">
            <q-separator style="width:100%" />
          </div>
          <div class="text-subtitle1 column justify-center q-py-sm q-px-md">
            <span class="text-weight-bolder">回想自己第一次登山就被山景給感動，大自然的寬闊，對應自己的渺小。</span><br>
            <span
              class="text-weight-bolder">後來為了更親近山林，決定全心投入登山產業，透過嚮導受訓、野外急救等訓練課程，充實自己，也期望自己能在未來給予隊員登山知識，帶著隊員感受生理上和心理上的變化，希望透過各種對話，讓爬山不僅僅是一項活動，更是一場愛上山林、愛上生活的過程。</span>
          </div>
        </div>
      </div>
    </div>

    <div class="row q-px-xxxl" style=" background: #F4F8EE; color: #5E8A4B;">
      <!-- 置中範圍 -->
      <div class="row justify-center q-ma-lg q-px-xl" style="width: 100%;">

        <!-- 文字 -->
        <div class="col-6 q-pa-xl">
          <div class="text-h5 text-weight-bolder q-ma-lg q-pt-md text-center">
            <span>帶你去爬山</span>
          </div>
          <!-- 分隔線 -->
          <div class="col-12 row justify-center q-pb-lg">
            <q-separator style="width:100%" />
          </div>
          <div class="text-subtitle1 q-py-md q-px-md">
            <span class="text-weight-bolder">
              想和你/妳一起走進山裡，帶著屬於你/妳的山林故事與最珍貴的回憶出來。<br><br>
              在山上可以展現一個人最真實的樣子，你可以在山上看到最美、最動人的風景，<br>
              也可以在山上體會到最折磨人、最痛苦的旅程。<br><br>
              這個過程可以好好的和自己對話，好好地問自己，你為什麼在這裡？你在找尋什麼？<br>
              不管是追逐何者，不變的是你可以好好的認識自己。<br><br>
              來吧，來山裡吧！<br>
              不管是心情好、心情不好，山都會給你擁抱。</span>
          </div>
        </div>

        <!--圖 -->
        <div class="col-6 q-pa-xl" :ratio="4 / 3">
          <!-- <q-img src="https://i.imgur.com/Q86hstq.jpg" style=" height: 100%;" /> -->
          <q-img src="https://i.imgur.com/HvIUItt.jpg" style="height: 100%;" />
        </div>

      </div>
    </div>

    <div class="row q-px-xxxl" style="background: #fff; color: #5E8A4B;">
      <div class="col-12 text-h4 text-weight-bolder q-ma-xl q-py-lg text-center">
        <span>專業嚮導團隊</span>
      </div>
      <!-- 分隔線 -->
      <div class=" col-12 row justify-center q-pb-xl">
        <q-separator style="width:90%" />
      </div>
      <!--圖 -->
      <div class="row col-12 q-px-xxxl q-pt-lg" :ratio="4 / 3">
        <!-- <q-img src="https://i.imgur.com/Q86hstq.jpg" style=" height: 100%;" /> -->

        <div class="col-3 text-center q-py-xs">
          <q-img src="https://i.imgur.com/Sog0p4l.png" style="width: 300px;" />
        </div>
        <div class="col-3 text-center q-py-xxxl">
          <q-img src="https://i.imgur.com/Sog0p4l.png" style="width: 300px;" />
        </div>
        <div class="col-3 text-center q-py-xs">
          <q-img src="https://i.imgur.com/Sog0p4l.png" style="width: 300px;" />
        </div>
        <div class="col-3 text-center q-py-xxxl">
          <q-img src="https://i.imgur.com/Sog0p4l.png" style="width: 300px;" />
        </div>
      </div>
    </div>

  </div>

  <!-- 中小尺寸 -->
  <div class="lt-xl">
    <div class="row bg-yellow">
      <q-responsive class="col" style="z-index: 1;" :ratio="16 / 9">
        <div>
          <q-img src="https://i.imgur.com/Q86hstq.jpg" style="height: 100%;" />
        </div>
      </q-responsive>
    </div>

    <div class="row" style="color: #5E8A4B;">
      <div class="col row justify-center text-h4 text-weight-bolder q-ma-xl">
        <span>關於我們</span>
      </div>
    </div>

    <!-- 分隔線 -->
    <div class="col-12 row justify-center">
      <q-separator style="width:80%" />
    </div>

    <div class="row q-px-lg" style=" color: #5E8A4B;">
      <!-- 置中範圍 -->
      <div class="row justify-center q-ma-lg q-my-xl " style="width: 100%;">
        <!--圖 -->
        <div class="col-12" :ratio="4 / 3">
          <q-img src="https://i.imgur.com/orYXM4o.jpg" style="height: 100%;" />
        </div>

        <!-- 文字 -->
        <div class="col-12 q-pa-md">
          <div class="text-h5 text-weight-bolder q-ma-lg text-center">
            <span>愛上山林的瞬間</span>
          </div>
          <!-- 分隔線 -->
          <div class="col-12 row justify-center q-pb-lg">
            <q-separator style="width:100%" />
          </div>
          <div class="text-subtitle1 column justify-center q-py-sm q-px-md">
            <span class="text-weight-bolder">回想自己第一次登山就被山景給感動，大自然的寬闊，對應自己的渺小。</span><br>
            <span
              class="text-weight-bolder">後來為了更親近山林，決定全心投入登山產業，透過嚮導受訓、野外急救等訓練課程，充實自己，也期望自己能在未來給予隊員登山知識，帶著隊員感受生理上和心理上的變化，希望透過各種對話，讓爬山不僅僅是一項活動，更是一場愛上山林、愛上生活的過程。</span>
          </div>
        </div>
      </div>
    </div>

    <div class="row q-px-lg" style=" background: #F4F8EE; color: #5E8A4B;">
      <!-- 置中範圍 -->
      <div class="row justify-center" style="width: 100%;">

        <!--圖 -->
        <div class="col-12 q-px-lg q-pt-xl" :ratio="4 / 3">
          <!-- <q-img src="https://i.imgur.com/Q86hstq.jpg" style=" height: 100%;" /> -->
          <q-img src="https://i.imgur.com/HvIUItt.jpg" style="height: 100%;" />
        </div>

        <!-- 文字 -->
        <div class="col-12 q-pa-xl">
          <div class="text-h5 text-weight-bolder q-ma-lg text-center">
            <span>帶你去爬山</span>
          </div>
          <!-- 分隔線 -->
          <div class="col-12 row justify-center q-pb-lg">
            <q-separator style="width:100%" />
          </div>
          <div class="col-12 text-subtitle1 q-py-sm q-px-md">
            <span class="text-weight-bolder">
              想和你/妳一起走進山裡，帶著屬於你/妳的山林故事與最珍貴的回憶出來。<br><br>
              在山上可以展現一個人最真實的樣子，你可以在山上看到最美、最動人的風景，也可以在山上體會到最折磨人、最痛苦的旅程。<br><br>
              這個過程可以好好的和自己對話，好好地問自己，你為什麼在這裡？你在找尋什麼？<br>
              不管是追逐何者，不變的是你可以好好的認識自己。<br><br>
              來吧，來山裡吧！<br>
              不管是心情好、心情不好，山都會給你擁抱。</span>
          </div>
        </div>

      </div>
    </div>

    <div class="row" style="color: #5E8A4B;">
      <div class="col-12 text-h4 text-weight-bolder q-mt-xl q-py-lg text-center">
        <span>專業嚮導團隊</span>
      </div>
      <!-- 分隔線 -->
      <div class="col-12 row justify-center q-pb-xl">
        <q-separator style="width:90%" />
      </div>
      <!--圖 -->
      <div class="row col-12 justify-center content-center items-center" :ratio="4 / 3">

        <div class="col-12 col-sm-6 col-md-4 text-center q-py-sm">
          <q-img src="https://i.imgur.com/Sog0p4l.png" style="width: 300px;" />
        </div>
        <div class="col-12 col-sm-6 col-md-4 text-center q-py-sm">
          <q-img src="https://i.imgur.com/Sog0p4l.png" style="width: 300px;" />
        </div>
        <div class="col-12 col-sm-6 col-md-4 text-center q-py-sm">
          <q-img src="https://i.imgur.com/Sog0p4l.png" style="width: 300px;" />
        </div>
        <div class="col-12 col-sm-6 col-md-4 text-center q-py-sm">
          <q-img src="https://i.imgur.com/Sog0p4l.png" style="width: 300px;" />
        </div>
        <div class="col-12 col-sm-6 col-md-4 text-center q-py-sm">
          <q-img src="https://i.imgur.com/Sog0p4l.png" style="width: 300px;" />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
// https://www.npmjs.com/package/gsap

import { onMounted } from 'vue'

// typical import 主要程式
import gsap from 'gsap'

// get other plugins:
import ScrollTrigger from 'gsap/ScrollTrigger'
import { transform } from '@vue/compiler-core'

// ES6 or TypeScript:
// https://www.npmjs.com/package/cheerio
// import * as cheerio from 'cheerio'

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger)

const scrolldata = {
  start: 'top 0',
  end: 'bottom 50',
  scrub: true,
  trigger: '#mainbanner'
  // markers: true
}

onMounted(() => {
  // gsap.to('#banner2', {
  //   scrollTrigger: scrolldata,
  //   top: 400,
  //   left: -800
  // })
  gsap.to('#banner3', {
    scrollTrigger: scrolldata,
    top: 400,
    left: 800
  })
  gsap.to('#banner4', {
    scrollTrigger: scrolldata,
    left: 6000
  })
  gsap.to('#banner5', {
    scrollTrigger: scrolldata,
    left: -2000
  })
  gsap.to('#gohiking', {
    scrollTrigger: scrolldata,
    top: 1000,
    scale: 0.5
  })
})

// 監聽滑鼠移動
window.addEventListener('mousemove', function (e) {
  // console.log('x:' + -(e.pageX - window.innerWidth / 2))

  const numX = ((e.pageX - window.innerWidth / 2) / 500)
  // console.log('X:' + numX)
  const numY = ((e.pageY - window.innerHeight / 2) / 50)
  // console.log('Y:' + numY)
  // const numnum = (parseInt(((e.pageX - window.innerWidth / 2) / 50) - ((e.pageY - window.innerHeight / 2) / 50)))
  // console.log(numnum)
  // gsap.set('#banner2', {
  //   X: numX
  // })
  // 20 + '%'
  //  10 + '%'
  gsap.set('#gohiking', {
    xPercent: numX,
    yPercent: numY
    // top: 20 + '%-' + numX,
    // left: 10 + '%-' + numY
  })
})

// 滑鼠監聽事件
// window.addEventListener('mousemove', function (e) {
//   console.log('x:' + -(e.pageX - window.innerWidth / 2))
//   gsap.set('#text', {
//     textShadow: `
//       ${(e.pageX - window.innerWidth / 2) / 50}px ${-(e.pageY - window.innerHeight / 2) / 50}px 10px yellow
//     `
//   })
// })

// 雲自動移動
// $('#banner4').each(function (index, banner4) {
//   gsap.set(banner4, {
//     width: '100%',
//     height: '100%',
//     background: 'url(../assets/04.png) no-repeat center/80%',
//     opacity: 0.8,
//     position: 'absolute',
//     top: 'random(0,100)' + '%',
//     x: function () {
//       return index % 2 === 0 ? -$(window).width() : $(window).width()
//     }
//   })
//   gsap.to(banner4, {
//     x: function () {
//       return index % 2 === 0 ? $(window).width() : -$(window).width()
//     },
//     onRepeat() {
//       $(banner4).css({
//         top: gsap.utils.random(0, 100) + '%'
//       })
//     },
//     repeat: -1,
//     duration: 60,
//     ease: 'none'
//   })
// })

// gsap 視差資料
// GSAP 實現Parallax滾動視差特效 => https://blog.digishot.name/tw/552869212/page/blog/mode/show/cID/2/nNO/1651029107
// Gsap 視差滾動 => https://animpen.com/pen/LgKtwBsd
</script>
