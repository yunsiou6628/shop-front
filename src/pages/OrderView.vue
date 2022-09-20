OrderView
<template>
  <div class="q-pa-xl"
    style="width:100%; height: 100%; background-image: linear-gradient(to bottom,#F4F8EE, #fff); z-index: -1;">
    <div class="col-12">
      <q-table :grid="$q.screen.lt.md" title="購買清單" :rows="orders" :columns="orderscolumns" row-key="name"
        :filter="filter" style=" color: #5E8A4B;">

        <template v-slot:item="card">
          <q-card class="col-12 q-pa-md q-my-lg text-weight-bold text-grey-7">
            <!-- <pre>{{ card }}</pre> -->

            <div v-for="col in card.cols" :key="col.name">

              <div v-if="col.name === 'image'">
                <div img="img">
                  <!-- <pre>{{ card.row.products[0].product.image }}</pre> -->
                  <img :src="card.row.products[0].product.image" style="width:100%">
                </div>
              </div>

              <div class="q-ma-lg">
                <div v-if="col.name === '_id'">
                  <div>訂單編號 : {{ card.row.products[0].product._id }}</div>
                </div>

                <div v-if="col.name === 'name'">
                  <!-- 行程名稱 -->
                  <div>{{ col.label }} : {{ col.value }}</div>
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

        <template #body-cell-image="image">
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
            <!-- <pre>{{ all.row.date }}</pre> -->
            {{ new Date(all.row.date).toLocaleDateString() }}
          </q-td>
        </template>

      </q-table>

    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../boot/axios'

const orders = reactive([])

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
    name: 'name',
    required: true,
    label: '行程名稱',
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
  {
    name: 'quantity',
    required: true,
    label: '購買數量',
    align: 'left',
    // field: row => row.products[0].quantity,
    sortable: true
  },
  {
    name: 'price',
    required: true,
    label: '價錢',
    align: 'left',
    // field: row => row.products[0].product.price,
    sortable: true
  },
  {
    name: 'subtotal',
    required: true,
    label: '小計金額',
    align: 'left',
    // field: row => row.products[0].product.price * row.products[0].quantity,
    sortable: true
  },
  {
    name: 'date',
    required: true,
    label: '下訂單日期',
    align: 'left',
    sortable: true
  }
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
