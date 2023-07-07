<script>
    import { alertStore } from "./Alert.js";

    // 3s
    const ALERT_DELAY = 3000;
    let alertsNumber = 0;

    const onAlertChange = (_alert) => {

        if (!_alert) return;
        
        alertsNumber++;

        setTimeout(() => {
            if (alertsNumber > 0)
                alertsNumber--;
        }, ALERT_DELAY);
    };
    $: onAlertChange($alertStore);
</script>

{#if alertsNumber > 0}
<div class="notification-container">
    <div class="notification {$alertStore.type}">
        <button class="delete" on:click={() => alertsNumber=0}></button>
        {$alertStore.message}
    </div>
</div>
{/if}

<style scoped>
    .notification-container {
        padding: 0.2rem;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>