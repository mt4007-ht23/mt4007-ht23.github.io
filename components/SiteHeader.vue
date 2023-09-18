<!-- ./components/SiteHeader.vue -->

<template>
  <header class="site-header">
    <div class="wrapper">
      <figure class="site-logo">
        <NuxtLink to="/">
        <h1>
        MT3003 ST23
        </h1>
        </NuxtLink>
      </figure>

      <nav class="site-nav">
        <div class=" focus:ring-2 focus:ring-gray-200">
          <button 
          @click="() => hidden = !hidden"
          type="button" class="md:hidden hover:bg-gray-200  rounded" >
          <svg class="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>

          <div class="w-full md:block md:w-auto"
            @click="()=> hidden=true"
            v-bind:class="{ hidden: hidden }">
            <ul class="links absolute right-11 top-15 bg-gray-200 p-4 rounded
            md:flex md:relative md:p-0 md:bg-transparent">
              <li class="link">
                <NuxtLink to="/">Hem</NuxtLink>
              </li>
              <li class="link">
                <NuxtLink to="/schedule">Veckoschema</NuxtLink>
              </li>
              <li class="link">
                <NuxtLink to="/lab">Laborationer</NuxtLink>
              </li>
              <li class="link">
                <NuxtLink to="/project">Projekt</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
const hidden = useState('toggled', () => true)
</script>

<style scoped>
.site-header {
  @apply sticky top-0 w-full p-4 bg-slate-100 bg-opacity-40 border-b-2 border-white border-opacity-30 backdrop-blur-lg z-20;
}

.site-header > .wrapper {
  @apply flex items-center justify-between max-w-6xl m-auto;
}



.link{
  @apply py-2 px-6 md:mr-4 md:p-0 last-of-type:mr-0
}

a {
  @apply text-base font-bold
}

.site-logo a {
  @apply font-black text-xl;
}

ul a.router-link-active {
  @apply underline
}
</style>
