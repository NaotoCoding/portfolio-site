<script setup>
import { ref } from 'vue'
import useFetchMyGitHubRepositories from '../gateway/useMyFetchGitHubRepositories'
import GitHubRepository from './GitHubRepository.vue'

const myGitHubRepositories = ref([])
const setMyGitHubRepositories = async () => {
  myGitHubRepositories.value = await useFetchMyGitHubRepositories()
}
setMyGitHubRepositories()
</script>

<template>
  <GitHubRepository
    v-for="repository in myGitHubRepositories"
    :key="repository.id"
    :repositoryName="repository.name"
    :repositoryDescription="repository.description"
    :repositoryHtmlUrl="repository.html_url"
    :repositogyLanguage="repository.language"
    class="mb-4"
  />
</template>
