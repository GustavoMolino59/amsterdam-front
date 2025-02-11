<template>
  <v-card class="d-flex flex-column ga-3">
    <v-card-title class="font-weight-bold text-white">
      {{ title }}
    </v-card-title>
    <v-card-text>
      <div class="d-flex flex-column amount-wrapper">
        <span class="text-h3 font-weight-bold text-white">
          {{ value }}
        </span>
        <div class="text-left chip-wrapper">
          <v-chip
            class="chip"
            size="small"
            pill
            :class="status.status"
          >
            {{ status.text }}
          </v-chip>
        </div>
      </div>
    </v-card-text>
    <div class="d-flex align-center ga-2 pl-4">
      <v-icon
        color="white"
        class="font-weight-bold"
        size="x-small"
      >
        schedule
      </v-icon>
      <span class="text-white text-body-2"> Atualizado a 5 dias </span>
    </div>
    <v-card-actions>
      <v-btn
        :prepend-icon="show ? 'arrow_circle_up' : 'arrow_circle_down'"
        text="VER DETALHES DO ALUGUEL"
        variant="text"
        class="text-white"
        @click="show = !show"
      />
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider class="text-white" />
        <v-container
          fluid
          class="d-flex"
        >
          <v-list class="title-list bg-transparent">
            <v-list-item
              v-for="(item, index) in tableData"
              :key="index"
            >
              <v-list-item-title class="text-white">
                {{
                  item.title
                }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
          <v-spacer />
          <!-- Lista de Values -->
          <v-list class="value-list bg-transparent">
            <v-list-item
              v-for="(item, index) in tableData"
              :key="index"
            >
              <v-list-item-title class="text-white">
                {{
                  item.value
                }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-container>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts" src="./FinancialCard.ts" />
<style lang="sass" src="./FinancialCard.scss" />
