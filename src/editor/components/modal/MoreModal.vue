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
                <button>
                    <v-icon class="mdi mdi-format-color-text"></v-icon>
                    <v-icon class="mdi mdi-menu-down"></v-icon>
                </button>
                <button>
                    <v-icon class="mdi mdi-format-color-highlight"></v-icon>
                    <v-icon class="mdi mdi-menu-down"></v-icon>
                </button>
                <button>
                    <v-icon class="mdi mdi-format-list-bulleted"></v-icon>
                </button>
                <button>
                    <v-icon class="mdi mdi-format-list-numbered"></v-icon>
                </button>
                <button>
                    <v-icon class="mdi mdi-format-align-left"></v-icon>
                    <v-icon class="mdi mdi-menu-down"></v-icon>
                </button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            showMore: false
        };
    },
    methods: {
        myMoreMenu: function () {
            this.showMore = !this.showMore;
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
</style>