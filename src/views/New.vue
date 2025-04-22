<template>
    <div>
      <h1>Add new Word</h1>
      <form @submit.prevent="createOrUpdate">
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
            <i class="de flag"></i>
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
  import { AddNewVocab } from "../helpers/api";
  
  export default {
    name: "New",
    data() {
      return {
        word: {
          english: '',
          german: ''
        },
      };
    },
    methods: {
        createOrUpdate: async function () {
        const response = await AddNewVocab(this.word);
        alert("Word created successfully!");
        this.$router.push("/");
      }
    }
  };
  </script>