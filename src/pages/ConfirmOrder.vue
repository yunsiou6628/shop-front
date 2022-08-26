<template>
  <q-stepper flat v-model="step" ref="stepper" animated alternative-labels active-color="light-green-9"
    done-color="light-green-9" inactive-color="blue-grey-2" class="q-py-lg" style="font-weight: bolder;">

    <q-step :name="1" title="訂單確認" icon="settings" :done="step > 1">
      <q-table :grid="$q.screen.lt.md" title="訂單確認" :rows="cart" :columns="cartcolumns" row-key="name" hide-pagination
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

      <div class="col-12 text-center q-pa-xl">
        <q-p class="text-h6" style="color: #5E8A4B;">總金額 {{ totalPrice }}</q-p>
      </div>

    </q-step>

    <q-step :name="2" title="填寫入山入園資料" icon="assignment" :done="step > 2">
      <div class="row justify-center">
        <div class="q-gutter-md  q-pa-md-md q-pa-lg-lg q-px-lg-xl" style="width: 90%; color: #5E8A4B;">

          <q-card class="q-mx-lg-xl q-pa-lg q-pa-lg-xl">
            <div class="q-py-md text-h6 text-weight-bold text-center">
              * 表單資料請確實填寫，將使用於入山入園申請、山屋申請及登山意外險上！
            </div>

            <q-form class="q-gutter-md">
              <q-input label="請輸入姓名" type="name" v-model="confirmform.name" lazy-rules :rules="rules.name" />
              <!-- 性別 -->
              <!-- https://quasar.dev/vue-components/option-group -->
              <q-option-group v-model="confirmform.gender" :options="options" label="gender" inline dense />
              <!-- 手機號碼 -->
              <q-input label="請輸入手機號碼" type="phone" v-model="confirmform.phone" lazy-rules :rules="rules.phone" />
              <!-- E-mail -->
              <q-input label="請輸入E-mail" type="email" v-model="confirmform.email" lazy-rules :rules="rules.email" />
              <!-- 生日 -->
              <!-- v-model="form.product_date.from" stack-label label='行程出發日期' :rules="['date']" -->
              <q-input label="請輸入生日" type="date" v-model="confirmform.birthday" stack-label lazy-rules
                :rules="rules.birthday" />
              <!-- 身分證字號 -->
              <q-input label="請輸入身分證字號" type="identification" v-model="confirmform.identification" lazy-rules
                :rules="rules.identification" />
              <!-- 緊急連絡人 -->
              <q-input label="請輸入緊急連絡人" type="emergencyContact" v-model="confirmform.emergencyContact" lazy-rules
                :rules="rules.emergencyContact" />
              <!-- 緊急連絡人電話 -->
              <q-input label="請輸入緊急連絡人電話" type="emergencyContactPhone" v-model="confirmform.emergencyContactPhone"
                lazy-rules :rules="rules.emergencyContactPhone" />
            </q-form>
          </q-card>
        </div>
      </div>
    </q-step>

    <q-step :name="3" title="付款" icon="assignment" :done="step > 3">
      <div class="row justify-center content-center">
        <q-card class="q-pa-lg q-px-lg-xl 7">
          <div class=" q-px-sm-xl" style="width: 100%;">
            <div class=" text-h6 text-weight-bold q-py-md">商品明細 :</div>
            <div v-for="(cart, idx) in cart" :key="idx" class="text-weight-bold">
              <!-- <pre>{{cart}}</pre> -->
              <div class="q-py-xs text-weight-bold text-h6">行程名稱 : {{ cart.product.name }}</div>
              <div class="q-py-xs text-weight-bold text-h6">
                <!-- {{ cart.product.product_date }} -->
                行程日期 :
                {{ new Date(cart.product.product_date.from).toLocaleDateString()
                }} ~ {{ new Date(cart.product.product_date.to).toLocaleDateString() }}
              </div>

              <div class="q-py-xs text-weight-bold text-h6">金額 : $ {{ cart.product.price }}</div>
            </div>
            <div class="q-py-lg text-weight-bold text-h6">匯款金額總計 : $ {{ totalPrice }}</div>
          </div>
        </q-card>
      </div>

      <div class="text-h5 q-pa-xl text-weight-bold text-center" style="color: #5E8A4B;">- 請選擇付款方式 -</div>
      <!-- 判斷3個選擇其中一個資料 ------------------------------------------------------------------------------- -->
      <div class="row justify-center content-center text-center bg-yellow q-px-lg-xl q-mx-lg-xl">
        <div class="col">
          <q-btn class="q-pa-xl text-weight-bold text-h6" style="width: 70%; background: #F4F8EE; color: #5E8A4B;"
            label="信用卡 / 金融卡" @click="prompt1 = true" />
        </div>
        <div class="col">
          <q-btn class="q-pa-xl text-weight-bold text-h6" style="width: 70%; background: #F4F8EE; color: #5E8A4B;"
            label="LINE PAY / 街口支付" @click="prompt2 = true" />
        </div>
        <div class="col">
          <q-btn class="q-pa-xl text-weight-bold text-h6" style="width: 70%; background: #F4F8EE; color: #5E8A4B;"
            label="ATM 轉帳" @click="prompt3 = true" />
        </div>
      </div>

      <!-- 信用卡 / 金融卡付款 -->
      <q-dialog v-model="prompt1" persistent>
        <q-card style="min-width: 700px; color: #5E8A4B;">
          <q-card-section>
            <div class="text-h5 q-pt-xl q-px-xl text-weight-bold text-center">信用卡 / 金融卡付款</div>
          </q-card-section>

          <!-- input 表單內容 -->
          <q-card-section>
            <div class="q-pa-sm">
              <q-select outlined dense autofocus v-model="confirmform.cardtype" :options="cardpayoptions" label="信用卡類別"
                @keyup.enter="prompt1 = false" lazy-rules :rules="rules.cardtype" />

              <div class="q-pt-sm">
                <img src="https://i.imgur.com/h9dUH13.jpg" style="width: 45px; height: 25px;">
                <img src="https://i.imgur.com/iDUYpZl.jpg" style="width: 45px; height: 25px;">
                <img src="https://i.imgur.com/rQrYDoD.jpg" style="width: 40px; height: 25px;">
                <img src="https://i.imgur.com/mUiBGGX.jpg" style="width: 40px; height: 25px;">
              </div>
            </div>
            <div class="q-pa-sm">
              <q-input outlined v-model="confirmform.cardnumber" label="信用卡卡號" dense autofocus
                @keyup.enter="prompt1 = false" lazy-rules :rules="rules.cardnumber" />
            </div>
            <div class="q-pa-sm">
              <q-input outlined dense autofocus v-model="confirmform.validitPeriod" label="卡號有效期限"
                @keyup.enter="prompt1 = false" lazy-rules :rules="rules.validitPeriod" />
            </div>
            <div class="q-pa-sm">
              <q-input outlined dense autofocus v-model="confirmform.certification" label="信用卡認證碼"
                @keyup.enter="prompt1 = false" lazy-rules :rules="rules.certification" />
            </div>
            <div class="q-pa-sm">
              <q-input outlined dense autofocus v-model="confirmform.cardname" label="持卡人姓名"
                @keyup.enter="prompt1 = false" lazy-rules :rules="rules.cardname" />
            </div>
            <div class="q-pa-sm">
              <q-input outlined dense autofocus stack-label v-model="confirmform.cardbirthday" label="持卡人生日" type="date"
                @keyup.enter="prompt1 = false" lazy-rules :rules="rules.cardbirthday" />
            </div>
            <div class="q-pa-sm">
              <q-input outlined dense autofocus v-model="confirmform.cardPhone" label="持卡人手機"
                @keyup.enter="prompt1 = false" lazy-rules :rules="rules.cardPhone" />
            </div>
          </q-card-section>

          <q-card-actions align="center" class="q-pb-lg">
            <q-btn flat label="取消" v-close-popup style="color: #5E8A4B;" />
            <q-btn flat label="完成" v-close-popup style="color: #fff; background: #5E8A4B;" />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <!-- LINE PAY / 街口支付付款 -->
      <q-dialog v-model="prompt2" persistent>
        <q-card style="min-width: 700px">
          <q-card-section>
            <div class="text-h5 q-pt-xl q-pb-md q-px-xl text-weight-bold text-center" style="color: #5E8A4B;">LINE PAY /
              街口支付付款
            </div>
          </q-card-section>

          <!-- input 表單內容 -->
          <q-card-section class="q-pt-none row justify-center">
            <img src="https://i.imgur.com/zYSuY0R.jpg" style="width: 300px; height: 300px;">
            <img src="https://i.imgur.com/FCWWR7R.jpg" style="width: 300px; height: 300px;">
          </q-card-section>

          <div class="text-h5 q-pt-xl q-pb-md q-px-xl text-weight-bold text-center" style="color: #5E8A4B;">核對付款資料</div>
          <q-card-section class="q-pt-none column justify-center">
            <div class="q-pt-md">
              <q-select outlined dense autofocus v-model="confirmform.checkPay" :options="payoptions" label="付款方式"
                @keyup.enter="prompt1 = false" lazy-rules :rules="rules.checkPay" />
            </div>
            <div class="q-pt-md">
              <q-input outlined dense autofocus v-model="confirmform.checkName" label="姓名"
                @keyup.enter="prompt1 = false" lazy-rules :rules="rules.checkName" />
            </div>
            <div class="q-pt-md">
              <q-input outlined dense autofocus v-model="confirmform.checkAccount" label="帳戶後五碼"
                @keyup.enter="prompt1 = false" lazy-rules :rules="rules.checkAccount" />
            </div>
          </q-card-section>
          <q-card-actions align="center" class="q-pb-lg">
            <q-btn flat label="取消" v-close-popup style="color: #5E8A4B;" />
            <q-btn flat label="完成" v-close-popup style="color: #fff; background: #5E8A4B;" />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <!-- ATM 轉帳付款 -->
      <q-dialog v-model="prompt3" persistent>
        <q-card style="min-width: 700px">

          <q-card-section>
            <div class="text-h5 q-pa-xl text-weight-bold text-center" style="color: #5E8A4B;">ATM 轉帳付款</div>
            <div class="q-px-xl text-weight-bold text-subtitle2 column" style="color: #5E8A4B;">轉帳資料</div>
            <div class="q-px-xl text-weight-bold text-subtitle2 column" style="color: #5E8A4B;">銀行代號 : 013(代碼)</div>
            <div class="q-px-xl text-weight-bold text-subtitle2 column" style="color: #5E8A4B;">銀行名 : 國泰世華銀行(假設)</div>
            <div class="q-px-xl text-weight-bold text-subtitle2 column" style="color: #5E8A4B;">轉帳帳號 :
              0000-0000-2222-1111</div>
            <div class="q-px-xl text-weight-bold text-subtitle2 column" style="color: #5E8A4B;">轉帳金額 : {{ totalPrice }}
            </div>
            <div class="q-px-xl text-weight-bold text-subtitle2 column" style="color: #5E8A4B;">繳款期限：2022年09月10日13點以前
              (一周內若無繳費自動取消訂單)
            </div>
          </q-card-section>

          <!-- input 表單內容 -->
          <div class="text-h5 q-pt-xl q-pb-md q-px-xl text-weight-bold text-center" style="color: #5E8A4B;">核對 ATM 轉帳資料
          </div>
          <q-card-section class="q-pt-none row-8 justify-center">
            <div class="q-pt-md">
              <q-input outlined dense autofocus v-model="confirmform.atmcheckName" label="姓名"
                @keyup.enter="prompt1 = false" lazy-rules :rules="rules.atmcheckName" />
            </div>
            <div class="q-pt-md">
              <q-input outlined dense autofocus v-model="confirmform.atmcheckAccount" label="帳戶後五碼"
                @keyup.enter="prompt1 = false" lazy-rules :rules="rules.atmcheckAccount" />
            </div>
            <div class="q-pt-md">
              <q-input outlined dense autofocus v-model="confirmform.atmcheckDay" label="轉帳日期"
                @keyup.enter="prompt1 = false" lazy-rules :rules="rules.atmcheckDay" />
            </div>
          </q-card-section>

          <q-card-actions align="center" class="q-pb-lg">
            <q-btn flat label="取消" v-close-popup style="color: #5E8A4B;" />
            <q-btn flat label="完成" v-close-popup style="color: #fff; background: #5E8A4B;" />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <!-- <div class="row justify-center">
          <div class="q-col-gutter-lg q-py-xl" style="width: 50%" >
            <q-select v-model="model" :options="payoptions" label="請選擇付款方式"></q-select> -->

      <!-- <div v-if="payoptions[0]"> -->
      <!-- <q-dialog v-model="form.dialog" persistent>
                  <q-card class="q-pa-lg">
                    <q-form @submit.prevent='submitForm'>
                      <div class="text-h6 text-center">付款資料</div>
                      <q-input
                        label="請輸入"
                        type=""
                        v-model=""
                        lazy-rules
                        :rules="rules."
                      />
                    </q-form>
                  </q-card>
                </q-dialog> -->
      <!-- </div> -->
      <!-- </div>
        </div> -->
    </q-step>

    <q-step :name="4" title="完成" icon="fa-solid fa-clipboard-check">
    </q-step>

    <template v-slot:navigation>
      <q-stepper-navigation class="col-12 text-center q-pa-xl q-mx-lg">
        <q-btn v-if="step > 1" flat @click="$refs.stepper.previous()" label="返回" style="color: #5E8A4B;" />
        <q-btn v-if="step < 3" @click="$refs.stepper.next()" style="color: #fff; background: #5E8A4B;" label="確認" />
        <!-- @click="finishConfirm"  -->
        <!-- <q-btn v-else @click="finishConfirm" color="primary" label="結帳" /> -->
        <!-- btn 跳頁 => <q-btn to="/"/> -->

        <q-btn v-else @click='user.checkout(confirmform)' :disabled='!canCheckout' :btn="btn" label="結帳"
          style="color: #fff; background: #5E8A4B;"></q-btn>

      </q-stepper-navigation>
    </template>
  </q-stepper>

