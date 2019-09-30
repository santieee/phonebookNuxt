<template>
  <div>
    <nav class="navbar">
      <nuxt-link class="tab" to="/history" active-class="link-active">History</nuxt-link>
      <nuxt-link class="tab" to="/contacts" active-class="link-active">Contacts</nuxt-link>
    </nav>
  </div>
</template>
<script>
export default {

}

</script>
<style>
.navbar {
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  background-color: rgba(34, 94, 121, 1);
}

.tab {
  padding: 1rem 2rem;
  border-right: 1px solid rgba(166, 166, 166, .25);
  transition: .5s;
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
}

.tab:first-child {
  border-left: 1px solid rgba(166, 166, 166, .25);
}

.tab:hover {
  color: white;
  background-color: rgb(89%, 29%, 8%, .6);
  cursor: pointer;
}
.link-active{
  color: white;
  background-color: rgb(89%, 29%, 8%, .6);
}
</style>
