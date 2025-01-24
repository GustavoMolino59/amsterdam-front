<template>
  <v-container
    fluid
    class="h-100 pa-0 "
  >
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
            Morador Novo? <span>Cadastre-se</span>
          </p>
          <div class="d-flex justify-center">
            <v-btn
              rounded="xl"
              flat
              size="large"
              to="/register"
            >
              Cadastre-se
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
            Login Morador
          </h1>
          <div class="d-flex flex-column pa-3">
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
              :rules="[required]"
            />
            <v-checkbox 
              label="Quero me manter conectado"
            />
          </div>
          <div class="d-flex justify-center">
            <v-btn
              rounded="xl"
              flat
              size="x-large"
              class="bg-red-accent-2 flex-grow-1 flex-md-grow-0"
              :loading="loading"
              @click="onSubmit"
            >
              Entrar
            </v-btn>
          </div>
          <v-btn
            variant="plain"
            class="me-auto"
          >
            Esqueci minha senha
          </v-btn>
        </v-container>
        <div class="image-below-phone d-flex flex-column justify-center ga-10 pa-3 d-md-none">
          <span class="text-white">Morador Novo? Cadastre-se</span>
          <div class="d-flex">
            <v-btn
              rounded="xl"
              flat
              size="large"
            >
              Cadastre-se
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./Login.ts" />

<style lang="sass" src="./Login.scss" />