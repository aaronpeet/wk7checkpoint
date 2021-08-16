<template>
  <div class="note-form card shadow p-2 m-2 ">
    <form class="d-flex" @submit.prevent="createNote">
      <div class="form-group ml-5">
        <label for="description">Description</label>
        <textarea
          type="text"
          name="description"
          v-model="state.newNote.body"
          class="form-control"
          placeholder="Description"
          required
          maxlength="240"
        />
      </div>
      <div class="d-flex align-items-center ml-5">
        <button type="submit" class="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { notesService } from '../services/NotesService'
import Pop from '../utils/Notifier'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      newNote: {
        body: '',
        bugId: route.params.id
      }
    })

    return {
      state,
      async createNote() {
        try {
          await notesService.createNote(state.newNote)
          state.newNote = {}
        } catch (error) {
          Pop.toast(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
