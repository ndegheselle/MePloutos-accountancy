<script>
    import { isDesktop } from "@lib/helpers";
    import { confirm } from "@global/dialogs/Confirm";
    import { categories } from "@lib/store";
    import ParamsService from "@lib/services/parameters";

    import CreateUpdateModal from "@components/layout/CreateUpdateModal.svelte";
    import {CategoriesRepo, Category} from "@lib/db/categories";

    import CategoryIcon from "@app/categories/CategoryIcon.svelte";
    import { params } from "@lib/store";

    function handleRemove(_category) {
        confirm
            .show(
                `Are you sure you want to delete '${_category.name}' ?`,
                "Delete category",
                "is-danger"
            )
            .then((result) => {
                if (result) CategoriesRepo.remove(_category.id);
            });
    }

    function importFromFile(e) {
        confirm
            .show(
                `Importing from a file will clear all current data, are you sure ?`,
                "Import a save",
                "is-warning"
            )
            .then((result) => {
                if (result) ParamsService.importDB(e.target.files[0]);
            });
    }

    let modalCategory = null;
</script>

<svelte:head>
    <title>MePloutos - Parameters</title> 
</svelte:head>

<h1 class="title">Parameters</h1>

{#if isDesktop()}
<div class="box">
    <span class="has-text-grey-lighter">Desktop</span>
    <div>
        <div class="field">
            <label class="checkbox">
                <input type="checkbox" bind:checked={$params.saveImportedFiles} />
                Save imported files locally
            </label>
        </div>
    </div>
</div>
{/if}

<div class="box">
    <div class="columns">
        <div class="column">
            <span class="has-text-grey-lighter">Import</span>
            <div class="file">
                <label class="file-label is-fullwidth">
                    <input
                        class="file-input"
                        type="file"
                        name="resume"
                        accept="application/JSON"
                        on:change={importFromFile}
                    />
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
            <span class="has-text-grey-lighter">Export</span>
            <button
                class="button is-fullwidth"
                on:click={ParamsService.exportDB}
            >
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
            on:click={() => modalCategory.show(new Category())}
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
                        on:click={() => modalCategory.show(category)}
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

<CreateUpdateModal
    name="Category"
    repo={CategoriesRepo}
    form={[
        [
            {
                prop: "color",
                type: "color",
                class: "is-one-quarter"
            },
            {
                prop: "name",
            },
        ],
    ]}
    bind:modal={modalCategory}
/>