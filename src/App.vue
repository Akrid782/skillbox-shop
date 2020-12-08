<template>
  <section class="catalog">
    <ProductList :products="products" />
    <ProductPagination />
  </section>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
import ProductPagination from '@/components/ProductPagination'
import products from '@/data/products'

export default {
  name: 'App',
  components: {
    ProductPagination,
    ProductList
  },
  data () {
    return {
      products
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
