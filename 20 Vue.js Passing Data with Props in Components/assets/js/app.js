Vue.component('blog-post', {
    props: ['post'],
    template: `
        <div>
            <h3>{{ post.title }}</h3>
            <div v-html="post.content"></div>
        </div>
    `
});

var app = new Vue({
    el: '#app',
    data: {
        posts: [{
                id: 1,
                title: 'My journey with Vue',
                content: `<p>This is Content of <b>Posts 1</b></p>`
            },
            {
                id: 2,
                title: 'Blogging with Vue',
                content: `<p>This is Content of <b>Posts 2</b></p>`
            },
            {
                id: 3,
                title: 'Why Vue is so fun',
                content: `<p>This is Content of <b>Posts 3</b></p>`
            },
        ]
    },
})