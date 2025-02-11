<template>
  <v-container
    fluid
  >
    <v-container>
      <v-row>
        <v-col>
          <FinancialCard 
            :value="value" 
            :status="object"
            title="Você deve de Aluguel esse mês:"
            :table-data="[{title: 'contas', value: '900'}]"
            class="bg-red-accent-1"
          />
        </v-col>
        <v-col>
          <FinancialCard 
            :value="value" 
            :status="object"
            title="Você deve de Aluguel esse mês:"
            :table-data="[{title: 'contas', value: '900'}]"
            class="bg-deep-orange-lighten-2"
          />
        </v-col>
        <v-col>
          <FinancialCard 
            :value="value" 
            :status="object"
            title="Você deve de Aluguel esse mês:"
            :table-data="[{title: 'contas', value: '900'}]"
            class="bg-blue-lighten-2"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <BillCard 
                name="Água"
                :value="2000"
                status="Pago"
                :percentage="40"
              />
            </v-col>
            <v-col>
              <BillCard 
                name="Água"
                :value="2000"
                status="Pago"
                :percentage="40"
              />
            </v-col>
            <v-col>
              <BillCard 
                name="Água"
                :value="2000"
                status="Pago"
                :percentage="40"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <BillCard 
                name="Água"
                :value="2000"
                status="Pago"
                :percentage="10"
              />
            </v-col>
            <v-col>
              <BillCard 
                name="Água"
                :value="2000"
                status="Pago"
                :percentage="10"
              />
            </v-col>
            <v-col>
              <BillCard 
                name="Água"
                :value="2000"
                status="Pago"
                :percentage="10"
              />
            </v-col>
          </v-row>
          <v-container />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts" src="./RentsAndDebts.ts" />
<style lang="sass" src="./RentAndDebts.scss" />