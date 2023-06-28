import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
      tasks: [
        {
          id: 1, title: 'Task1', isFavorite: true, completed: false
        },
        {
          id: 2, title: 'Task 2', isFavorite: false, completed: false
        }
      ]
  }),
  getters: {
    favorites() {
      return this.tasks.filter(e => e.isFavorite)
    }
  }
})
