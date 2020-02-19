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
  props: ["id", "value", "type", "owner", "imgURL"],
  data() {
    return {
      img: require(`./../assets/${this.imgURL}.png`),
      bla: this.imgURL
    };
  },
  methods: {
    cardClicked() {
      this.$store.commit("addCardToPlayer", {
        id: this.id,
        type: this.type,
        value: this.value,
        owner: this.owner
      });
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
