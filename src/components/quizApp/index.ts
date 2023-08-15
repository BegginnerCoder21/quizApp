import type typeContentQuiz from '@/types';
import {ref} from 'vue';
export default function fctQuizApp() {

    const contentQuiz = ref<typeContentQuiz[]>([
        {
            id:0,
            answer:0,
            question:'What your name ?',
            responses:['teguera','kone','ouattara'],
            // comme je dois obligatoirement mettre une valeur j'ai choisir ce que je suis sur qu'il ne sera pas utiliser dans le quiz
            selected:-1,
        },
        {
            id:1,
            answer:0,
            question:'What do you like ?',
            responses:['manga','programation','animé'],
            selected:-1
        },
        {
            id:2,
            answer:1,
            question:'What your username ?',
            responses:['abou','prince','mohamed'],
            selected:-1
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