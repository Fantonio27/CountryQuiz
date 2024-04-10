<script lang="ts">
  import { onMount } from "svelte";
  import { type Questions } from "../utils/type";
  import ItemContainer from "./ItemContainer.svelte";
  import ChoicesContainer from "./ChoicesContainer.svelte";
  import ErrorModal from "../lib/ErrorModal.svelte";

  export let qNo: number;
  export let addEvent: () => void;
  export let api: string;

  let fetching: boolean = true;
  let dataform: Questions[] = [];
  let error: string;

  onMount(async () => {
    await FetchData();
  });

  const FetchData = async () => {
    const response = await fetch(api);
    const data = await response.json();

    if (data.response_code == 0) {
      data.results.map((data: Questions) => {
        dataform.push({
          question: data.question,
          correct_answer: data.correct_answer,
          incorrect_answers: data.incorrect_answers,
        });
      });

      setTimeout(() => {
        fetching = false;
      }, 1000);
    } else {
      error =
        data.response_code == 1
          ? "No Results Could not return results. The API doesn't have enough questions for your query."
          : "Rate Limit Too many requests have occurred. Each IP can only access the API once every 5 seconds.";
    }
  };

  
</script>

<div class="bg-[#343964] w-11/12 rounded-lg pt-9 pb-16 lg:w-[50rem]">
  <h4 class=" font-bold text-[#8B8EAB] text-center text-[0.875rem]">
    Quiz Game
  </h4>

  <div class="mt-3 mb-8">
    <ItemContainer questionNumber={qNo} />
  </div>

  {#if error}
    <ErrorModal errorType={error} />
  {:else if fetching}
    <div class="loader m-auto mt-20 mb-10"></div>
    <p class="text-center text-lightGray">Loading</p>
  {:else}
    <div class=" w-10/12 m-auto md:w-8/12">
      <div class={`text-lightGray text-center text-xl font-medium mb-8`}>
        <p>{@html dataform[qNo - 1].question}</p>
      </div>

      <ChoicesContainer
        choices={dataform[qNo - 1].incorrect_answers}
        correct_ans={dataform[qNo - 1].correct_answer}
        on:click={addEvent}
      />
    </div>
  {/if}
</div>

<style>
  .loader {
    --d: 22px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    color: #25b09b;
    box-shadow:
      calc(1 * var(--d)) calc(0 * var(--d)) 0 0,
      calc(0.707 * var(--d)) calc(0.707 * var(--d)) 0 1px,
      calc(0 * var(--d)) calc(1 * var(--d)) 0 2px,
      calc(-0.707 * var(--d)) calc(0.707 * var(--d)) 0 3px,
      calc(-1 * var(--d)) calc(0 * var(--d)) 0 4px,
      calc(-0.707 * var(--d)) calc(-0.707 * var(--d)) 0 5px,
      calc(0 * var(--d)) calc(-1 * var(--d)) 0 6px;
    animation: l27 1s infinite steps(8);
  }
  @keyframes l27 {
    100% {
      transform: rotate(1turn);
    }
  }
</style>
