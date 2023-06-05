<script setup>
import AddColorModal from "@/editor/components/modal/color_modal/AddColorModal.vue";
import TextAlignModal from "@/editor/components/modal/color_modal/TextAlignModal.vue";
import { useEditorStore } from "@/editor/store/EditorStore";
import { ref } from "vue";

const store = useEditorStore();

// const showMore = ref(false);
const addColorPicker = ref(false);
const alignmentMenu = ref(false);

// const fav = ref(true);
const menu = ref(false);
// const message = ref(false);
// const hints = ref(true);

// const myMoreMenu = () => {
//     showMore.value = !showMore.value;
// }
const colorPickerAdd = () => {
    addColorPicker.value = !addColorPicker.value;
}
const alignmentMenuBox = () => {
    alignmentMenu.value = !alignmentMenu.value;
}

</script >

<template>
    <div class="position-relative">
        <v-menu v-model="menu" :close-on-content-click="false" location="top">
            <template v-slot:activator="{ props }">
                <div class="menu-box" v-bind="props">
                    <span class="btn-text">More</span>
                    <v-icon class="mdi mdi-menu-down"></v-icon>
                </div>
            </template>
            <div class="more-menu-wrapper">
                <div class="mr-2">
                    <v-select @update:modelValue="store.updateFontFamily" :model-value="store.activeFontFamily"
                        class="fonts" label="" placeholder="Sans Serif" :items="store.fontFamilies"
                        v-modal="store.selectedFontFamily" variant="outlined">
                    </v-select>
                    <v-tooltip activator="parent" location="top">Font</v-tooltip>
                </div>
                <div class="mr-2">
                    <v-select @update:modelValue="store.updateFontSize" :model-value="store.activeFontSize"
                        class="size-fonts" label="" placeholder="8" :items="store.fontSizes"
                        v-modal="store.selectedFontSize" variant="outlined">
                    </v-select>
                    <v-tooltip activator="parent" location="top">Size</v-tooltip>
                </div>
                <div class="color-menu">
                    <button @click="colorPickerAdd()">
                        <v-icon class="mdi mdi-format-color-text"></v-icon>
                        <v-icon class="mdi mdi-menu-down"></v-icon>
                    </button>
                    <AddColorModal :class="{ active: addColorPicker }" />
                    <button @click="colorPickerAdd()">
                        <v-icon class="mdi mdi-format-color-highlight"></v-icon>
                        <v-icon class="mdi mdi-menu-down"></v-icon>
                    </button>
                    <AddColorModal :class="{ active: addColorPicker }" />
                    <button>
                        <v-icon class="mdi mdi-format-list-bulleted"></v-icon>
                        <v-tooltip activator="parent" location="top">Unordered list</v-tooltip>
                    </button>
                    <button>
                        <v-icon class="mdi mdi-format-list-numbered"></v-icon>
                        <v-tooltip activator="parent" location="top">Ordered list</v-tooltip>
                    </button>
                    <button @click="alignmentMenuBox()">
                        <v-icon class="mdi mdi-format-align-left"></v-icon>
                        <v-icon class="mdi mdi-menu-down"></v-icon>
                        <v-tooltip activator="parent" location="top">Align</v-tooltip>
                    </button>
                    <TextAlignModal :class="{ active: alignmentMenu }" />
                </div>
            </div>
        </v-menu>
    </div>
</template >

<style>
.more-menu-wrapper {
    left: 0;
    top: -70px;
    z-index: 1;
    padding: 8px;
    display: flex;
    min-width: 481px;
    position: absolute;
    border-radius: 3px;
    align-items: center;
    background-color: #fff;
    border: 1px solid #cbd6e2;
    box-shadow: 0 1px 24px 0 rgba(0, 0, 0, .08);
}

.more-menu-wrapper::before {
    content: "";
    position: absolute;
    pointer-events: none;
    border-width: 1px;
    border-style: solid;
    border-right-color: rgb(203, 214, 226);
    border-bottom-color: rgb(203, 214, 226);
    border-image: initial;
    clip-path: polygon(100% 100%, 0px 100%, 100% 0px);
    border-top-left-radius: 100%;
    width: 20px;
    height: 20px;
    background-color: inherit;
    transform: rotate(45deg);
    top: calc(100% - 10px);
    left: 15.4121px;
    border-top-color: transparent !important;
    border-left-color: transparent !important;
}

.more-menu-wrapper .v-input {
    width: auto;
}

.more-menu-wrapper .v-input:focus-visible {
    outline: none !important;
}

.more-menu-wrapper .v-input:focus {
    outline: none !important;
}

.more-menu-wrapper .v-input.fonts {
    width: 135px;
    min-width: 135px;
    max-width: 135px;
}

.size-fonts {
    width: 70px;
    min-width: 70px;
    max-width: 70px;
}

.more-menu-wrapper .v-input .v-input__details {
    display: none;
}

.more-menu-wrapper .v-input .v-field {
    max-height: 34px;
    color: #506e91;
    background-color: #eaf0f6;
}

.more-menu-wrapper .v-input .v-field .v-field__field {
    max-height: 34px;
}

.more-menu-wrapper .v-input .v-field .v-field__input {
    min-height: 34px;
    padding: 7px 0 3px 0;
}

.more-menu-wrapper .v-input .v-field .v-field__input .v-select__selection-text {
    border: 0;
    width: 100%;
    height: auto;
    display: block;
    font-size: 14px;
    min-width: 90px;
    max-width: 90px;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.more-menu-wrapper .v-input .v-field .v-label {
    font-size: 14px;
}

.more-menu-wrapper .v-input .v-field .v-select__selection {
    width: 100%;
    padding-left: 10px;
}

.color-menu button {
    width: auto;
    height: 34px;
    color: #425b76;
    border-radius: 4px;
    padding: 2px 4px 2px 4px;
    border: 1px solid transparent;
}

.color-menu button.is-active {
    background: rgb(203, 214, 226);
    border: 1px solid rgb(153, 172, 194);
    transition: all 150ms ease-out 0s;
}

.color-menu button:hover {
    border-color: #cbd6e2;
    background-color: transparent;
}

.more-menu-wrapper .v-input .v-field .v-field__input input::placeholder {
    top: -2px;
    opacity: 1;
    font-size: 14px;
    position: relative;
    padding: 0 0 0 10px;
    color: #506e91 !important;
}

.menu-box:hover .btn-text {
    color: #007a8c;
    text-decoration: underline;
}
</style>