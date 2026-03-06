import Api from './Api'

export default {

  index () {
    return Api().get('books')
  },

  show (id) {
    return Api().get('books/' + id)
  },

  post (book) {
    return Api().post('books', book)
  },

  put (book) {
    return Api().put('books/' + book.id, book)
  },

  delete (book) {
    return Api().delete('books/' + book.id)
  }

}