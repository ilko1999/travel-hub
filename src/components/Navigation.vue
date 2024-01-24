<template>
  <div class="flex justify-between p-2">
    <div>
      <Popover>
        <template v-slot:trigger>
          <div
            class="w-fit p-2 rounded-md bg-primary flex flex-row-reverse gap-2"
          >
            <p class="text-md text-primary-foreground">TravelHub</p>
            <Car class="text-primary-foreground" />
          </div>
        </template>
        <template v-slot:content>
          <div class="bg-primary w-10 h-10"></div>
        </template>
      </Popover>
    </div>
    <Popover>
      <template v-slot:trigger>
        <Avatar />
      </template>

      <template v-slot:content
        ><Card>
          <BaseButton :loading="false" :left-icon="Cog">Settings</BaseButton>
        </Card>
      </template>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Car, Cog } from 'lucide-vue-next';
import Avatar from './Avatar.vue';
import Popover from './Popover.vue';
import Card from './Card.vue';
import BaseButton from './base/BaseButton.vue';
</script>
