<template>
  <v-container
    fluid
    class="inner-page h-100"
  >
    <v-container>
      <v-row>
        <v-col>
          <v-btn class="mb-3 bg-red-accent-2" rounded>
            Pagar o Aluguel
          </v-btn>
          <FinancialCard 
            :value="value" 
            :status="object"
            title="Você deve de Aluguel esse mês:"
            :table-data="[{title: 'contas', value: '900'}]"
            class="bg-red-accent-1"
          />
        </v-col>
        <v-col>
          <v-btn class="mb-3 bg-deep-orange-lighten-2" rounded>
            Pagar o Aluguel
          </v-btn>
          <FinancialCard 
            :value="value" 
            :status="object"
            title="Você deve para o caixa esse mês: "
            :table-data="[{title: 'contas', value: '900'}]"
            class="bg-deep-orange-lighten-2"
          />
        </v-col>
        <v-col align-self="end">
          <FinancialCard 
            :value="value" 
            :status="object"
            title="Sua dívida total é"
            :table-data="[{title: 'contas', value: '900'}]"
            class="bg-blue-lighten-2"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="7">
          <v-row>
            <v-col
              v-for="(account, index) in accounts"
              :key="index"
              cols="6"
              sm="4"
            >
              <BillCard 
                :name="account.name"
                :value="account.value"
                :status="account.status"
                :percentage="account.percentage"
                :diff="account.diff"
              />
            </v-col>
          </v-row>
        </v-col>
        
        <v-col
          cols="4"
          offset="1"
        >
          <v-card
            variant="elevated"
          >
            <v-card-title class="font-weight-bold text-h4 d-flex align-center ga-3">
              Total
              <span 
                class="text-h6 font-weight-bold"
                :class="{
                  'text-light-green-lighten-2': diffTotal < 0,
                  'text-red-accent-2': diffTotal > 0
                }"
              >{{ diffTotal > 0 ? '+' : '' }}{{ diffTotal }}</span>
            </v-card-title>
            <v-card-text 
              class="d-flex ga-2 align-center justify-center"
              :class="{
                'text-light-green-lighten-2': diffTotal < 0,
                'text-red-accent-2': diffTotal > 0
              }"
            >
              <v-icon size="x-large">
                {{ diffTotal > 0 ? 'arrow_upward' : 'arrow_downward' }}
              </v-icon>
              <span 
                class="text-h3 font-weight-bold"
              >{{ total }}</span>
            </v-card-text>
            <v-divider />
            <div class="pa-2 font-weight-bold">
              <span>Por pessoa: {{ valuePerUser }}</span>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <h5 class="text-h4 font-weight-medium mb-15">
        Transações
      </h5>
      <v-row>
        <v-col cols="6">
          <FinancialTable
            :table-data="financialTableMock"
            title="Contas"
            icon="request_quote"
          />
        </v-col>
        <v-col cols="6">
          <FinancialTable
            :table-data="financialTableMock"
            icon="savings"
            title="Caixa"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts" src="./RentsAndDebts.ts" />
<style lang="sass" src="./RentAndDebts.scss" />