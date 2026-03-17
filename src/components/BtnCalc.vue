<script setup lang="ts">
const props = defineProps<{
    chiffre : number;
    modeDecimal?: boolean;
    rang?: number;
}>();
const nombre = defineModel<number>();
</script>

<template>
    <button 
        @click="nombre = !modeDecimal ? (nombre! * 10 + chiffre) : nombre"
        class="bg-gray-700 hover:bg-gray-600 text-white text-2xl font-bold py-6 rounded-lg">
        {{ chiffre }}
    </button>
</template>