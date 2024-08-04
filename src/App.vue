<script setup>
import { ref } from 'vue'
import useFetchMyGitHubRepositories from './gateway/useMyFetchGitHubRepositories'

const myGitHubRepositories = ref([])
const setMyGitHubRepositories = async () => {
  myGitHubRepositories.value = await useFetchMyGitHubRepositories()
}
setMyGitHubRepositories()
</script>

<template>
  <main>
    <!-- TODO: コンポーネント化 -->
    <li v-for="item in myGitHubRepositories" :key="item.id">
      <a :href="item.html_url" target="_blank">{{ item.name }}</a> : {{ item.description }}
    </li>
  </main>
</template>
