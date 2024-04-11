<script lang="ts">
  import {type ComponentProps, type SvelteComponent} from "svelte";
  import QuestionContainer from "./lib/QuestionContainer.svelte";
  import Congrats from './lib/Congrats.svelte';
  import CategoryContainer from './lib/CategoryContainer.svelte'
  import {type QuizInfo} from "./utils/type";

  let qNo:number = 11;
  let score = 0;
  let component: ComponentProps<SvelteComponent>;
  let api:string;
  
  $: qNo == 0? component = CategoryContainer
  : qNo < 11 ? component = QuestionContainer 
  : component = Congrats

  const addScore = (event : CustomEvent) => {
    if(event.detail.user_answer){
      score += 1
    }

    setTimeout(()=>{qNo += 1;},1500)
  }

  const generateAPI = (info: QuizInfo) => {
    const {category, difficulty, type} = info;

    api = `https://opentdb.com/api.php?amount=10${category && '&category='+category}${difficulty && '&difficulty='+difficulty}${type && '&type='+type}`;
    qNo = 1
  }

  const resetAction = (index:number) => {
    qNo = index; 
    score = 0
  }

</script>

<main class="h-screen flex items-center justify-center">
    <svelte:component 
      this={component} 
      qNo= {qNo}
      addEvent={addScore}
      resetEvent={resetAction}
      score={score}
      startEvent={generateAPI}
      api={api}
    />
    <!-- <CategoryContainer startEvent={generateAPI}/> -->
</main>

<style scoped>
  main {
    background-image: url("./assets/bg.jpg");
    background-size: cover;
    background-attachment: fixed;
  }
</style>
