<template >
  <v-img
    src="background_prices.png"
    gradient="rgba(45,34,18,0.7),rgba(0,0,0,0.9)"
    :height="windowHeight"
  >
    <v-container fill-height>
      <v-container justify-space-around>
        <v-container class="text-xs-center">
          <span class="display-3 font-weight-black">NUESTROS PRECIOS SIN COMPETENCIA</span>
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
                  <!-- <v-toolbar flat class="transparent">
                    <v-list class="pa-0">
                      <v-list-tile avatar>
                        <v-list-tile-avatar>
                          <img src="https://randomuser.me/api/portraits/men/85.jpg" />
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                          <v-list-tile-title>John Leider</v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                          <v-btn icon @click.stop="mini = !mini">
                            <v-icon>chevron_left</v-icon>
                          </v-btn>
                        </v-list-tile-action>
                      </v-list-tile>
                    </v-list>
                  </v-toolbar>-->
                  <v-layout row fill-height>
                    <v-flex xs10>
                      <v-list class="pt-0" dense>
                        <v-divider></v-divider>

                        <v-list-tile v-for="item in items" :key="item.title" @click="activeBtn=1">
                          <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                          </v-list-tile-action>

                          <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                          </v-list-tile-content>
                        </v-list-tile>
                      </v-list>
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
                  color="rgba(217,161,84,0.6)"
                  class="ma-3"
                  :height="windowHeight/3"
                  :width="windowWidth"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cum consequatur accusamus eos blanditiis nesciunt et? Tenetur eos suscipit voluptatum pariatur. Expedita voluptates obcaecati nemo consectetur asperiores non perspiciatis enim?</v-card>
              </v-flex>
              <v-flex xs6>
                <v-card
                  color="rgba(217,161,84,0.6)"
                  class="ma-3"
                  :height="windowHeight/3"
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse repudiandae natus consequatur minima quasi ipsam dolores vero, eos labore rerum iure fuga aliquam laborum quibusdam blanditiis repellendus voluptatibus soluta illo!</v-card>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs6>
                <v-card
                  color="rgba(217,161,84,0.6)"
                  class="ma-3"
                  :height="windowHeight/3"
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima architecto repellendus qui perspiciatis incidunt doloribus hic expedita cupiditate, aut quasi maxime rem esse vitae blanditiis omnis voluptatem debitis, earum dicta.</v-card>
              </v-flex>
              <v-flex xs6>
                <v-card
                  color="rgba(217,161,84,0.6)"
                  class="ma-3"
                  :height="windowHeight/3"
                >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste non eligendi reiciendis magni aut ut delectus eaque veniam deleniti laborum dolorum dolores debitis odit hic esse libero, illo nesciunt. Nostrum.</v-card>
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
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
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

