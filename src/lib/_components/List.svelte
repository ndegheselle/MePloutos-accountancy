<script>
    import { context } from "@global/contextMenu.js";

    function selectRow(index) {
        let isSelected = list[index].selected;
        if (!options.hasMultiselect) list.forEach((r) => (r.selected = false));

        // FIXME : can't select
        // Can select if : is not already selected
        if (options.hasMultiselect || options.canUnselect) {
            list[index].selected = !isSelected;
        } else {
            list[index].selected = true;
        }

        if (options.hasMultiselect) selected = list.filter((e) => e.selected);
        else selected = (list[index].selected) ? list[index] : null;
    }

    function showContextMenu(event, index) {
        if (!contextMenu) return;

        if  (!list[index].selected)
            selectRow(index);

        // XXX : for object added programatically no coming from database
        if (!options.hasMultiselect && !selected.id) return;

        context.show({ x: event.pageX, y: event.pageY }, contextMenu, selected);
        event.preventDefault();
    }

    export let selected = null;
    export let list = [];
    export let contextMenu = null;
    // Options should have false by default otherwise it will not work (since you overide the object)
    export let options = {
        hasMultiselect: false,
        canUnselect: false,
    };
</script>

{#if !list || !list.length}
<div class="empty-list has-text-grey-light">No elements</div>
{:else}
{#each list as row, index}
    <a
        class:is-active={row.selected}
        class:has-background-link-light={row.selected}
        class:has-text-grey={!row.id}
        class="panel-block row"
        on:contextmenu={(event) => showContextMenu(event, index)}
        on:click={() => selectRow(index)}
    >
        <slot name="row" {row} />
    </a>
{/each}
{/if}

<style>
    .empty-list {
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }
</style>
