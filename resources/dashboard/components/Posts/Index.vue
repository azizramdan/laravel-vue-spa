<template>
  <div>
    dashboard index posts
    <br>
    <router-link to="/dashboard/posts/create">Create</router-link>

    <br>
    <ul>
      <li v-for="n of 5">
        <router-link :to="`/dashboard/posts/${n}`">ID: {{ n }}</router-link>
      </li>
    </ul>
  </div>
</template>
