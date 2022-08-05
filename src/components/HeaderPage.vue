<template>
    <header class="header">
        <div class="logo">
            <div class="logo__icon"></div>
            <a href="/" class="logo__name">Первомайская</a>
        </div>
        <ul class="nav">
            <li class="nav__item"><a href="#/" class="nav__link" :class="{active:isActive==1}" @click="isActive=1">О комплексе</a></li>
            <li class="nav__item"><a href="#/features" class="nav__link" :class="{active:isActive==2}" @click="isActive=2">Особенности</a></li>
            <li class="nav__item"><a href="#/penthouse" class="nav__link" :class="{active:isActive==3}" @click="isActive=3">Пентхаусы</a></li>
            <li class="nav__item"><a href="#/apartment" class="nav__link" :class="{active:isActive==4}" @click="isActive=4">Выбрать квартиру</a></li>
        </ul>
        <div class="burger">
            <a href="tel:88888888888" class="burger__telephone">
                8 888 888 88 88
            </a>
            <div class="burger__menu">
                <img src="../assets/IconBurger.svg" alt="Иконка Бургер Меню" class="burger__menu-image">
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isActive:1,
        }
    }
}
</script>

<style scoped>
.header {
    position: relative;
    z-index: 200;
    padding: 2.5rem 2.5rem 0 2.5rem;

    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;

    display: flex;
    justify-content: space-between;
}

.logo {
    display: flex;
}

.logo__icon {
    width: 7rem;
    height: 7rem;

    background-color: #252626;
}

.logo__name {
    height: fit-content;

    font-size: 1.7rem;
    letter-spacing: 0.03rem;
    color: #262525;

    margin-left: 2.3rem;
}

.nav {
    display: flex;
}

.nav__item {
    margin: 0 2.8rem;

    height: fit-content;
}

.nav__link {
    font-size: 1.2rem;
    letter-spacing: 0.08rem;
    color: #262525;

    position: relative;
}

.nav__link:hover::after {
    content: '';
    background-color: #D88F5E;

    height: 4px;

    position: absolute;
    bottom: -11px;
    left: -6px;
    right: -6px;
}

.active::after {
    content: '';
    background-color: #D88F5E;

    height: 4px;

    position: absolute;

    bottom: -11px;
    left: -6px;
    right: -6px;
}

.burger {
    display: flex;
}

.burger__telephone {
    font-size: 1.7rem;
    color: #262525;

    height: fit-content;

    margin-right: 2.3rem;
}

.burger__menu {
    background-color: #252626;

    width: 7rem;
    height: 7rem;

    display: flex;
}

.burger__menu-image {
    justify-content: center;
    align-content: center;

    margin: auto;
}
</style>
