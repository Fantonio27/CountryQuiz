<script lang="ts">
    import Dropdown from "./Dropdown.svelte";
    import { type QuizInfo } from "../utils/type";

    let quizInfo: QuizInfo = {
        category: '',
        difficulty: '',
        type: '',
    }

    export let startEvent: (info: QuizInfo) => void;

</script>

<div class="bg-[#343964] w-11/12 rounded-lg p-10 sm:w-[30rem] relative">
    <h2 class="text-lightGray text-3xl text-center mb-5">Quiz Game</h2>
    <div class=" space-y-3">
        <Dropdown field="category" bind:value={quizInfo.category}/>
        <Dropdown field="difficulty" bind:value={quizInfo.difficulty}/>
        <Dropdown field="type" bind:value={quizInfo.type}/>
    </div>

    <button class=" bg-linearColor text-white rounded-lg w-full py-3 mt-8" on:click={()=>startEvent(quizInfo)} >Start the Game</button>
</div>