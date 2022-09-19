<template>
  文章專欄管理
  AdminArticlecolumn

  <!------------ 表單 ------------>
  <div class="q-pa-xl">
    <div class="text-h5 text-center text-weight-bold" style="color:#5E8A4B">文章專欄管理</div>
    <div class="col-12">
      <q-btn style="background: #5E8A4B; color:#fff" @click="openDialogArticle('')"> 新增文章</q-btn>
    </div>

    <div class="col-12">
      <q-table class=" text-grey-7 " title="文章內容" :rows="products" :columns="columns" row-key="name" :filter="filter">

        <!-- 搜尋 search -->
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <!-- 編輯|刪除 -->
        <template #body-cell-edit="edit">
          <q-td>
            <!-- {{edit}} -->
            <q-btn @click="openDialogArticle(edit.row._id)">編輯</q-btn>
            <q-btn @click="deleteproduct(edit.row._id)">刪除</q-btn>
          </q-td>
        </template>
      </q-table>
    </div>

    <!-- 新增商品分類 彈出視窗 -->
    <div class="q-pa-xl">
      <q-dialog v-model="form.dialog" persistent>
        <q-card class="q-pa-lg">
          <q-form @submit.prevent='submitForm'>
            <div class="row">
              <div class="q-pa-md" style="max-width: 300px">
                <q-input v-model="text" filled label="輸入文章內容" type="textarea" />
              </div>
            </div>

            <div class="col-12 row justify-center q-pa-md q-pt-md">
              <q-btn v-if="form._id === ''" type='submit' style="background: #5E8A4B; color:#fff;"
                class="col q-py-xs q-mx-xs"> 新增文章 </q-btn>
              <q-btn v-else type='submit' style="background: #5E8A4B; color:#fff" class="col q-py-xs q-mx-xs"> 編輯確認
              </q-btn>
              <q-btn @click=cancel style="background: #fff; color:#5E8A4B" class="col q-py-xs q-mx-xs">取消</q-btn>
            </div>

          </q-form>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { apiAuth } from '../boot/axios'
import Swal from 'sweetalert2'

const articles = reactive([])

// const text = ref('')

// 初始化
const form = reactive({
  _id: '',
  name: '',
  image: null,
  article: '',
  release: false
})
const rules = reactive({
  required(v) {
    return !!v || '必填'
  },
  price(v) {
    return v > -1 || '必須大於等於 0'
  },
  size(v) {
    return !v || !v.length || (v[0]?.type?.includes('image') && v[0]?.size < 1024 * 1024) || '檔案格式不符'
  }
})

// 新增文章和編輯文章按鈕 開起的表單form)
const openDialogArticle = (_id) => {
  const idx = _id === '' ? -1 : articles.findIndex(article => article._id === _id)
  // console.log('開啟分類表單')
  if (idx > -1) {
    form.name = articles[idx].name
    form.article = articles[idx].article
    form.release = articles[idx].release
  } else {
    form.name = ''
    form.article = ''
    form.release = false
  }
  form.image = null
  form.idx = idx
  form.dialog = true
  form.valid = false
  form.submitting = false
}

// 表格內容顯示
//   {
//     name: 'name',
//     required: true,
//     label: '文章標題',
//     align: 'name',
//     field: row => row.name,
//     sortable: true
//   },
//   {
//     name: 'image',
//     required: true,
//     label: '文章圖片',
//     align: 'left',
//     field: row => row.image,
//     sortable: true
//   },
//   {
//     name: 'release',
//     required: true,
//     label: '是否發布文章',
//     align: 'release',
//     field: row => row.release ? '發布' : '未發布',
//     sortable: true
//   },
//   {
//     name: 'edit',
//     required: true,
//     label: '編輯 / 刪除',
//     align: 'left',
//     sortable: true
//   }

// 顯示全部文章資料(含未發布文章)
const init = async () => {
  try {
    const { data } = await apiAuth.get('/article_column/all')
    articles.push(...data.result)
    console.log(data.result)
    console.log(articles)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      // text: '無法觀看文章'
      text: 'error'
    })
  }
}
init()
</script>