</template>

<script setup>
// @click="finishConfirm"
// 寫 送出表單到後台 function (有點像 post 註冊資料傳後台)

import { reactive, ref, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../boot/axios'
import { useUserStore } from '../stores/example-store'

const user = useUserStore()
const cart = reactive([])
const step = ref(1)
// 付款方式 prompt
const prompt1 = ref(false)
const prompt2 = ref(false)
const prompt3 = ref(false)
/* 性別 eslint-disable */
const options = [
  {
    label: '男',
    value: 1
  },
  {
    label: '女',
    value: 2
  }
]

// 信用卡 / 金融卡付款 類別
const cardpayoptions = [
  {
    label: 'VISA',
    value: 1
  },
  {
    label: 'MasterCard',
    value: 2
  },
  {
    label: 'JCB',
    value: 3
  },
  {
    label: 'UnionPay',
    value: 4
  }
]

// LINE PAY / 街口支付付款 類別
const payoptions = [
  {
    label: 'LINE PAY',
    value: 1
  },
  {
    label: '街口支付',
    value: 2
  }
]

// 使用者購買訂單資料
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
    sortable: true
  },
  {
    name: 'product_date',
    required: true,
    label: '行程日期',
    align: 'left',
    field: row => row.product.name,
    sortable: true
  },
  {
    name: 'quantity',
    required: true,
    label: '購買數量',
    align: 'left',
    field: row => row.quantity,
    sortable: true
  },
  {
    name: 'price',
    required: true,
    label: '價錢',
    align: 'left',
    field: row => row.product.price,
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

// 及時更新數量/資料
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

// 總金額
const totalPrice = computed(() => {
  return cart.reduce((a, b) => {
    return a + b.product.price * b.quantity
  }, 0)
})

// 建立 confirmform 入山入園 + 付款表單
const confirmform = reactive({
  // 入山入園表單
  name: '',
  gender: 0,
  phone: '',
  email: '',
  birthday: '',
  identification: '',
  emergencyContact: '',
  emergencyContactPhone: '',
  // --- 付款表單 ---
  // 信用卡 / 金融卡付款
  cardtype: {},
  cardnumber: '',
  validitPeriod: '',
  certification: '',
  cardname: '',
  cardbirthday: '',
  cardPhone: '',
  // LINE PAY / 街口支付付款 核對付款資料
  checkPay: {},
  checkName: '',
  checkAccount: '',
  // ATM 轉帳付款 核對 ATM 轉帳資料
  atmcheckName: '',
  atmcheckAccount: '',
  atmcheckDay: ''
})

const rules = reactive({
  name: [
    v => !!v || '姓名必填'
  ],
  gender: [
    v => !!v || '性別必填'
  ],
  phone: [
    v => !!v || '手機必填'
  ],
  email: [
    v => !!v || 'mail必填'
  ],
  birthday: [
    v => !!v || '生日必填'
  ],
  identification: [
    v => !!v || '身分證字號必填'
  ],
  emergencyContact: [
    v => !!v || '緊急連絡人必填'
  ],
  emergencyContactPhone: [
    v => !!v || '緊急連絡人電話必填'
  ]
  // 3選1 必填方式 (補) ------------------------------------------------------------------------------
})

// 判斷是否有上架
const canCheckout = computed(() => {
  return cart.length > 0 && !cart.some(item => {
    return !item.product.sell
  })
})

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.push(...data.result)
    console.log(cart)
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
