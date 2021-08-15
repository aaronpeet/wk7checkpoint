import { reactive } from 'vue'
const bug1 = {
  title: 'This is a Test bug',
  description: 'Whenever this bug pops up, its just a test. No need to fret, its just a test!',
  closed: false,
  closedDate: '06-07-1988',
  creatorId: '610f028e88f88ae7eb156823'
}
// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  bugs: [bug1, bug1, bug1, bug1, bug1, bug1, bug1, bug1],
  activeBug: {},
  notes: []
})
