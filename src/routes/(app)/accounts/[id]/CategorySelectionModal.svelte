<script>
    import { categories } from "@lib/store";
    import { Category } from "@lib/models";
    import { colors } from '@lib/services/colors.js';
    import categoriesService from "@lib/services/categories";

    import CategoryIcon from "@components/CategoryIcon.svelte";
    import ColorInput from "@components/ColorInput.svelte";

    function createCategory()
    {
        console.log(newCategory);
        categoriesService.save(newCategory);
        newCategory = new Category();
    }

    let newCategory = new Category();
    let show = false;
    export const modal = {
        show() {
            show = true;
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

            <div class="panel-block flex-container">
                <div class="is-flex is-fullwidth">
                    <ColorInput class="is-small" bind:color={newCategory.color} availableColors={colors}/>
                    <input class="input is-small mx-1" type="text" bind:value={newCategory.name}/>
                </div>
                <button class="button is-success is-small" on:click={createCategory}>add</button>
            </div>

            {#each $categories as category}
                <a class="panel-block" on:click={() => {}}>
                    <span class="panel-icon">
                        <CategoryIcon categoryId={category.id} />
                    </span>
                    {category.name}
                    <button class="button is-outlined is-small is-danger ml-auto" on:click={() => categoriesService.remove(category.id)}>
                        <span class="icon is-small">
                            <i class="fa-solid fa-trash"></i>
                        </span>
                    </button>
                </a>
            {/each}
        </div>
    </div>
    <button class="modal-close is-large" aria-label="close" />
</div>
