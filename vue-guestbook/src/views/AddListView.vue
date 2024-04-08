<template>
    <div>
        <form v-on:submit.prevent="addGuest" action="" method="">
		<table border="1" width="540px">
			<tr>
				<td>이름</td>
				<td><input type="text" name="name" v-model="guestbookVo.name"></td> <!-- 양방향모델v-model="" -->
				<td>비밀번호</td>
				<td><input type="password" name="password" v-model="guestbookVo.password"></td>
			</tr>
			<tr>
				<td colspan="4"><textarea cols="72" rows="5" name="content" v-model="guestbookVo.content"></textarea></td>
			</tr>
			<tr>
				<td colspan="4">
					<button type="submit">등록</button>
				</td>
			</tr>
		</table>
	</form>
	<br>
	<!-- <button v-on:click="getList()" type="button">데이터 가져오기</button> created에 초기값 설정해서 버튼 필요없어짐. -->
	
	<div v-bind:key="i" v-for="(guestbookVo, i) in guestbookList"> 
		<table border="1" width="540px">
			<tr>
				<td>{{guestbookVo.no}}</td>
				<td>{{guestbookVo.name}}</td>
				<td>{{guestbookVo.regDate}}</td>
				<td>
					<router-link v-bind:to="`/delete/${guestbookVo.no}`">삭제</router-link>
					<!-- ${} 자바스크립트에서 문자열 안에서 변수나 표현식을 삽입 -->
				</td>
			</tr>
			<tr>
				<td colspan="4">{{guestbookVo.content}}</td>
			</tr>
		</table>
		<br> 
	</div>

    </div>
</template>


<script>
import axios from 'axios';
export default {
    name: "AddListView",
    components: {},
    data() {
        return {
			guestbookList: [],
			guestbookVo: {
				name: "",
				password: "",
				content: ""
			}
		};
    },
    methods: {/* methods는 Vue 인스턴스의 메서드를 정의하는 데 사용 */
		getList(){
			console.log("데이터 가져오기");
			

			axios({
				method: 'get', // put, post, delete  //불러오는것은 GET
				url: 'http://localhost:9000/api/guests', //''따옴표 문법도 중요
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입 
				//params: guestbookVo, //get방식 파라미터로 값이 전달
				//data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 responseType: 'json' //수신타입
			
				responseType: 'json'//수신타입
			}).then(response => { 
				console.log(response.data); //수신데이타
				this.guestbookList = response.data;
			}).catch(error => { 
				console.log(error);
			});

		},
		addGuest(){
			console.log("저장");
			console.log(this.guestbookVo);
			axios({
				method: 'post', // put, post, delete  //불러오는것은 GET //저장은 POST
				url: 'http://localhost:9000/api/guests', //''따옴표 문법도 중요
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입 
				//params: guestbookVo, //get방식 파라미터로 값이 전달
				data: this.guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 responseType: 'json' //수신타입
			
				responseType: 'json' //수신타입
			}).then(response => { 
				console.log(response.data); //수신데이타
				this.guestbookList.unshift(response.data); //기존데이터 위에 가져온 데이터 1개 올려놓기.엄청난 코드임.

			}).catch(error => { 
				console.log(error);
			});

		}
	}, 
    created(){
		this.getList();
	}/*created()는  Vue 인스턴스가 생성될 때 호출되는 초기화 단계에서 수행되는 메서드 */
};
</script>


<style></style>