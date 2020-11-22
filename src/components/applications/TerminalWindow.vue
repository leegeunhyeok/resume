<template>
  <Window @close="$emit('close')" :padding="false">
    <template v-slot:default>
      <div class="termial" ref="terminal">
        <p>Last login: {{ new Date().toUTCString() }} on console</p>
        <div ref="input">
          $ <input type="text" spellcheck="false" v-model="command" @keydown.enter="submit" />
        </div>
      </div>
    </template>
  </Window>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { useStore } from '@/store';
import { BaseTemplate } from '@/types';

import Window from '@/components/organisms/Window.vue';

const getCommandResponse = (
  command: string,
  version: string,
  name: string,
  email: string,
): string[] => {
  switch (command) {
    case 'help':
      return [
        `Terminal v${version}`,
        '',
        'help - show all commands',
        'whoami - show information about me',
        'date - show current time',
        'exit - close terminal window',
      ];

    case 'whoami':
      return [`Name: ${name}`, `E-mail: ${email}`];

    case 'date':
      return [new Date().toUTCString()];

    case 'exit':
      return ['@exit'];

    default:
      return ['command not found'];
  }
};

export default defineComponent({
  name: 'AboutWindow',
  components: { Window },
  props: {
    template: Object as PropType<BaseTemplate>,
  },
  emits: ['close'],
  setup(_, context) {
    const { state } = useStore();
    const terminal = ref<HTMLElement | null>(null);
    const input = ref<HTMLElement | null>(null);
    const command = ref<string>('');

    const submit = () => {
      const currentCommand = command.value.trim();
      command.value = '';

      if (terminal.value && input.value) {
        const p = document.createElement('p');
        p.textContent = '$ ' + currentCommand;
        p.style.margin = '0';
        terminal.value.insertBefore(p, input.value);

        [
          ...getCommandResponse(
            currentCommand,
            state._version,
            state.template.name,
            state.template.email,
          ),
          '',
        ].forEach(response => {
          if (response === '@exit') {
            context.emit('close');
            return;
          }

          let el = null;
          if (response) {
            el = document.createElement('p');
            el.textContent = response;
            el.style.margin = '0';
          } else {
            el = document.createElement('br');
          }

          if (terminal.value) {
            terminal.value.insertBefore(el, input.value);
          }
        });
      }
    };

    return { terminal, input, command, submit };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

$terminal-background: #282828;

.termial {
  background-color: $terminal-background;
  color: #fff;
  font-family: Consolas, monaco, monospace;
  width: 100%;
  height: 100%;
  padding: 1rem;
  padding-top: 3.5rem;

  & > p {
    margin: 0;
  }

  & > div {
    width: 100%;

    input {
      outline: none;
      border: 0;
      background-color: lighten($terminal-background, 10%);
      padding: 4px 8px;
      color: #fff;
      border-radius: 5px;
    }
  }
}
</style>
