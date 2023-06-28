<template>
    <div class="task">
        <h3 :class="{ completed: task.completed}">{{ task.title }}</h3>
        <div class="icons">
            <i @click="taskStore.deleteTask(task.id)" class="material-icons">delete</i>
            <i @click="taskStore.toggleFavorite(task.id)" class="material-icons" :class="{favorite: task.isFavorite}">favorite</i>
            <i @click="taskStore.toggleCompleted(task.id)" class="material-icons" :class="{completed: task.completed}">done</i>
        </div>
    </div>
</template>

<script>
  import { useTaskStore } from '../stores/TaskStore';
  export default {
      props: ['task'],
      setup() {
          const taskStore = useTaskStore();

          return { taskStore };
      }
  }
</script>
