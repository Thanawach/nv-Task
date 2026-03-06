<template>
  <div>
    <h2>แก้ไข Book</h2>

    <div v-if="book">
      <form @submit.prevent="editBook">
        <p>
          ชื่อหนังสือ:
          <input type="text" v-model="book.title">
        </p>

        <button type="submit">บันทึก</button>
        <button type="button" @click="$router.push('/books')">
          กลับ
        </button>
      </form>
    </div>

    <div v-else>
      <p>กำลังโหลดข้อมูล...</p>
    </div>
  </div>
</template>

<script>
import BooksService from '../../services/BooksService'

export default {
  data() {
    return {
      book: null
    }
  },

  async created() {
    try {
      const id = this.$route.params.bookId

      const res = await BooksService.show(id)
      this.book = res.data

    } catch (error) {
      console.log(error)
    }
  },

  methods: {
    async editBook() {
      try {

        await BooksService.put(this.book.id, this.book)

        this.$router.push('/books')

      } catch (error) {
        console.log("Edit error:", error)
      }
    }
  }
}
</script>