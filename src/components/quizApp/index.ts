import type typeContentQuiz from '@/types';
import {ref} from 'vue';
export default function fctQuizApp() {

    const contentQuiz = ref<typeContentQuiz[]>([
        {
            id:0,
            answer:0,
            question:'What your name',
            responses:['teguera','kone','ouattara'],
            selected:false
        },
        {
            id:1,
            answer:0,
            question:'What do you like',
            responses:['teguera','kone','ouattara'],
            selected:false
        },
        {
            id:3,
            answer:1,
            question:'What your username',
            responses:['teguera','kone','ouattara'],
            selected:false
        },
    ]);

    const getRandomArbitrary = (min:number, max:number) =>{
            return Math.round(Math.random() * (max - min) + min);
    }

    


    return {
        contentQuiz,
        getRandomArbitrary,
    }
}