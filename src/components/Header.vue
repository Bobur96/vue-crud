<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-brand mt-2 mt-lg-0">
          <img
            src="../components/icons/texnomart-logo2.png"
            height="35"
            alt="SG Logo"
            loading="lazy"
          />
        </div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><RouterLink class="nav-link" to="/"> Home </RouterLink></li>
          <li class="nav-item"><RouterLink class="nav-link" to="students"> Students </RouterLink></li>
        </ul>
      </div>

      <div class="d-flex align-items-center">
        <a class="text-reset me-3" href="#">
          <i class="fas fa-shopping-cart"></i>
        </a>

        <div class="dropdown">
          <a
            class="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-bell"></i>
            <span class="badge rounded-pill badge-notification bg-danger">1</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#"> Some news </a></li>
            <li><a class="dropdown-item" href="#"> Another news </a></li>
          </ul>
        </div>
        <div class="dropdown">
          <a
            class="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              class="rounded-circle"
              height="25"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
            <li><a class="dropdown-item" href="#"> My profile </a></li>
            <li><a class="dropdown-item" href="#"> Settings </a></li>
            <li><span class="dropdown-item" href="#"> Logout </span></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {};
</script>

<style scoped>
nav{
    width: 100%;
}
</style>