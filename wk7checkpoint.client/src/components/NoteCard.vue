<template>
  <div class="note m-2 bg-light shadow">
    <div class="p-3">
      <div class="text-left">
        <p><em>{{ notes.body }}</em></p>
      </div>
      <button v-if="account.id === notes.creatorId && user.isAuthenticated" class="btn btn-danger mt-5" @click="deleteNote">
        Delete
      </button>
      <div class="text-right">
        <p><em> {{ notes.creator?.name }} </em> |<img class="rounded-pill ml-2" :src="notes.creator?.picture" alt=""></p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { notesService } from '../services/NotesService'
import Pop from '../utils/Notifier'
import { AppState } from '../AppState'

export default {

  props: {
    notes: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    return {
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      async deleteNote() {
        try {
          if (await Pop.confirm()) {
            await notesService.deleteNote(props.notes.id)
          }
        } catch (error) {
          Pop.toast(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.rounded-pill{
  max-height: 30px;
}

</style>
