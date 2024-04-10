<script lang="ts">
    import ItemContainer from './ItemContainer.svelte'
    import ChoicesContainer from './ChoicesContainer.svelte'  
    import { type Questions } from '../type';

    export let no : number;
    export let form : Questions;
    export let addEvent: ()=> void;

    $: choices = [...form.incorrect_answers, form.correct_answer]

</script>

<div class="bg-[#343964] w-11/12 rounded-lg pt-9 pb-16 lg:w-[50rem]">
  <h4 class=" font-bold text-[#8B8EAB] text-center text-[0.875rem]">
    Country Quiz
  </h4>

  <div class="mt-3 mb-8">
    <ItemContainer questionNumber={no} />
  </div>

  <div class=" w-10/12 m-auto md:w-8/12">
    <h1 class={`text-lightGray text-center text-xl font-medium mb-8`}>
      {form.question}
    </h1>

    <ChoicesContainer choices={choices} correct_ans={form.correct_answer} on:click={addEvent}/>
  </div>
</div>
