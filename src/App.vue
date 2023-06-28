<template>
  <div>
    <!-- heading -->
    <header>
        <h1>Tasks</h1>
    </header>
    
    <!-- task list -->
    <div class="task-list">
      <div v-for="task in taskStore.tasks" :key="task.id">
          <TaskDetails :task="task" />
      </div>
    </div>
  </div>
</template>
<script>
  import TaskDetails from './components/TaskDetails.vue'
  import { useTaskStore } from './stores/TaskStore'
  export default {
    components: { TaskDetails },
    setup(){
      const taskStore = useTaskStore()
      return { taskStore }
    }
  }
</script>
