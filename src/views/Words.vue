<template>
    <div>
    <!-- Vocabulary List Section -->
    <div class="vocab-list-container">
        <h2 class="list-title">Vocabulary List</h2>
        <table class="vocab-table">
        <thead>
            <tr>
            <th>English</th>
            <th>German</th>
            <th colspan="3">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(word, i) in words" :key="i">
            <td>{{ word.english }}</td>
            <td>{{ word.german }}</td>
            <td>
                <router-link
                class="ui primary button action-btn"
                :to="{ name: 'Show', params: { id: word._id } }"
                >View</router-link
                >
            </td>
            <td>
                <router-link
                class="ui yellow button action-btn"
                :to="{ name: 'Edit', params: { id: word._id } }"
                >Modify</router-link
                >
            </td>
            <td>
                <a
                class="ui red button action-btn"
                @click.prevent="onDelete(word._id)"
                >Remove</a
                >
            </td>
            </tr>
        </tbody>
        </table>
    </div>
    </div>
</template>

<script>
import {  ViewALLVocabs, DeleteVocab, DeleteAll } from '@/helpers/api.js';

export default {
    name: 'Words',
    data() {
        return {
            words: [],
        };
    },
    async mounted() {
        this.words = await ViewALLVocabs();
    },
    methods: {
        async onDelete(id) {
            const deleteConfirm = window.confirm(
                "Are you sure to delete this word ?"
            );
            if (deleteConfirm) {
                await DeleteVocab(id);
                const updateWords = this.words.filter((word) => word._id !== id)
                this.words = updateWords;
                this.flash("Remove word succeed!")
            }
        },
    }
};
</script>

<style scoped>
/* General styling */
body {
font-family: 'Arial', sans-serif;
background-color: #fafafa;
}

/* Vocabulary List container */
.vocab-list-container {
margin: 40px auto;
max-width: 1000px;
padding: 20px;
background-color: #fff;
border-radius: 8px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.list-title {
font-size: 24px;
font-weight: bold;
margin-bottom: 20px;
color: #333;
}

/* Table styling */
.vocab-table {
width: 100%;
border-collapse: collapse;
margin-bottom: 20px;
}

.vocab-table th,
.vocab-table td {
text-align: left;
padding: 12px;
border-bottom: 1px solid #ddd;
}

.vocab-table th {
background-color: #f4f4f4;
font-size: 16px;
font-weight: bold;
}

.vocab-table tr:hover {
background-color: #f1f1f1;
}

/* Action buttons styling */
.action-btn {
text-decoration: none;
font-weight: bold;
border-radius: 4px;
}

.ui.button {
padding: 8px 16px;
font-size: 14px;
}

.ui.primary.button {
background-color: #4CAF50;
color: white;
}

.ui.yellow.button {
background-color: #FFEB3B;
color: black;
}

.ui.red.button {
background-color: #F44336;
color: white;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
.vocab-list-container {
padding: 15px;
}

.vocab-table th,
.vocab-table td {
font-size: 14px;
padding: 8px;
}

.ui.button {
font-size: 12px;
}
}
</style>