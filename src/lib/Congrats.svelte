<script lang="ts">
    import Congrats  from "../assets/congrats.svg"

    export let score : number;
    export let resetEvent : ()=> void;
</script>

<div class="bg-[#343964] w-[21%] rounded-xl pt-5 pb-16 text-lightGray p-7">
    <img src={Congrats} alt="congrats.svg" class=" object-contain w-full"/>
    <h1 class=" text-2xl text-center my-4">Congrats! You completed <br/>the quiz.</h1>
    <p class=" text-center">You answer {score}/10 correctly</p>
    <button class="bg-linearColor px-20 py-4 rounded-xl m-auto block text-white mt-10 cursor-pointer" on:click={resetEvent}>Play again</button>
</div>


