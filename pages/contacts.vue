<template>
  <div class="content">
    <form class="pure-form">
      <input autofocus class="pure-input-1" type="text" placeholder="Search" v-model="query" />
    </form>
    <br />
    <hr />
    <contact-list :query="query" />
  </div>
</template>

<script>
import contactList from "~/components/contact_list";
export default {
  async fetch({ store }) {
    await store.dispatch("getContacts");
  },
  data: () => ({
    query: ""
  }),
  components: {
    contactList
  },
  mounted() {},
  watch: {},
  methods: {}
};
</script>
<style>
body {
}
</style>