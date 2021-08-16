<template>
  <div class="car m-2 bg-light shadow border-left border-success">
    <div class="p-3">
      <div class="text-left">
        <router-link :to="{name: 'BugDetails', params: {id: bug.id}}">
          <p><b>{{ bug.title }}</b></p>
        </router-link>
        <p><em>{{ bug.description }}</em></p>
      </div>
      <div class="text-right">
        <p>Updated on: {{ lastUpdated }}</p>
        <p><em> {{ bug.creator.name }} </em> |<img class="rounded-pill ml-2" :src="bug.creator.picture" alt=""></p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'

export default {
  props: {
    bug: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      lastUpdated: computed(() => {
        const d = new Date(props.bug.updatedAt)
        return new Intl.DateTimeFormat('en-US').format(d)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.rounded-pill{
  max-height: 30px;
}

.border-left{
  border-width: 5px !important;
}
</style>
