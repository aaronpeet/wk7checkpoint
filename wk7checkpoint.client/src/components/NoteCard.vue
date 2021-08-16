<template>
  <div class="note m-2 bg-light shadow">
    <div class="p-3">
      <div class="text-left">
        <p><em>{{ notes.body }}</em></p>
      </div>
      <button class="btn btn-danger mt-5" @click="deleteNote">
        Delete
      </button>
      <div class="text-right">
        <p><em> {{ notes.creator?.name }} </em> |<img class="rounded-pill ml-2" :src="notes.creator?.picture" alt=""></p>
      </div>
    </div>
  </div>
</template>

<script>
import { notesService } from '../services/NotesService'
import Pop from '../utils/Notifier'

export default {

  props: {
    notes: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    return {
      async deleteNote() {
        try {
          await notesService.deleteNote(props.notes.id)
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
