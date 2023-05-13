<script>
    import { categories } from "@lib/store";
    import CategoryIcon from "@components/CategoryIcon.svelte";

    function select(_category)
    {
        callback(_category);
        show = false;
    }

    let show = false;
    let callback = null;
    export const modal = {
        show() {
            show = true;
            return new Promise(function(resolve, reject) {
                callback = resolve;
            });
        },
    };
</script>

<div
    class="modal"
    class:is-active={show}
    on:closing={() => {
        show = false;
    }}
>
    <div class="modal-background" />
    <div class="modal-content">
        <div class="panel has-background-white">
            <div class="panel-block">
                <span class="has-text-grey-lighter">Select a category</span>
            </div>
            {#each $categories as category}
                <a class="panel-block" on:click={() => {select(category)}}>
                    <span class="panel-icon">
                        <CategoryIcon categoryId={category.id} />
                    </span>
                    {category.name}
                </a>
            {/each}
        </div>
    </div>
    <button class="modal-close is-large" aria-label="close" />
</div>
