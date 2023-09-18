<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
const { copy, copied } = useClipboard()

const props = withDefaults(
  defineProps<{
    code?: string
    language?: string | null
    filename?: string | null
    highlights?: Array<number>
  }>(),
  { code: '', language: null, filename: null, highlights: [] }
)

</script>

<template>
  <div class="relative group">
    <slot />
    <button 
    @click="copy(code)"
    class="copy-button group-hover:opacity-100 bg-gray-100 hover:bg-zinc-200
    rounded">
        <span v-if="!copied" class="icon-wrapper ">
        <svg data-v-edcae4a7="" data-v-82428261=""
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
        class="icon" width="18px" height="18px" viewBox="0 0 256 256"><path
        fill="currentColor" d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8
        8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56
        176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z"></path> </svg>

        </span>
        <span v-if="copied" class="icon-wrapper" data-v-82428261=""><svg data-v-edcae4a7=""
        data-v-82428261="" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
        class="icon copied" width="18px" height="18px" viewBox="0 0 256 256"><path
        fill="currentColor" d="m229.66 77.66l-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1
        11.32-11.32L96 188.69L218.34 66.34a8 8 0 0 1 11.32 11.32Z"></path></svg></span>
      </button>
  </div>
</template>

<style scoped>
pre {
  min-height: 1rem;
  display: flex;
}
.copy-button{
    bottom: 0;
    inset-inline-end: 0;
    position: absolute;
}

button {
    margin: 8px;
    opacity: 0;
    padding: 4px;
    transform: scale(.75);
    transition: all .2s;
}

button .icon-wrapper {
  height: 18px;
  position: relative;
  width: 18px;
}

</style>
