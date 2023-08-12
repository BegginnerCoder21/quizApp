<template>
    <div class="app">
        <h1>The Quiz</h1>
        <div class="quizContent">
            <div class="question">
                <h3>What is vue?</h3>
                <span>score 1/3</span>
            </div>
            <div class="quizanswers">
                fdjslsjdkfsqjkdjfsl
            </div>
            <div class="quizanswers">
                fdjslsjdkfsqjkdjfsl
            </div>
            <div class="quizanswers">
                fdjslsjdkfsqjkdjfsl
            </div>
            <button v-if="isSeleted" :disabled="isSeleted">SELECT AN OPTION</button>
            <button v-if="!isSeleted">NEXT QUESTION</button>
            <button v-if="!isSeleted">FINISH</button>
        </div>
    </div>
</template>

<script setup lang="ts">

import {ref} from 'vue'
import fctQuiz
const isSeleted = ref<boolean>(true)

const {
    contentQuiz
} = fctQuizApp()
</script>

<style scoped>
h1{
    color: #fff;
}

button{
    padding: 7px 20px;
    display: flex;
    justify-content: start;
    background-color: green;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 7px;
}

.app{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    flex-direction: column;
}

.question{
    display: flex;
    justify-content: space-between;
    width: 500px;
    flex-direction: row;
    background-color: #313131;
}

h3{
    background-color: #313131;
    color: #71717a;
}

span{
    background-color: #313131;
    color:  #fff;
}
.quizanswers{
    height: 50px;
    width: 500px;
    margin-top: 10px;
    background-color: #252222;
    align-items: center;
    cursor: pointer ;
    padding: 10px;
    border-radius: 4px;
    display: flex;
    color: #fff;
    font-size: 12px;
}
.quizContent{
    border-radius: 2px;
    padding: 10px;
    height: 260px;
    width: auto;
    background-color: #313131;
    margin-top: 20px;
}
</style>