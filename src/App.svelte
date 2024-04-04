<script lang="ts">
  import type { ComponentProps, SvelteComponent } from "svelte";

  import QuestionContainer from "./lib/QuestionContainer.svelte";
  import Congrats from './lib/Congrats.svelte';

  let qNo:number = 10;
  let component: ComponentProps<SvelteComponent>;

  $: qNo < 10? component = QuestionContainer : component = Congrats

</script>

<main class="h-screen flex items-center justify-center">
  <svelte:component this={component} {qNo}/>
</main>

<style scoped>
  main{
    background-image: url("./assets/bg.jpg");
    background-size: cover;
    background-attachment: fixed;
  }
</style>
