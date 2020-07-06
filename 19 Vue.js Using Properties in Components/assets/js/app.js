Vue.component('greeting', {
    template: `
        <div>
            <b>Hello, Vue</b> <br>
            <i>Hello, Vue</i> <br>
            <u>Hello, Vue</u> <br>
        </div>
    `
});

Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: `<button @click="count++">Clicked Me {{ count }} times</button>`
});

var app = new Vue({
    el: '#app',
    data: {

    },
})