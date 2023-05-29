<template>
    <div>
        <v-menu class="personalize-modal link-modal-view" v-model="menu" :close-on-content-click="false" location="top">
            <template v-slot:activator="{ props }">
                <div class="menu-box ml-0 rotate mr-1 menu-box-btn" v-bind="props">
                    <v-icon class="mdi mdi-link mr-0 mt-0"></v-icon>
                    <v-tooltip activator="parent" location="top">Insert link</v-tooltip>
                </div>
            </template>
            <v-card min-width="335">
                <h2>Create link</h2>
                <div class="pl-6 pr-6 mb-3">
                    <label>Link text</label>
                    <v-text-field class="bg-remove" density="compact" variant="solo" single-line
                        hide-details></v-text-field>
                </div>
                <div class="pl-6 pr-6 pb-3">
                    <label>URL</label>
                    <v-text-field class="bg-remove" density="compact" variant="solo" single-line
                        hide-details></v-text-field>
                </div>
                <div class="pl-4 pr-6">
                    <v-checkbox label="Open in new tab"></v-checkbox>
                </div>
                <div class="pl-4 pr-6">
                    <v-checkbox label="Instruct search engines not to follow this link"></v-checkbox>
                </div>
                <div class="pl-6 pr-6 mt-2 custom-button">
                    <button class="apply-btn" disabled>Apply</button>
                    <button>Cancel</button>
                </div>
                <!-- <div class="arrow-icon-bottom"></div> -->
            </v-card>
        </v-menu>
    </div>
</template>

<script>

export default {
    data() {
        return {
            fav: true,
            menu: false,
            message: false,
            hints: true,
        };
    },
};

</script>

<style>
.menu-box-btn {
    width: 26px;
    height: 26px;
    display: flex;
    cursor: pointer;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
}

.menu-box-btn:hover {
    border-color: #cbd6e2;
}

.menu-box:hover .btn-text {
    color: #007a8c;
    text-decoration: underline;
}

.personalize-modal .v-overlay__content .v-card {
    overflow: hidden;
    border-radius: 3px;
    margin-bottom: 20px;
    padding-bottom: 15px;
    background-color: #fff;
    border: 1px solid #cbd6e2;
    box-shadow: 0 5px 24px 0 rgba(0, 0, 0, .08);
}

.link-modal-view .v-overlay__content .v-card::before {
    content: "";
    position: fixed;
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
    top: calc(100% - 31px);
    left: 5px;
    border-top-color: transparent !important;
    border-left-color: transparent !important;
}


.personalize-modal .v-overlay__content .v-card h2 {
    font-size: 16px;
    color: #33475b;
    margin-bottom: 12px;
    padding: 20px 24px 0;
    font-family: LexendDeca-SemiBold;
}

.personalize-modal .v-overlay__content .v-card label {
    display: block;
    font-size: 14px;
    color: #33475b;
    padding: 8px 0 5px 0;
    font-family: LexendDeca-Medium;
}

.personalize-modal .v-overlay__content .v-card .v-input .v-input__details {
    display: none;
}

.bg-remove .v-field {
    font-size: 16px;
    color: #33475b;
    border: 1px solid #cbd6e2;
    box-shadow: 0 0 0 0 #cecece;
    font-family: LexendDeca-Regular;
    background: #f5f8fa !important;
}

.bg-remove .v-field.v-field--focused {
    outline: 0;
    border-color: rgba(0, 208, 228, .5);
    box-shadow: 0 0 4px 1px rgba(0, 208, 228, .3), 0 0 0 1px #00d0e4;
}

.bg-remove .v-field input::placeholder {
    opacity: 0.99;
    color: #5c9dbb;
    font-family: LexendDeca-Light;
}

.bg-remove .v-field .v-icon {
    color: #0091ae !important;
}

.border-bottom {
    border-bottom: 1px solid #cbd6e2;
}

.v-checkbox .v-input__control {
    height: auto;
}

.v-checkbox .v-input__control .v-selection-control {
    min-height: 40px;
}

.v-checkbox .v-input__control .v-selection-control .v-label {
    padding: 0;
    opacity: 1;
    height: auto;
    font-size: 12px;
    color: #33475b;
    font-family: LexendDeca-Light;
}

.v-checkbox .v-input__control .v-selection-control .v-selection-control__wrapper .v-icon {
    color: #0091ae;
}

.custom-button button {
    font-size: 12px;
    color: #506e91;
    line-height: 14px;
    padding: 5px 12px;
    margin-right: 12px;
    border-radius: 3px;
    border: 1px solid #cbd6e2;
    background-color: #eaf0f6;
    font-family: LexendDeca-Light;
}

.custom-button button:hover {
    color: #506e91;
    background-color: #f5f8fa;
}

.custom-button button:focus {
    color: #506e91;
    border-color: #7c98b6;
    background-color: #cbd6e2;
}

.custom-button button.apply-btn {
    color: #fff;
    border-color: #425b76;
    background-color: #425b76;
}

.custom-button button.apply-btn:focus {
    color: #fff;
    border-color: #33475b;
    background-color: #33475b;
}

.custom-button button.apply-btn:hover {
    color: #fff;
    border-color: #516f90;
    background-color: #516f90;
}

.custom-button button.apply-btn:disabled {
    cursor: no-drop;
    color: #b0c1d4 !important;
    border-color: #eaf0f6 !important;
    background-color: #eaf0f6 !important;
}
</style>