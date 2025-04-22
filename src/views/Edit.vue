<template>
    <div>
      <h1>Edit Word</h1>
      <form @submit.prevent="onSubmit">
        <div class="ui labeled input fluid">
          <div class="ui label">
            <i class="united kingdom flag"></i>
            English
          </div>
          <input type="text" required v-model="word.english" />
        </div>
        <br />
        <div class="ui labeled input fluid">
          <div class="ui label">
            <i class="de flag"></i> <!-- sửa từ 'germany' thành 'de' -->
            German
          </div>
          <input type="text" required v-model="word.german" />
        </div>
        <br />
        <button type="submit" class="ui primary button">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ViewVocabById, EditVocab } from '@/helpers/api';
  
  export default {
    name: "Edit",
    data() {
      return {
        word: {
          english: '',
          german: ''
        }
      };
    },
    async mounted() {
      this.word = await ViewVocabById(this.$route.params.id);
    },
    methods: {
      async onSubmit() {
        await EditVocab(this.$route.params.id, this.word);
        alert("Edit word succeed!"); // hoặc this.flash nếu có plugin
        this.$router.push("/");
      }
    }
  };
  </script>