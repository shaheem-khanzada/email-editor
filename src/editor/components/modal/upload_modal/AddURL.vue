<template>
    <div class="url-wrapper" :class="toggleUrlModal && 'active'">
        <v-list-item class="nav-header">
            <div class="d-flex align-center">
                <span class="back-icon" @click="store.toogleState('toggleUrlModal')">
                    <v-icon class="mdi mdi-chevron-left"></v-icon>
                </span>
                <h3>Insert from URL</h3>
            </div>
            <span class="icon-bg" @click.stop="drawer = !drawer">
                <v-icon class="mdi mdi-window-close"></v-icon>
            </span>
        </v-list-item>
        <div class="content-area">
            <label>Image URL</label>
            <div class="field-btn">
                <v-text-field class="bg-remove" density="compact" variant="solo" single-line hide-details
                    placeholder="Type an image URL">
                </v-text-field>
                <v-btn>Preview</v-btn>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref } from "vue";
import { useEditorStore } from "@/editor/store/EditorStore";
const store = useEditorStore()
const props = defineProps(['editor']);

</script>

<style>
/* /// URL Box Styling /// */
.url-wrapper {
    top: 0;
    width: 590px;
    position: fixed;
    min-height: 100vh;
    transition: all 0.5s ease;
    transform: translateX(100%);
}

.url-wrapper.active {
    transform: translateX(0);
    transition: all 0.5s ease;
}

.url-wrapper .back-icon {
    display: flex;
}

.url-wrapper .nav-header {
    padding: 14px 25px 14px 20px !important;
}

.url-wrapper .content-area {
    padding: 30px 40px 0;
    background: #ffffff;
    min-height: calc(100vh - 68px);
}

.url-wrapper .content-area label {
    display: block;
    font-size: 14px;
    color: #33475b;
    margin-bottom: 8px;
    font-family: LexendDeca-Medium;
}

.url-wrapper .content-area .field-btn {
    display: flex;
    align-items: center;
}

.url-wrapper .content-area .field-btn .v-btn {
    font-size: 14px;
    color: #506e91;
    min-height: 42px;
    margin-left: 12px;
    letter-spacing: inherit;
    text-transform: capitalize;
    background-color: #eaf0f6;
    border: 1px solid #cbd6e2;
    box-shadow: 0 0 0 0 #cecece;
    font-family: LexendDeca-Medium;
}

/* /// URL Box Styling /// */
</style>