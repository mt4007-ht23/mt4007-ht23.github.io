<template>
  <div class="flex flex-col">
      <Toc :links="toc.links" />
      <slot />
  </div>
</template>

<script setup>
const {toc} = useContent()
</script>
