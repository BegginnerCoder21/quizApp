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
            <button :disabled="contentQuizApp?.selected == -1" v-if="contentQuizApp?.selected == -1">SELECT AN OPTION</button>
            <button v-if="!isEnd && contentQuizApp?.selected != -1 " @click="nextQuestion">NEXT QUESTION</button>
            <button v-if="isEnd  && contentQuizApp?.selected != -1" @click="is_End">FINISH</button>
        </div>
        <section class="styleresult" v-if="resultShow">
            <h1>Vous avez obtenus un score de {{ score }} / {{ userScore }}</h1>
        </section>
    </div>
</template>

<script setup lang="ts">

import {ref,onMounted,computed} from 'vue'
import fctQuizApp from '@/components/quizApp/index'
import type typeContentQuiz from '@/types';
const contentQuizApp = ref(); 
const isEnd = ref<boolean>(false)
const values = ref<number>(0);
const userScore = ref<number>(0)
const resultShow = ref<boolean>(false)


const stylebutton = (e:Event) => {
    contentQuizApp.value.selected = e.target?.value;
    
}
const nextQuestion = () => {
    contentQuizApp.value = contentQuiz.value[values.value];
    values.value++;
    if(values.value == 3){
        isEnd.value = true
    }
}

const is_End  = () => {
    resultShow.value = true
}

const score = computed(() => {
    let val = 0;
    contentQuiz.value.map((q:typeContentQuiz) => {
        if(q.answer == q.selected){
            val ++;
        }
    })
    return val;
})


const {
    contentQuiz,
} = fctQuizApp();

onMounted(() => {
    userScore.value = contentQuiz.value.length; 
    nextQuestion()
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