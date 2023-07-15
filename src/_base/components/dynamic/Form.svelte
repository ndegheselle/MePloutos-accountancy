<script>
    import { parseDate } from "@base/helpers";
    import ColorInput from "@components/inputs/ColorInput.svelte";

    export let value = {};

    /* Exemple
    [
        [{prop: "name", class: "is-one-third"}, {prop: "description"}],
        [{prop: "color", label: "Color of the thing", type: "color", isVisible: () => !isEdit()}]
        [{prop: "dueEvery", label: "Due every", type: [{value: 1, label: "Day"}]}]
    ]
    */
    export let form = [];
</script>

{#each form as row}
{#if row.reduce((accum, col) => accum || (!col.isVisible || col.isVisible() !== false), false) }
    <div class="columns is-variable is-1 mb-0">
        {#each row as col}
                <div class="field column mb-0 {col.class || ''}">
                    <div class="control">
                        <label class="label">
                            <span class="field-name"
                                >{col.label || col.prop}</span
                            >
                            {#if Array.isArray(col.type)}
                            <div class="select is-fullwidth">
                                <select bind:value={value[col.prop]} class="is-fullwidth">
                                    {#each col.type as option}
                                        <option value={option.value}>{option.label}</option>
                                    {/each}
                                </select>
                            </div>
                            {:else if typeof value[col.prop] == "object" && value[col.prop] instanceof Date}
                                <input
                                    class="input"
                                    type="date"
                                    value={value[col.prop]
                                        ?.toISOString()
                                        .split("T")[0]}
                                    on:change={(e) =>
                                        (value[col.prop] = parseDate(
                                            e.target.value
                                        ))}
                                />
                            {:else if typeof value[col.prop] == "number"}
                                <input
                                    class="input"
                                    type="number"
                                    value={value[col.prop]}
                                    on:change={(e) =>
                                        (value[col.prop] = Number(e.target.value))}
                                />
                            {:else if typeof value[col.prop] === "string"}
                                {#if col.type == "color"}
                                    <ColorInput
                                        bind:color={value[col.prop]}
                                    />
                                {:else}
                                    <input
                                        class="input"
                                        type="text"
                                        bind:value={value[col.prop]}
                                    />
                                {/if}
                            {/if}
                        </label>
                    </div>
                </div>
        {/each}
    </div>
    {/if}
{/each}

<style>
    .field-name {
        text-transform: capitalize;
    }
</style>
