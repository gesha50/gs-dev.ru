<template>
  <div class="topBlock row items-center">
    <div class="topBlock__left col-12 col-sm-5">
      <div class="topBlock__topText">{{ $t('hello') }}</div>
      <div class="topBlock__name">{{ $t('name') }}</div>
      <div class="topBlock__works">{{ $t('work') }}</div>
      <q-btn
        to="/contact"
        class="glossy q-mt-lg q-px-md q-py-xs q-mb-sm"
        rounded
        color="deep-purple-8"
        :label="$t('btn.talk')"
      />
    </div>
    <div class="topBlock__imageBlock col-12 col-sm-7">
      <q-img
        src="~assets/img/site-build.png"
        spinner-color="white"
        class="topBlock__image"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
@import '../css/app';
.topBlock {
  @media (max-width: $breakpoint-sm-max) {
    flex-wrap: wrap-reverse;
  }
  &__left {
    font-family: 'RedHatDisplay-BlackItalic', serif;
  }
  &__topText {
    font-size: 20px;
    font-weight: 500;
  }
  &__name {
    font-size: 40px;
    font-weight: bold;
  }
  &__works {
    font-size: 24px;
    font-weight: normal;
  }
  &__imageBlock {
  }
  &__image {
    max-width: 500px;
    max-height: 500px;
    box-shadow: 0px 0px 76px 33px rgba(81, 45, 148, 0.5);
    //box-shadow:  19px -19px 48px $my_purple,
    //-19px 19px 48px $my_pink;
  }
}
</style>
