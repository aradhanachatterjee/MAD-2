Vue.component('my-card', {
    props: ['title', 'size'],
    data: function() {
        return {

        }
    },
    computed: {
        imglink: function() {
            let x = this.size ??= 100;
            return "https://via.placeholder.com/" + x;
        }
    },
    template:
    `
    <div class="card col-sm">
        <img class="card-img-top" :src="imglink" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <slot></slot>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `
})

let app = new Vue({
    el: '#app',
    data: {
        message: "Hello",
        fsize: "42px",
        msg2: "Dummy"
    },
    methods: {
        updateMsg() {
            this.message = "Back to square one";
        }
    },
    computed: {
        myFontSize: function() {
            return `${this.message.length + 10}px`;
        }
    },
    watch: {
        message: function(nmsg, omsg) {
        // message: function(nmsg) {
            this.msg2 = `New: ${nmsg}, Old: ${omsg}`;
            // this.msg2 = `New: ${nmsg}`;
        }
    }
});