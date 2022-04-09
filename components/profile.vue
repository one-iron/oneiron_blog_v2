<template>
  <div class="profileWrap">
    <div class="profileImgWrap">
      <img
        class="profileImg"
        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div class="profileText">
        <div>원철</div>
        <div>프론트엔드 개발자</div>
        <button>알아보기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.profileWrap {
  background-color: white;
  border-radius: 15px;
  height: 130px;
  padding: 20px;

  font-family: "NanumSquare", sans-serif;
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
  font-size: 10px;
  border-radius: 5px;
  padding: 5px;
  background-color: var(--second-blue);
  /* border: 1px solid var(--main-blue); */
  color: var(--main-blue);
}

.profileImg {
  width: 100px;
  border-radius: 15px;
}
</style>
