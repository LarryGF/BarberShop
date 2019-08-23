<template>
  <v-img src="background.png" gradient="rgba(45,34,18,0.7),rgba(0,0,0,0.6)" :height="windowHeight">
    <v-container>
      <v-flex xs12>
        <v-card height="300px" color="transparent" elevation="4" class="mt-4">
          <v-card color="#131210" height="240">
            <v-container fill-height>
              <v-layout row class="text-xs-center" justify-center align-center>
                <v-flex xs4>
                  <v-layout row align-start>
                    <v-flex xs2 class="mt-2">
                      <v-container fill-height>
                        <v-tooltip bottom v-if="$vuetify.breakpoint.mdAndDown">
                          <template #activator="data2">
                            <v-icon medium v-on="data2.on">mdi-clock-outline</v-icon>
                          </template>
                          <span class="title">
                            Lunes - Sábado
                            <br />9:00am - 5:00pm
                          </span>
                          <br />
                          <span class="title">
                            Domingos
                            <br />10:00am - 1:00pm
                          </span>
                        </v-tooltip>
                        <v-icon medium class="hidden-md-and-down">mdi-clock-outline</v-icon>
                      </v-container>
                    </v-flex>
                    <v-flex xs10 class="text-xs-left hidden-md-and-down">
                      <span class="title">
                        Monday - Saturday
                        <br />9:00am - 5:00pm
                      </span>
                      <br />
                      <span class="title">
                        Sunday
                        <br />10:00am - 1:00pm
                      </span>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs4>
                  <span class="display-2 font-weight-black font-italic" style="color:#d9a154">Juan's</span>
                  <v-img src="barber.jpg" height="60px" contain></v-img>
                  <v-icon x-large color="primary">mdi-scissors-cutting</v-icon>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs4>
                  <v-layout row align-end justify-end>
                    <v-flex xs8>
                      <v-container fill-height justify-end>
                        <v-tooltip bottom v-if="$vuetify.breakpoint.mdAndDown">
                          <template #activator="data">
                            <v-icon medium v-on="data.on">mdi-phone-outline</v-icon>
                          </template>
                          <!--<span class="title">+535 386 29 08</span>-->
                          <br />
                          <span class="title">Call us</span>
                        </v-tooltip>
                        <v-icon medium class="hidden-md-and-down">mdi-phone-outline</v-icon>
                      </v-container>
                    </v-flex>

                    <v-flex xs4 class="text-xs-left  hidden-md-and-down">
                      <!-- <span class="title">+535 386 29 08</span> -->
                      <span class="title">Call to reserve today.</span>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <!-- <v-flex lg2>
              <v-layout row class="text-xs-end" justify-end align-end>
                <v-flex xs2 class="mb-2">
                  <v-container fill-height>
                    <v-icon medium>mdi-phone-outline</v-icon>
                  </v-container>
                </v-flex>
                <v-flex xs10 class="text-xs-left">
                  <span class="title">+535 386 29 08</span>
                  <br />
                  <span class="hidden-md-and-down title">Llame para reservar</span>
                </v-flex>
              </v-layout>
                </v-flex>-->
              </v-layout>
            </v-container>
          </v-card>
          <v-bottom-nav
            :active.sync="activeBtn"
            :value="showNav"
            absolute
            color="rgba(0, 0, 0, 0.7)"
            height="60"
          >
            <!-- <v-flex xs9> -->
            <v-btn flat color="primary" to="prices">
              <span class="title hidden-md-and-down">Offers</span>
              <v-icon class="hidden-lg-and-up">mdi-database</v-icon>
            </v-btn>
            <v-divider class="mx-3 hidden-md-and-down" dark inset vertical></v-divider>
            <v-btn flat color="primary" to="catalog">
              <span class="title hidden-md-and-down">Catalog</span>
              <v-icon class="hidden-lg-and-up">dashboard</v-icon>
            </v-btn>
            <v-divider class="mx-3 hidden-md-and-down" dark inset vertical></v-divider>

            <v-btn flat color="primary">
              <span class="title hidden-md-and-down">Barbers</span>
              <v-icon class="hidden-lg-and-up">mdi-account</v-icon>
            </v-btn>
            <v-divider class="mx-3 hidden-md-and-down" dark inset vertical></v-divider>

            <v-btn flat color="primary">
              <span class="title hidden-md-and-down">News</span>
              <v-icon class="hidden-lg-and-up">mdi-new-box</v-icon>
            </v-btn>
            <v-divider class="mx-3 hidden-md-and-down" dark inset vertical></v-divider>

            <v-btn flat color="primary">
              <span class="title hidden-md-and-down">Us</span>
              <v-icon class="hidden-lg-and-up">mdi-circle</v-icon>
            </v-btn>

            <!-- </v-flex> -->
            <!-- <v-flex xs3>
          <v-spacer></v-spacer>
            </v-flex>-->
            <!-- <v-spacer></v-spacer>
        <v-btn flat color="primary">
          <v-icon>mdi-camera-iris</v-icon>
            </v-btn>-->
          </v-bottom-nav>
        </v-card>
      </v-flex>
    </v-container>
  </v-img>
</template>

<script>
export default {
  data: function() {
    return {
      activeBtn: 10,
      showNav: true,
      color: "#d9a154",
      windowHeight: ""
    };
  },
  components: {},
  methods: {},
  computed: {},
  mounted() {
    this.windowHeight = window.innerHeight;
  }
};
</script>

