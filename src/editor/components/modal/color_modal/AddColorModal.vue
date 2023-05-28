<template>
    <div class="color-picker-menu">
        <v-card>
            <v-tabs v-model="tab">
                <v-tab value="one">Simple</v-tab>
                <v-tab value="two">Advanced</v-tab>
            </v-tabs>
            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="one">
                        <!-- <v-color-picker width="100%" hide-canvas hide-sliders hide-inputs class="ma-2"
                            :swatches="store.colors" show-swatches>
                        </v-color-picker> -->
                        <div class="custom-color-boxes">
                            <div v-for="n in 100" :key="n" style="background: green;"></div>
                        </div>
                    </v-window-item>
                    <v-window-item value="two">
                        <v-color-picker width="100%" canvas-height="100"></v-color-picker>
                    </v-window-item>
                </v-window>
                <div class="pt-3">
                    <button class="reset-default">Reset to default</button>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
import { useEditorStore } from "@/editor/store/EditorStore";
import { ref } from "vue";

const store = useEditorStore();

const tab = ref(null);

</script>

<style>
/* //// Color Picker Menu //// */
.color-picker-menu {
    top: 0%;
    z-index: 1;
    width: 300px;
    display: none;
    position: absolute;
    border-radius: 3px;
    background: #ffffff;
    transform: translateY(-97%);
    border: 1px solid #cbd6e2;
    box-shadow: 0 1px 24px 0 rgba(0, 0, 0, .08);
}

.color-picker-menu.active {
    display: block;
}

.color-picker-menu .v-card .v-slide-group {
    background-color: rgb(245, 248, 250);
}

.color-picker-menu .v-card .v-slide-group .v-slide-group__container .v-btn {
    border: 0;
    width: 50%;
    font-size: 14px;
    text-align: center;
    border-radius: 0 0 0 0;
    color: rgb(51, 71, 91);
    text-transform: capitalize;
    font-family: LexendDeca-Light;
    border-bottom: 1px solid #cbd6e2;
}

.color-picker-menu .v-card .v-slide-group .v-slide-group__container .v-btn.v-slide-group-item--active {
    background: #ffffff;
    border-color: transparent;
    font-family: LexendDeca-Medium;
}

.color-picker-menu .v-card .v-slide-group .v-slide-group__container .v-btn:first-of-type.v-slide-group-item--active {
    border-right: 1px solid #cbd6e2;
}

.color-picker-menu .v-card .v-slide-group .v-slide-group__container .v-btn:last-of-type.v-slide-group-item--active {
    border-left: 1px solid #cbd6e2;
}

.color-picker-menu .v-card .v-slide-group .v-slide-group__container .v-btn:hover .v-btn__overlay {
    background: none;
}

.color-picker-menu .v-card .v-slide-group .v-slide-group__container .v-btn.v-tab--selected .v-btn__content .v-tab__slider {
    display: none;
}

.color-picker-menu .v-card .v-card-text {
    padding: 16px 12px;
}

.color-picker-menu .v-card .v-card-text .v-color-picker__controls {
    padding: 10px 0 0;
}

.color-picker-menu .v-card .v-card-text .v-color-picker__controls .v-color-picker-preview {
    margin-bottom: 10px;
}

.color-picker-menu .v-card .v-card-text .v-slider.v-input--horizontal .v-input__control {
    min-height: 20px;
}

.color-picker-menu .v-card .v-card-text .v-color-picker-edit__input input {
    margin-bottom: 5px;
}

.color-picker-menu .v-card .v-card-text .v-color-picker.v-sheet {
    border-radius: 0;
    box-shadow: 0 0 0 0 #cecece;
}

.color-picker-menu .v-card .v-card-text .reset-default {
    width: 100%;
    font-size: 12px;
    color: #506e91;
    line-height: 14px;
    padding: 8px 16px;
    background-color: #eaf0f6;
    border: 1px solid #cbd6e2;
    font-family: LexendDeca-Light;
}

.color-picker-menu .v-card .v-card-text .reset-default:hover {
    background: #f5f8fa;
}

.color-picker-menu .v-card .v-card-text .v-window-item .v-sheet {
    margin: 0 !important;
}

.color-picker-menu .v-card .v-card-text .v-window-item .v-sheet .v-color-picker-swatches {
    max-height: 216px !important;
}

.color-picker-menu .v-card .v-card-text .v-window-item .v-sheet .v-color-picker-swatches .v-color-picker-swatches__swatch .v-color-picker-swatches__color {
    width: 25px;
    height: 25px;
    margin: 3px 3px;
    max-height: 25px;
}

.color-picker-menu .v-card .v-card-text .v-window-item .v-sheet .v-color-picker-swatches .v-color-picker-swatches__swatch .v-color-picker-swatches__color>div {
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.2);
    border-radius: inherit;
    border-style: solid;
}

.color-picker-menu .v-card .v-card-text .v-window-item .v-sheet .v-color-picker-swatches>div {
    padding: 0;
}

/* width */
.v-color-picker-swatches::-webkit-scrollbar {
    width: 8px;
}

/* Track */
.v-color-picker-swatches::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
.v-color-picker-swatches::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 15px;
}

/* Handle on hover */
.v-color-picker-swatches::-webkit-scrollbar-thumb:hover {
    background: #555;
}

/* //// Color Picker Menu //// */

/* /// Custom Color Boxes /// */
.custom-color-boxes {
    overflow: auto;
    min-height: 217px;
    max-height: 217px;
}

/* width */
.custom-color-boxes::-webkit-scrollbar {
    width: 8px;
}

/* Track */
.custom-color-boxes::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
.custom-color-boxes::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 15px;
}

/* Handle on hover */
.custom-color-boxes::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.custom-color-boxes div {
    width: 25px;
    height: 25px;
    cursor: pointer;
    position: relative;
    border-radius: 2px;
    margin: 0 4px 0 4px;
    display: inline-block;
}

.custom-color-boxes div.selected::before {
    top: 3px;
    left: 5px;
    content: "\F05E0";
    position: absolute;
    display: inline-block;
    font: normal normal normal 24px/1 "Material Design Icons";
    font-size: inherit;
    text-rendering: auto;
    line-height: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>