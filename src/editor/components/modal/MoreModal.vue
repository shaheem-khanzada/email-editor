<template>
    <div class="position-relative">
        <div class="menu-box" @click="myMoreMenu()">
            More
            <v-icon class="mdi mdi-menu-down"></v-icon>
        </div>
        <div class="more-menu-wrapper" :class="{ active: showMore }">
            <v-select class="fonts" label="" :items="['Sans Serif', 'Serif', 'Monospace', 'Georgia', 'Tahoma', 'Verdana']"
                variant="outlined"></v-select>
            <v-select class="size-fonts" label="" :items="[1, 2, 3, 4, 5, 6, 7, 8, 9]" variant="outlined"></v-select>
            <div class="color-menu">
                <button @click="colorPickerAdd()">
                    <v-icon class="mdi mdi-format-color-text"></v-icon>
                    <v-icon class="mdi mdi-menu-down"></v-icon>
                </button>
                <AddColorModal :class="{ active: addColorPicker }" />
                <button @click="colorPickerEdit()">
                    <v-icon class="mdi mdi-format-color-highlight"></v-icon>
                    <v-icon class="mdi mdi-menu-down"></v-icon>
                </button>
                <EditColorModal :class="{ active: editColorPicker }" />
                <button>
                    <v-icon class="mdi mdi-format-list-bulleted"></v-icon>
                </button>
                <button>
                    <v-icon class="mdi mdi-format-list-numbered"></v-icon>
                </button>
                <button @click="alignmentMenuBox()">
                    <v-icon class="mdi mdi-format-align-left"></v-icon>
                    <v-icon class="mdi mdi-menu-down"></v-icon>
                </button>
                <TextAlignModal :class="{ active: alignmentMenu }" />
            </div>
        </div>
    </div>
</template>

<script>
import AddColorModal from "@/editor/components/modal/color_modal/AddColorModal.vue"
import EditColorModal from "@/editor/components/modal/color_modal/EditColorModal.vue"
import TextAlignModal from "@/editor/components/modal/color_modal/TextAlignModal.vue"
export default {
    components: { AddColorModal, EditColorModal, TextAlignModal },
    data() {
        return {
            showMore: false,
            addColorPicker: false,
            editColorPicker: false,
            alignmentMenu: false,
            tab: null,
        };
    },
    methods: {
        myMoreMenu: function () {
            this.showMore = !this.showMore;
        },
        colorPickerAdd: function () {
            this.addColorPicker = !this.addColorPicker;
        },
        colorPickerEdit: function () {
            this.editColorPicker = !this.editColorPicker;
        },
        alignmentMenuBox: function () {
            this.alignmentMenu = !this.alignmentMenu;
        }
    }
};

</script>

<style>
.more-menu-wrapper {
    left: 10px;
    top: -70px;
    z-index: 1;
    padding: 8px;
    display: none;
    min-width: 460px;
    position: absolute;
    border-radius: 3px;
    align-items: center;
    background-color: #fff;
    border: 1px solid #cbd6e2;
    box-shadow: 0 1px 24px 0 rgba(0, 0, 0, .08);
}

.more-menu-wrapper.active {
    display: flex;
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
    margin-right: 8px;
}

.size-fonts {
    width: 70px;
    min-width: 70px;
    max-width: 70px;
    margin-right: 8px;
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
    font-size: 14px;
    text-align: left;
    display: inline-block;
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

.color-menu button:hover {
    border-color: #cbd6e2;
}

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
    padding: 16px;
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
</style>