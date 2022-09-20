<!-- 文章專欄管理AdminArticlecolumn -->

<template>
  <!------------ 表單 ------------>
  <div class="q-pa-xl">
    <div class="text-h5 text-center text-weight-bold" style="color:#5E8A4B">文章管理</div>
    <div class="col-12">
      <q-btn style="background: #5E8A4B; color:#fff" @click="openDialogArticle('')"> 新增文章</q-btn>
    </div>

    <div class="col-12">
      <q-table class=" text-grey-7 " title="文章內容" :rows="addArticles" :columns="columns" row-key="name"
        :filter="filter">

        <!-- 搜尋 search -->
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <!-- 文章內容 -->
        <template #body-cell-article="article">
          <q-td>
            <!-- class="text-wrapper" 文字過長自動換行 -->
            <div class="text-wrapper description-textbox">{{ article.row.article }}</div>
          </q-td>
        </template>

        <!-- 圖片 -->
        <template #body-cell-image="image">
          <q-td>
            <!-- {{image.row.image}} -->
            <img :src="image.row.image" style="width:100px" />
          </q-td>
        </template>

        <!-- 編輯|刪除 -->
        <template #body-cell-edit="edit">
          <q-td>
            <!-- {{edit}} -->
            <q-btn @click="openDialogArticle(edit.row._id)">編輯</q-btn>
            <q-btn @click="deleteArticle(edit.row._id)">刪除</q-btn>
          </q-td>
        </template>
      </q-table>
    </div>

    <!-- 新增商品分類 彈出視窗 -->
    <div class="q-pa-xl">
      <q-dialog v-model="form.dialog" persistent>
        <q-card class="q-pa-lg">
          <q-form @submit.prevent='submitForm'>
            <!-- @submit.prevent取消=改成執行'submitForm' => 不執行原本的submit，因為不知道資料要送去哪，新function會傳送到後台資料庫，點同一個 submit 按鈕，執行新的 function => submitForm -->
            <div class="row">

              <div class="col-12">
                <q-input v-model='form.name' label='文章標題' :rules='[rules.required]'></q-input>
              </div>

              <div class="col-12">
                <q-file v-model='form.image' show-size accept='image/*' label='文章圖片'></q-file>
              </div>

              <div class="col-12">
                <q-input v-model='form.article' label="輸入文章內容" type="textarea" :rules='[rules.required]'
                  :input-style="{ height:'300px' }" />
              </div>

              <div class="col-12 q-py-lg text-grey-7">
                <q-checkbox v-model='form.release' label='發布'></q-checkbox>
              </div>

            </div>

            <div class="col-12 row justify-center q-pa-md q-pt-md">
              <q-btn @click='form.dialog = false' v-close-popup style="background: #fff; color:#5E8A4B"
                class="col q-py-xs q-mx-xs">取消
              </q-btn>
              <q-btn v-if="form._id === ''" type='submit' v-close-popup style="background: #5E8A4B; color:#fff;"
                class="col q-py-xs q-mx-xs"> 新增文章 </q-btn>
              <q-btn v-else type='submit' v-close-popup style="background: #5E8A4B; color:#fff"
                class="col q-py-xs q-mx-xs"> 編輯確認
              </q-btn>
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

const addArticles = reactive([])

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
  const idx = _id === '' ? -1 : addArticles.findIndex(addArticle => addArticle._id === _id)
  // console.log('開啟分類表單')
  form._id = _id
  if (idx > -1) {
    form.name = addArticles[idx].name
    form.article = addArticles[idx].article
    form.release = addArticles[idx].release
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

// 送出表單 (不執行原本的submit， 點同一個 submit 按鈕，執行新的 function => submitForm)
const submitForm = async () => {
  // console.log('這是表單' + form.product_date.to)
  form.submitting = true
  const fd = new FormData()
  for (const key in form) {
    if (['_id', 'idx', 'dialog', 'valid', 'submitting'].includes(key)) continue
    else fd.append(key, form[key])
  }
  try {
    if (form._id.length === 0) {
      // apiAuth 後台路徑
      const { data } = await apiAuth.post('/article_column', fd)
      addArticles.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/article_column/' + form._id, fd)
      // 顯示方式 (輸入大分類，顯示不同小分類)
      addArticles[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
}

// 表格內容顯示
const columns = [
  {
    name: 'name',
    required: true,
    label: '文章標題',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  {
    name: 'image',
    required: true,
    label: '文章圖片',
    align: 'left',
    sortable: true
  },
  {
    name: 'article',
    required: true,
    label: '文章內容',
    align: 'left',
    sortable: true
  },
  {
    name: 'release',
    required: true,
    label: '是否發布文章',
    align: 'left',
    field: row => row.release ? '發布' : '未發布',
    sortable: true
  },
  {
    name: 'edit',
    required: true,
    label: '編輯 / 刪除',
    align: 'left',
    sortable: true
  }
]

const deleteArticle = async (articleid) => {
  try {
    await apiAuth.delete('/article_column/' + articleid)
    await Swal.fire({
      icon: 'success',
      title: '刪除成功'
    })
    // 在成功的地方再呼叫一次 function 即時更新刪除結果
    const idx = addArticles.findIndex(addArticle => addArticle._id === articleid)
    addArticles.splice(idx, 1)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

// 顯示全部文章資料(含未發布文章)
const init = async () => {
  try {
    const { data } = await apiAuth.get('/article_column/all')
    addArticles.push(...data.result)
    console.log(data.result)
    console.log(addArticles)
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
