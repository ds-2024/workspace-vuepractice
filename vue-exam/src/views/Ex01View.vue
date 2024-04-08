<template>
  <h1>vue공부</h1>
  <h2>{{subTitle}}</h2>
  <p></p>
  
</template>

<script>

export default

{
  name: "Ex01View", //multi-word 에러 => 두개의 대문자단어로 이어줘야함 Ex01view안됨
  components: {},
  data () {
    
    return{
      subTitle:"바인딩된 소제목",
      content: "vue 공부시작"
    };
  },
  methods: {},
};
</script>
