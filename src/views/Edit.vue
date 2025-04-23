<template>
  <div>
    <h2>Edit Word</h2>
    <!-- Form for editing word -->
    <form @submit.prevent="onSubmit">
      <!-- English word input -->
      <div class="ui form segment">
        <div class="field">
          <label for="english"><i class="united kingdom flag"></i> English</label>
          <input
            type="text"
            id="english"
            required
            v-model="word.english"
            placeholder="Enter the English word"
          />
        </div>
      </div>

      <!-- German word input -->
      <div class="ui form segment">
        <div class="field">
          <label for="german"><i class="de flag"></i> German</label>
          <input
            type="text"
            id="german"
            required
            v-model="word.german"
            placeholder="Enter the German word"
          />
        </div>
      </div>

      <!-- Submit button -->
      <div class="field">
        <button type="submit" class="ui green button">Save Changes</button>
      </div>
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
        alert("Edit word succeed!");
        this.$router.push("/");
      }
    }
  };
  </script>

<style scoped>
/* Custom styles for this layout */
.ui.form.segment {
  padding: 20px;
  border-radius: 8px;
  background-color: #fafafa;
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

.ui.button.green {
  background-color: #32cd32;
  color: white;
  font-weight: bold;
}

.ui.button.green:hover {
  background-color: #28a745;
}

h2 {
  color: #333;
  text-align: center;
  margin-bottom: 30px;
}
</style>