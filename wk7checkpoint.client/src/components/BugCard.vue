<template>
  <div class="car m-2 bg-light shadow">
    <router-link :to="{name: 'BugDetails', params: {id: bug.id}}">
      <div class="p-3">
        <div class="text-center">
          <p><b>{{ bug.title }}</b></p>
          <p><em>{{ bug.description }}</em></p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    bug: {
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
</style>
