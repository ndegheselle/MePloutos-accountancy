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
    <div class="navbar-start is-hidden-desktop">
      <a class="navbar-item">
        <span class="icon-text">
          <span class="icon">
            <i class="fas fa-folder"></i>
          </span>
          <span>Accounts</span>
        </span>
      </a>
      <a class="navbar-item">
        <span class="icon-text">
          <span class="icon">
            <i class="fas fa-folder-tree"></i>
          </span>
          <span>Projects</span>
        </span>
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-light">
            <span class="icon is-small">
              <i class="fa-solid fa-gear"></i>
            </span>
          </a>
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
        <li>
          <a>
          <span class="icon-text">
            <span class="icon">
              <i class="fas fa-folder"></i>
            </span>
            <span>Accounts</span>
          </span>
        </a>
        </li>
        <li>
          <a>
          <span class="icon-text">
            <span class="icon">
              <i class="fas fa-folder-tree"></i>
            </span>
            <span>Projects</span>
          </span>
        </a>
        </li>
      </ul>
    </aside>
  </div>
  <main class="column">
    <slot />
  </main>
</section>

