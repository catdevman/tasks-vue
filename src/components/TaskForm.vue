<template>
  <form @submit.prevent="handleSubmit">
      <input
        type="text"
        placeholder="I need to..."
        v-model="newTask"
        >
  </form>
</template>

<script>
  import { ref } from 'vue';
  import { useTaskStore } from '../stores/TaskStore';
  import { v4 as uuidv4 } from 'uuid';
  export default {
    setup(){
        const taskStore = useTaskStore();
        const newTask = ref('')
        const handleSubmit = () => {
            if (newTask.value.length > 0){
                taskStore.addTask({
                  title: newTask.value,
                  isFavorite: false,
                  id: uuidv4()
                });
                newTask.value = "";
            }
        }
        return {handleSubmit, newTask}
    }
  }
</script>
