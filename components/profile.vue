<template>
  <div class="profileWrap">
    <div class="profileImgWrap">
      <img class="profileImg" src="../static/oneiron.png" />
      <div class="profileText">
        <div>원철</div>
        <div>프론트엔드 개발자</div>

        <button>
          <NuxtLink to="/aboutme_1" class="menuNuxtLink">알아보기</NuxtLink>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.profileWrap {
  position: fixed;
  background-color: white;
  border-radius: 15px;
  height: 130px;
  padding: 20px;

  font-family: "NanumSquareExtraBold", sans-serif;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
}

.profileImgWrap {
  display: flex;
}

.profileText {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 15px;
  font-weight: bold;
  color: black;
}

.profileText > div:nth-child(1) {
  font-size: 19px;
}

.profileText > div:nth-child(2) {
  font-size: 10px;
  color: var(--second-gray);
}

.profileText > button {
  font-size: 10px;
  border-radius: 5px;
  padding: 5px;
  background-color: var(--main-blue);
  color: white;
}

.profileText > button:hover {
  background-color: var(--second-blue);
  color: var(--main-blue);
}

.profileImg {
  height: 88px;
  border-radius: 15px;
}
</style>
