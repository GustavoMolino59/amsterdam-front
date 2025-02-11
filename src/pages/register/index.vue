<template>
  <v-container
    fluid
    class="h-100 pa-0 "
  >
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      :color="theme"
    >
      {{ snackBarText }}

      <template #actions>
        <v-btn
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-row
      class="h-100 "
      no-gutters
    >
      <v-col
        class="left-container d-none d-md-flex flex-column justify-space-between " 
        cols="6"
      >
        <v-container
          fluid
          class="d-flex justify-end"
        >
          <v-img
            src="../../assets/login/Logo.png"
            alt="Descrição da Imagem"
            max-height="159"
            max-width="211"
          />
        </v-container>
        <v-container
          class="text-center d-flex flex-column ga-10 w-75"
        >
          <h2 class="text-h2 font-weight-bold text-white">
            BEM VINDO!
          </h2>
          <p class="text-h5 text-white">
            Esse é o AmsterSystem, o sistema interno da Rep Amsterdam
          </p>
        </v-container>
        <div class="d-flex flex-column justify-center text-center ga-5">
          <p class="text-h5 text-white mt-10">
            Já tem conta? <span>Login</span>
          </p>
          <div class="d-flex justify-center">
            <v-btn
              rounded="xl"
              flat
              size="large"
              to="/login"
            >
              Login
            </v-btn>
          </div>
        </div>
        <v-row
          class="flex-grow-0"
          no-gutters
        >
          <v-col cols="6">
            <v-img
              src="../../assets/login/group1.png"
              alt="Descrição da Imagem"
              max-height="263"
              max-width="241"
            />
          </v-col>
          <v-col cols="6 d-flex justify-end align-end">
            <v-img
              src="../../assets/login/group2.png"
              alt="Descrição da Imagem"
              max-height="275.62"
              max-width="253"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col
        class="right-container d-flex flex-column align-center justify-center"
        sm="12"
        md="6"
      >
        <v-container
          fluid
          class="d-flex justify-center d-md-none"
        >
          <v-img
            src="../../assets/login/Logo.png"
            alt="Descrição da Imagem"
            max-height="159"
            max-width="211"
          />
        </v-container>
        <v-container 
          fluid 
          class="d-flex flex-column pa-6 mx-13 ga-6"
        >
          <h1 class="text-center text-h3 font-weight-bold">
            Cadastrar Morador
          </h1>
          <v-form 
            ref="formRef"
            @submit.prevent="submit" 
          >
            <div class="d-flex flex-column pa-3">
              <v-row>
                <v-col cols="8">
                  <v-text-field 
                    v-model="name"
                    label="Nome (Apelido)"
                    variant="outlined"
                    type="text"
                    clearable
                    :rules="[required]"
                  />
                </v-col>
                <v-col cols="4">
                  <v-select 
                    v-model="year"
                    label="Ano"
                    variant="outlined"
                    :rules="[required]"
                    :items="[2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]"
                  />
                </v-col>
              </v-row>
              <v-text-field 
                v-model="email"
                label="Email"
                variant="outlined"
                type="Email"
                clearable
                :rules="[required]"
              />
              <v-text-field 
                v-model="password"
                label="Senha"
                variant="outlined"
                type="password"
                clearable
                :rules="[required, isPasswordOnTemplate]"
              />
              <v-text-field 
                v-model="confirmPassword"
                label="Confirme a Senha"
                variant="outlined"
                type="password"
                clearable
                :rules="[required, isPasswordConfirmedOkay]"
              />
            </div>
            <div class="d-flex justify-center">
              <v-btn
                rounded="xl"
                flat
                size="x-large"
                class="bg-red-accent-2 flex-grow-1 flex-md-grow-0"
                :loading="loading"
                type="submit"
              >
                Cadastrar
              </v-btn>
            </div>
          </v-form>
        </v-container>
        <div class="image-below-phone d-flex flex-column justify-center ga-10 pa-3 d-md-none">
          <span class="text-white">Já tem conta? Fazer Login</span>
          <div class="d-flex">
            <v-btn
              rounded="xl"
              flat
              size="large"
              to="/login"
            >
              Login
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./Register.ts" />

<style lang="sass" src="./Register.scss" />