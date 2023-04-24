<script>
    export let value;
</script>

<span class={$$props.class} class:has-text-info={value >= 0}>
    {value?.toLocaleString(undefined, {
        currency: "EUR",
        style: "currency"
    }) || 0}
</span>
