<script lang="ts">
  import {type ComponentProps, type SvelteComponent} from "svelte";
  import QuestionContainer from "./lib/QuestionContainer.svelte";
  import Congrats from './lib/Congrats.svelte';


  let qNo:number = 1;
  let score = 0;
  let component: ComponentProps<SvelteComponent>;

  $: qNo < 10? component = QuestionContainer : component = Congrats

  const addScore = (event : CustomEvent) => {
    if(event.detail.user_answer){
      score += 1
    }
    qNo += 1;
  }

</script>

<main class="h-screen flex items-center justify-center">
  <!-- {#if error }
    <ErrorModal />  -->
  <!-- {:else if fetching}
    <h1>...loading</h1> -->
  <!-- {:else} -->
    <svelte:component 
      this={component} 
      qNo= {qNo}
      addEvent={addScore}
      resetEvent={()=> {qNo = 1; score = 0; }}
      score={score}
    />
  <!-- {/if} -->
  <br/>
</main>

<style scoped>
  main {
    background-image: url("./assets/bg.jpg");
    background-size: cover;
    background-attachment: fixed;
  }
</style>
