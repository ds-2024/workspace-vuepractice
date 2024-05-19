<template>
    <div>
      <div class="container">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#uploadModal">
          포스팅 등록
        </button>
  
        <div v-if="images.length" id="carouselExample" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div v-for="(image, index) in images" :key="index" :class="['carousel-item', { active: index === 0 }]">
              <img :src="image.url" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
  
        <!-- Modal -->
        <div class="modal fade" id="uploadModal" tabindex="-1" aria-labelledby="uploadModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="uploadModalLabel">이미지 업로드</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <input type="file" class="form-control" multiple @change="onFileChange">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                <button type="button" class="btn btn-primary" @click="addImages">저장</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Modal } from 'bootstrap';
  import Compressor from 'compressorjs';
  
  export default {
    name: 'JblogCarousel',
    data() {
      return {
        images: [],
        selectedFiles: [],
      };
    },
    methods: {
      onFileChange(event) {
        this.selectedFiles = Array.from(event.target.files).slice(0, 3); // 최대 3개 이미지만 선택
      },
      addImages() {
        if (this.selectedFiles.length) {
          const readers = this.selectedFiles.map(file => {
            return new Promise((resolve, reject) => {
              new Compressor(file, {
                quality: 0.6, // 이미지 압축 품질 설정

                success(result) {
                  const reader = new FileReader();
                  reader.onload = e => resolve({ url: e.target.result });
                  reader.onerror = reject;
                  reader.readAsDataURL(result);
                },
                error(error) {
                  reject(error);
                },
              });
            });
          });
  
          Promise.all(readers)
            .then(results => {
                this.images = results;
                this.selectedFiles = [];    
              // 모달 닫기
              const modalElement = document.getElementById('uploadModal');
              const modalInstance = Modal.getInstance(modalElement) || new Modal(modalElement);
              modalInstance.hide();
            })
            .catch(error => {
              console.error('Error reading files:', error);
            });
        } else {
            // 선택한 파일이 없으면 슬라이드를 초기화
            this.images = [];
        }
    },
    },
  };
  </script>
  
  <style>
 
  .carousel-inner img {
    height: 100%;
    object-fit: cover; /* 이미지가 컨테이너를 덮도록 설정 */
  }
  
  .carousel-item {
    aspect-ratio: 16/9; /* 원하는 종횡비로 설정 */
    overflow: hidden;
  }
  
  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  