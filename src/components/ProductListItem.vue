<template>
  <li class="catalog__item">
    <a
      class="catalog__pic"
      href="#"
    >
      <img
        :src="product.image.src"
        :srcset="product.image.srcset"
        :alt="product.title"
      >
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price"> {{ product.price }} ₽ </span>

    <ul class="colors colors--black">
      <li class="colors__item">
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            name="color-1"
            value="#73B6EA"
            checked=""
          >
          <span
            class="colors__value"
            style="background-color: #73b6ea"
          />
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            name="color-1"
            value="#8BE000"
          >
          <span
            class="colors__value"
            style="background-color: #8be000"
          />
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            name="color-1"
            value="#222"
          >
          <span
            class="colors__value"
            style="background-color: #222"
          />
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'ProductListItem',
  props: ['product']
}
</script>

<style scoped>
</style>
