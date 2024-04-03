<script lang="ts">

</script>

<div class="flex gap-3 justify-center">
    {#each {length: 10} as _, index }
        <div class=" rounded-full w-10 h-10 bg-lightViolet text-lightGray flex items-center justify-center cursor-pointer">   
            {index+1}
        </div>
    {/each}
</div>

<style scoped>

</style>