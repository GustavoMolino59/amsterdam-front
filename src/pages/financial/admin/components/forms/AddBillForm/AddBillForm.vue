<template>
  <v-form class="h-100">
    <v-container class="h-100 d-flex flex-column">
      <div>
        <v-row
          no-gutters
          class="ga-2"
        >
          <v-col
            cols="12"
            md="6"
          >
            <v-select
              v-model="selectedType"
              label="Tipo de conta"
              variant="outlined"
              :items="billsArray"
            />
          </v-col>
          <v-col>
            <v-text-field
              v-model="value"
              label="Valor"
              variant="outlined"
              type="number"
            />
          </v-col>
        </v-row>
        <v-row
          no-gutters
          class="ga-2"
        >
          <v-col
            md="3"
            cols="12"
          >
            <v-text-field
              v-model="date"
              label="Vencimento"
              variant="outlined"
              type="date"
            />
          </v-col>
          <v-col>
            <v-select
              v-model="selectedsParticipants"
              :items="user"
              label="Participantes"
              variant="outlined"
              multiple
              persistent-hint
            />
          </v-col>
        </v-row>
      </div>
      
      <div class="d-flex mt-auto">
        <v-row 
          align="end"
        >
          <v-col>
            <v-btn
              flat
              type="submit"
              variant="text"
            >
              Enviar
            </v-btn>
            <v-btn
              flat
              variant="text"
              class="text-red-accent-2"
            >
              Limpar
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-form>
</template>

<script lang="ts" src="./AddBillForm.ts" />
<style lang="sass" src="./AddBillForm.scss" />