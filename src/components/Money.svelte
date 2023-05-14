<script>
    export let value = 0;
</script>
<b class:has-text-link={value > 0}
    >{value.toLocaleString(undefined, {
        currency: "EUR",
        style: "currency",
    })}</b
>
