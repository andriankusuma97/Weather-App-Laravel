import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
state : ()=>({
  wheater:[],
  apiUrl : 'https://api.openweathermap.org/data/2.5/',
  apiKey : '7792c5e7c51c0bd430284b7fec3b3687',
  // tes:'https://api.openweathermap.org/data/2.5/weather?q=indonesia&units=metric&appid=1e285acfb186fffc17d4d708f7b30f61',

}),

actions:{
  async fetchWheater(input) {
    try {
      const response = await fetch(`${this.apiUrl}weather?q=${input}&units=metric&appid=${this.apiKey}`)
      const data = await response.json()
      if (response.ok) {
        this.wheater = data
      } else {
        console.error('Request failed:', response.status)
        this.wheater= []
      }
    } catch (error) {
      console.error('Request error:', error)
    }
  },
},

})
