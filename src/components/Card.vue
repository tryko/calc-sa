<template>
  <img :src="img" alt="" class="image" />

  <!-- <div class="box" @click="cardClicked">
  </div> -->
</template>

<script lang="ts">
export default {
  props: ["boxClass", "multiplyBy", "cardType", "owner", "imgURL"],
  data() {
    return {
      img: require(`./../assets/${this.imgURL}.png`)
    };
  },
  methods: {
    cardClicked() {
      if (this.owner === "deck") {
        this.$store.commit("addCardToPlayer", {
          cardType: this.cardType,
          multiplyBy: this.multiplyBy
        });
      }
    }
  }
};
</script>

<style scoped>
.image {
  object-fit: cover;
  height: 60px;
  width: 40px;
}

.box {
  background-color: lightseagreen;

  font-size: 150%;
  border: 1px solid black;
}
</style>
