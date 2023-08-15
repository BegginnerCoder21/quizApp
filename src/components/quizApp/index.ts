import type typeContentQuiz from '@/types';
import {ref,onMounted,computed} from 'vue'

export default function fctQuizApp() {
    const contentQuizApp = ref(); 
    const values = ref<number>(0);
    const userScore = ref<number>(0)
    const resultShow = ref<boolean>(false)
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

    const stylebutton = (e:Event) => {
        contentQuizApp.value.selected = e.target?.value;
        
    }

    const score = computed(() => {
        let val = 0;
        contentQuiz.value.map((q:typeContentQuiz) => {
            if(q.answer == q.selected){
                val ++;
            }
        })
        return val;
    });
    
    const nextQuestion = () => {
        if(values.value == 2){
            is_End()
            return ;
        }else{
            values.value++;
            contentQuizApp.value.index = values.value
            contentQuizApp.value = contentQuiz.value[values.value];
        }
    }
    
    const is_End  = () => {
        resultShow.value = true
    }
    


    return {
        contentQuiz,
        getRandomArbitrary,
        contentQuizApp,
        values,
        userScore,
        resultShow,
        stylebutton,
        score,
        nextQuestion,
    }
}