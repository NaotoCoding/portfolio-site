<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  languageName: String
})

const importLanguageIcon = (languageName) => {
  switch (languageName) {
    case 'TypeScript':
      return defineAsyncComponent(() => import('./TypeScriptIcon.vue'))
    case 'Ruby':
      return defineAsyncComponent(() => import('./RubyIcon.vue'))
    default:
      return defineAsyncComponent(() => import('./RubyIcon.vue'))
  }
}
const LanguageComponent = importLanguageIcon(props.languageName)
</script>

<template>
  <main>
    <div class="w-20 h-20">
      <LanguageComponent />
    </div>
  </main>
</template>
