<script lang="ts">
  import { createEventDispatcher } from "svelte";

    export let choices:  string[];
    export let correct_ans : string;

    const dispatch = createEventDispatcher()

    const Scoring = (choice : string) => {
        const correct = correct_ans == choice;
        
        dispatch('click', {
            user_answer : correct
        })
    }

</script>

<div class="grid grid-cols-2 gap-y-5 justify-items-center">
    {#each choices as choice, index}
        <button 
            class="bg-lightViolet py-5 w-60 text-center text-lightGray rounded-xl font-medium cursor-pointer hover:bg-linearColor"
            on:click={()=> Scoring(choice)}
        >{choice}</button>
    {/each}
</div>
