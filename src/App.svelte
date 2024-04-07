<script lang="ts">
  import { onMount, type ComponentProps, type SvelteComponent, afterUpdate } from "svelte";
  import type { Questions } from "./type";
  import QuestionContainer from "./lib/QuestionContainer.svelte";
  import Congrats from './lib/Congrats.svelte';
  import ErrorModal from "./lib/ErrorModal.svelte";

  let qNo:number = 1;
  let fetching: boolean = true;
  let error:boolean = false;
  let questions : Questions[]= [];
  let score = 0;
  let component: ComponentProps<SvelteComponent>;

  $: qNo < 10? component = QuestionContainer : component = Congrats

  onMount(async()=>{
    try{
      await FetchData()
    }catch(err){
      error = true
    }  
  });

  const FetchData = async() => {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=22')
      const data = await response.json()

      data.results.map((data:Questions) => {
          questions.push(
            {
              question: data.question,
              correct_answer: data.correct_answer,
              incorrect_answers: data.incorrect_answers ,
            }
          )
      })

      fetching = false    
  }

  const addScore = (event : CustomEvent) => {
    if(event.detail.user_answer){
      score += 1
    }

    qNo += 1;
  }

</script>

<main class="h-screen flex items-center justify-center">
  {#if error }
    <ErrorModal /> 
  {:else if fetching}
    <h1>...loading</h1>
  {:else}
    <svelte:component 
      this={component} 
      no= {qNo}
      form ={questions[qNo - 1]}
      addEvent={addScore}
      resetEvent={()=> {qNo = 1; score = 0; }}
      score={score}
    />
  {/if}
  <br/>
</main>

<style scoped>
  main {
    background-image: url("./assets/bg.jpg");
    background-size: cover;
    background-attachment: fixed;
  }
</style>
