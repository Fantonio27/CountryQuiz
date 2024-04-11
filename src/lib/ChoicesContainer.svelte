<script lang="ts">
  import { createEventDispatcher } from "svelte";
    import correctSVG from "../assets/Check_round_fill.svg";
    import wrongSVG from "../assets/Close_round_fill.svg";

    export let choices: string[];
    export let correct_ans : string;

    const dispatch = createEventDispatcher()
    let show:number;

    $: (function(){
        show = 0;
        correct_ans = correct_ans
    })()

    const Scoring = (choice : string, i:number) => {
        const correct = correct_ans == choice;
        
        dispatch('click', {
            user_answer : correct
        })
        show = i
    }

    $: random =  choices.length == 1? ['True', 'False'] : [...choices, correct_ans ].sort(()=> Math.random() - 0.5);

</script>

<div class="grid grid-cols-1 gap-y-5 justify-items-center md:grid-cols-2">
    {#each random as choice, index}
        <button 
            class={`${show == index+1? 'bg-linearColor ': 'bg-lightViolet'} py-5 w-full text-center text-lightGray rounded-xl font-medium cursor-pointer flex justify-center gap-2 items-center
            hover:bg-linearColor md:w-60`}
            on:click={()=> Scoring(choice, index+1)}
            disabled={Boolean(show)}
        >{@html choice} {#if show}<img src={choice == correct_ans? correctSVG: wrongSVG} alt="icon" class="">{/if}</button>
    {/each}
</div>

