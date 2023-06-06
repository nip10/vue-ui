<script lang="ts">
export default {
  name: 'XTabs',
};
</script>

<script setup lang="ts">
import { TabContent, TabIndicator, TabList, Tabs, TabTrigger } from '@ark-ui/vue';
</script>
<template>
  <Tabs>
    <TabList>
      <TabTrigger value="react">
        <button>React</button>
      </TabTrigger>
      <TabTrigger value="solid">
        <button>Solid</button>
      </TabTrigger>
      <TabTrigger value="vue">
        <button>Vue</button>
      </TabTrigger>
    </TabList>
    <TabContent value="react"> A JavaScript library for building user interfaces </TabContent>
    <TabContent value="solid">
      Simple and performant reactivity for building user interfaces.
    </TabContent>
    <TabContent value="vue">
      An approachable, performant and versatile framework for building web user interfaces.
    </TabContent>
  </Tabs>
</template>
