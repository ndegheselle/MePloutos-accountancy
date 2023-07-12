<script>
    let clazz = "";

    export let value = 0;
    export { clazz as class };
</script>

<span class={clazz}>
    {value.toLocaleString(undefined, {
        currency: "EUR",
        style: "currency",
    })}
</span>
