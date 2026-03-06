<template>
  <div>
    <h2>รายละเอียด Book</h2>

    <p>ID: {{ book.id }}</p>
    <p>Title: {{ book.title }}</p>

    <button @click="$router.push('/books')">
      กลับ
    </button>
  </div>
</template>

<script>
import BooksService from '../../services/BooksService'

export default {
  data() {
    return {
      book: {}
    }
  },

  async created() {
    try {
      const id = this.$route.params.bookId
      const res = await BooksService.show(id)
      this.book = res.data
    } catch (error) {
      console.log("error:", error)
    }
  }
}
</script>