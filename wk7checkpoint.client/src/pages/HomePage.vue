<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6 p-0">
        <BugForm />
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row">
      <div class="col-md-6" v-for="b in bugs" :key="b.id">
        <BugCard :bugs="b" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from '@vue/runtime-core'
import Pop from '../utils/Notifier'
import { AppState } from '../AppState'
import { bugsService } from '../services/BugsService'

export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await bugsService.getAllBugs()
      } catch (error) {
        Pop.toast(error)
      }
    })
    return {
      bugs: computed(() => AppState.bugs)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
}
</style>
