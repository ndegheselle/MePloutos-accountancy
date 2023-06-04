<script>
    export let availableColors = [];
    export let color = "#c8b6ff";
    let clazz = "";
    export { clazz as class };
</script>

<div class="dropdown">
    <div class="dropdown-trigger">
        <button class="button is-fullwidth {clazz}" aria-haspopup="true">
            <span
                class="color-preview mr-1"
                style="background-color: {color};"
            />
            <span>{color}</span>
        </button>
    </div>
    <div class="dropdown-menu in-modal" role="menu">
        <div class="dropdown-content">
            <div class="dropdown-item">
                <div class="colors-container">
                    {#each availableColors as _color}
                        <a on:click={() => color = _color}>
                            <span
                                class="color-preview"
                                style="background-color: {_color};"
                            />
                        </a>
                    {/each}
                </div>
                <label class="custom-color-input">
                    <input type="color" on:change={(event) => color = event.target.value}/>
                    Custom
                </label>
            </div>
        </div>
    </div>
</div>

<style>
    .dropdown-content {
        max-width: 6.5rem;
    }

    .colors-container {
        justify-content: space-around;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .colors-container .color-preview {
        margin: 0.1rem;
    }

    .color-preview {
        border-radius: 0.2rem;
        height: 1rem;
        width: 1rem;
        display: block;
    }

    .custom-color-input {
        margin: 0 auto;
        text-align: center;
        display: block;
    }

    .custom-color-input input {
        height: 1rem;
        width: 1rem;
        padding: 0;
    }
</style>
