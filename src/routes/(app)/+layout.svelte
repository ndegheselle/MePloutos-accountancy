<script>
  let menuOpen = false;
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <span class="icon-text">
        <span class="icon">
          <i class="fas fa-house"></i>
        </span>
        <span>Dashboard</span>
      </span>
    </a>

    <a
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
      on:click={() => (menuOpen = !menuOpen)}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" class:is-active={menuOpen}>
    <div class="navbar-start">
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-light" href="/parameters">
            <span class="icon is-small">
              <i class="fa-solid fa-gear"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

<main class="container mt-4">
  <slot />
</main>
