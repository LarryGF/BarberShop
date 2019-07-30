<template >
  <v-img
    src="background_prices.png"
    gradient="rgba(45,34,18,0.7),rgba(0,0,0,0.9)"
    :height="windowHeight"
  >
    <v-container fill-height>
      <v-container justify-space-around>
        <v-container class="text-xs-center pa-0">
          <v-layout row>
            <v-flex xs1>
              <span class="display-2 font-weight-black font-italic" style="color:#d9a154">Juan's</span>
              <v-img src="barber.jpg" height="60px" contain></v-img>
              <v-icon x-large color="primary">mdi-scissors-cutting</v-icon>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs10>
              <span class="display-3 font-weight-black">NUESTROS PRECIOS SIN COMPETENCIA</span>
            </v-flex>
          </v-layout>
        </v-container>
        <v-layout row>
          <v-flex xs2>
            <v-layout column fill-height justify-center>
              <v-card class="my-3" color="transparent" flat>
                <v-navigation-drawer
                  style="background-color:rgba(217,161,84,0.9)"
                  floating
                  dark
                  :mini-variant.sync="mini"
                  permanent
                  :height="windowHeight/2"
                >
                  <v-layout row fill-height>
                    <v-flex xs10>
                      <v-layout column fill-height justify-center>
                        <v-list>
                          <v-list-tile v-for="item in items" :key="item.title" @click="activeBtn=1">
                            <v-list-tile-action>
                              <v-icon>{{ item.icon }}</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content>
                              <v-list-tile-title
                                @click.stop="$router.push(item.to)"
                              >{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                            <v-divider></v-divider>
                          </v-list-tile>
                        </v-list>
                      </v-layout>
                    </v-flex>
                    <v-flex xs2>
                      <v-layout column fill-height justify-center v-if="!mini">
                        <v-icon @click.stop="mini=!mini">mdi-arrow-left-drop-circle</v-icon>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-navigation-drawer>
              </v-card>
            </v-layout>
          </v-flex>

          <v-layout column justify-center>
            <v-layout row justify-center>
              <v-flex xs6>
                <v-card
                  v-ripple
                  color="rgba(217,161,84,0.6)"
                  class="ma-3"
                  :height="windowHeight/3"
                  :width="windowWidth"
                >
                  <v-container text-xs-center class="py-3">
                    <br />
                    <span class="display-3 font-weight-medium font-bold">$3</span>
                    <br />
                    <br />
                    <span class="display-1 font-weight-medium">Arreglo de barba</span>
                    <br />
                    <br />
                    <br />
                    <span
                      class="title font-weight-medium"
                    >Un tratamiento completo que a su barba, recorte, forma y peinado que lo dejará satisfecho.</span>
                  </v-container>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card
                  v-ripple
                  color="rgba(217,161,84,0.6)"
                  class="ma-3"
                  :height="windowHeight/3"
                  :width="windowWidth"
                >
                  <v-container text-xs-center class="py-3">
                    <br />

                    <span class="display-3 font-weight-medium font-bold">$5</span>
                    <br />
                    <br />
                    <span class="display-1 font-weight-medium">Pelado</span>
                    <br />
                    <br />
                    <br />
                    <span
                      class="title font-weight-medium"
                    >Elija de uno de nuestros muchos estilos disponibles o pídale a su barbero el pelado de su preferencia, de cualquier manera saldrá complacido.</span>
                  </v-container>
                </v-card>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs6>
                <v-card
                  v-ripple
                  color="rgba(217,161,84,0.6)"
                  class="ma-3"
                  :height="windowHeight/3"
                  :width="windowWidth"
                >
                  <v-container text-xs-center class="py-3">
                    <br />
                    <span class="display-3 font-weight-medium font-bold">$2</span>
                    <br />
                    <br />
                    <span class="display-1 font-weight-medium">Peinado</span>
                    <br />
                    <br />
                    <br />
                    <span
                      class="title font-weight-medium"
                    >Todos nuestros peinados se realizan con productos de la mayor calidad, garantizando fijación máxima para que logre un peinado que le durará días.</span>
                  </v-container>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card
                  v-ripple
                  color="rgba(217,161,84,0.6)"
                  class="ma-3"
                  :height="windowHeight/3"
                  :width="windowWidth"
                >
                  <v-container text-xs-center class="py-3">
                    <br />
                    <span class="display-3 font-weight-medium font-bold">$8</span>
                    <br />
                    <br />
                    <span class="display-1 font-weight-medium">Tinte</span>
                    <br />
                    <br />
                    <br />
                    <span
                      class="title font-weight-medium"
                    >Si no está contento con el color de su pelo aquí tenemos la solución para usted, siéntase libre de experimentar cualquier color o combinación de colores para que obtenga el look que anda buscando.</span>
                  </v-container>
                </v-card>
              </v-flex>
            </v-layout>
          </v-layout>
        </v-layout>
      </v-container>
    </v-container>
  </v-img>
</template>

<script>
export default {
  data: function() {
    return {
      activeBtn: 1,
      showNav: true,
      color: "#d9a154",
      windowHeight: "",
      windowWidth: "",
      drawer: true,
      items: [
        { title: "Inicio", icon: "mdi-home", to: "/" },
        { title: "Catálogo", icon: "dashboard", to: "/catalog" },
        { title: "Barberos", icon: "mdi-account", to: "/barbers" },
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
    this.windowHWidth = window.innerWidth;
  }
};
</script>

