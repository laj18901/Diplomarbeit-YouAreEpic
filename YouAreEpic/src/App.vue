<template>
  <div id="app">
    <keep-alive include="CategorySelection">
      <router-view :key="$route.fullPath"></router-view>
    </keep-alive>
  </div>
</template>
