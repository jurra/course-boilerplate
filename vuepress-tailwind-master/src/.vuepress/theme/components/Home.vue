<template>
  <main class="home" aria-labelledby="main-title">
    <!-- <Content class="theme-default-content custom"/> -->
    <!-- <p>{{items}}</p> -->
    <div v-for="i in items">
      <!-- <div class="text-center"v-if="i.level == 1">
        <h1>{{i.title}}</h1>
        <h3>{{i.description}}</h3>
      </div> -->
      <div class="p-4 border border-primary rounded-lg my-4" v-if="i.level == 2 && i.title">
        <h2>{{i.title}}</h2>
        <p>{{i.description}}</p>
        <router-link :to="i.relativePath">go to the module</router-link>
      </div>
    </div>
  </main>
</template>

<script>
import jsonContents from "../../contents.data.json";
// let contents = JSON.parse(jsonContents)
// contents = JSON.parse(contents)

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


