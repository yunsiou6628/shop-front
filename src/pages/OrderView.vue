OrderView
<template>
  <div class="q-pa-xl"
    style="width:100%; height: 100%; background-image: linear-gradient(to bottom,#F4F8EE, #fff); z-index: -1;">
    <div class="col-12">
      <q-table :grid="$q.screen.lt.md" title="訂單查詢" :rows="orders" :columns="orderscolumns" row-key="name"
        :filter="filter" style=" color: #5E8A4B;">

        <template v-slot:item="card">
          <q-card class="col-12 q-pa-md q-my-lg text-weight-bold text-grey-7">
            <!-- <pre>{{ card }}</pre> -->

            <div v-for="col in card.cols" :key="col.name">

              <div v-if="col.name === 'image'">
                <div img="img">
                  <img :src="card.row.products[0].product.image" style="width:100%">
                </div>
              </div>

              <div class="q-ma-lg">
                <div v-if="col.name === '_id'">
                  <div>訂單編號 : {{ card.row.products[0].product._id }}</div>
                </div>

                <div v-if="col.name === 'product_date'">
                  <!-- <div>{{ card.row.product.product_date.from }} ~ {{ card.row.product.product_date.to }}</div> -->
                  <div>
                    {{ col.label }} : {{ new Date(card.row.products[0].product.product_date.from).toLocaleDateString()
                    }} ~ {{ new Date(card.row.products[0].product.product_date.to).toLocaleDateString() }}
                  </div>
                </div>

                <div v-if="col.name === 'quantity'">
                  <div>{{ col.label }} : {{ col.value }}</div>
                </div>

                <div v-if="col.name === 'price'">
                  <div>{{ col.label }} : {{ col.value }}</div>
                </div>

                <div v-if="col.name === 'subtotal'">
                  <div>{{ col.label }} : {{ col.value }}</div>
                </div>

                <div v-if="col.name === 'date'">
                  <div>{{ col.label }} : {{ new Date(card.row.date).toLocaleDateString() }}</div>
                </div>

              </div>

            </div>
          </q-card>
        </template>

        <template v-slot:header="props">
          <q-tr :props="props">

            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>

            <q-th auto-width />
          </q-tr>
        </template>

        <!-- <template #body-cell-image="image">
          <q-td :img="img">
            <img :src="image.row.products[0].product.image" style="width:150px">
          </q-td>
        </template>

        <template #body-cell-product_date="all">
          <q-td :product_date="product_date">
            {{ new Date(all.row.products[0].product.product_date.from).toLocaleDateString()
            }} ~ {{ new Date(all.row.products[0].product.product_date.to).toLocaleDateString() }}
          </q-td>
        </template>

        <template #body-cell-date="all">
          <q-td :date="date">
            {{ new Date(all.row.date).toLocaleDateString() }}
          </q-td>
        </template>

        <template #body-cell-label="label">
          <q-td :label="label">
            <pre>{{ label.row.checkPay.label }}</pre>
          </q-td>
        </template>

        <template #body-cell-edit="edit">
          <q-td>
            <q-btn @click="openDialog(edit.row._id)">顯示詳細訂單內容</q-btn>
          </q-td>
        </template> -->

        <template v-slot:body="props">
          <q-tr :props="props">
            <!-- <pre>{{props.row}}</pre> -->

            <!-- 訂單查詢內容 -->
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              <q-img v-if="col.label=='圖片'&&props.row.products[0].product?.image"
                :src="props.row.products[0].product?.image" q-pa-sm />
              <q-img v-if="col.label=='圖片'&&!props.row.products[0].product?.image"></q-img>
              <span v-if="col.label=='行程日期'">{{ new
              Date(props.row.products[0].product?.product_date.from).toLocaleDateString()
              }} ~ {{ new Date(props.row.products[0].product?.product_date.to).toLocaleDateString() }}</span>
              <span v-if="col.label=='訂單編號'">{{props.row._id}}</span>
              <span v-if="col.label=='下訂單日期'"> {{ new Date(props.row.date).toLocaleDateString() }}</span>
              <span v-if="col.label=='付款方式'&&props.row.checkPay?.label">{{props.row.checkPay?.label}}</span>
              <span v-if="col.label=='付款方式'&&!props.row.checkPay?.label">付款方式未填</span>
            </q-td>

            <!-- 顯示詳細資料按鈕 -->
            <q-td auto-width>
              <q-btn size="sm" @click="props.expand = !props.expand">
                <span>
                  顯示詳細資料
                </span>
              </q-btn>
            </q-td>
          </q-tr>

          <!-- 詳細資料內容 -->
          <q-tr v-show="props.expand" :props="props">
            <q-td colspan="100%">
              <div class="text-left text-wrapper">
                <!-- 用迴圈去跑全部下單資料 -->
                <pre>{{props.row}}</pre>
                <!-- 未完......................................................... -->
              </div>
            </q-td>
          </q-tr>
        </template>

      </q-table>

    </div>
  </div>
  <!-- ---------------------------------------------------------------------------------------------------------- -->

  <!-- <div class="q-pa-md">
    <q-table title="Treats000" :rows="rows" :columns="columns" row-key="name">

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn size="sm" color="accent" round dense @click="props.expand = !props.expand"
              :icon="props.expand ? 'remove' : 'add'" />
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </div> -->
</template>

<script setup>
import { reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../boot/axios'

const orders = reactive([])

// ------------------------------------------------------------------------------------

// const columns = [
//   {
//     name: 'name',
//     required: true,
//     label: 'Dessert (100g serving)',
//     align: 'left',
//     field: row => row.name,
//     format: val => `${val}`,
//     sortable: true
//   }
// ]

// const rows = [
//   {
//     name: 'Frozen Yogurt',
//     calories: 159,
//     fat: 6.0,
//     carbs: 24,
//     protein: 4.0,
//     sodium: 87,
//     calcium: '14%',
//     iron: '1%'
//   }
// ]

// ------------------------------------------------------------------------------------

// 使用者購買
const orderscolumns = [
  {
    name: 'image',
    required: true,
    label: '圖片',
    align: 'left'
  },
  {
    name: '_id',
    required: true,
    label: '訂單編號',
    align: 'left',
    field: row => row._id,
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
  //   name: 'quantity',
  //   required: true,
  //   label: '購買數量',
  //   align: 'left',
  //   field: row => row.products[0].quantity,
  //   sortable: true
  // },
  // {
  //   name: 'price',
  //   required: true,
  //   label: '價錢',
  //   align: 'left',
  //   field: row => row.products[0].product.price,
  //   sortable: true
  // },
  // {
  //   name: 'subtotal',
  //   required: true,
  //   label: '合計金額',
  //   align: 'left',
  //   field: row => row.products[0].product.price * row.products[0].quantity,
  //   sortable: true
  // },
  {
    name: 'label',
    required: true,
    label: '付款方式',
    align: 'left',
    sortable: true
  },
  {
    name: 'date',
    required: true,
    label: '下訂單日期',
    align: 'left',
    sortable: true
  }
  // {
  //   name: 'edit',
  //   required: true,
  //   label: '詳細訂單',
  //   align: 'left',
  //   sortable: true
  // }
]

const init = async () => {
  try {
    const { data } = await apiAuth.get('/orders/getMyOrders')
    orders.push(...data.result)
    // console.log(orders)
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
