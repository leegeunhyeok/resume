<template>
  <div class="dock">
    <div class="dock__panel">
      <!-- Left -->
      <div>
        <span
          class="power-menu"
          @click="showDockMenu = !showDockMenu"
          @touchstart.passive="() => null"
        />
      </div>
      <!-- Right -->
      <div>
        <div class="background">
          <Text :content="time" />
        </div>
      </div>
    </div>
    <transition name="dock-menu">
      <div class="dock__menu" v-show="showDockMenu">
        <Text class="dock__menu__title" content="반갑습니다" size="large" bold />
        <div class="dock__menu__row">
          <div class="dock__menu__item weather">
            <div>
              <Text :content="name" size="small" />
            </div>
            <div class="common">
              <Text content="36.5℃" size="large" bold />
              <Text content="Happy" size="small" bold />
            </div>
            <div class="week">
              <span class="sunny"></span>
              <span class="sunny"></span>
              <span class="sunny"></span>
              <span class="sunny"></span>
              <span class="sunny"></span>
            </div>
          </div>
          <div class="dock__menu__item memo">
            <header />
            <div class="line" />
            <Text content="빌드 정보입니다" />
            <Text class="date" color="secondary" :content="`${RELEASE_DATE} (${VERSION})`" />
          </div>
          <div class="dock__menu__item half calendar">
            <Text :content="currentDateAndWeekDay.weekDay" />
            <Text size="large" :content="currentDateAndWeekDay.date" />
            <Text size="small" :content="hobby[0]" class="red" v-if="hobby[0]" />
            <Text size="small" :content="hobby[1]" class="green" v-if="hobby[1]" />
          </div>
          <div class="dock__menu__item half darkmode" @click="toggleDarkmode" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue';
import { VERSION, RELEASE_DATE } from '@/common';
import { useStore } from '@/store';
import { GetterTypes } from '@/store/getter';
import { MutationTypes } from '@/store/mutation';
import Text from '@/components/atoms/Text.vue';

const getDayString = (day: number) => {
  switch (day) {
    case 0:
      return '일요일';
    case 1:
      return '월요일';
    case 2:
      return '화요일';
    case 3:
      return '수요일';
    case 4:
      return '목요일';
    case 5:
      return '금요일';
    case 6:
      return '토요일';
  }
};

export default defineComponent({
  name: 'Dock',
  components: { Text },
  props: {
    name: {
      type: String,
      required: true,
    },
    hobby: {
      type: Array as PropType<string[]>,
      default: [],
    },
  },
  setup() {
    const store = useStore();
    const showDockMenu = ref(false);

    const time = computed(() => store.getters[GetterTypes.TIME]);
    const currentDateAndWeekDay = computed(() => {
      const currentTime = store.state.date;
      const date = currentTime.getDate();
      const weekDay = getDayString(currentTime.getDay());
      return { date, weekDay };
    });

    const themeIsDark = computed(() => store.state.isDark);
    const toggleDarkmode = () => store.commit(MutationTypes.SET_DARKMODE, !themeIsDark.value);

    return { time, showDockMenu, currentDateAndWeekDay, toggleDarkmode, VERSION, RELEASE_DATE };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

$menu-padding: 0.5rem;
$menu-item-size: 16rem;

@mixin item-padding {
  padding: 0.5rem;
}

@include theme {
  .dock {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: $dock-height;
    z-index: elevation(middle);

    &__panel {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      background-color: rgba(t(primary), 0.5);
      backdrop-filter: blur($blur);
      border: 1px solid rgba(t(primary), 0.4);
      padding: 0 1.5rem;

      & .background {
        background-color: rgba(t(primary), 0.4);
        padding: 0.5rem 1rem;
        border-radius: 2rem;
      }
    }

    &__menu {
      position: absolute;
      bottom: $dock-height + $menu-padding;
      left: $menu-padding;
      background-color: rgba(t(primary), 0.4);
      backdrop-filter: blur($blur);
      border-radius: $radius;
      padding: 1rem;

      &__title {
        color: #fff;
      }

      &__row {
        margin-top: $menu-padding;
        width: 100%;
      }

      &__item {
        position: relative;
        width: $menu-item-size;
        margin-bottom: 1rem;
        border-radius: $radius;
        overflow: hidden;
        background-color: t(pure);

        &.half {
          width: $menu-item-size / 2 - $menu-padding;
          height: $menu-item-size / 2 - $menu-padding;
          margin-bottom: 0;
          float: left;

          &:nth-last-child(1) {
            margin-left: 1rem;
          }
        }

        // Weather widget
        &.weather {
          background: #3188b1;
          background: linear-gradient(180deg, #3188b1, #62a8ca);
          @include item-padding;

          & > div {
            display: flex;
            width: 100%;

            &.common {
              justify-content: space-between;
            }

            &.week {
              justify-content: space-around;
              margin-top: 8px;
            }
          }

          & p {
            display: inline-block;
            color: #fff !important;

            &.bottom {
              vertical-align: bottom;
            }
          }

          & span.sunny {
            $size: ($menu-item-size - $menu-padding * 2) / 8;
            display: block;
            width: $size;
            height: $size;
            background: url('~@/assets/sun.png');
            background-repeat: no-repeat;
            background-size: $size * 0.8;
            background-position: $size * 0.1;
            padding-top: $size;
            margin-bottom: 1rem;

            &::before {
              content: '36.5℃';
              font-size: 0.7rem;
              color: #ffffff;
            }
          }
        }

        // Memo widget
        &.memo {
          height: $menu-item-size / 2 - $menu-padding;

          & > header {
            height: 25%;
            background: #ffd600;
            background: linear-gradient(180deg, #ffd600, #fbbd00);
          }

          & > div.line {
            width: 100%;
            margin-top: 2px;
            border-bottom: 2px dotted $gray;
          }

          & > p {
            margin: 0;
            padding: $menu-padding;
            padding-bottom: 0;

            &.date {
              padding-top: 0;
            }
          }
        }

        // Calendar
        &.calendar {
          padding: $menu-padding;

          & > p.text.small {
            padding-left: 0.5rem;
          }

          & > * {
            position: relative;

            &::after {
              content: '';
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              float: left;
              width: 3px;
              height: 0.8rem;
              border-radius: 10px;
              margin-right: 0.2rem;
            }
          }

          & > *.red::after {
            background-color: $red;
          }
          & > *.green::after {
            background-color: $green;
          }
        }

        &.darkmode {
          cursor: pointer;
          background-color: t(pure);
          font-size: 1.4rem;
          line-height: $dock-height * 2.6;
          font-weight: 900;
          background-size: $menu-item-size / 4;
          background-position: center;
          background-repeat: no-repeat;
          transition: background-image 0.3s;

          @at-root body.light .darkmode {
            background-image: url('~@/assets/dark.svg');
          }

          @at-root body.dark .darkmode {
            background-image: url('~@/assets/light.svg');
          }
        }
      }
    }
  }

  span.power-menu {
    cursor: pointer;
    display: block;
    border-radius: 50%;
    width: $dock-height * 0.5;
    height: $dock-height * 0.5;
    transition: background-color 0.2s;
    animation: breath 1s alternate infinite;
    border: 0.5rem solid t(primary);

    &:hover,
    &:active {
      background-color: rgba(t(primary), 0.5);
    }
  }
}

@keyframes breath {
  100% {
    transform: scale(1.1);
  }
}

// Dock menu transition
.dock-menu-enter-active,
.dock-menu-leave-active {
  transition: transform 0.5s ease;
}

.dock-menu-enter-from,
.dock-menu-leave-to {
  transform: translateX(-110%);
}
</style>
