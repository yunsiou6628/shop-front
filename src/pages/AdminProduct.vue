<!-- AdminProduct -->

<template>
  <!------------ 表單 ------------>
  <div class="q-pa-xl">
    <div class="text-h5 text-center text-weight-bold" style="color:#5E8A4B">商品管理</div>
    <div class="col-12">
      <q-btn style="background: #5E8A4B; color:#fff" @click="openDialog('')"> 新增商品 </q-btn>
    </div>

    <div class="col-12">
      <q-table class=" text-grey-7 " title="商品資料" :rows="products" :columns="columns" row-key="name" :filter="filter">

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
            <q-btn @click="openDialog(edit.row._id)">編輯</q-btn>
            <q-btn @click="openDeleteDialog(edit.row._id)">刪除</q-btn>
          </q-td>
        </template>

        <template #body-cell-product_date="product_date">
          <q-td>
            <!-- 修改顯示資料內容 -->
            <!-- {{product_date.row}} -->
            <!-- {{product_date.row.product_date.from}}
            {{product_date.row.product_date.to}} -->
            <div>{{ new Date(product_date.row.product_date.from).toLocaleDateString() }}</div>
            <div>{{ new Date(product_date.row.product_date.to).toLocaleDateString() }}</div>
          </q-td>
        </template>

        <!-- 縣市區域 -->
        <template #body-cell-region="region">
          <q-td>
            <!-- class="text-wrapper" 文字過長自動換行 -->
            <div class="text-wrapper">{{ region.row.region }}</div>
          </q-td>
        </template>

        <!-- 圖片 -->
        <template #body-cell-image="image">
          <q-td>
            <!-- {{image.row.image}} -->
            <img :src="image.row.image" style="width:100px" />
          </q-td>
        </template>

        <!-- 商品描述 -->
        <template #body-cell-description="description">
          <q-td>
            <!-- class="text-wrapper" 文字過長自動換行 -->
            <div class="text-wrapper">{{ description.row.description }}</div>
          </q-td>
        </template>

        <!-- 公告提醒 -->
        <template #body-cell-bulletin="bulletin">
          <q-td>
            <!-- class="text-wrapper" 文字過長自動換行 -->
            <div class="text-wrapper">{{ bulletin.row.bulletin }}</div>
          </q-td>
        </template>

        <template #body-cell-sub="data">
          <q-td>
            {{ data.row.category.name }} > {{ data.row.sub.name }}
          </q-td>
        </template>
        <!-- Template Slot (插槽) https://book.vue.tw/CH2/2-4-slots.html => Slot 方式加入按鈕 -->
        <!-- https://quasar.dev/vue-components/table#qtable-api -->
        <!-- Body slots <q-td>在裡面再新增一個按鈕</q-td> -->
        <!-- QTable API - body-cell-[name] Slot to define how a specific column cell looks like; replace '[name]' with column name (from columns definition object) -->
      </q-table>
    </div>
  </div>

  <!-- 新增商品 彈出視窗 -->
  <div class="q-pa-xl">
    <q-dialog v-model="form.dialog" persistent>
      <q-card class="q-pa-lg">
        <q-form @submit.prevent='submitForm'>
          <!-- @submit.prevent取消=改成執行'submitForm' => 不執行原本的submit，因為不知道資料要送去哪，新function會傳送到後台資料庫，點同一個 submit 按鈕，執行新的 function => submitForm -->
          <div class="row">
            <div class="col-12">
              <q-input v-model='form.name' label='名稱' :rules='[rules.required]'></q-input>
            </div>

            <!-- 必須物件型態 {} https://quasar.dev/vue-components/date#with-qinput -->
            <!-- 用分類 + - 去寫 日期多筆資料 -->
            <!-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date -->
            <div class="col-6">
              <!-- {{ form.product_date.from }} -->
              <q-input v-model="form.product_date.from" stack-label label='行程日期' :rules='[rules.required]'>
                <!-- <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-date v-model="form.product.from"  range>
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template> -->
              </q-input>
            </div>
            <div class="col-6">
              <!-- {{ form.product_date.to }} -->
              <q-input v-model="form.product_date.to" stack-lael label='行程日期' :rules='[rules.required]'>
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                      <q-date v-model="form.product_date" range>
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>

            <div class="col-12 q-py-sm">
              <q-input v-model='form.region' label='縣市區域' :rules='[rules.required]'></q-input>
            </div>
            <div class="col-12 q-py-sm">
              <q-select :options='options' emit-value map-options v-model='form.category' label='大分類'
                @update:model-value="form.sub = ''"></q-select>
            </div>
            <div class="col-12 q-py-sm">
              <q-select :options='suboptions' emit-value map-options v-model='form.sub' label='小分類'></q-select>
            </div>
            <div class="col-12 q-py-sm">
              <q-input type='number' v-model.number='form.price' label='價格' :rules='[rules.required, rules.price]'>
              </q-input>
            </div>
            <div class="col-12 q-py-sm">
              <q-file v-model='form.image' show-size accept='image/*' label='商品圖片' :rules='[rules.size]'></q-file>
            </div>
            <div class="col-12 q-py-sm">
              <q-input type="textarea" v-model='form.description' label='商品描述' :input-style="{ height:'500px' }">
              </q-input>
            </div>
            <div class="col-12 q-py-sm">
              <q-input type="textarea" v-model='form.bulletin' label='公告提醒' :input-style="{ height:'300px' }"></q-input>
            </div>
            <div class="col-12 q-py-sm">
              <q-input v-model='form.reserve' label='庫存數量(名額)'></q-input>
            </div>
            <div class="col-12 q-py-lg text-grey-7">
              <q-checkbox v-model='form.sell' label='上架'></q-checkbox>
            </div>
          </div>

          <q-card-actions class="row justify-center text-center q-pa-md ">
            <q-space />
            <q-btn @click='form.dialog = false' v-close-popup class="col q-pa-xl"
              style="background: #fff; color:#5E8A4B">取消
            </q-btn>
            <q-btn v-close-popup type='submit' class="col q-pa-xl" style="background: #5E8A4B; color:#fff">確定</q-btn>
          </q-card-actions>

        </q-form>
      </q-card>
    </q-dialog>

    <!-- 點刪除商品彈出確認視窗 -->
    <q-dialog v-model="deleteDialog.dialog" persistent>
      <q-card class="row justify-center q-py-xl my-card">
        <div class="col-12 text-center text-h4 text-red-6 q-pa-md">注意!</div>
        <div class="col-12 text-center text-h6 text-grey-8 q-pa-md">確定要刪除分類嗎?<br>(刪除後將無法復原資料)</div>
        <div class="col-12 row justify-center q-pa-sm q-pt-md">
          <!-- 取消刪除 -->
          <q-btn @click="deleteDialog.dialog = false" flat outline class="col-3 q-py-xs q-mx-md bg-grey-2" label="取消" />
          <!-- 確定刪除 -->
          <q-btn @click="deleteproduct(del)" flat class="col-3 q-py-xs q-mx-xs bg-red-6 text-white " label="確定刪除" />
        </div>
      </q-card>>
    </q-dialog>
  </div>

  <!------------ 日曆 ------------>
  <!-- 文件 -->
  <!-- https://quasar.dev/vue-components/date#usage -->
  <!-- https://quasar.dev/quasar-utils/date-utils -->

