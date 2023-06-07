

<script>
import {mapActions, mapState} from 'pinia'


export default {
  

  computed:{
    ...mapState(useDataStore,['suggestions'])
  },
  data() {
    return {
      searchInput: '',
      typingTimer: null,
      typingDelay: 500 // Waktu penundaan dalam milidetik sebelum mengirim permintaan pencarian
    }
  },

  methods: {

    ...mapActions(useDataStore,['fetchWheater']),

  } 
}
</script>


<template>
  <div class="app flex flex-col bg-sky-200 min-h-screen">
    <div class="p-4">
      <span class="text-3xl text-bold font-sans fontHeader text-white">Weather APP</span>
    </div>
    <div class="text-center mt-10">
      <input
        class="border-1 text-slate-600 border-gray-500 p-2 px-5 w-1/2 rounded-md opacity-75 focus:outline-teal-200"
        type="text"
        placeholder="location..."
      />
    </div>

    <div class="flex flex-col items-center mt-10 text-center justify-center text-white">
      <span class="fontWheater font-Poppins">London , GB</span>
      <div>
        <span class="font-Poppins">Monday , 7 januari 2023</span>
      </div>
      <div
        class="bg-white rounded-xl w-1/6 h-40 flex flex-col items-center justify-center my-4 bg-opacity-40 shadow-3xl"
      >
        <span class="fontTemp">29 C </span>
      </div>
      <span class="fontWheater">Rain</span>
    </div>
  </div>
</template>

<style>
.app {
    background-image: url('https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80');
    background-size: cover;
    background-position: bottom;
    transition: 0, 4s;
  }
  .fontHeader {
    font-size: 48px;
    font-weight: 900;
    font-style: italic;
    text-shadow: 2px 2px rgba(0 , 0, 0, 0.25);
  }
  .fontWheater {
    font-size: 48px;
    font-weight: 700;
    font-style: italic;
    text-shadow: 3px 6px rgba(0 , 0, 0, 0.25);
  }
  .fontTemp {
    font-size: 78px;
    font-weight: 1000;
    text-shadow: 3px 6px rgba(0 , 0, 0, 0.25);
  }

</style>
