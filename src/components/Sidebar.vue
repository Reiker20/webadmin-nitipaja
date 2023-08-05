<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img :src="imageUrl" alt="NitipAja">
    </div>
  
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="fa-solid fa-angle-double-right"></span>
      </button>
    </div>
    <div class="menu">
      <router-link to="/home" class="button">
        <span class="fa-light fa-house"></span>
        <span class="text">Home</span>
      </router-link>
      <router-link to="/user" class="button">
        <span class="fa-fw fa-user"></span>
        <span class="text">User</span>
      </router-link>
	  <router-link to="/report" class="button">
        <span class="fa-fw fa-user"></span>
        <span class="text">Laporan</span>
      </router-link>
	  <router-link to="/admin" class="button">
        <span class="fa-fw fa-user"></span>
        <span class="text">admin</span>
      </router-link>
    </div>
</aside>
    <router-view></router-view>
</template>
  
<script setup>
  import { ref } from 'vue';
  const imageUrl = 'https://shopper.nitipaja.online/storage/images/nitipaja.png';
  
  const is_expanded = ref(localStorage.getItem('is_expanded') === 'true');
  
  const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value;
	localStorage.setItem('is_expanded', is_expanded.value);
  };
</script>
  
<style>
	aside {
	  position: fixed;
	  top: 0;
	  left: 0;
	  bottom: 0;
	  width: 250px;
	  background: #fff;
	  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	  transition: 0.3s;
	  z-index: 100;
	}
	aside.is-expanded {
	  width: 100px;
	}
  
	.logo {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  margin-bottom: 1rem;
	}
	.logo img {
	  width: 3rem;
	}
  
	.menu-toggle-wrap {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  margin-bottom: 1rem;
	}
	.menu-toggle {
	  background-color: transparent;
	  border: none;
	  font-size: 1.5rem;
	  cursor: pointer;
	  transition: 0.2s ease-in-out;
	}
	.menu-toggle:hover {
	  transform: rotate(180deg);
	}
  
	.menu {
	  display: flex;
	  flex-direction: column;
	  gap: 1rem;
	}
	.button {
	  display: flex;
	  align-items: center;
	  gap: 1rem;
	  padding: 0.5rem 1rem;
	  border-radius: 0.5rem;
	  transition: 0.2s ease-in-out;
	}
	.button:hover {
	  background-color: var(--primary);
	  color: #4677D5;
	}
	.button.active {
	  background-color: var(--primary);
	  color: #4677D5;
	}
	.button .text {
	  flex: 1 1 0%;
	}
</style>
  