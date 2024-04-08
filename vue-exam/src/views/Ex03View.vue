<template>
    <h1>{{title}}</h1>
    <h2>{{subTitle}}</h2>
    
    <p>{{ counter }}</p>

    <button v-on:click="plus" type="button">더하기(+)</button>
    <button v-on:click="minus" type="button">빼기(-)</button>

    <br>
    <br>
    <p>{{ message }}</p>
    <button v-on:click="setMessage" type="button">메세지출력</button>
</template>
<script>

export default
 
{
    name: "Ex03View",
    components: {},
    data () {   
       
        return {
            title: "vue공부",
            subTitle: "클릭이벤트 + 메소드",
            counter: 0,
            message:""
    
        };
    },
    methods: {
        //plus: function plus()
        plus() {
            console.log("클릭");
            this.counter++; //화면창초기값 0 인데 이 코드가 있음으로써 클릭할때 마다 1,2,3.. 증가
        },
        
        minus: function minus(){
            this.counter--;
        },
    },
};
</script>
<style></style>