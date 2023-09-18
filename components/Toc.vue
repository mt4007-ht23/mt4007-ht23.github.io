<!-- ./components/Toc.vue -->
<script setup>
const tocOpen = ref(false)
// define links prop
const {links} = defineProps(["links"]);

// flatten TOC links nested arrays to one array
const tocToggle = () => {
  tocOpen.value = !tocOpen.value
}

const flattenLinks = (links) => {
  let _links = links
    .map((link) => {
      let _link = [link];
      if (link.children) {
        let flattened = flattenLinks(link.children);
        _link = [link, ...flattened];
      }
      return _link;
    })
    .flat(1);

  return _links;
};

const currentWeek = () => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const diff = now - startOfYear;
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  const weekOfYear = Math.floor(diff / oneWeek) + 1;

  if (weekOfYear <= 23) return 23
  if (weekOfYear >= 32) return 32
  return weekOfYear
}

let todayLink = flattenLinks(links).map(link => link.id).filter(id =>
id.includes(currentWeek()))[0]

todayLink = (todayLink === undefined)? "": "#" + todayLink ;
</script>

<template>
  <NuxtLink :to="todayLink" class="w-fit mb-4 font-bold
  bg-indigo-600 px-5 py-3 rounded-lg text-white
  hover:bg-indigo-900 no-underline cursor-pointer">Gå till idag</NuxtLink>
  <nav 
  @click="tocToggle()"
  :class="{'h-[40rem]': tocOpen,'h-[5rem]': !tocOpen}"
  class="toc transition-all ease-in-out duration-[650ms]">
    <div class="flex justify-between border-b border-slate-200">
      <header class="toc-header" >
        <h3 class="text-xl font-bold">Table of contents</h3>
      </header>
      <button
      :class="{'rotate-180':tocOpen}"
      class="py-3 h-fit rounded-xl ">
        <svg data-accordion-icon class="w-8 h-8 hover:bg-gray-200 p-1
        rounded-full shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
    <ul class="toc-links">
      <!-- render each link with depth class -->
      <li v-for="link of flattenLinks(links)" :key="link.id" :class="`toc-link _${link.depth}`">
        <a :href="`#${link.id}`">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.toc {
  @apply p-4 bg-slate-50 border border-slate-200 rounded-lg;
  @apply max-h-[calc(100vh-6rem)] overflow-hidden;
}

.toc-header {
  @apply pb-2 mb-2 ;
}

.toc-links {
  @apply flex flex-col gap-2 px-2;
}

.toc-link {
  @apply text-slate-500;
}

.toc-link._3 {
  @apply pl-3;
}

.toc-link._4 {
  @apply pl-6;
}

.toc-link._undefined {
  @apply pl-8;
}
</style>
