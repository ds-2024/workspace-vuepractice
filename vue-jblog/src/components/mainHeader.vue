<template>
    <!-- 메인 로고 이미지를 링크하세요 logo.jpg -->
	 	<a href="">
			<img class="logo" src="">
		</a>
		<ul class="menu">
			<!-- 로그인 전 메뉴 -->
			<li><a href="${pageContext.request.contextPath}/user/loginForm">로그인</a></li>
			<li><a href="${pageContext.request.contextPath}/user/joinForm">회원가입</a></li>
 			
 			<%--
			<!-- 로그인 후 메뉴 -->
			<li><a href="${pageContext.request.contextPath}/user/logout">로그아웃</a></li>
			<li><a href="">내블로그</a></li>
 			--%>
 		</ul>
</template>


<script>
export default {
    name: "mainHeader",
    components: {},
    data() {
        return {};
    },
    methods: {},
    created(){}
};
</script>


<style></style>