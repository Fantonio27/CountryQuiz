<script lang="ts">
    import errorImage from "../assets/icons8-error-100.png"

    export let errorType:string;
</script>

<div class="bg-[#343964] rounded-lg text-white text-center">
    <sectio>
        <img src={errorImage} alt="ErrorImage" class="block m-auto"/>
        <p class="w-8/12 m-auto mt-1">{errorType}</p>
    </sectio>

    <button class=" bg-linearColor text-white rounded-lg w-48 py-3 mt-10" on:click={()=>location.reload()} >Try Again</button>
</div>