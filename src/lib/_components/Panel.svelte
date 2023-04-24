<script>
    export let title = "";
    export let actionsMenu = [];
</script>

<div class="panel m-0 is-fullheight">
    <div class="actions-container">
        <slot name="filters"/>
        {#if actionsMenu && actionsMenu.length}
            <div class="dropdown is-right">
                <div class="dropdown-trigger">
                    <button class="button is-ghost" aria-haspopup="true">
                        <i class="gg-more-vertical-alt" />
                    </button>
                </div>
                <div class="dropdown-menu" role="menu">
                    {#each actionsMenu as menu}
                        <div class="dropdown-content">
                            <a class="dropdown-item" on:click={menu.action}>
                                <span class="icon-text">
                                    <span class="icon"
                                        ><i class={menu.icon} /></span
                                    >
                                    {menu.title}
                                </span>
                            </a>
                        </div>
                    {/each}
                </div>
            </div>
        {/if}
    </div>

    {#if title}
        <div class="panel-heading">{title}</div>
    {/if}

    <slot></slot>
</div>

<style>
    .actions-container {
        float: right;
        margin: 0.45rem;
    }
</style>
