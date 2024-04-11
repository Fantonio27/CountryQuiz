<script lang="ts">
    import Congrats  from "../assets/congrats.svg"

    export let score : number;
    export let resetEvent: (index:number)=>void;
</script>

<div class="bg-[#343964] w-11/12 sm:w-[30rem] rounded-xl pt-5 pb-16 text-lightGray p-7">
    <img src={Congrats} alt="congrats.svg" class=" object-contain w-full"/>
    <h1 class=" text-2xl text-center my-4">Congrats! You completed <br/>the quiz.</h1>
    <p class=" text-center">You answer {score}/10 correctly</p>
    <div class="flex gap-3 justify-center items-center mt-10 mb-2">
        <button class="flex-1 bg-linearColor py-4 rounded-lg m-auto block text-white cursor-pointer" on:click={()=>resetEvent(1)}>Play again</button>
        <button class="flex-1 bg-linearColor py-4 rounded-lg m-auto block text-white cursor-pointer" on:click={()=>resetEvent(0)}>Back to Main</button>
    </div>
  
</div>


