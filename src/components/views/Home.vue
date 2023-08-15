<template>
    <div class="app">
        <h1>The Quiz</h1>
        <div class="quizContent"  v-if="!resultShow">
            <div class="question">
                <h3>{{ contentQuizApp?.question }}</h3>
                <span>score {{score}}/{{ userScore }}</span>
            </div>
            <label class="quizanswers" v-for="(option,index) in contentQuizApp?.responses"
                :class="contentQuizApp.selected == index ? 
                contentQuizApp.answer == contentQuizApp.selected ? 'style_correct' : 'style_wrong'
                : '' "
            >
                <input 
                    type="radio" 
                    :name="contentQuizApp?.question"
                    :value="index"
                    :disabled="contentQuizApp.selected != -1"
                    @click="stylebutton"
                >
                {{ option }}
            </label>
            <button :disabled="contentQuizApp?.selected == -1" @click="nextQuestion">
               {{ contentQuizApp?.index == userScore -1 ? 'FINNISH' : contentQuizApp?.selected == -1 ? 'SELECT AN OPTION' : 'NEXT QUESTION'}}
            
            </button>
        </div>
        <section class="styleresult" v-if="resultShow">
            <h1>Vous avez obtenus un score de {{ score }} / {{ userScore }}</h1>
        </section>
    </div>
</template>

<script setup lang="ts">
import type typeContentQuiz from '@/types';
import fctQuizApp from '../quizApp';
import {onMounted} from 'vue'

const {
    contentQuiz,
    getRandomArbitrary,
    contentQuizApp,
    values,
    userScore,
    resultShow,
    stylebutton,
    score,
    nextQuestion,
} = fctQuizApp();

onMounted(() => {
    userScore.value = contentQuiz.value.length; 
    contentQuizApp.value = contentQuiz.value[values.value];
    contentQuizApp.value.index = values.value
    values.value = 0;
});
</script>


<style scoped>

.styleresult{
    display: flex;
    align-items: center;
    margin-top: 40px;
}
h1{
    color: #fff;
}

.quizanswers input{
    display:none ;
}
.style_wrong{
    background-color: #ff5a5f;
}
.style_correct{
    background-color: #2cce7d;
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
    background-color: none;
    color:  #fff;
    
}
.quizanswers{
    margin-top: 10px;
    align-items: center;
    cursor: pointer ;
    padding: 15px;
    border-radius: 4px;
    display: flex;
    color: #fff;
    font-size: 17px;
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