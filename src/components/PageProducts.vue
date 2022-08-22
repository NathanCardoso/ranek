<template>
  <ul v-if="totalPage > 1">
    <li v-for="page in pages" :key="page">
      <router-link :to="{ query: query(page) }">{{ page }} </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PageProducts",
  props: {
    pageProducts: {
      type: Number,
      default: 1,
    },
    totalProducts: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    pages() {
      const current = +(this.$route.query._page)
			const range = 9
			const offset = Math.ceil(range / 2)
			const total = this.totalPage
			const pagesArray = []

			for(let i = 1; i <= total; i++) {
				pagesArray.push(i)
			}

			pagesArray.splice(0, current - offset)
			pagesArray.splice(range, total)
			return pagesArray
    },
    totalPage() {
      const total = this.totalProducts / this.pageProducts;
      return total !== Infinity ? Math.ceil(total) : 0;
    },
  },
  methods: {
    query(page) {
      return {
        ...this.$route.query,
        _page: page,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  grid-column: 1 / -1;
	text-align: center;

  li {
    display: inline-block;

    a {
      padding: 2px 8px;
      border-radius: 2px;
      margin: 4px;

      &.router-link-exact-active,
      &:hover {
        background: #87f;
        color: #fff;
      }
    }
  }
}
</style>
