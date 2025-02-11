<template>
  <v-app>
    <!-- Navbar -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title>
        <v-img
          src="../../assets/login/Logo.png"
          alt="Descrição da Imagem"
          max-height="72"
          max-width="78"
          class="mx-auto"
        />
      </v-toolbar-title>
      <v-spacer />
      <div class="d-flex ga-16 align-center justify-center pa-5">
        <div class="d-flex">
          <v-btn icon>
            <v-icon icon="person" />
          </v-btn>
          <div class="d-flex flex-column align-start justify-center">
            <span class="text-caption">
              Bem vindo,
            </span>
            <span class="text-caption">
              {{ name }}
            </span>
          </div>
        </div>
        <div>
          <v-btn 
            text="Sair"
            rounded="xl"
            flat
            class="bg-red-accent-2"
            width="10rem"
            @click="logout()"
          />  
        </div>
      </div>
    </v-app-bar>

    <!-- Menu Hambúrguer (Drawer) -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
    >
      <v-list>
        <template
          v-for="(item, i) in menuItems"
          :key="i"
        >
          <!-- Se o item tiver submenus, usa um v-list-group -->
          <v-list-group
            v-if="item.subMenus"
            :value="item.text"
          >
            <template #activator="{ props }">
              <v-list-item v-bind="props">
                <template #prepend>
                  <v-icon :icon="item.icon" />
                </template>
                <v-list-item-title v-text="item.text" />
              </v-list-item>
            </template>

            <v-list-item
              v-for="(subItem, j) in item.subMenus"
              :key="`sub-${i}-${j}`"
              :to="subItem.route"
              color="red-accent-2"
            >
              <v-list-item-title v-text="subItem.text" />
            </v-list-item>
          </v-list-group>

          <v-list-item
            v-else
            :to="item.route"
            color="red-accent-2"
          >
            <template #prepend>
              <v-icon :icon="item.icon" />
            </template>
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <!-- Conteúdo da Página -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" src="./AuthenticatedLayout.ts" />
