<script setup>
const props = defineProps({
  repositoryName: String,
  repositoryDescription: String,
  repositoryHtmlUrl: String,
  repositogyLanguage: String
})
</script>

<template>
  <div>
    <a :href="props.repositoryHtmlUrl" target="_blank">{{ props.repositoryName }}</a>
    <p>{{ props.repositoryDescription }}</p>
    <p>{{ props.repositogyLanguage }}</p>
  </div>
</template>
