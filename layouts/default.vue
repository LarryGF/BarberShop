<template>
  <v-app dark>
    <!-- <SaveDialog :save_dialog="save_dialog" @save="save" @close="save_dialog=false"/>
    <LoadDialog
    :items="load_items"
    :load_dialog="load_dialog"
    @close="load_dialog=false"
    @load="load"
    />-->
    <!-- <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile router :to="item.to" :key="i" v-for="(item, i) in items" exact>
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
    <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>-->
    <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
    </v-btn>-->
    <!-- <v-toolbar-title v-text="title" ></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mx-3 mt-5"  fab bottom right icon color="blue" @click.stop="save_dialog=true">
        <v-icon>file_download</v-icon>
      </v-btn>
      <v-btn class="mx-3 mt-5 "  fab bottom right icon color="green" @click.stop="prepareDialog">
        <v-icon>file_upload</v-icon>
      </v-btn>
      <v-btn class="mx-3 mt-5"  fab bottom right icon color="pink" @click.stop="refresh">
        <v-icon>cached</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content >
    <SnackBar :text="snackBarText" :snackbar="openSnackBar" @close="openSnackBar=false"/>-->
    <!-- <v-container> -->
    <nuxt />
    <!-- </v-container> -->
    <!-- </v-content> -->
    <!-- <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      class="hidden-lg-and-down"
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>-->
    <!-- <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>-->
  </v-app>
</template>

<script>
// import SnackBar from "../components/SnackBar";
// import SaveDialog from "../components/SaveDialog";
// import LoadDialog from "../components/LoadDialog";
export default {
  data() {
    return {};
  },
  mounted: function() {},
  components: {},

  methods: {}
};
</script>
