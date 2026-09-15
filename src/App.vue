<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="encabezado">

      <q-toolbar class="barra-superior">

        <q-btn
          flat
          round
          dense
          icon="☰"
          class="boton-menu"
          @click="toggleLeftDrawer"
        />

        <q-avatar size="50px">
          <img src="./img/logoo.png">
        </q-avatar>

        <q-toolbar-title class="titulo-header">
          <div class="titulo-principal">Centro Agroturístico</div>
          <div class="titulo-secundario">SENA San Gil</div>
        </q-toolbar-title>

        <div class="frase-header">
          Formación integral<br>
          para un mejor futuro
        </div>

      </q-toolbar>

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="mobile"
      bordered
      class="menu-lateral"
    >

      <div class="menu-cabecera">

        <q-avatar size="75px">
          <img src="./img/logoo.png">
        </q-avatar>

        <div class="menu-titulo">
          Centro Agroturístico
        </div>

        <div class="menu-subtitulo">
          SENA San Gil
        </div>

      </div>

      <q-separator />

      <div class="menu-contenido">

        <q-btn
          flat
          no-caps
          class="menu-item"
          to="/"
          @click="leftDrawerOpen = false"
        >
          <q-icon name="🫂" />
          <span>Acerca</span>
        </q-btn>

        <q-btn
          flat
          no-caps
          class="menu-item"
          to="/Bienestar"
          @click="leftDrawerOpen = false"
        >
          <q-icon name="❤️‍🩹" />
          <span>Bienestar</span>
        </q-btn>

        <q-btn
          flat
          no-caps
          class="menu-item"
          to="/Biblioteca"
          @click="leftDrawerOpen = false"
        >
          <q-icon name="📚" />
          <span>Biblioteca</span>
        </q-btn>

        <q-btn
          flat
          no-caps
          class="menu-item"
          to="/Enfermeria"
          @click="leftDrawerOpen = false"
        >
          <q-icon name="⛑️" />
          <span>Enfermería</span>
        </q-btn>

        <q-btn
          flat
          no-caps
          class="menu-item"
          to="/Cafeteria"
          @click="leftDrawerOpen = false"
        >
          <q-icon name="🍔" />
          <span>Cafetería</span>
        </q-btn>

        <q-btn
          flat
          no-caps
          class="menu-item"
          to="/Coordinacion"
          @click="leftDrawerOpen = false"
        >
          <q-icon name="👔" />
          <span>Coordinación</span>
        </q-btn>

      </div>

      <div class="menu-footer">
        <q-icon name="🙌" />
        <span>Servicio Nacional de Aprendizaje</span>
      </div>

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
