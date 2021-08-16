<template>
  <div class="details container-fluid">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <BugDetailsCard :bug="bug" />
      </div>
      <div class="col-2"></div>
    </div>
    <!-- <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <NotesForm />
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6" v-for="n in notes" :key="n.id">
        <NotesCard :note="n" />
      </div>
      <div class="col-3"></div>
    </div> -->
  </div>
</template>

<script>
import { onMounted, computed } from '@vue/runtime-core'
import Pop from '../utils/Notifier'
import { AppState } from '../AppState'
import { bugsService } from '../services/BugsService'
import { useRoute } from 'vue-router'

export default {
  name: 'BugDetails',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        await bugsService.getActiveBug(route.params.id)
        await bugsService.getAllActiveNotes(route.params.id)
      } catch (error) {
        Pop.toast(error)
      }
    })
    return {
      bug: computed(() => AppState.activeBug),
      notes: computed(() => AppState.activeNotes)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
