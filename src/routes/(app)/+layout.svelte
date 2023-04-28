<script>
  let menuOpen = false;
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <span class="icon-text">
        <span class="icon">
          <i class="gg-home" />
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

  <div id="navbarBasicExample" class="navbar-menu is-hidden-desktop" class:is-active={menuOpen}>
    <div class="navbar-start">
      <a class="navbar-item">Accounts </a>
      <a class="navbar-item">Projects </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-light"> <i class="gg-settings"></i>
            Parameters </a>
        </div>
      </div>
    </div>
  </div>
</nav>

<section class="columns is-gapless">
  <div class="column is-narrow is-hidden-touch">
    <aside class="menu p-2">
      <p class="menu-label">
        Accountancy
      </p>
      <ul class="menu-list">
        <li><a>Accounts</a></li>
        <li><a>Projects</a></li>
      </ul>
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li><a>Parameters</a></li>
      </ul>
    </aside>
  </div>
  <main class="column">
    <slot />
  </main>
</section>

