<template>
  <v-card>
    <v-card-title class="d-flex">
      <div class="d-flex align-center ga-2">
        <v-icon size="small">{{ icon }}</v-icon>
        <span class="text-h5">{{ title }}</span>
      </div>
      <v-spacer />
      <v-text-field
        v-model="search"
        density="compact"
        label="Procure por Descrição, valor"
        prepend-inner-icon="search"
        variant="solo-filled"
        flat
        hide-details
        single-line
      />
    </v-card-title>
    <v-data-table 
      v-model:search="search"
      :headers="headers"
      :items="tableData"
      :filter-keys="['description']"
      height="300px"
    />
  </v-card>
</template>

<script lang="ts" src="./FinancialTable.ts" />
<style lang="sass" src="./FinancialTable.scss" />