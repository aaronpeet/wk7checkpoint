<template>
  <div class="details container-fluid">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-md-8">
        <BugDetailsCard v-if="bug.id" :bug="bug" />
      </div>
      <div class="col-2"></div>
    </div>
    <div v-if="!bug.closed" class="row">
      <div class="col-3"></div>
      <div v-if="user.isAuthenticated" class="col-md-6">
        <h4 class="text-center">
          Add a Note:
        </h4>
        <NotesForm />
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6">
        <NoteCard v-for="n in notes" :key="n.id" :notes="n" />
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from '@vue/runtime-core'
import Pop from '../utils/Notifier'
import { AppState } from '../AppState'
import { bugsService } from '../services/BugsService'
import { useRoute } from 'vue-router'
import { notesService } from '../services/NotesService'

export default {
  name: 'BugDetails',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        await bugsService.getActiveBug(route.params.id)
        await notesService.getAllActiveNotes(route.params.id)
      } catch (error) {
        Pop.toast(error)
      }
    })
    return {
      bug: computed(() => AppState.activeBug),
      notes: computed(() => AppState.activeNotes),
      user: computed(() => AppState.user)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