</template>

<script setup>
import { reactive, ref, computed } from 'vue'
// reactive 陣列或物件 ref 變數 => vue 用法， 要在 vue 使用要 import 加 { reactive, ref }
import Swal from 'sweetalert2'
import { apiAuth } from '../boot/axios'

const filter = ref('')
// 搜尋 filter : String | Object => 搜尋抓資料 https://quasar.dev/vue-components/table#qtable-api

// 把後台資料放入 options
// const options = ['郊山', '步道', '中級山', '百岳行程']
const options = computed(() => {
  return productscategory.map(category => {
    return {
      label: category.category,
      value: category._id
    }
  })
})

const suboptions = computed(() => {
  const cidx = productscategory.findIndex(category => category._id === form.category)
  return cidx > -1 ? productscategory[cidx].sub.map(sub => {
    return {
      label: sub.name,
      value: sub._id
    }
  }) : []
})

const products = reactive([])
const productscategory = reactive([])
// ([]) products 丟到空陣列中

// 初始化
const form = reactive({
  // 清空欄位 + 賦予欄位資料型態 (欄位不一定宣告 const 的時候是空的) =>  '' 字串 , 0 數字 , true | false 布林值 , null 物件
  _id: '',
  name: '',
  product_date: {
    from: '',
    to: ''
  },
  // product_date_start: '年/月/日',
  // product_date_over: '年/月/日',
  // quasar date 的 model 型態是 String => https://quasar.dev/vue-components/date#introduction
  // models 的 product_date 型態給他 type: Date
  // 後台 controllers products.js 把原本 req.body.product_date 改成 new Date(req.body.product_date)
  // => 自動轉換成 Date
  region: '',
  reserve: 0,
  price: 0,
  sub: '',
  sell: false,
  image: null,
  // quasar 接收檔案是 Objecy filed 檔案物件 => null
  description: '',
  bulletin: '',
  idx: -1,
  dialog: false
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

// 清空表單/打開表單(新增商品和編輯按鈕 開起的表單form)
const openDialog = (_id) => {
  const idx = _id === '' ? -1 : products.findIndex(product => product._id === _id)
  // console.log('開啟表單')
  form._id = _id
  if (idx > -1) {
    form.name = products[idx].name
    form.product_date = products[idx].product_date
    // form.product_date_start = products[idx].product_date_start
    // form.product_date_over = products[idx].product_date_over
    form.region = products[idx].region
    form.reserve = products[idx].reserve
    form.price = products[idx].price
    form.category = products[idx].category._id
    form.sell = products[idx].sell
    form.sub = products[idx].sub._id
    form.description = products[idx].description
    form.bulletin = products[idx].bulletin
  } else {
    form.name = ''
    form.product_date = {
      from: '年/月/日',
      to: '年/月/日'
    }
    // form.product_date_start = '年/月/日'
    // form.product_date_over = '年/月/日'
    form.region = ''
    form.reserve = 0
    form.price = 0
    form.category = ''
    form.sell = false
    form.sub = ''
    form.description = ''
    form.bulletin = ''
  }
  form.image = null
  form.idx = idx
  form.dialog = true
  form.valid = false
  form.submitting = false
}

// 送出表單 (不執行原本的submit， 點同一個 submit 按鈕，執行新的 function => submitForm)
const submitForm = async () => {
  console.log('lllllllllll')
  // console.log('這是表單' + form.product_date.to)
  form.submitting = true

  // FormData() 用意 => 把輸入資料轉換成後台可以接收的資料型態
  // key = i 的角色，要去跑 舊的 form 表單每一筆資料
  // append 附加資料到 fd 新陣列裡面
  // formData.append 接的內容 (form[key] 如果不是字串會自動轉換成字串)，因為 product_date 是物件所以用 JSON.stringify 把物件轉成字串 傳到後台 (直接用物件無法傳後台會錯誤)
  // 到 controllers 裡面的 createProduct 把字串轉為物件 JSON.parse(req.body.product_date)，再存進資料庫內
  const fd = new FormData()
  for (const key in form) {
    if (['_id', 'idx', 'dialog', 'valid', 'submitting'].includes(key)) continue
    else if (['product_date'].includes(key)) {
      // console.log('123' + form.product_date.to)
      fd.append(key, JSON.stringify(form[key]))
    } else fd.append(key, form[key])
  }
  console.log(fd)
  try {
    if (form._id.length === 0) {
      // apiAuth 後台路徑
      const { data } = await apiAuth.post('/products', fd)
      const idxs = findCategoryIdx(data.result.sub)
      products.push({
        ...data.result,
        category: {
          _id: productscategory[idxs.cidx]._id,
          name: productscategory[idxs.cidx].category
        },
        sub: {
          _id: productscategory[idxs.cidx].sub[idxs.sidx]._id,
          name: productscategory[idxs.cidx].sub[idxs.sidx].name
        }
      })
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/products/' + form._id, fd)
      const idxs = findCategoryIdx(data.result.sub)
      // 顯示方式 (輸入大分類，顯示不同小分類)
      products[form.idx] = {
        ...data.result,
        category: {
          _id: productscategory[idxs.cidx]._id,
          name: productscategory[idxs.cidx].category
        },
        sub: {
          _id: productscategory[idxs.cidx].sub[idxs.sidx]._id,
          name: productscategory[idxs.cidx].sub[idxs.sidx].name
        }
      }
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

// 要對到資料順序
const columns = [
  {
    name: 'name',
    required: true,
    label: '商品名稱',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  {
    name: 'product_date',
    required: true,
    label: '行程日期',
    align: 'left',
    sortable: true
  },
  // {
  //   name: 'product_date_start',
  //   required: true,
  //   label: '行程出發日期',
  //   align: 'left',
  //   field: row => row.product_date_start,
  //   sortable: true
  // },
  // {
  //   name: 'product_date_over',
  //   required: true,
  //   label: '行程結束日期',
  //   align: 'left',
  //   field: row => row.product_date_over,
  //   sortable: true
  // },
  {
    name: 'region',
    required: true,
    label: '縣市區域',
    align: 'left',
    // field: row => row.region,
    sortable: true
  },
  {
    name: 'sub',
    required: true,
    label: '分類',
    align: 'left',
    field: row => row.sub,
    sortable: true
  },
  {
    name: 'price',
    required: true,
    label: '金額',
    align: 'left',
    field: row => row.price,
    sortable: true
  },
  {
    name: 'image',
    required: true,
    label: '商品圖片',
    align: 'left'
    // btn 在 template #body-cell-image 加入
  },
  {
    name: 'description',
    required: true,
    label: '商品描述',
    align: 'left',
    // field: row => row.description,
    sortable: true
  },
  {
    name: 'bulletin',
    required: true,
    label: '公告提醒',
    align: 'left',
    // field: row => row.bulletin,
    sortable: true
  },
  {
    name: 'reserve',
    required: true,
    label: '商品庫存',
    align: 'left',
    field: row => row.reserve,
    sortable: true
  },
  {
    name: 'sell',
    required: true,
    label: '是否上架',
    align: 'left',
    field: row => row.sell ? '上架' : '下架',
    sortable: true
  },
  {
    name: 'edit',
    required: true,
    label: '編輯修改',
    align: 'left',
    sortable: true
  }
]

// 預設刪除分類的彈窗 為 false
const deleteDialog = reactive({
  dialog: false
})

const del = ref('')

// 開啟刪除確認視窗
const openDeleteDialog = (productid) => {
  del.value = productid
  deleteDialog.dialog = true
}

const deleteproduct = async (productid) => {
  deleteDialog.dialog = false
  try {
    await apiAuth.delete('/products/' + productid)
    await Swal.fire({
      icon: 'success',
      title: '刪除成功'
    })
    // 在成功的地方再呼叫一次 function 即時更新刪除結果
    const idx = products.findIndex(product => product._id === productid)
    products.splice(idx, 1)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

const findCategoryIdx = (subid) => {
  let sidx = -1
  const cidx = productscategory.findIndex(cat => {
    const idx = cat.sub.findIndex(s => s._id === subid)
    if (idx > -1) {
      sidx = idx
      return true
    } else return false
  })
  return { sidx, cidx }
}

// 先抓取分類->商品
const init = async () => {
  try {
    const { data: categoryData } = await apiAuth.get('/products_category/all')
    productscategory.splice(0, productscategory.length)
    // 後台資料存入 productscategory 陣列中
    productscategory.push(...categoryData.result)
    console.log(productscategory)
    const { data } = await apiAuth.get('/products/all')
    products.push(...data.result.map(product => {
      const idxs = findCategoryIdx(product.sub)
      console.log(idxs)
      // 判斷大小分類狀態顯示
      product.category = {
        _id: productscategory[idxs.cidx]?._id || '',
        name: productscategory[idxs.cidx]?.category || '未分類'
      }
      product.sub = {
        _id: productscategory[idxs.cidx]?.sub[idxs.sidx]?._id || '',
        name: productscategory[idxs.cidx]?.sub[idxs.sidx]?.name || '未分類'
      }
      return product
    }))
    console.log(products)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()
</script>
