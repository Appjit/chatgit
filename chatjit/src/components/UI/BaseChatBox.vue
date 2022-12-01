<template>
  <div class="box-container" :class="sendByWho">
    <div class="box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    byWho: {
      type: String,
      required: true,
    },
  },
  computed: {
    sendByWho() {
      return { me: this.byWho === "me", you: this.byWho === "you" };
    },
  },
};
</script>

<style scoped>
.box-container {
  display: flex;
  width: 100%;
  padding: 0.5rem 10px;
}

.box {
  max-width: 45%;
  padding: 1rem;
  border-radius: 1rem;
}

.me {
  justify-content: flex-end;
}

.me .box {
  background-color: rgb(255, 235, 51);
}

.you {
  justify-content: flex-start;
}
.you .box {
  background-color: #fff;
}
</style>
