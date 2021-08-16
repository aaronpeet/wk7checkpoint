<template>
  <div class="note m-2 bg-light shadow">
    <div class="p-3">
      <div class="text-left">
        <p><em>{{ notes.body }}</em></p>
      </div>
      <div class="text-right">
        <p><em> {{ notes.creator.name }} </em> |<img class="rounded-pill ml-2" :src="notes.creator.picture" alt=""></p>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  props: {
    notes: {
      type: Object,
      required: true
    }
  },

  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

.rounded-pill{
  max-height: 30px;
}

</style>
