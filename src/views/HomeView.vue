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
              <v-skeleton-loader type="image" width="80%" class="rounded-xl" style="margin-left: auto; display: block;"></v-skeleton-loader>
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

      <div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>
