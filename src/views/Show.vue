<template>
    <div>
        <h1>Show Word</h1>
            <div class="ui labeled input fluid">
                <div class = "ui label">
                    <i class="united kingdom flag"></i>
                    English
                </div>
                <input type="text":value="word.english" readonly/>
            </div>
            <br/>
            <div class="ui labeled input fluid">
                <div class = "ui label">
                    <i class="de flag"></i>
                    German
                </div>
                <input type="text":value="word.german" readonly/>
            </div>
            <br/>
            <div>
                <router-link :to="{ name: 'Edit', params: { id:this.$route.params.id}}"
                    class="ui yellow button">Edit</router-link>
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

<style>

</style>