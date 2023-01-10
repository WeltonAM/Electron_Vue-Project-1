<template>
  <v-app>
    
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Most used words</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <MyHome></MyHome>
    </v-main>

  </v-app>
</template>

<script>
import MyHome from './components/MyHome.vue'

export default {
  name: 'App',

  components: {
    MyHome,
  },

  data: () => ({
    //
  }),
}
</script>

<style>
::-webkit-scrollbar-track
{
	box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	background-color: #F90;	
	background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%,rgba(255, 255, 255, .2) 75%, transparent 75%, transparent)
}
</style>