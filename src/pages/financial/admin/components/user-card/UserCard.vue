<template>
  <v-card>
    <v-card-title class="d-flex flex-column align-center ga-4">
      <span>Name</span>
      <v-img 
        class="rounded-circle"
        cover
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        aspect-ratio="1/1"
        :width="200"
      />
      <div>
        <v-chip>
          Aluguel Pago
        </v-chip>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn
        class="text-h6"
        text="Aluguel: 900 R$"
      />

      <v-spacer />

      <v-btn
        :icon="show ? 'arrow_circle_up' : 'arrow_circle_down'"
        @click="show = !show"
      />
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider />
        <v-container
          fluid
          class="d-flex"
        >
          <v-list class="title-list bg-transparent">
            <v-list-item
              v-for="(item, index) in tableData"
              :key="index"
            >
              <v-list-item-title>
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
              <v-list-item-title>
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

<script lang="ts" src="./UserCard.ts" />
<style lang="sass" src="./UserCard.scss" />
