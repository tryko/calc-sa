<template>
  <div>
    <img
      :key="id"
      :src="getImg"
      alt=""
      class="image box"
      @click="cardClicked"
    />
  </div>
</template>

<script lang="ts">
export default {
  props: ["id", "value", "type", "owner", "imgURL", "player"],
  data() {
    return {
      img: require(`./../assets/${this.imgURL}.png`),
      bla: this.imgURL
    };
  },
  methods: {
    cardClicked() {
      const cardClicked = {
        id: this.id,
        type: this.type,
        value: this.value,
        owner: this.owner,
        player: this.player
      };
      this.$store.commit("addCardToPlayer", cardClicked);
      this.$store.commit("addValueToCards", cardClicked);
      this.$store.commit("addingScore", cardClicked);
    }
  },
  computed: {
    getImg() {
      return require(`./../assets/${this.imgURL}.png`);
    }
  }
};
</script>

<style scoped>
.image {
  object-fit: cover;
  height: 50px;
  width: 35px;
}

.box {
  background-color: lightseagreen;
  box-sizing: border-box;
  margin-left: 2px;
  border: 1px solid black;
}
</style>
