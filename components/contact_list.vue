<template>
  <div class="contacts">
    <transition name="fade">
      <modal v-if="addform" @off="addform = false" />
    </transition>
    <transition-group name="list" mode="in-out">
      <div 
        class="contacts-user"
        v-for="(user, i) in contacts"
        :key="user.id"
      >
        <button class="pure-button contact-delete" @click="deleteContact(i)">x</button>
        <b>{{user.name}}</b>
        <p>{{user.email}}</p>
        <p>{{user.phone}}</p>
      </div>
    </transition-group>
    <button class="pure-button add-contact" @click="addform = true">+</button>
  </div>
</template>
<script>
  import modal from "~/components/modal";
  export default {
    props:['query'],
    components:{
      modal,
    },
    data: ()=>({
      addform: false,
    }),
    computed: {
     contacts(){
      if(this.query.length){
        return this.filterByName(this.query);
      }
      return this.$store.state.contacts_data;
     }
    },
    methods:{
      filterByName(match){
        match = match.toLowerCase();
        return this.$store.state.contacts_data.filter(i => {
          return (i.name.toLowerCase().indexOf(match) !== -1 || i.email.toLowerCase().indexOf(match) !== -1 || i.phone.toLowerCase().indexOf(match.toLowerCase()) !== -1)
        })
      },
      deleteContact(i){
        console.log(this.contacts[i])
      }
    }
  }
</script>
<style lang="scss">
.contacts{
  margin-top: 2rem;
}
.contacts-user{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 5rem;
  font-size: 1rem;
  padding: 1rem 0;
  border-bottom: .1px solid black;
}
.add-contact{
  position: sticky;
  bottom: 3rem;
  color: #fff;
  font-size: 2rem;
  left: 90%;
  padding: .75rem .75em;
  font-weight: 600;
  border-radius: 50%;
  background-color: rgba(28, 217, 85, 1);
}
.contact-delete{
  position: absolute;
  background-color: rgba(232, 19, 19, 1);
  font-size: .75rem;
  color: #fff;
  font-weight: 600;
  border-radius: 50%;
  right: 10%;
  top: 20%;
  padding: 0rem .35rem .15rem;
}
.list-move{
  transition: .5s;
}
.list-item {
  transition: all .5s;
  display: inline-block;
  margin-right: 10px;
}
.list-enter, .list-leave-to
/* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-active {
  position: absolute;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>