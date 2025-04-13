<template>
  <v-card
      width="100%"
      style="height: 100vh"
      class="white"
  >
    <v-toolbar
        class="bg-secondary text-white"
    >
<!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

      <v-toolbar-title
      class="font-weight-bold">채팅 목록</v-toolbar-title>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon @click="">
        <v-icon>mdi-message-plus</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list lines="two">
      <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :prepend-avatar="item.avatar"
          @click=""
      >

        <template #title>
          <div class="text-primary font-weight-bold">
            {{ item.name }}
          </div>
        </template>
        <template #subtitle>
          {{ item.lastMessage.message }}
        </template>
        <template #append>
          <div class="text-caption">
            {{ formatTime(item.lastMessage.sendAt) }}
          </div>
        </template>
      </v-list-item>
    </v-list>

  </v-card>
</template>

<script setup lang="ts">

import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
import isYesterday from 'dayjs/plugin/isYesterday'
import weekday from 'dayjs/plugin/weekday'
import localeData from 'dayjs/plugin/localeData'
import 'dayjs/locale/ko'

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

// todo 임시 데이터
const items = [
  {
    avatar: 'https://picsum.photos/250/300?image=660',
    name: "유저이름",
    lastMessage:{
      message: '마지막 메시지',
      sendAt: '2025-04-13 14:38:40'
    },
  },
  {
    avatar: 'https://picsum.photos/250/300?image=660',
    name: "유저이름",
    lastMessage:{
      message: '마지막 메시지',
      sendAt: '2025-04-13 14:38:40'
    },
  },
  {
    avatar: 'https://picsum.photos/250/300?image=660',
    name: "유저이름",
    lastMessage:{
      message: '마지막 메시지',
      sendAt: '2025-04-10 14:38:40'
    },
  },
  {
    avatar: 'https://picsum.photos/250/300?image=660',
    name: "유저이름",
    lastMessage:{
      message: '마지막 메시지',
      sendAt: '2025-04-12 14:38:40'
    },
  },
  {
    avatar: 'https://picsum.photos/250/300?image=660',
    name: "유저이름",
    lastMessage:{
      message: '마지막 메시지',
      sendAt: '2024-04-13 14:38:40'
    },
  },
]
</script>

<style scoped>

</style>
