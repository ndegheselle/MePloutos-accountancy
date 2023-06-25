<script>
    import { confirm } from "@global/dialogs";
    import { categories } from "@lib/store";
    import { Category } from "@lib/models";
    import { colors } from "@lib/base/colors.js";
    import categoriesService from "@lib/services/categories";

    import CategoryIcon from "@app/categories/CategoryIcon.svelte";
    import ColorInput from "@components/ColorInput.svelte";

    import paramsService from "@lib/services/parameters";

    function handleModalFinish() {
        if (modalCategory.id) categoriesService.update(modalCategory);
        else categoriesService.create(modalCategory);
        modalCategory = null;
    }

    function handleRemove(_category) {
        confirm
            .show(
                `Are you sure you want to delete '${_category.name}' ?`,
                "Delete category",
                "is-danger"
            )
            .then((result) => {
                if (result)
                    categoriesService.remove(_category.id);
            });
    }

    function importFromFile(e)
    {
        confirm
            .show(
                `Importing from a file will clear all current data, are you sure ?`,
                "Import a save",
                "is-warning"
            )
            .then((result) => {
                if (result)
                    paramsService.importDB(e.target.files[0])
            });
    }

    let modalCategory = null;
</script>

<h1 class="title">Parameters</h1>

<div class="box">
    <span class="has-text-grey-lighter">Export / import</span>
    <div class="columns">
        <div class="column">
            <div class="file">
                <label class="file-label is-fullwidth ">
                    <input class="file-input" type="file" name="resume" accept="application/JSON" on:change={importFromFile}/>
                    <span class="file-cta is-fullwidth">
                        <span class="file-icon">
                            <i class="fa fa-file-import" />
                        </span>
                        <span class="file-label"> Choose a file… </span>
                    </span>
                </label>
            </div>
        </div>
        <div class="column">
            <button class="button is-fullwidth" on:click={paramsService.exportDB}>
                <span class="icon">
                    <i class="fa-solid fa-file-export" />
                </span>
                <span>Export</span>
            </button>
        </div>
    </div>
</div>

<div class="panel has-background-white">
    <div class="panel-block flex-container pb-0">
        <span class="has-text-grey-lighter">Categories</span>
        <button
            class="button is-small is-light"
            on:click={() => (modalCategory = new Category())}
        >
            <span class="icon is-small">
                <i class="fa-solid fa-plus" />
            </span>
        </button>
    </div>

    {#each $categories as category}
        <a class="panel-block" on:click={() => {}}>
            <span class="panel-icon">
                <CategoryIcon categoryId={category.id} />
            </span>
            {category.name}
            {#if category.id}
                <div class="ml-auto">
                    <button
                        class="button is-outlined is-small"
                        on:click={() => (modalCategory = category)}
                    >
                        <span class="icon is-small">
                            <i class="fa-solid fa-pen" />
                        </span>
                    </button>
                    <button
                        class="button is-outlined is-small is-danger"
                        on:click={() => handleRemove(category)}
                    >
                        <span class="icon is-small">
                            <i class="fa-solid fa-trash" />
                        </span>
                    </button>
                </div>
            {/if}
        </a>
    {/each}
</div>

{#if modalCategory}
    <div
        class="modal"
        class:is-active={modalCategory}
        on:closing={() => {
            modalCategory = null;
        }}
    >
        <div class="modal-background" />
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    {modalCategory.id ? "Edit" : "Create"} category
                </p>
                <button class="delete" aria-label="close" />
            </header>
            <section class="modal-card-body is-flex">
                <ColorInput
                    bind:color={modalCategory.color}
                    availableColors={colors}
                />
                <input
                    class="input mx-1"
                    type="text"
                    bind:value={modalCategory.name}
                />
            </section>
            <footer class="modal-card-foot is-justify-content-flex-end p-2">
                <button class="button" aria-label="close">Cancel</button>
                <button
                    class="ml-1 button is-success"
                    on:click={handleModalFinish}
                    >{modalCategory.id ? "Edit" : "Add"}</button
                >
            </footer>
        </div>
    </div>
{/if}
