<script setup lang="ts">
import Multiselect from '@vueform/multiselect';
import type { PersonneResponse } from '../pocketbase-types';
import { ref } from 'vue';
const props = defineProps<{
    personnes: PersonneResponse[];
    name: string;
    value: string | string[];
    multiple?: boolean;
    placeholder?: string;
}>();

const personneListId = ref(props.value);

const personnesWithLabel = props.personnes.map(p => ({
    ...p,
    label: `${p.prenom} ${p.nom}`
}))
</script>

<template>
    <Multiselect 
        v-model="personneListId" 
        :options="personnesWithLabel" 
        label="label" 
        value-prop="id"        
        :placeholder="placeholder"
        :mode="multiple?'tags' : 'single'"
        searchable/>
    <input v-if="multiple" v-for="p in personneListId" type="hidden" :value="p" :key="p" :name="name"/>
    <input v-else type="hidden" :value="personneListId" :name="name"/>
    <!-- @vue-ignore -->
    <!-- <input v-for="p in multiple ? personneListId : {personneListId}" type="hidden" :value="p" :key="p" :name="name"/> -->
</template>

<style src="@vueform/multiselect/themes/default.css"></style>