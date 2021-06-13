<template>
  <nav>
    <ul class="flex justify-center">
      <li class="p-2 m-2 border-b">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li class="p-2 m-2 border-b">
        <router-link :to="{ name: 'About' }">About</router-link>
      </li>
    </ul>
  </nav>
</template>
