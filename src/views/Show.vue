<template>
    <div>
    <!-- Word details section -->
    <div class="word-details-container">
    <h2 class="section-title">Word Details</h2>

    <!-- English field -->
    <div class="ui labeled input fluid">
        <div class="ui label">
        <i class="united kingdom flag"></i> English
        </div>
        <input type="text" :value="word.english" readonly />
    </div>
    <br />

    <!-- German field -->
    <div class="ui labeled input fluid">
        <div class="ui label">
        <i class="de flag"></i> German
        </div>
        <input type="text" :value="word.german" readonly />
    </div>
    <br />

    <!-- Modify button -->
    <div class="modify-button-container">
        <router-link
        :to="{ name: 'Edit', params: { id: $route.params.id } }"
        class="ui button yellow"
        >
        Modify
        </router-link>
    </div>
    </div>
</div>
</template>

<script>
import { ViewVocabById } from '@/helpers/api';

export default {
    name: "Show",
    data () {
        return {
            word: {
                english: '',
                german: ''
            }
        };
    },
    async mounted() {
        this.word = await ViewVocabById(this.$route.params.id)
    }
};

</script>

<style scoped>
/* Styling for word details container */
.word-details-container {
max-width: 500px;
margin: 50px auto;
background-color: #f9f9f9;
padding: 20px;
border-radius: 8px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.section-title {
font-size: 22px;
font-weight: bold;
color: #333;
margin-bottom: 20px;
}

/* Label and input field styling */
.ui.labeled.input {
width: 100%;
margin-bottom: 15px;
}

.ui.label {
background-color: #007bff;
color: #fff;
}

input[readonly] {
background-color: #f1f1f1;
color: #333;
}

/* Modify button container */
.modify-button-container {
text-align: center;
}

.ui.button.yellow {
background-color: #f0ad4e;
color: white;
font-weight: bold;
padding: 10px 20px;
}

.ui.button.yellow:hover {
background-color: #ec971f;
}
</style>