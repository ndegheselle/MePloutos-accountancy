<script>
    import { categoriesMap } from "@lib/store";
    export let categoryId = null;
    export let selected = false;
    let clazz = "";
    export { clazz as class };
</script>

<span
    class="category-icon {clazz}"
    style="background-color: {$categoriesMap.get(categoryId)?.color};"
>
    {#if selected}
        <i class="fa-solid fa-check has-text-dark" />
    {/if}
</span>

<style>
    .category-icon {
        display: block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
    }

    .category-icon.small-icon {
        width: 0.8rem;
        height: 0.8rem;
    }
</style>
