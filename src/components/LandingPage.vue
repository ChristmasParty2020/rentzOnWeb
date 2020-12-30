<template>
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="h-48 w-full object-cover md:w-48" src="../assets/logo.png" alt="Playing Cards showing the Diamonds Ace">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Play a new Game ?</div>
        <span class="block mt-1 text-lg leading-tight font-medium text-black">Start a game and then share the link to follow the game progress with family.</span>
        <p class="mt-2 text-gray-500">You can always use just one to keep the count, but sharing is fun.</p>
        <div>
          <button @click="playOnline" class="btn-indigo">
            Play online
          </button>

          <button @click="accountingOnly" class="btn-green">
            Accounting only
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    accountingOnly: () => {
      alert("accounting only!")
    },
    playOnline: () => {
      alert("this feature is not yet supported!")
    }
  }
}
</script>

<style>
  .btn-indigo {
    @apply py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75;
  }
  .btn-green {
    @apply m-4 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75;
  }
</style>
