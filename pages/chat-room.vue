<template>
  <v-card
      width="100%"
      style="height: 100vh"
      class="bg-white"
  >
    <v-toolbar
        class="bg-secondary text-white"
    >

      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title class="font-weight-bold">
        유저 이름
      </v-toolbar-title>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list class="bg-white pb-16">
      <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :class="[
          item.name === '나' ? 'justify-end' : 'justify-start'
        ]"
      >
        <v-row class="ma-0" style="width: 100%;">
          <v-col
              :cols="8"
              :class="[
                item.name === '나' ? 'offset-4 text-right' : 'text-left' ,
                index > 0 && items[index - 1].name === item.name ? 'pt-0' : '',
                index < items.length - 1 && items[index + 1].name === item.name ? 'pb-0' : ''
          ]"
          >
            <div
                class="d-flex align-center"
                :class="item.name === '나' ? 'justify-end' : 'justify-start'"
                style="gap: 6px;"
            >
              <template v-if="item.name === '나'">

                <span
                    v-if="index === items.length - 1 || items[index + 1].name !== item.name || formatTime(items[index + 1].sendAt) !== formatTime(item.sendAt)"
                    class="text-caption text-grey"
                >
                  {{ formatTime(item.sendAt) }}
                </span>
                <div
                    class="pa-3 rounded-lg d-inline-block bg-accent text-white"
                >
                  {{ item.message }}
                </div>
              </template>
              <template v-else>
                <div
                    class="pa-3 rounded-lg d-inline-block bg-lightGray"
                >
                  {{ item.message }}
                </div>
                <span
                    v-if="index === items.length - 1 || items[index + 1].name !== item.name || formatTime(items[index + 1].sendAt) !== formatTime(item.sendAt)"
                    class="text-caption text-grey"
                >
                  {{ formatTime(item.sendAt) }}
                </span>

              </template>
            </div>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>

    <v-card-actions class="pa-2 position-absolute bottom-0 w-100 bg-lightGray" style="z-index: 1;">
      <v-row no-gutters align="center" class="w-100">
        <v-col cols="11">
          <v-text-field
              v-model="newMessage"
              placeholder="메시지를 입력하세요"
              hide-details
              variant="outlined"
              rounded="lg"
              size="large"
              bg-color="white"
              style="background-color: transparent;"
          />
        </v-col>
        <v-col cols="1" class="text-right">
          <v-btn icon @click=""
                 class="ms-1"
                 rounded="lg"
                 size="large"
          >
            <v-icon color="primary">mdi-send</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>

  </v-card>
</template>

<script setup lang="ts">

import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
import isYesterday from 'dayjs/plugin/isYesterday'
import weekday from 'dayjs/plugin/weekday'
import localeData from 'dayjs/plugin/localeData'
import 'dayjs/locale/ko'
import {ref} from 'vue'

dayjs.extend(isToday)
dayjs.extend(isYesterday)
dayjs.extend(weekday)
dayjs.extend(localeData)
dayjs.locale('ko')

function formatTime(dateStr: string) {
  const date = dayjs(dateStr)
  if (date.isToday()) return date.format('HH:mm')
  if (date.isYesterday()) return '어제'
  if (dayjs().diff(date, 'day') < 7) return date.format('ddd') // 월, 화, 수...
  return date.format('YYYY-MM-DD')
}

const newMessage = ref('')

function sendMessage() {
  if (newMessage.value.trim() === '') return
  items.push({
    name: '나',
    message: newMessage.value,
    sendAt: dayjs().format('YYYY-MM-DD HH:mm:ss')
  })
  newMessage.value = ''
}

// todo 임시 데이터
const items = [
  {
    name: "상대방",
    message: '메시지',
    sendAt: '2025-04-13 14:38:40'
  },
  {
    name: "나",
    message: '메시지',
    sendAt: '2025-04-13 14:38:40'
  },
  {
    name: "나",
    message: '메시지',
    sendAt: '2025-04-13 14:38:40'
  },
  {
    name: "상대방",
    message: '메시지',
    sendAt: '2025-04-13 14:38:40'
  },
  {
    name: "상대방",
    message: '메시지',
    sendAt: '2025-04-13 14:38:40'
  },
  {
    name: "상대방",
    message: '메시지',
    sendAt: '2025-04-13 14:38:40'
  },
]
</script>

<style scoped>

</style>
