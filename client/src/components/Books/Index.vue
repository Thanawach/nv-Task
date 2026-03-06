<template>
  <div>
    <h2>All Books</h2>

    <p>
      <button @click="$router.push('/book/create')">
        เพิ่ม Book
      </button>
    </p>

    <div v-for="book in books" :key="book.id">
      <p>id: {{ book.id }}</p>
      <p>title: {{ book.title }}</p>

      <p>
        <button @click="$router.push('/book/' + book.id)">ดูข้อมูล</button>
        <button @click="$router.push('/book/edit/' + book.id)">แก้ไข</button>
        <button @click="deleteBook(book)">ลบ</button>
      </p>

      <hr>
    </div>
  </div>
</template>