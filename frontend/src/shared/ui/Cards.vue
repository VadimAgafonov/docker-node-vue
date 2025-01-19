<script setup lang="ts">
    import { ref } from 'vue';

    const className = 'b-cards';
    const open = ref(false);

    defineProps<{
        question: string;
        answer: string;
        num: number;
        del: boolean;
    }>();
    
    const emit = defineEmits<{
        (e: 'send-message', message: string): void
    }>();

    function send() {
        emit('send-message', 'Привет, родитель!');
    }
</script>

<template>
    <div :class="className">
        <button disabled @click="send">Вопрос №{{ num }}</button>

        <div @click="open = !open" :class="[className + '__question', { delete: del ? 'delete' : '' }]">
            {{ num + '. ' + question }}
        </div>
        <div :class="[className + '__answer', {active: open ? 'active' : ''}]">
            {{ answer }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $class-name: 'b-cards';

    .#{$class-name} {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 900px;
        margin-bottom: 10px;

        &__question {
            padding: 20px;
            border: 1px solid #0e0e0e;
            cursor: pointer;

        }

        &__answer {
            display: none;
            padding: 20px;
            border: 1px solid #0e0e0e;
            border-top: 1px solid transparent;
        }

        .active {
            display: block;
        }

        .delete {
            text-decoration: line-through;
        }
    }
</style>