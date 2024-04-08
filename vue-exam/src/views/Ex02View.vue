<template>
<h1>{{title}}</h1>
    <h2>{{subTitle}}</h2>

    <ul>
        <li>{{menus[0]}}</li>
        <li>{{menus[1]}}</li>
        <li>{{menus[2]}}</li>
    </ul>

    <table border="1">
        <thead>
            <tr>
                <th>번호</th>
                <th>이름</th>
                <th>핸드폰</th>
                <th>회사</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{personVo.no}}</td>
                <td>{{personVo.name}}</td>
                <td>{{personVo.hp}}</td>
                <td>{{personVo.company}}</td>
            </tr>
        </tbody>
    </table>

    <p>{{ content }}</p>

    <p v-html="content"></p>

    <img v-bind:src="imgUrl"> <!--단방향 v문법-->
    
</template>


<script> 

export default

{
    name: "Ex02View",
    components: {},
    data() {
        return {
            title: "vue공부",
            subTitle: "데이터바인딩",
            menus: ["게시판","갤러리","방명록"],
            personVo:{
                no: 1,
                name: "DS",
                hp: "010-7777-7777",
                company: "416-777-7777"
            },
            content: "Sound <strong>mind</strong> Sound <strong>body</strong>.",
            imgUrl:"https://mml.pstatic.net/www/mobile/edit/20240318_1095/upload_1710771613913KFcqp.gif"
        };
    },
    methods: {},
};
</script>