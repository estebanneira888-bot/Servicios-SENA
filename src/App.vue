<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="☰" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img alt="Quasar logo" src="./img/Logo.png">
          </q-avatar>
          Centro de formacion SENA
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

   <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="mobile" bordered>
  <h4 class="menu-titulo">Menu.....</h4>
  <q-btn flat class="menu-item" to="/Bienestar"><q-icon name="❤️‍🩹" />Bienestar</q-btn>
  <q-btn flat class="menu-item" to="/Biblioteca"><q-icon name="📚" />Biblioteca</q-btn>
  <q-btn flat class="menu-item" to="/Enfermeria"><q-icon name="⛑️" />Enfermería</q-btn>
  <q-btn flat class="menu-item" to="/Cafeteria"><q-icon name="🍔" />Cafetería</q-btn>
  <q-btn flat class="menu-item" to="/Coordinacion"><q-icon name="👔" />Coordinación</q-btn>
</q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>