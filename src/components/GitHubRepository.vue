<script setup>
import LanguageIcon from './language_icons/LanguageIcon.vue'

const props = defineProps({
  repositoryName: String,
  repositoryDescription: String,
  repositoryHtmlUrl: String,
  repositogyLanguage: String
})
</script>

<template>
  <a
    :href="props.repositoryHtmlUrl"
    class="block max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow"
  >
    <h4 class="mb-5 text-2xl tracking-tight font-medium">
      {{ props.repositoryName }}
    </h4>
    <p class="font-light">{{ props.repositoryDescription }}</p>
    <LanguageIcon :languageName="props.repositogyLanguage" />
  </a>
</template>
