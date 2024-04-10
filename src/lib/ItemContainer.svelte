<script lang="ts">
    export let questionNumber:number
</script>

<div class="flex gap-3 justify-center flex-wrap px-5">
    {#each {length: 10} as _, index }
        <div class={`${questionNumber >= index + 1? 'bg-linearColor' : 'bg-lightViolet'} rounded-full size-10 text-lightGray flex items-center justify-center`}>   
            {index+1}
        </div>
    {/each}
</div>
