<template >
  <v-card column fill-height color="transparent" flat>
    <v-card color="transparent" flat>
      <v-layout row>
        <v-img src="cards/1.png" width="300" :height="windowHeight/5" position="right,right">
          <v-card color="rgba(0,0,0,0.2)" class="mr-5 pr-5">qweqwe</v-card>
        </v-img>
      </v-layout>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data: function() {
    return {
      windowHeight: "",
      windowWidth: "",

      drawer: true,
      items: [
        { title: "Inicio", icon: "mdi-home", to: "/" },
        { title: "Catálogo", icon: "dashboard", to: "/catalog" },
        { title: "Barberos", icon: "mdi-account", to: "" },
        { title: "Novedades", icon: "mdi-new-box", to: "" }
      ],

      mini: true,
      right: null
    };
  },
  components: {},
  methods: {},
  computed: {},
  mounted() {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  }
};
</script>

