<template>
  <v-card
    variant="elevated"
    class="d-flex bill-wrapper overflow-visible"
  >
    <v-row no-gutters>
      <v-col cols="6">
        <v-card-title class="d-flex ga-1 align-center">
          <span class="text-grey text-caption font-weight-medium">Água</span>
          <span class="text-light-green-lighten-2 text-caption font-weight-bold">+250</span>
        </v-card-title>
        <v-card-text class="d-flex ga-2 align-center text-light-green-lighten-2">
          <v-icon>arrow_upward</v-icon>
          <span class="text-h5 text-light-green-lighten-2 font-weight-bold">2000 R$</span>
        </v-card-text>
      </v-col>
      <v-col 
        cols="6" 
      >
        <VueApexCharts
          type="donut"
          :options="chartOptions"
          :series="series"
          height="75px"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts" src="./BillCard.ts" />
<style lang="sass" src="./BillCard.scss" />