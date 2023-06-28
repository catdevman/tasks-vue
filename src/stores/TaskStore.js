import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
      tasks: []
  }),
  getters: {
    sorted(){
        return this.tasks.sort((a,b) => {
            console.log(a, b);
            if(a.completed && !b.completed){
                return 1;
            }
            if(!a.completed && b.completed){
                return -1;
            }
            if(a.isFavorite && !b.isFavorite){
                return -1;
            }
            if(!a.isFavorite && b.isFavorite){
                return 1;
            }
            return 0;
        })
    },
    favorites() {
      return this.tasks.filter(e => {return e.isFavorite && !e.completed});
    },
    favoritesCount() {
        return this.tasks.reduce((acc, curr) => {
          return (curr.isFavorite && !curr.completed) ? acc + 1 : acc;
        }, 0);
    },
    completedCount() {
        return this.tasks.reduce((acc, curr) => {
          return curr.completed ? acc + 1 : acc;
        }, 0);
    },
    totalCount(){
      return this.tasks.length;
    },
    uncompletedCount(){
      return this.tasks.reduce((acc, curr) => {
          return !curr.completed ? acc + 1 : acc
      }, 0);
    },
    completed(){
      return this.tasks.filter(e => e.completed);
    }
  },
  actions: {
    addTask(task){
      this.tasks.push(task)
    },
    deleteTask(id){
      this.tasks = this.tasks.filter(e => {
          return e.id !== id
      });
    },
    toggleFavorite(id){
        const task = this.tasks.find(e => e.id === id)
        task.isFavorite = !task.isFavorite
    },
    toggleCompleted(id){
        const task = this.tasks.find(e => e.id === id)
        task.completed = !task.completed
    }
  },
    persist: true
})
