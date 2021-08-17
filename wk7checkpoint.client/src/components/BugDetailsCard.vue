<template>
  <div v-if="bug.closed" class="bug m-2 bg-light shadow border-left border-danger">
    <div class="p-3">
      <div class="text-left">
        <p><b>{{ bug.title }}</b></p>
        <p><em>{{ bug.description }}</em></p>
      </div>
      <div class="text-right">
        <p>Updated on: {{ lastUpdated }}</p>
        <p><em> {{ bug.creator?.name }} </em> |<img class="rounded-pill ml-2" :src="bug.creator?.picture" alt=""></p>
      </div>
    </div>
  </div>
  <div v-else class="bug m-2 bg-light shadow border-left border-success">
    <div class="p-3">
      <div class="text-left">
        <p><b>{{ bug.title }}</b></p>
        <p><em>{{ bug.description }}</em></p>
      </div>
      <div class="text-right">
        <button v-if="user.isAuthenticated && bug.creatorId === account.id" class="btn btn-danger mb-5" @click="closeBug">
          Close Bug
        </button>
        <p>Updated on: {{ lastUpdated }}</p>
        <p><em> {{ bug.creator?.name }} </em> |<img class="rounded-pill ml-2" :src="bug.creator?.picture" alt=""></p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import Pop from '../utils/Notifier'
import { bugsService } from '../services/BugsService'
import { AppState } from '../AppState'

export default {
  props: {
    bug: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      updatedBug: computed(() => AppState.activeBug),
      lastUpdated: computed(() => {
        const d = new Date(props.bug.updatedAt)
        return new Intl.DateTimeFormat('en-US').format(d)
      }),
      async closeBug() {
        try {
          await bugsService.closeBug(props.bug.id)
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

.border-left{
  border-width: 10px !important;
}

</style>
