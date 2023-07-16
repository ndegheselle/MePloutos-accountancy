<script>
    import {categoriesMap} from "@lib/store";
    export let categoryId = null;
    export let selected = false;
</script>

<span class="category-icon" style="background-color: {$categoriesMap.get(categoryId)?.color};">
    {#if selected}
        <i class="fa-solid fa-check has-text-dark"></i>
    {/if}
</span>

<style>
.category-icon {
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
}
</style>