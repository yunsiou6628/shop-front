<!-- CartView 購物車 -->
<!-- A區 確認購物車訂單 -->
<!-- B區 填表單資料(入山入園資料) -->
<!-- C區 付款資料 -->
<template>
  <!-- 大尺寸 -->
  <div class="q-pa-xl gt-md"
    style="width:100%; height: 100%; background-image: linear-gradient(to bottom,#F4F8EE, #fff); z-index: -1;">
    <div class="col-12">
      <q-table title="已加入行程" :rows="cart" :columns="cartcolumns" row-key="name" hide-pagination
        style="color: #5E8A4B; font-weight: bolder;">
        <template #body-cell-image="all">
          <q-td :img="img">
            <img :src="all.row.product.image" style="width:200px">
            <!-- <pre>{{all.row.product.image}}</pre> -->
          </q-td>
        </template>

        <template #body-cell-product_date="all">
          <q-td :product_date="product_date">
            {{ new Date(all.row.product.product_date.from).toLocaleDateString()
            }} ~ {{ new Date(all.row.product.product_date.to).toLocaleDateString() }}
          </q-td>
        </template>

        <template #body-cell-btn="all">
          <q-td :btn="btn">
            <q-btn @click="updateCart(all.rowIndex, 0)">刪除</q-btn>
            <!-- <pre>{{all.rowIndex}}</pre> -->
          </q-td>
        </template>

        <template #body-cell-quantity="all">
          <q-td :btn="btn">
            <!-- (all.rowIndex 購物車內第幾個商品 , all.row.quantity+1 該商品數量) -->
            <q-btn @click="updateCart(all.rowIndex, all.row.quantity - 1)">-</q-btn>
            <span class="q-px-lg">{{ all.row.quantity }}</span>
            <q-btn @click="updateCart(all.rowIndex, all.row.quantity + 1)">+</q-btn>
          </q-td>
        </template>
      </q-table>
    </div>

    <div class="col-12 text-center q-pa-xl">
      <!-- <div class="col-12 q-py-sm">
            <q-p class="text-h6">總金額 {{ totalPrice }}</q-p>
          </div> -->

      <!-- btn 跳頁 => <q-btn to="/"/> -->
      <div class="col-12 q-py-sm">
        <q-btn to="/ConfirmOrder" style=" color: #fff; background: #5E8A4B;" label="確認"></q-btn>
      </div>
    </div>
  </div>

  <!-- 中小尺寸 -->
  <div class="q-pa-xl lt-lg">
    <div class="col-12" style="color: #5E8A4B;">
      <q-table :grid="$q.screen.lt.md" title="已加入行程" :rows="cart" :columns="cartcolumns" row-key="name" hide-pagination
        style="color: #5E8A4B; font-weight: bolder;">

        <template v-slot:item="card">

          <q-card class="col-12 q-pa-md q-my-lg text-weight-bold" style=" color: #5E8A4B;">
            <!-- <pre>{{ card }}</pre> -->
            <div v-for="col in card.cols" :key="col.name">

              <div v-if="col.name === 'image'">
                <!-- {{ card.row.product.image }} -->
                <div img="img">
                  <img :src="card.row.product.image" style="width:100%">
                </div>
              </div>

              <div class="q-ma-lg">
                <div v-if="col.name === 'product'">
                  <div>{{ col.label }} : {{ col.value }}</div>
                </div>

                <div v-if="col.name === 'product_date'">
                  <!-- <div>{{ card.row.product.product_date.from }} ~ {{ card.row.product.product_date.to }}</div> -->
                  <div>{{ col.label }} : {{ new Date(card.row.product.product_date.from).toLocaleDateString() }} ~ {{
                      new
                        Date(card.row.product.product_date.to).toLocaleDateString()
                  }} </div>
                </div>

                <div v-if="col.name === 'quantity'">
                  <!-- {{ card.row.quantity }} -->
                  <div class="row">
                    <div class="col-3" style="margin: auto 0 ">{{ col.label }} : </div>
                    <div :btn="btn" class="col-7">
                      <q-btn flat round @click="updateCart(card.rowIndex, card.row.quantity - 1)" style="width: 10%;">-
                      </q-btn>
                      <span class="q-px-lg">{{ card.row.quantity }}</span>
                      <q-btn flat round @click="updateCart(card.rowIndex, card.row.quantity + 1)" style="width: 10%;">+
                      </q-btn>
                    </div>
                  </div>
                </div>

                <div v-if="col.name === 'price'">
                  <div>{{ col.label }} : {{ col.value }}</div>
                </div>

                <div v-if="col.name === 'subtotal'">
                  <div>{{ col.label }} : {{ col.value }}</div>
                </div>

                <div v-if="col.name === 'btn'" class="row justify-center">
                  <div :btn="btn">
                    <q-btn @click="updateCart(card.rowIndex, 0)">刪除</q-btn>
                  </div>
                </div>

              </div>

            </div>
          </q-card>
        </template>

        <template #body-cell-image="all">
          <q-td :img="img">
            <img :src="all.row.product.image" style="width:200px">
            <!-- <pre>{{all.row.product.image}}</pre> -->
          </q-td>
        </template>

        <template #body-cell-product_date="all">
          <q-td :product_date="product_date">
            {{ new Date(all.row.product.product_date.from).toLocaleDateString()
            }} ~ {{ new Date(all.row.product.product_date.to).toLocaleDateString() }}
          </q-td>
        </template>

        <template #body-cell-btn="all">
          <q-td :btn="btn">
            <q-btn @click="updateCart(all.rowIndex, 0)">刪除</q-btn>
            <!-- <pre>{{all.rowIndex}}</pre> -->
          </q-td>
        </template>

        <template #body-cell-quantity="all">
          <q-td :btn="btn">
            <!-- (all.rowIndex 購物車內第幾個商品 , all.row.quantity+1 該商品數量) -->
            <q-btn @click="updateCart(all.rowIndex, all.row.quantity - 1)">-</q-btn>
            <span class="q-px-lg">{{ all.row.quantity }}</span>
            <q-btn @click="updateCart(all.rowIndex, all.row.quantity + 1)">+</q-btn>
          </q-td>
        </template>
      </q-table>
    </div>

    <div class="col-12 text-center q-pa-xl">

      <!-- btn 跳頁 => <q-btn to="/"/> -->
      <div class="col-12 q-py-sm">
        <q-btn to="/ConfirmOrder" label="確認" style="background: #5E8A4B; color: #fff;"></q-btn>
      </div>
    </div>
  </div>

