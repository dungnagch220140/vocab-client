<template>
  <div>
    <h2>Add a New Word</h2>
    <!-- Form for adding a new word -->
    <form @submit.prevent="createOrUpdate">
      
      <!-- English word input -->
      <div class="ui form segment">
        <div class="field">
          <label for="english"><i class="united kingdom flag"></i> English</label>
          <input type="text" id="english" required v-model="word.english" placeholder="Enter the English word" />
        </div>
      </div>
      
      <!-- German word input -->
      <div class="ui form segment">
        <div class="field">
          <label for="german"><i class="de flag"></i> German</label>
          <input type="text" id="german" required v-model="word.german" placeholder="Enter the German word" />
        </div>
      </div>

      <!-- Submit button -->
      <div class="field">
        <button type="submit" class="ui blue button">Add Word</button>
      </div>
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
        this.$router.push("/words"); // Redirect to the words list page after creation
      }
    }
  };
  </script>

<style scoped>
/* Custom styles for form */
.ui.form.segment {
  padding: 20px;
  border-radius: 8px;
  background-color: #f7f7f7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.ui.label {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.ui.input {
  width: 100%;
}

.ui.button.blue {
  background-color: #4183c4;
  color: white;
  font-weight: bold;
}

.ui.button.blue:hover {
  background-color: #357ab7;
}

h2 {
  color: #333;
  text-align: center;
  margin-bottom: 30px;
}
</style>