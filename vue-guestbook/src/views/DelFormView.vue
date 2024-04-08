<template>
    <div>
        <form v-on:submit.prevent="removeGuest" action="" method=""><!-- 기본 동작인 폼의 제출과 페이지 새로고침 발생막으려고 -->
		<table>
			<tr>
				<td>비밀번호</td>
				<td><input type="password" name="password" v-model="password"></td>
				<td><button type="submit">삭제</button></td>
			</tr>
		</table>
        </form>	 
    <br><br>
	
    <router-link to="/">메인리스트 이동</router-link>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name: "DelFormView",
    components: {},
    data() {
        return {
            password: "",
            no: this.$route.params.no /* $route는 동적인 현재 URL의 정보에 접근하기 위한 객체이고, $router는 URL을 변경하거나 조작하기 위한 객체 */
        };
    },
    methods: {
        removeGuest(){
            console.log(this.password);
            console.log(this.no);
            axios({
				method: 'delete', // put, post, delete  //불러오는것은 GET //저장은 POST
				url: 'http://localhost:9000/api/guests/' + this.no, //''따옴표 문법도 중요,/슬래시도 중요
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입 
				//params: guestbookVo, //get방식 파라미터로 값이 전달
				data: {password: this.password}, //put, post, delete 방식 자동으로 JSON으로 변환 전달 responseType: 'json' //수신타입
			
				responseType: 'json' //수신타입
			}).then(response => { 
				console.log(response.data); //수신데이타

                if(response.data.count>0){
                    this.$router.push({ path: '/' })
                }else{
                    alert("패스워드를 확인해주세요");
                }
                
				

			}).catch(error => { 
				console.log(error);
			}); 
        }
    },
    created(){}
};
</script>


<style></style>