</template>

<script setup>
import { reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../boot/axios'
import { useUserStore } from '../stores/example-store'

const user = useUserStore()

const cart = reactive([])

// 使用者購買
const cartcolumns = [
  {
    name: 'image',
    required: true,
    label: '圖片',
    align: 'left'
    // btn 在 template #body-cell-image 加入
  },
  {
    name: 'product',
    required: true,
    label: '行程',
    align: 'left',
    field: row => row.product.name,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'product_date',
    required: true,
    label: '行程日期',
    align: 'left',
    field: row => row.product.name,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'quantity',
    required: true,
    label: '購買數量',
    align: 'left',
    field: row => row.quantity,
    format: val => `${val}`
  },
  {
    name: 'price',
    required: true,
    label: '價錢',
    align: 'left',
    field: row => row.product.price,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'subtotal',
    required: true,
    label: '小計',
    align: 'left',
    field: row => row.product.price * row.quantity,
    // format: val => `${val}`,
    sortable: true
  },
  {
    name: 'btn',
    required: true,
    label: '操作',
    align: 'left'
    // btn 在 template #body-cell-btn 加入
  }
]

const updateCart = async (idx, quantity) => {
  console.log(cart[idx].product._id)
  const result = await user.updateCart({ product: cart[idx].product._id, quantity })
  if (result) {
    if (quantity === 0) {
      cart.splice(idx, 1)
    } else {
      cart[idx].quantity = quantity
    }
  }
}

const totalPrice = computed(() => {
  return cart.reduce((a, b) => {
    return a + b.product.price * b.quantity
  }, 0)
})

// const canCheckout = computed(() => {
//   return cart.length > 0 && !cart.some(item => {
//     return !item.product.sell
//   })
// })

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.push(...data.result)
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
