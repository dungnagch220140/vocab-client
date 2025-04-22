<template>
    <div>
        <table class="ui celled table">
            <thead>
                <tr>
                    <th colspan="6">WORD LIST</th>
                </tr>
                <tr>
                    <th>English</th>
                    <th>German</th>
                    <th colspan="4">Menu</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(word, i) in words" :key="i">
                    <td>{{ word.english }}</td>
                    <td>{{ word.german }}</td>
                    <td>
                        <router-link
                            class="ui button green"
                            :to="{name: 'Show', params: { id: word._id}}">Show
                        </router-link>
                    </td>
                    <td>
                        <router-link
                            class="ui button yellow"
                            :to="{name: 'Edit', params: { id: word._id}}">Edit</router-link>
                    </td>
                    <td>
                        <a class="ui button red" @click.prevent="onDelete(word._id)">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {  ViewALLVocabs, DeleteVocab } from '@/helpers/api.js';

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
                this.flash("Delete word succeed!")
            }
        }
    }
};
</script>