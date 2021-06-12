<template>
  <div class="flex flex-col text-center">
    <nav>
      <ul class="flex justify-center">
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li>|</li>
        <li><router-link :to="{ name: 'About' }">About</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
