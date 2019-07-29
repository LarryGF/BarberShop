<template >
  <v-img src="background_prices.png" gradient="rgba(45,34,18,0.7),rgba(0,0,0,0.9)">
    <v-container column fill-height align-center fluid class="ma-0 pa-0">
      <v-container class="ma-0 pa-0" fluid style="position:floating">
        <v-carousel
          hide-controls
          hide-delimiters
          :height="windowHeight*0.45"
          prev-icon="mdi-arrow-left-drop-circle"
          next-icon="mdi-arrow-right-drop-circle"
        >
          <v-carousel-item v-for="(item,i) in top" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
        <v-tabs dark center grow color="rgba(217,161,84,0.9)" slider-color="white">
          <v-spacer></v-spacer>
          <v-tab v-for="n in items" :key="items.indexOf(n)" @click.stop="$router.push(n.to)">
            <v-icon>{{n.icon}}</v-icon>
            {{ n.title }}
          </v-tab>
          <v-spacer></v-spacer>
        </v-tabs>
        <v-layout row v-for="beard in beards" :key="beards.indexOf(beard)">
          <v-flex xs6>
            <v-container text-xs-center class="mx-3 py-0" fill-height>
              <v-card class="pa-4" color="rgba(217,161,84,0.6)">
                <span class="title font-weight-medium">{{beard.description}}</span>
              </v-card>
            </v-container>
          </v-flex>
          <v-flex xs6>
            <v-parallax :src="beard.src" class="ma-4" :height="windowHeight*0.3">
              <v-container text-xs-center justify-center fill-height>
                <span class="display-3 font-weight-medium">{{beard.title}}</span>
              </v-container>
            </v-parallax>
          </v-flex>
        </v-layout>
        <v-layout row v-for="beard in general_service" :key="general_service.indexOf(beard)+100">
          <v-flex xs6>
            <v-container text-xs-center class="mx-3 py-0" fill-height>
              <v-card class="pa-4" color="rgba(217,161,84,0.6)">
                <span class="title font-weight-medium">{{beard.description}}</span>
              </v-card>
            </v-container>
          </v-flex>
          <v-flex xs6>
            <v-parallax :src="beard.src" class="ma-4" :height="windowHeight*0.3">
              <v-container text-xs-center justify-center fill-height>
                <span class="display-3 font-weight-medium">{{beard.title}}</span>
              </v-container>
            </v-parallax>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </v-img>
</template>

<script>
export default {
  data: function() {
    return {
      windowHeight: 0,
      windowHWidth: 0,
      items: [
        { title: "Inicio", icon: "mdi-home", to: "/" },
        { title: "Ofertas", icon: "mdi-database", to: "/prices" },
        { title: "Barberos", icon: "mdi-account", to: "" },
        { title: "Novedades", icon: "mdi-new-box", to: "" }
      ],
      beards: [
        {
          src: "caroussels/beard_grooming/1.png",
          title: "BARBA",
          description:
            "La barba (...) Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis impedit nemo corporis quasi non et illum error doloremque quod voluptates magnam ipsam repudiandae consectetur magni rerum perspiciatis, officiis nesciunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nulla dolor cum, exercitationem voluptas suscipit sequi iure, eum, quasi qui dolores expedita vitae quas. Debitis officiis nobis a repellat harum?"
        },
        {
          src: "caroussels/beard_grooming/2.png",
          title: "BARBA",
          description:
            "La barba (...) Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis impedit nemo corporis quasi non et illum error doloremque quod voluptates magnam ipsam repudiandae consectetur magni rerum perspiciatis, officiis nesciunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nulla dolor cum, exercitationem voluptas suscipit sequi iure, eum, quasi qui dolores expedita vitae quas. Debitis officiis nobis a repellat harum?"
        },
        {
          src: "caroussels/beard_grooming/3.png",
          title: "BARBA",
          description:
            "La barba (...) Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis impedit nemo corporis quasi non et illum error doloremque quod voluptates magnam ipsam repudiandae consectetur magni rerum perspiciatis, officiis nesciunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nulla dolor cum, exercitationem voluptas suscipit sequi iure, eum, quasi qui dolores expedita vitae quas. Debitis officiis nobis a repellat harum?"
        }
      ],
      general_service: [
        {
          src: "caroussels/general_service/1.png",
          title: "SERVICIO GENERAL",
          description:
            "El servicio general (...) Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis impedit nemo corporis quasi non et illum error doloremque quod voluptates magnam ipsam repudiandae consectetur magni rerum perspiciatis, officiis nesciunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nulla dolor cum, exercitationem voluptas suscipit sequi iure, eum, quasi qui dolores expedita vitae quas. Debitis officiis nobis a repellat harum?"
        },
        {
          src: "caroussels/general_service/2.png",
          title: "SERVICIO GENERAL",
          description:
            "El servicio general (...) Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis impedit nemo corporis quasi non et illum error doloremque quod voluptates magnam ipsam repudiandae consectetur magni rerum perspiciatis, officiis nesciunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nulla dolor cum, exercitationem voluptas suscipit sequi iure, eum, quasi qui dolores expedita vitae quas. Debitis officiis nobis a repellat harum?"
        },
        {
          src: "caroussels/general_service/3.png",
          title: "SERVICIO GENERAL",
          description:
            "El servicio general (...) Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis impedit nemo corporis quasi non et illum error doloremque quod voluptates magnam ipsam repudiandae consectetur magni rerum perspiciatis, officiis nesciunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nulla dolor cum, exercitationem voluptas suscipit sequi iure, eum, quasi qui dolores expedita vitae quas. Debitis officiis nobis a repellat harum?"
        }
      ],
      top: [
        {
          src: "caroussels/top/1.png"
        },
        {
          src: "caroussels/top/2.png"
        },
        {
          src: "caroussels/top/3.png"
        }
      ]
    };
  },
  components: {},
  methods: {},
  computed: {},
  mounted() {
    this.windowHeight = window.innerHeight;
    this.windowHWidth = window.innerWidth;
  }
};
</script>

