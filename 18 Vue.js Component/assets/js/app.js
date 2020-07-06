Vue.component('greeting', {
    template: `
        <div>
            <b>Hello, Vue</b> <br>
            <i>Hello, Vue</i> <br>
            <u>Hello, Vue</u> <br>
        </div>
    `
});

var app = new Vue({
    el: '#app',
    data: {

    },
})