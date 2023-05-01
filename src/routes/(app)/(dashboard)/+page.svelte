<script>
    import AccountsTotal from "./AccountsTotal.svelte";
    import Accounts from "./Accounts.svelte";
    import Categories from "./Categories.svelte";
    import Projects from "./Projects.svelte";
    import Recap from "./Recap.svelte";
</script>

<div class="columns is-variable is-1 mb-0">
    <div class="column pb-2">
        <AccountsTotal />
        <Accounts />
    </div>
    <div class="column pb-2">
        <Categories />
    </div>
</div>
<div class="columns is-variable is-1">
    <div class="column pb-2">
        <Projects />
    </div>
    <div class="column pb-2">
        <Recap />
    </div>
</div>