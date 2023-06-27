<script>
  import { loading } from "@global/store";
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="navbar-brand is-fullwidth">
    <a class="navbar-item" href="/">
      <span class="icon-text">
        <span class="icon">
          <i class="fas fa-house" />
        </span>
        <span>Dashboard</span>
      </span>
    </a>

    <a class="navbar-item ml-auto" href="/parameters">
      <span class="icon is-small">
        <i class="fa-solid fa-gear" />
      </span>
    </a>
  </div>
</nav>

<main class="container mt-4">
  <slot />
</main>

{#if $loading.show}
<div class="loading-container has-background-light">
  <span class="loader" />
  <span class="ml-2">{$loading.message}</span>
</div>

{/if}

<style>
  .loading-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Spinning loader */
  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid lightgray;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  /* Spinning loader animation */
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
</style>
