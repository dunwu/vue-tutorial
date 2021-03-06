Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  `
})

new Vue({
  el: '#app',
  data: {
    posts: [
      {id: 1, title: 'My journey with Vue', content: '12345'},
      {id: 2, title: 'Blogging with Vue', content: 'abcd'},
      {id: 3, title: 'Why Vue is so fun', content: 'xyz'}
    ]
  }
})
