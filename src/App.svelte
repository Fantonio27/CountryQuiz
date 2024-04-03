<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import ItemContainer from './lib/ItemContainer.svelte'
  import ChoicesContainer from './lib/ChoicesContainer.svelte'
</script>

<main class="h-screen flex items-center justify-center">
  <div class="bg-[#343964] w-5/12 rounded-lg pt-9 pb-16">
    <h4 class=" font-bold text-[#8B8EAB] text-center text-[0.875rem]">Country Quiz</h4>

    <div class="mt-3 mb-8">
      <ItemContainer/>
    </div>  

    <div class=" w-8/12 m-auto">
      <h1 class="text-lightGray text-center text-xl font-medium mb-8">Which country is Kuala Lumpur the <br/> capital?</h1>

      <ChoicesContainer />
    </div>

  </div>
</main>

<style scoped>
  main{
    background-image: url("./assets/bg.jpg");
    background-size: cover;
    background-attachment: fixed;
  }
</style>
