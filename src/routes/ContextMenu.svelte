<script>
    import { contextMenu } from "@global/store.js";
</script>

{#if $contextMenu.visible}
    <div
        class="context-menu dropdown"
        class:is-active={$contextMenu.visible}
        on:closing={($contextMenu.visible = false)}
        style="left: {$contextMenu.position.x}px;top: {$contextMenu.position
            .y}px;"
    >
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                {#each $contextMenu.items as item}
                    {#if item == "divider"}
                        <hr class="dropdown-divider" />
                    {:else}
                        <a
                            class="dropdown-item {item.style || ''}"
                            on:click={() => item.action($contextMenu.context) }
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
