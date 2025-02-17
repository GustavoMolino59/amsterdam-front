<template>
  <v-container
    fluid
    class="inner-page h-100"
  >
    <v-row>
      <v-col>
        <v-card class="h-100 d-flex flex-column">
          <v-card-title>
            <v-tabs
              v-model="tab"
            >
              <v-tab value="one">
                Adicionar Conta
              </v-tab>
              <v-tab value="two">
                Adicionar Racha
              </v-tab>
              <v-tab value="three">
                Adicionar Transação
              </v-tab>
            </v-tabs>
          </v-card-title>
          <v-card-text>
            <v-tabs-window
              v-model="tab"
              class="h-100"
            >
              <v-tabs-window-item
                value="one"
                class="h-100"
              >
                <AddBillForm />
              </v-tabs-window-item>

              <v-tabs-window-item value="two">
                Two
              </v-tabs-window-item>

              <v-tabs-window-item value="three">
                Three
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="h-100">
          <v-card-subtitle class="pa-3">
            Total
          </v-card-subtitle>
          <v-card-title class="text-h5">
            13.000 R$
          </v-card-title>
          <v-card-subtitle class="pa-3">
            Total por pesssoa:R$ 900
          </v-card-subtitle>
          <div class="h-100 d-flex flex-sm-row	flex-column">
            <VueApexCharts
              type="donut"
              :options="chartOptions"
              :series="series"
              height="100%"
            />
            <v-row class="d-flex w-100 h-50 ml-3">
              <v-col
                v-for="(bill, index) in ['Aluguel', 'Eletricidade', 'Água', 'Internet', 'Gás']"
                :key="index" 
                cols="3"
              >
                <div class="circle" />
                <div
                  class="d-flex flex-column"
                >
                  <span class="account-title text-caption">{{ bill }}</span>
                  <span>R$ 2400</span>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="n in 3">
        <UserCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./FinancialAdmin.ts" />
<style lang="sass" src="./FinancialAdmin.scss" />