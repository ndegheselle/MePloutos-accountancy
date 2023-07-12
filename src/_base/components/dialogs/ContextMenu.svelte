<script>
    import { contextMenuStore } from "./ContextMenu.js";
</script>

{#if $contextMenuStore.show}
    <div
        class="context-menu dropdown"
        class:is-active={$contextMenuStore.show}
        on:closing={($contextMenuStore.show = false)}
        style="left: {$contextMenuStore.position.x}px;top: {$contextMenuStore.position
            .y}px;"
    >
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                {#each $contextMenuStore.items as item}
                    {#if item == "divider"}
                        <hr class="dropdown-divider" />
                    {:else}
                        <a
                            class="dropdown-item {item.style || ''}"
                            on:click={() => item.action($contextMenuStore.context) }
                        >
                            <span class="icon-text">
                                {#if item.icon}
                                    <span class="icon"
                                        ><i class={item.icon} /></span
                                    >
                                {/if}
                                {item.title}
                            </span>
                        </a>
                    {/if}
                {/each}
            </div>
        </div>
    </div>
{/if}

<style>
    .context-menu {
        position: absolute;
    }
</style>
