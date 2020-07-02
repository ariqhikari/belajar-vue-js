var app = new Vue({
    el: '#app',
    data: {
        message: ''
    },
    methods: {
        escKey: function () {
            this.message = 'You pressing esc key'
        },
        spaceKey: function () {
            this.message = 'You pressing space key'
        },
        upKey: function () {
            this.message = 'You pressing up key'
        },
        downKey: function () {
            this.message = 'You pressing down key'
        },
        aKey: function () {
            this.message = "You pressing 'a' key"
        },
    }
})