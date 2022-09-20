<!-- AdminLayout -->

<template>
  <q-layout view="lHh Hpf lFf">
    <q-header elevated class="bg-white text-weight-bolder" style="color:#5E8A4B">
      <q-toolbar class="row justify-center">

        <q-tabs>
          <q-route-tab name="後台首頁" label="後台" to="AdminHome" />
          <q-route-tab name="商品管理" label="商品管理" to="AdminProduct" />
          <q-route-tab name="商品分類" label="商品分類" to="AdminCategory" />
          <q-route-tab name="訂單管理" label="訂單管理" to="AdminOrderView" />
          <q-route-tab name="會員管理" label="會員管理" to="AdminMember" />
          <q-route-tab name="文章專欄管理" label="文章管理" to="AdminArticlecolumn" />
          <q-route-tab name="頁面管理" label="頁面管理" to="AdminPages" />
          <q-route-tab name="前台首頁" label="前台" to="/" />
          <!-- <q-route-tab name="表單測試" label="測試頁" to="AdminTest" /> -->
        </q-tabs>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
