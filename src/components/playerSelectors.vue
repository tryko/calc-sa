<template>
  <div class="container-selectors">
    <div class="selectors-wrapper" v-if="player != 'deck'">
      <div v-for="(type, i) in types" :key="i + 'input'">
        {{ canShow(type) ? type : "" }}
        <input
          v-if="canShow(type)"
          type="number"
          min="0"
          class="multiplyer-selector"
          value="0"
          :name="type"
          @change="addToTypeMultiplyer"
        />
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  props: ["types","player"],

methods:{
    addToTypeMultiplyer(e){
        const selectorClicked = {type:e.target.name, value:e.target.value, player: this.player};
        this.$store.commit('addToTypeMultiplyer',selectorClicked);
        this.$store.commit("addingScore", selectorClicked);
    },
    canShow(type){
      return type === 'agriM' || type === 'toolsM' || type ==='meepleM';
    }
}
};
</script>

<!-- using grid didn't work i have to set it like this cause childern to adhear to grid proeprly
// todo fix classes
 -->

<style scoped>
.multiplyer-selector {
  width: 30px;
}

.selectors-wrapper {
  display: flex;
}

.container-selectors {
  height: 50px;
  border-left: 1px solid black;

  font-size: 10px;
}
</style>
