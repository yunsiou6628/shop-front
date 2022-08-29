<!-- ArticleColumn 文章專欄 -->
<template>
  <!-- style="width: 600px; height: 400px; border: 10px solid white ; z-index: 1; position: absolute; top:10%; left: 25%; transform: translate(0%); transform: rotate(5deg); box-shadow: 0 0 10px rgba(0,0,0,0.3);" -->
  <q-responsive :ratio="16 / 9" class="col" style="height: 500px; z-index: -1; ">
    <div class="column" style="position: relative;">
      <q-img class="gt-lg" src="https://i.imgur.com/B1OfGhI.jpg" style="height: 500px;" />
      <q-img class="lt-xl gt-sm" src="https://i.imgur.com/FdgDQ4c.jpg" style="height: 500px;" />
      <q-img class="lt-md q-pt-xl" src="https://i.imgur.com/FdgDQ4c.jpg" style="height: 500px;" />
    </div>

    <!-- 大尺寸 -->
    <div class="gt-md col-12 column justify-center content-center items-center"
      style="color: #5E8A4B; position: absolute; top:30%; left: 50%; transform: translate(-50%,-50%);">
      <div class="text-h3 text-weight-bolder q-pa-md">文章專欄</div>
      <div class="text-h6 column justify-center content-center items-center q-pa-md">
        <span class="text-weight-bolder">走進山裡，帶著故事與經驗出來，</span>
        <span class="text-weight-bolder">分享最自然、最真實戶外生活大小事，及登山知識、裝備推薦等文章，</span>
        <span class="text-weight-bolder">期待我們的故事能觸動到你，說不定有一天，我們會在山上相遇。</span>
      </div>
    </div>

    <!-- 中尺寸 -->
    <div class="lt-lg gt-xs col-12 column justify-center content-center items-center"
      style="color: #5E8A4B; position: absolute; top:30%; left: 50%; transform: translate(-50%,-50%);">
      <div class="text-h4 text-weight-bolder q-pa-lg">文章專欄</div>
      <div class="text-subtitle1 column justify-center q-pa-lg">
        <span class="text-weight-bolder">走進山裡，帶著故事與經驗出來，</span>
        <span class="text-weight-bolder">分享最自然、最真實戶外生活大小事，及登山知識、裝備推薦等文章，</span>
        <span class="text-weight-bolder">期待我們的故事能觸動到你，說不定有一天，我們會在山上相遇。</span>
      </div>
    </div>

    <!-- 小尺寸 -->
    <div class="lt-sm col-12 column justify-center content-center items-center"
      style="color: #5E8A4B; position: absolute; top:30%; left: 50%; transform: translate(-50%,-50%);">
      <div class="text-h4 text-weight-bolder q-pa-md">文章專欄</div>
      <div class="text-subtitle1 column justify-center q-pa-md q-py-xl">
        <span class="text-weight-bolder">走進山裡，帶著故事與經驗出來，</span>
        <span class="text-weight-bolder">分享最自然、最真實戶外生活大小事，及登山知識、裝備推薦等文章，</span>
        <span class="text-weight-bolder">期待我們的故事能觸動到你，說不定有一天，我們會在山上相遇。</span>
      </div>
    </div>
  </q-responsive>

  <!-- 中尺寸和大尺寸 -->
  <div class="gt-sm q-pa-md q-py-xl row justify-center content-center items-center q-gutter-lg text-grey-7">
    <div class="col-md-10 col-lg-5">
      <div class="col-6 text-h4 text-weight-bolder q-ma-xl text-center">
        <span>帶隊鬼故事</span>
      </div>
      <q-card class="my-card col-4" flat bordered full-height style="height:100%;">
        <q-card-section horizontal class="col-12">
          <div class="col-6 q-pa-lg">
            <span>關於 ⟪帶隊鬼故事⟫</span><br><br>
            <span>在 ⟪帶隊鬼故事⟫ 中，不講怪力亂神，因為山林自有靈，彼此互相尊重就好，這裡將著重在帶隊過程中所遇到的特別案例。</span><br><br>
            <span>為講求真實性，故事中僅有名字會做化名處理，其餘發生地點和過程會如實描述，你讀到的將不只是一則登山故事，更是一位位愛山的人，想一起推動的登山觀念。</span><br><br><br>

            <div class="q-pa-md row justify-center content-center items-center">
              <q-btn label="Read More" class="col-auto "
                style="width: 150px; border-radius: 30px; background: #9AB98D; color: #fff; font-size: 14px;" />
              <!-- 先暫時不跳頁-未完 to="/ArticleColumnOne" -->
              <!-- <q-btn to="/ArticleColumnOne" label="Read More" class="col-auto "
                style="width: 150px; border-radius: 30px; background: #9AB98D; color: #fff; font-size: 14px;" /> -->
            </div>
          </div>
          <q-img class="col-6" :ratio="4 / 3" src="https://i.imgur.com/uzJHT8E.jpg" />
        </q-card-section>
      </q-card>
    </div>

    <div class="col-md-10 col-lg-5">
      <div class="col-6 text-h4 text-weight-bolder q-ma-xl text-center">
        <span>她與她的山友們</span>
      </div>
      <q-card class="my-card col-4" flat bordered full-height style="height:100%;">
        <q-card-section horizontal class="col-12">
          <div class="col-6 q-pa-lg">
            <span>每趟山行中，總會問身旁的隊友，記不記得第一次爬山的感受？</span><br><br>
            <span>他們說，記得記得，第一次登頂就白牆一片，身體打著哆嗦，配著頭痛欲裂，慌慌張張、匆匆忙忙的就趕下山了。好虐人。</span><br><br>
            <span>「那麼，為什麼又上山呢？」 因為，喜歡上這種自虐的感覺啊。話一說完，我們忍不住大笑，因為這是所有愛山人的特質。</span><br><br>

            <div class="q-pa-md row justify-center content-center items-center">
              <q-btn label="Read More" class="col-auto "
                style="width: 150px; border-radius: 30px; background: #9AB98D; color: #fff; font-size: 14px;">
                <!-- 先暫時不跳頁-未完 to="/ArticleColumnOne" -->
                <!-- <q-btn to="/ArticleColumnOne" label="Read More" class="col-auto "
                style="width: 150px; border-radius: 30px; background: #9AB98D; color: #fff; font-size: 14px;"> -->
              </q-btn>
            </div>
          </div>
          <q-img class="col-6" :ratio="4 / 3" src="https://i.imgur.com/uzJHT8E.jpg" />
        </q-card-section>
      </q-card>
    </div>

    <div class="col-md-10 col-lg-5">
      <div class="col-6 text-h4 text-weight-bolder q-ma-xl text-center">
        <span>登山知識</span>
      </div>
      <q-card class="my-card col-4" flat bordered full-height style="height:100%;">
        <q-card-section horizontal class="col-12">
          <div class="col-6 q-pa-lg">
            <span>如何避免迷途發生，就必須要先建立正確的登山心態，其核心就是理解「登山是風險管理的運動」，並將這樣的觀念實踐於登山歷程。</span><br><br>
            <span>登山前的準備，可以說是確保登山活動安全的根本，卻也是許多人最容易輕忽的部分，尤其容易發生在熱門、或是網路上瘋傳的路線，美麗的山林畫面、自我挑戰的誘因，讓許多可能並不熟悉登山活動的人也慕名前往，卻未做好相應的準備...</span><br><br>
            <div class="q-pa-md row justify-center content-center items-center">
              <q-btn label="Read More" class="col-auto "
                style="width: 150px; border-radius: 30px; background: #9AB98D; color: #fff; font-size: 14px;">
                <!-- 先暫時不跳頁-未完 to="/ArticleColumnOne" -->
                <!-- <q-btn to="/ArticleColumnOne" label="Read More" class="col-auto "
                style="width: 150px; border-radius: 30px; background: #9AB98D; color: #fff; font-size: 14px;"> -->
              </q-btn>
            </div>
          </div>
          <q-img class="col-6" :ratio="4 / 3" src="https://i.imgur.com/uzJHT8E.jpg" />
        </q-card-section>
      </q-card>
    </div>

    <div class="col-md-10 col-lg-5">
      <div class="col-6 text-h4 text-weight-bolder q-ma-xl text-center">
        <span>裝備推薦</span>
      </div>
      <q-card class="my-card col-4" flat bordered full-height style="height:100%;">
        <q-card-section horizontal class="col-12">
          <div class="col-6 q-pa-lg">
            <span>登山前的準備，除了基本的體力與擬定登山計畫以外，最重要的就是備妥登山道具了。目前市面上的登山道具百百種，提供一些適合入門者購買的清單當作參考，部分用品可視情況斟酌選購。</span><br><br>
            <span>另外，除了讓你更清楚有哪些必備物品以外，更重要的是在看完之後，你會了解「為什麼要帶這樣東西上山」，進而學習依據不同的行程，調整帶上山的裝備。</span><br><br><br>

            <div class="q-pa-md row justify-center content-center items-center">
              <q-btn label="Read More" class="col-auto "
                style="width: 150px; border-radius: 30px; background: #9AB98D; color: #fff; font-size: 14px;">
                <!-- 先暫時不跳頁-未完 to="/ArticleColumnOne" -->
                <!-- <q-btn to="/ArticleColumnOne" label="Read More" class="col-auto "
                style="width: 150px; border-radius: 30px; background: #9AB98D; color: #fff; font-size: 14px;"> -->
              </q-btn>
            </div>
          </div>
          <q-img class="col-6" :ratio="4 / 3" src="https://i.imgur.com/uzJHT8E.jpg" />
        </q-card-section>
      </q-card>
    </div>

  </div>

  <!-- 小尺寸 -->
  <div class="lt-md q-pa-xl column justify-center content-center items-center q-gutter-lg text-grey-7">
    <div class="col-12">
      <div class="col-6 text-h4 text-weight-bolder q-ma-xl text-center">
        <span>帶隊鬼故事</span>
      </div>
      <q-card class="my-card col-12" flat bordered style="height:100%;">
        <q-img class="col-12" :ratio="4 / 3" src="https://i.imgur.com/uzJHT8E.jpg" />
        <q-card-section horizontal class="full-height col-12  column">
          <div class="col-6 q-pa-lg">
            <span>關於 ⟪帶隊鬼故事⟫</span><br><br>
            <span>在 ⟪帶隊鬼故事⟫ 中，不講怪力亂神，因為山林自有靈，彼此互相尊重就好，這裡將著重在帶隊過程中所遇到的特別案例。</span><br><br>
            <span>為講求真實性，故事中僅有名字會做化名處理，其餘發生地點和過程會如實描述，你讀到的將不只是一則登山故事，更是一位位愛山的人，想一起推動的登山觀念。</span><br><br>

            <div class="q-pa-md row justify-center content-center items-center">
              <q-btn label="Read More" class="col-auto "
                style="width: 150px; border-radius: 30px; background: #9AB98D; color: #fff; font-size: 14px;">
                <!-- 先暫時不跳頁-未完 to="/ArticleColumnOne" -->
                <!-- <q-btn to="/ArticleColumnOne" label="Read More" class="col-auto "
                style="width: 150px; border-radius: 30px; background: #9AB98D; color: #fff; font-size: 14px;"> -->
              </q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-12">
      <div class="col-6 text-h4 text-weight-bolder q-ma-xl text-center">
        <span>她與她的山友們</span>
      </div>
      <q-card class="my-card col-4" flat bordered style="height:3100%">
        <q-card-section horizontal class="full-height col-12 column">
          <q-img class="col-6" :ratio="4 / 3" src="https://i.imgur.com/uzJHT8E.jpg" />
          <div class="col-6 q-pa-lg">
            <span>每趟山行中，總會問身旁的隊友，記不記得第一次爬山的感受？</span><br><br>
            <span>他們說，記得記得，第一次登頂就白牆一片，身體打著哆嗦，配著頭痛欲裂，慌慌張張、匆匆忙忙的就趕下山了。好虐人。</span><br><br>
            <span>「那麼，為什麼又上山呢？」 因為，喜歡上這種自虐的感覺啊。話一說完，我們忍不住大笑，因為這是所有愛山人的特質。</span><br><br>

            <div class="q-pa-md row justify-center content-center items-center">
              <q-btn label="Read More" class="col-auto "
                style="width: 150px; border-radius: 30px; background: #9AB98D; color: #fff; font-size: 14px;">
                <!-- 先暫時不跳頁-未完 to="/ArticleColumnOne" -->
                <!-- <q-btn to="/ArticleColumnOne" label="Read More" class="col-auto "
                style="width: 150px; border-radius: 30px; background: #9AB98D; color: #fff; font-size: 14px;"> -->
              </q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-12">
      <div class="col-6 text-h4 text-weight-bolder q-ma-xl text-center">
        <span>登山知識</span>
      </div>
      <q-card class="my-card col-4" flat bordered style="height:100%;">
        <q-card-section horizontal class="full-height col-12 column">
          <q-img class="col-6" :ratio="4 / 3" src="https://i.imgur.com/uzJHT8E.jpg" />
          <div class="col-6 q-pa-lg">
            <span>如何避免迷途發生，就必須要先建立正確的登山心態，其核心就是理解「登山是風險管理的運動」，並將這樣的觀念實踐於登山歷程。</span><br><br>
            <span>登山前的準備，可以說是確保登山活動安全的根本，卻也是許多人最容易輕忽的部分，尤其容易發生在熱門、或是網路上瘋傳的路線，美麗的山林畫面、自我挑戰的誘因，讓許多可能並不熟悉登山活動的人也慕名前往，卻未做好相應的準備...</span><br><br>
            <div class="q-pa-md row justify-center content-center items-center">
              <q-btn label="Read More" class="col-auto "
                style="width: 150px; border-radius: 30px; background: #9AB98D; color: #fff; font-size: 14px;">
                <!-- 先暫時不跳頁-未完 to="/ArticleColumnOne" -->
                <!-- <q-btn to="/ArticleColumnOne" label="Read More" class="col-auto "
                style="width: 150px; border-radius: 30px; background: #9AB98D; color: #fff; font-size: 14px;"> -->
              </q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-12">
      <div class="col-6 text-h4 text-weight-bolder q-ma-xl text-center">
        <span>裝備推薦</span>
      </div>
      <q-card class="my-card col-4" flat bordered style="height:100%;">
        <q-card-section horizontal class="full-height col-12 column">
          <q-img class="col-6" :ratio="4 / 3" src="https://i.imgur.com/uzJHT8E.jpg" />
          <div class="col-6 q-pa-lg">
            <span>登山前的準備，除了基本的體力與擬定登山計畫以外，最重要的就是備妥登山道具了。目前市面上的登山道具百百種，提供一些適合入門者購買的清單當作參考，部分用品可視情況斟酌選購。</span><br><br>
            <span>另外，除了讓你更清楚有哪些必備物品以外，更重要的是在看完之後，你會了解「為什麼要帶這樣東西上山」，進而學習依據不同的行程，調整帶上山的裝備。</span><br><br><br>

            <div class="q-pa-md row justify-center content-center items-center">
              <q-btn label="Read More" class="col-auto "
                style="width: 150px; border-radius: 30px; background: #9AB98D; color: #fff; font-size: 14px;">
                <!-- 先暫時不跳頁-未完 to="/ArticleColumnOne" -->
                <!-- <q-btn to="/ArticleColumnOne" label="Read More" class="col-auto "
                style="width: 150px; border-radius: 30px; background: #9AB98D; color: #fff; font-size: 14px;"> -->
              </q-btn>
            </div>
          </div>

        </q-card-section>
      </q-card>
    </div>

  </div>
</template>
