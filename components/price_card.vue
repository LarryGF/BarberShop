<template>
  <v-flex xs6>
    <v-card
      v-ripple
      color="rgba(217,161,84,0.6)"
      class="ma-3"
      :height="windowHeight*0.4"
    >
      <v-container text-xs-center class="py-3" :max-height="windowHeight/4" justify-space-between >
        <p class="display-3 font-weight-medium font-bold">${{price}}</p>

        <p class="display-1 font-weight-medium">{{name}}</p>

        <p class="title font-weight-medium">{{description}}</p>
      </v-container>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  props: {
    price: Number,
    name: String,
    description: String
  },
  data: function() {
    return {
      windowHeight:'',
      windowWidth:''
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