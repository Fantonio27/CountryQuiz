<script lang="ts">
  import { createEventDispatcher } from "svelte";

    export let choices: string[];
    export let correct_ans : string;

    const dispatch = createEventDispatcher()

    const Scoring = (choice : string) => {
        const correct = correct_ans == choice;
        
        dispatch('click', {
            user_answer : correct
        })
    }

</script>

<div class="grid grid-cols-1 gap-y-5 justify-items-center md:grid-cols-2">
    {#each [...choices, correct_ans ] as choice, index}
        <button 
            class="bg-lightViolet py-5 w-full text-center text-lightGray rounded-xl font-medium cursor-pointer hover:bg-linearColor md:w-60"
            on:click={()=> Scoring(choice)}
        >{choice}</button>
    {/each}
</div>
