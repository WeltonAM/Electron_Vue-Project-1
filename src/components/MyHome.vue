<template>
    <v-container fluid>
        <v-form>
            <v-file-input 
                multiple 
                chips 
                v-model="files" 
                label="Select subtitle"
                append-icon="mdi-send"
                @click:append="processSubtitles"
                />
        </v-form>

        <div class="pills">
            <MyPill v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount" />
        </div>
    </v-container>
</template>

<script>
import { ipcRenderer } from 'electron';
import MyPill from './MyPill.vue';

export default {

    components: { MyPill },

    data: function () {
        return {
            files: [],

            groupedWords: []
        }
    },
    methods: {
        processSubtitles(){
            const paths = this.files.map(f => f.path)

            ipcRenderer.send('process-subtitles', paths)
            ipcRenderer.on('process-subtitles', (e, resp) => {
                this.groupedWords = resp
            })
        }
    }
}
</script>

<style>
    .pills {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>