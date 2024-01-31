<template>
  <div>
    <div>
      <div>
        <div data-aos="fade-up">
          <span>
            <h1>논리적인 코드를 지향합니다</h1>
            <h2>논리적인 코드는 이해하기 쉬운 코드라고 생각해요</h2>
          </span>
        </div>
        <v-container></v-container>
        <div>
          <Suspense>
            <template #default>
              <v-img src="../assets/clement-helardot-95YRwf6CNw8-unsplash.jpg" width="80%" class="rounded-xl"
                style="margin-left: auto; display: block;">
              </v-img>
            </template>
            <template #fallback>
              <v-skeleton-loader type="image" width="80%" class="rounded-xl"
                style="margin-left: auto; display: block;"></v-skeleton-loader>
            </template>
          </Suspense>
        </div>
        <v-container></v-container>
        <div data-aos="fade-down">
          <span>
            <h3>코드를 쉽고 간결하게</h3>
            <h3>설명도 쉽고 간결하게</h3>
          </span>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div class="text-right" data-aos="fade-left">
          <h1>협업도 중요합니다</h1>
          <h2>
            코드리뷰는 필수!
            <br />
            코드리뷰를 통해 더 좋은 코드를 만들어요
          </h2>
        </div>
        <v-container>
        </v-container>
        <div>
          <v-img src="../assets/annie-spratt-QckxruozjRg-unsplash.jpg" class="rounded-xl" width="80%"
            style="margin-right: auto">
          </v-img>
        </div>
      </div>
    </div>
    <v-container></v-container>
    <div>
      <div class="text-center" data-aos="fade-right">
        <h3>제가 일하는 방식</h3>
        <h1>사용자의 가치를 중요하게 생각합니다</h1>
        <p>좋은 코드에 대한 답은 사용자에게 있다고 생각합니다
          <br />
          오래 고민하기보단 여러가지 방법으로 코드를 작성해보고 사용자에게 더 적합한 서비스를 만들어요
        </p>
      </div>
      <v-container></v-container>

      <v-img src="../assets/ux-indonesia-1V5zGGTYXVc-unsplash.jpg" class="rounded-xl" width="80%"
        style="margin-inline: auto;"></v-img>
    </div>
    <v-container></v-container>
    <div>
      <div class="text-center">
        <h1>프로젝트와 공부 이외에도 이런 것들을 하고 있어요</h1>
      </div>
      <div class="text-center">
        <v-carousel hide-delimiter-background height="50%">

          <v-carousel-item>
            <div class="ma-4">
              <v-card width="70%" class="mx-auto" height="670px">

                <v-card-text>
                  <v-img src="../assets/blog2.png" class="rounded-xl" width="100%" style="object-fit: contain;"></v-img>
                </v-card-text>
                <v-card-title>
                  <h2>블로그 포스팅</h2>
                </v-card-title>
                <div class="pa-4">
                  <p>공부하면서 궁굼했던 걸 확인해본 결과,<br /> 공유하고 싶은 경험, 지식들을 포스팅 하고 있어요</p>
                </div>
                <v-card-actions>
                    <v-btn color="primary" :href="`https://velog.io/@iknow/posts`" target="_black" style="margin-left: auto;">블로그 보러가기</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="ma-4">
              <v-card width="70%" class="mx-auto" height="670px">

                  <v-img src="../assets/codingtest.png" class="rounded-xl" width="100%" style="object-fit: contain;"></v-img>
                  <v-container></v-container>
                  <v-container></v-container>
                  <h2>코딩 테스트</h2>
                <div class="pa-4">
                  <p>코딩테스트 문제를 해결해 나가며,<br />부족했던 알고리즘 지식들을 채우고 있어요</p>
                </div>
              </v-card>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="ma-4">
              <v-card width="70%" class="mx-auto" height="670px">

                  <v-img src="" alt="스터디 사진" class="rounded-xl" width="100%" style="object-fit: contain;"></v-img>
                  <v-container></v-container>
                  <v-container></v-container>
                  <h2>정기 스터디</h2>
                <div class="pa-4">
                  <p>매주 정기 스터디를 통해,<br>정해진 주제에 대한 발표,<br />배경지식과 경험을 공유해요</p>
                </div>
              </v-card>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
      <v-container></v-container>
      <div class="text-center">
      <h1>저는 이런 기술 스택을 사용해요</h1>
    </div>
    </div>
  </div>
</template>

<script setup>
</script>
