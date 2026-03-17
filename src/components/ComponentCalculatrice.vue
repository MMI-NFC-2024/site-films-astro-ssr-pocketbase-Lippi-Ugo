<script setup lang="ts">
import { ref } from 'vue';
import BtnCalc from './BtnCalc.vue';
const nombre = ref(0)
const modeDecimal = ref(false)
const rang = ref(0)
</script>

<template>
    <div class="max-w-sm mx-auto mt-8 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl">
        <h1 class="text-3xl font-bold text-white mb-6 text-center">Calculatrice</h1>
        
        <div class="bg-gray-950 border-2 border-gray-700 rounded-lg p-6 mb-6">
            <p class="text-5xl font-mono font-bold text-green-400 text-right">{{ nombre }}</p>
        </div>
        
        <div class="grid grid-cols-3 gap-4">
            <BtnCalc 
                v-for="chiffre in 9" 
                :key="chiffre"
                v-model="nombre" 
                :chiffre="chiffre"
                :modeDecimal="modeDecimal"
                :rang="rang"/>
            <button @click="nombre=0" class="bg-red-600 hover:bg-red-500 text-white py-6 rounded-lg font-bold">AC</button>
            <button @click="nombre = Math.floor(nombre / 10)" class="bg-orange-600 hover:bg-orange-500 text-white py-6 rounded-lg font-bold">DEL</button>
            <BtnCalc v-model="nombre" :chiffre="0"/>
            <button class="bg-gray-700 hover:bg-gray-600 text-white text-2xl font-bold py-6 rounded-lg">.</button>
        </div>
    </div>
</template>