<template>
  <div class="bug-form card shadow p-2 m-2">
    <form class="d-flex" @submit.prevent="createBug">
      <div class="form-group mr-5">
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          v-model="state.newBug.title"
          class="form-control"
          placeholder="Title..."
          required
        />
      </div>
      <div class="form-group ml-5">
        <label for="description">Description</label>
        <textarea
          type="text"
          name="description"
          v-model="state.newBug.description"
          class="form-control"
          placeholder="Description"
          required
          maxlength="240"
        />
      </div>
      <div class="d-flex align-items-center ml-5">
        <button type="submit" class="btn btn-outline-success">
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { bugsService } from '../services/BugsService'
import { useRouter } from 'vue-router'
import Pop from '../utils/Notifier'
export default {
  setup() {
    const router = useRouter()
    const state = reactive({
      newBug: {}
    })
    return {
      state,
      async createBug() {
        try {
          const newId = await bugsService.createBug(state.newBug)
          state.newBug = {}
          router.push({ name: 'BugDetails', params: { id: newId } })
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
