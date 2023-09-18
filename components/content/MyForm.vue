<template>
<form class="w-full max-w-lg p-4 border rounded" :class="{'is-hidden': submitted}">
  <div class="flex flex-wrap -mx-3 mb-3">
    <div class="w-full px-3 mb-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs
      font-bold mb-2" for="name">
        Fullständinga Namn (som i Ladok)
      </label>
      <input 
       v-model="name"
       id="name" type="text" placeholder="Jane Doe"
       class="appearance-none block w-full bg-gray-200 text-gray-700
      border border-gray-200 rounded py-3 px-4 mb-3 leading-tight
      focus:outline-none focus:bg-white"
       :class="{'name-error': name_error}">
      <p class="text-red-500 text-xs italic" :class="{'name-error-p':
      !name_error}">Please fill out this field.</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-3">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs
      font-bold mb-2" for="username">
        Github Användarnamn
      </label>
      <input 
      v-model="username"
      class="appearance-none block w-full bg-gray-200 text-gray-700
      border border-gray-200 rounded py-3 px-4 mb-3 leading-tight
      focus:outline-none focus:bg-white"
      id="username" type="text" placeholder="gituser">
      <p class="text-red-500 text-xs italic" :class="{'username-error-p': !username_error}">Please fill out this field.</p>
    </div>
  </div>
  <button 
  v-if="!loading"
  @click="formSubmit()"
  :disabled="loading"
  class="flex-shrink-0 bg-indigo-700 hover:bg-indigo-900 font-bold text-sm
  text-white py-3 px-4 mb-3 rounded" type="button"
  :class="{'bg-gray-200':loading}">
   Skicka In
  </button>
  <div role="status" v-if="loading">
    <svg aria-hidden="true" class="w-8 h-8 ml-7 mt-6 mb-3 text-gray-200 animate-spin
    dark:text-gray-600 fill-indigo-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
  </div>

  <p class="my-0 text-red-500 text-xs italic" :class="{'hidden': !btn_error}">Something went wrong, please try again.</p>
</form>
<div 
  class="info-box"
  :class="{'is-hidden': !submitted}">
  Formuläret har skickats i in! Kontakta <span class="font-bold">Taariq Nazar</span> ifall något har
  blivit fel!
</div>
</template>

<script setup>
// Check if form has been submitted by cookie or something and hide it if it is
const submitted = useCookie("tenta-form-submitted",
    {
    default: () => false,
})

const name_error = useState('name_error', ()=> false)
const username_error = useState('username_error', () => false)

const name = useState('name', ()=> "")
const username = useState("username", ()=> "")

const btn_pressed= useState('btn_pressed', () => false)
const btn_error= useState('btn_error', () => false)
const loading = useState('loading', () => false)

async function formSubmit() {
  btn_pressed.value = true
  //Check if all fields are filled
  if (name.value.length == 0) {
    name_error.value = true
  }else {
    name_error.value = false
  }

  if (username.value.length == 0) {
    username_error.value = true
  }else{
    username_error.value = false
  }
  
  if (name_error.value && username_error.value) {
    console.log("Not everything has been filled")
    return false
  }


  let formData = new FormData();

  formData.append('name', name.value)
  formData.append('username', username.value)

  loading.value = true
  await $fetch('https://script.google.com/macros/s/AKfycbxsw_Z5I2VlHk7m2Zx3Ua6TR9SRh26q8Og8YjptQVbq81V9keLXUn0uOCUc9TUnJuNOaA/exec', {
      method: 'POST',
      body: formData
      })
      .then( ({ result }) => {
        if (result == "success") {
          submitted.value = true
          loading.value = false
          }else{
          throw new Error("Something went wrong with resolve!")
        }
      })
      .catch( err => {
        btn_error.value = true
        loading.value = false
      console.log(err)
        })

}

</script>

<style scoped>
.is-hidden{
  @apply hidden
}

.name-error{
  @apply border border-red-500
}

.name-error-p {
 @apply hidden
}


.username-error {
  @apply border border-red-500
}

.username-error-p {
 @apply hidden
}

.info-box {
 @apply items-start gap-2 p-4 bg-slate-100 border border-slate-200 text-slate-500 rounded;
}
</style>

