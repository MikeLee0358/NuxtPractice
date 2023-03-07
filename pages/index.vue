<script setup>
import { useMyStore } from "@/stores/myStore";

const store = useMyStore();
const { data } = await useAsyncData("user", () => store.fetchUser());
</script>

<template>
  <div>index page</div>
  <div>{{ store.a }}</div>
</template>
