<template>
  <v-card
    variant="elevated"
    class="d-flex bill-wrapper overflow-visible"
  >
    <v-row no-gutters>
      <v-col cols="6">
        <v-card-title class="d-flex ga-1 align-center">
          <span class="text-grey text-caption font-weight-medium">{{ name }}</span>
          <span 
            class="text-caption font-weight-bold"
            :class="{
              'text-light-green-lighten-2': diff < 0,
              'text-red-accent-2': diff > 0
            }"
          >{{ diff > 0 ? '+' : '' }}{{ diff }}</span>
        </v-card-title>
        <v-card-text 
          class="d-flex ga-2 align-center"
          :class="{
            'text-light-green-lighten-2': diff < 0,
            'text-red-accent-2': diff > 0
          }"
        >
          <v-icon>{{ diff > 0 ? 'arrow_upward' : 'arrow_downward' }}</v-icon>
          <span 
            class="text-h5 font-weight-bold"
          >{{ value }}</span>
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