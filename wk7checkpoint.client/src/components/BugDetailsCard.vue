<template>
  <div class="bug m-2 bg-light shadow border-left border-success">
    <div class="p-3">
      <div class="text-left">
        <p><b>{{ bug.title }}</b></p>
        <p><em>{{ bug.description }}</em></p>
      </div>
      <div class="text-right">
        <!-- <p>Updated on: {{ lastUpdated }}</p> -->
        <p><em> {{ bug.creator?.name }} </em> |<img class="rounded-pill ml-2" :src="bug.creator?.picture" alt=""></p>
      </div>
    </div>
  </div>
</template>

<script>
// import { computed } from '@vue/runtime-core'

export default {
  props: {
    bug: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
    //   lastUpdated: computed(() => {
    //     const d = new Date(props.bug.updatedAt)
    //     return new Intl.DateTimeFormat('en-US').format(d)
    //   })
    }
  }
}
</script>

<style lang="scss" scoped>

.rounded-pill{
  max-height: 30px;
}

.border-left{
  border-width: 10px !important;
}
.bug:hover{
  transform: scale(1.025);
}
</style>
