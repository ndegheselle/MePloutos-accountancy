<script>
    export let onlyIcon = false;
    export let category;
</script>

{#if category }
<span class="icon-text">
    <span class="icon">
        {#if category.icon}
            <i class={category.icon} style="color: {category.color}" />
        {:else if category.color}
            <span
                class="category-color"
                style="background-color: {category.color}"
            />
        {/if}
    </span>
    {#if !onlyIcon}
        {category.name}
    {/if}
</span>
{/if}
<style>
    .category-color {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
    }
</style>
