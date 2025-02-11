<template>
  <component :is="layout" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from './layouts/default/DefaultLayout.vue';
import AuthenticatedLayout from './layouts/authenticated/AuthenticatedLayout.vue';

const route = useRoute();

const layout = computed(() => {
  return route.meta.layout === 'authenticated' ? AuthenticatedLayout : DefaultLayout;
});
</script>