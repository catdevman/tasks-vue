<template>
  <div>
    <!-- heading -->
    <header>
        <h1>Tasks</h1>
    </header>
    <div class="new-task-form">
        <TaskForm />
    </div>
    <!-- filters -->
    <nav class="filter">
        <button @click="filter = 'all'">All tasks</button>
        <button @click="filter = 'favorites'">Favorites</button>
        <button @click="filter = 'completed'">Completed</button>
    </nav>
    
    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>{{taskStore.uncompletedCount}} tasks to do</p>
      <div v-for="task in taskStore.sorted" :key="task.id">
          <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favorites'">
      <p>{{taskStore.favoritesCount}} favorited tasks to do</p>
      <div v-for="task in taskStore.favorites" :key="task.id">
          <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'completed'">
      <p>{{taskStore.completedCount}} completed tasks</p>
      <div v-for="task in taskStore.completed" :key="task.id">
          <TaskDetails :task="task" />
      </div>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue';
  import TaskDetails from './components/TaskDetails.vue';
  import TaskForm from './components/TaskForm.vue';
  import { useTaskStore } from './stores/TaskStore';
  export default {
    components: { TaskDetails, TaskForm },
    setup(){
      const taskStore = useTaskStore()
      const filter = ref('all')
      return { taskStore, filter }
    }
  }
</script>
