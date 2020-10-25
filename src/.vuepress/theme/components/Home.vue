<template>
  <main class="home" aria-labelledby="main-title">
    <!-- <Content class="theme-default-content custom"/> -->
    <!-- <p>{{items}}</p> -->
    <div class="grid grid-flow-col grid-cols-2 grid-rows-2 gap-3 py-4">
    <div v-for="i in items" class="">
      <!-- <div class="text-center"v-if="i.level == 1">
        <h1>{{i.title}}</h1>
        <h3>{{i.description}}</h3>
      </div>-->
      <div class="p-4 border-primary rounded-lg w-full" v-if="i.level == 2 && i.title">
        <router-link :to="i.relativePath">
          <h2 class="border-0">{{i.title}}</h2>
        </router-link>
        <p>{{i.description}}</p>
      </div>
      <div v-else></div>
    </div>
    </div>
  </main>
</template>

<script>
import jsonContents from "../../contents.data.json";


export default {
  // components: { NavLink },
  data() {
    return {
      items: jsonContents.contents,
    };
  },
  computed: {
    // data () {
    //   return  jsonContents.content;
    // },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
  },
};
</script>


