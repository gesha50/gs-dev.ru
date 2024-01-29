<template>
  <q-page padding>
    <index-main-dev-block />
    <service-block />
    <portfolio-block />
    <skills-block />
    <certificate-block />
    <contact-block />
  </q-page>
</template>

<script setup lang="ts">
import IndexMainDevBlock from 'components/IndexMainDevBlock.vue';
import ServiceBlock from 'components/ServiceBlock.vue'
import PortfolioBlock from 'components/PortfolioBlock.vue'
import SkillsBlock from 'components/SkillsBlock.vue'
import CertificateBlock from 'components/CertificateBlock.vue'
import ContactBlock from 'components/ContactBlock.vue'

</script>
