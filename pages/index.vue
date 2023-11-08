<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div
        v-if="products"
        class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
      >
        <div v-for="product in products" :key="product">
          <ProductComponent :product="product" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
  import MainLayout from "~/layouts/MainLayout.vue";

  const products = [
    { id: 1, title: "Product 1", description: 'This is a description', url: "https://picsum.photos/id/70/300/300", price: 999 },
    { id: 2, title: "Product 2", description: 'This is a description', url: "https://picsum.photos/id/71/300/300", price: 999 },
    { id: 3, title: "Product 3", description: 'This is a description', url: "https://picsum.photos/id/72/300/300", price: 999 },
    { id: 4, title: "Product 4", description: 'This is a description', url: "https://picsum.photos/id/73/300/300", price: 999 },
    { id: 5, title: "Product 5", description: 'This is a description', url: "https://picsum.photos/id/74/300/300", price: 999 },
    { id: 6, title: "Product 6", description: 'This is a description', url: "https://picsum.photos/id/75/300/300", price: 999 },
    { id: 7, title: "Product 7", description: 'This is a description', url: "https://picsum.photos/id/76/300/300", price: 999 },
    { id: 8, title: "Product 8", description: 'This is a description', url: "https://picsum.photos/id/77/300/300", price: 999 },
    { id: 9, title: "Product 9", description: 'This is a description', url: "https://picsum.photos/id/78/300/300", price: 999 },
  ]
</script>
