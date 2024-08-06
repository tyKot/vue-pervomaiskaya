<template>
  <div class="main-content">
    <section class="side-section">
      <aside class="side-block">
        <ul class="nav">
          <li class="nav__item"><a class="nav__link" :class="{active:isActive==1}" @click="isActive=1">Архитектура</a></li>
          <li class="nav__item"><a class="nav__link" :class="{active:isActive==2}" @click="isActive=2">Благоустройство</a></li>
          <li class="nav__item"><a class="nav__link" :class="{active:isActive==3}" @click="isActive=3">Безопасность</a></li>
          <li class="nav__item"><a class="nav__link" :class="{active:isActive==4}" @click="isActive=4">Инженерия</a></li>
          <li class="nav__item"><a class="nav__link" :class="{active:isActive==5}" @click="isActive=5">Инфраструктура</a></li>
          <li class="nav__item"><a class="nav__link" :class="{active:isActive==6}" @click="isActive=6">Транспортная доступность</a></li>
        </ul>
      </aside>
    </section>
      <section class="main-section">
        <div class="main-block" v-for="block in blocks" :key="block.id">
          <Transition name="appear">
            <div class="content-block" v-if="block.id==isActive">
                <div class="text-block">
                  <h1 class="text-block__header">{{ block.header }}</h1>
                  <p class="text-block__body">{{ block.text }} <a href=""><img class="text-block__more-detailed"
                        src="../assets/LinkDetail.svg" alt="Подбронее"></a></p>
                  <div class="pagination">{{ block.id }}/6</div>
                </div>
              <div class="main-block__image">
                <img :src="block.src" alt="">
              </div>
            </div>
          </Transition>
        </div>
      </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 1,
      blocks: [
        {
          id: 1,
          header: "Архитектура",
          text: "Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни",
          src: "block-image1.png",
        },
        {
          id: 2,
          header: "Благоустройство",
          text: "Запроектированные большие окна, которые пропускают много солнечного света, наполнят Ваши квартиры теплотой и уютом",
          src: "block-image5.png",
        },
        {
          id: 3,
          header: "Безопастность",
          text: "Современный двор европейского уровня — территория для детей, игр на свежем воздухе и вечерних",
          src: "block-image2.png",
        },
        {
          id: 4,
          header: "Инженерия",
          text: "Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни",
          src: "block-image4.png",
        },
        {
          id: 5,
          header: "Инфраструктура",
          text: "Прекрасный вариант для тех, кто предпочитает жить в спокойном районе среди интеллигенции, но при этом чувствовать ритм мегаполиса",
          src: "block-image3.png",
        },
        {
          id: 6,
          header: "Транспортная доступность",
          text: "Жилой комплекс «Первомайска» расположен в престижном Академическом районе",
          src: "block-image6.png",
        },
      ]
    }
  },
  methods: {
    
  }
}

</script>

<style scoped>
.appear-enter-active,
.appear-leave-active {
  transition: transform .5s ease-in-out,
              opacity .5s ease-in-out;
  position: absolute;
}

.appear-enter-from{
  transform: translateY(-120px);
  opacity: 0;
}
/* .appear-enter-to{
  transform: translateY(120px);
  opacity: 1;
} */
.appear-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.appear-leave-to {
  transform: translateY(120px);
  opacity: 0;
}


.main-content {
  z-index: 0;

  margin-top: -3rem;
  padding: 0 6rem;

  display: flex;
  justify-content: space-between;

  min-height: 80%;
}

.side-section {
  background: #fff;
  width: 20%;
  height: 76rem;

  display: flex;
  align-items: center;
}


.nav__item {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 1.5rem;
  letter-spacing: 0.06rem;

  position: relative;
  z-index: 1;

  margin: 3.2rem 0;

  width: fit-content;

  transition: all .1s linear;
}

.nav__item {
  cursor: pointer;
}

.nav__item:hover,
.active {
  text-transform: uppercase;
  font-weight: 700;
  color: #262525;
  font-size: 1.4rem;
}

.nav__item::after{
  content: '';
  transition: right .2s ease-in;

  position: absolute;
  z-index: -1;
  bottom: -1px;
  left: -4px;
  right: 106%;

  background-color: #EBD8CC;
  height: 9px;
}

.nav__item:hover::after {
  right: -4px;
}

.nav__item {
  color: #505050;
}

.active::after{
  content: '';
  transition: right .2s ease-in;

  position: absolute;
  z-index: -1;
  bottom: -1px;
  left: -4px;
  right: -4px;

  background-color: #EBD8CC;
  height: 9px;
}

.main-section {
  width: 80%;
  position: relative;
}

.content-block {
  background-color: #F0F0F0;
  display: flex;
  gap: 8rem;
  justify-content: space-between;
}

.text-block {
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-left: 17rem;
  margin-top: 15rem;

  opacity: 1;
}

.text-block__header {
  font-family: 'Gilroy';
  font-weight: 700;
  font-size: 4.4rem;
  letter-spacing: -0.0255199px;
  text-transform: uppercase;
  color: #262525;
}

.text-block__body {
  margin-top: 4rem;
  margin-bottom: 15rem;
  width: 435px;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 3rem;
  letter-spacing: -0.022px;
  color: #262525;
  
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.text-block__more-detailed {
  position: absolute;

  margin-top: 0.2rem;
  margin-left: 0.6rem;
}

.pagination {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 20px;
  text-align: left;
  color: #505050;
}

.main-block__image {
  /* height: 100%; */
  object-fit: cover;
}
</style>
