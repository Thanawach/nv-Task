<template>
  <div>
    <h2>สร้าง Book ใหม่</h2>

    <form @submit.prevent="createBook">
      <p>
        ชื่อหนังสือ:
        <input type="text" v-model="book.title">
      </p>

      <button type="submit">บันทึก</button>
      <button type="button" @click="goBack">กลับหน้ารายการ</button>
    </form>
  </div>
</template>

<script>
import BooksService from '../../services/BooksService'

export default {
  data() {
    return {
      book: {
        title: ''
      }
    }
  },

  methods: {
    async createBook() {
      try {
        console.log("เริ่มบันทึก")

        const res = await BooksService.post(this.book)
        console.log("บันทึกสำเร็จ:", res)

        // ไปหน้ารายการ
        this.$router.push('/books')

      } catch (error) {
        console.log("เกิด error:", error)
      }
    },

    goBack() {
      this.$router.push('/books')
    }
  }
}
</script>