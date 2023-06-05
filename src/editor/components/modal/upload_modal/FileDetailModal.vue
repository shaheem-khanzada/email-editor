<template>
    <div class="file-detail-wrapper">
        <v-list-item class="nav-header">
            <div class="d-flex align-center">
                <span class="back-icon" @click="store.toogleState('toogleFileDetail')">
                    <v-icon class="mdi mdi-chevron-left"></v-icon>
                </span>
                <h3>File details</h3>
            </div>
            <span class="icon-bg" @click.stop="store.toogleState('toogleDrawer')">
                <v-icon class="mdi mdi-window-close"></v-icon>
            </span>
        </v-list-item>
        <div class="content-area">
            <div class="avatar-name-field">
                <input type="text" value="avatar-four">
                <v-icon class="mdi mdi-marker"></v-icon>
            </div>
            <!-- // -->
            <div class="image-view-box mb-4">
                <img src="https://us.v-cdn.net/6030023/uploads/5GRA3TTZ4YFB/image.png" alt="">
            </div>
            <!-- // -->
            <v-menu class="label-details" open-on-hover location="top" :close-on-content-click="false">
                <template v-slot:activator="{ props }">
                    <label class="label-text">
                        Alt text
                        <v-icon class="mdi mdi-information" v-bind="props"></v-icon>
                    </label>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-title>
                            <p>
                                Used as <span>Alt</span> text on CMS pages. Alt text improves your website's
                                accessibility and search engine ranking. The file name will be used if not provided.
                                <a href="">
                                    Learn more
                                    <v-icon class="mdi mdi-open-in-new"></v-icon>
                                </a>
                            </p>
                        </v-list-item-title>
                    </v-list-item>
                    <div class="top-arrow"></div>
                </v-list>
            </v-menu>
            <!-- // -->
            <ShortDescription />
            <!-- // -->
            <div class="d-flex flex-column">
                <label class="label-text">Dimensions: 215 x 215 px</label>
                <label class="label-text">Type: png</label>
                <label class="label-text mb-2">Size: 5 KB</label>
                <!-- // -->
                <v-menu class="label-details" open-on-hover location="top" :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                        <label class="label-text d-flex align-center mb-2">
                            Image Optimization
                            <v-icon class="mdi mdi-information ml-2" v-bind="props"></v-icon>
                            <!-- <v-select close-on-select class="custom-select-size ml-2" return-object item-title="name"
                                item-value="name" :items="store.defaultSizeImages" variant="solo"
                                v-model="store.activeSizeImages">
                                <template v-slot:item="{ item, props: { onClick } }">
                                    <div @click="onClick" class="select-btn-size">
                                        {{ item.value.name }}
                                        <p> {{ item.value.sizeParagraph }}</p>
                                    </div>
                                </template>
                            </v-select> -->
                            <v-menu class="personalize-modal" v-model="menuDefaultSize" location="top">
                                <template v-slot:activator="{ props }">
                                    <div class="menu-box ml-2" v-bind="props">
                                        <span class="btn-text">Default</span>
                                        <v-icon class="mdi mdi-menu-down ma-0"></v-icon>
                                    </div>
                                </template>
                                <v-card min-width="220" class="select-folder image-size-modal">
                                    <div class="top-arrow"></div>
                                    <v-list>
                                        <div class="content-value">
                                            <span title="High">High</span>
                                            <p>Better image quality</p>
                                        </div>
                                        <div class="content-value">
                                            <span title="Default">Default</span>
                                            <p>Balanced for speed and quality</p>
                                        </div>
                                        <div class="content-value">
                                            <span title="Low">Low</span>
                                            <p>Faster load times</p>
                                        </div>
                                    </v-list>
                                </v-card>
                            </v-menu>
                        </label>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>
                                <p>
                                    Optimize this image for faster load times or better image quality when it's
                                    resized on a page, email, or blogpost.
                                </p>
                            </v-list-item-title>
                        </v-list-item>
                        <div class="top-arrow"></div>
                    </v-list>
                </v-menu>
                <!-- // -->
                <v-menu class="label-details" open-on-hover location="top" :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                        <label class="label-text d-flex align-center mb-2">
                            File URL visibility: Public - noindex
                            <v-icon class="mdi mdi-information ml-2" v-bind="props"></v-icon>
                            <a href="" class="ml-2 link-style">
                                Change
                                <v-icon class="mdi mdi-open-in-new"></v-icon>
                            </a>
                        </label>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>
                                <p>
                                    File URL is publicly accessible, and search engines are instructed not to index
                                    it.
                                </p>
                            </v-list-item-title>
                        </v-list-item>
                        <div class="top-arrow"></div>
                    </v-list>
                </v-menu>
                <!-- // -->
                <a href="" class="link-style mb-4">
                    Open in a new window
                    <v-icon class="mdi mdi-open-in-new"></v-icon>
                </a>
                <!-- // -->
                <div class="move-btn-row mb-4">
                    <v-menu class="personalize-modal" v-model="menuMove" :close-on-content-click="false" location="top">
                        <template v-slot:activator="{ props }">
                            <v-btn variant="text" class="mr-3 move-btn" v-bind="props">Move</v-btn>
                        </template>
                        <v-card min-width="350" class="select-folder move-select-folder">
                            <div class="top-arrow"></div>
                            <v-list>
                                <v-list-item>
                                    Select folder
                                </v-list-item>
                                <Tree class="tree-wrapper" @nodeClick="onNodeClick" :nodes="store.folders"
                                    :selectedFolderId="selectedFolderId" :use-checkbox="false" :gap="0" :use-icon="true">
                                    <template #iconActive>
                                        <slot name="iconActive">
                                            <v-icon class="mdi mdi-folder"></v-icon>
                                        </slot>
                                    </template>
                                    <template #iconInactive>
                                        <slot name="iconInactive">
                                            <v-icon class="mdi mdi-folder-open"></v-icon>
                                        </slot>
                                    </template>
                                </Tree>
                            </v-list>
                            <div class="action-box">
                                <v-btn color="primary" class="default-save-btn mr-3" variant="text">
                                    Save
                                </v-btn>
                                <v-btn color="primary" class="default-cancel-btn mr-3" variant="text">
                                    Cancel
                                </v-btn>
                            </div>
                        </v-card>
                    </v-menu>
                    <v-btn variant="text" class="mr-3 move-btn" @click="store.toogleState('toggleCloneEditModal')">Clone and
                        edit</v-btn>
                    <v-btn variant="text" class="mr-3 move-btn" @click="store.toogleState('toogleMoveTrashModal')">Move to
                        trash</v-btn>
                </div>
            </div>
        </div>
        <v-list-action class="action-wrapper">
            <button>Insert</button>
        </v-list-action>
    </div>
</template>

<script setup>

import { ref } from "vue";
import { useEditorStore } from "@/editor/store/EditorStore";
import Tree, { getNodeById } from "@/editor/tree";
import ShortDescription from "@/editor/components/modal/upload_modal/ShortDescription.vue"
const store = useEditorStore()
const props = defineProps(['editor']);
const menuMove = ref(false);
const menuDefaultSize = ref(false);
const selectedFolderId = ref(null);

const onNodeClick = (node) => {
    console.log(node);
    selectedFolderId.value = node.id
};

</script>

<style>
/* /// File Detail Styling /// */
.file-detail-wrapper {
    top: 0;
    width: 590px;
    position: fixed;
    min-height: 100vh;
    transition: all 0.5s ease;
    transform: translateX(100%);
}

.file-detail-wrapper.active {
    transform: translateX(0);
    transition: all 0.5s ease;
}

.file-detail-wrapper .back-icon {
    display: flex;
}

.file-detail-wrapper .nav-header {
    padding: 14px 25px 14px 20px !important;
}

.file-detail-wrapper .content-area {
    overflow: auto;
    padding: 30px 40px 0;
    background: #ffffff;
    min-height: calc(100vh - 149px);
    max-height: calc(100vh - 149px);
}

/* width */
.file-detail-wrapper .content-area::-webkit-scrollbar {
    width: 8px;
}

/* Track */
.file-detail-wrapper .content-area::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
.file-detail-wrapper .content-area::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 15px;
}

/* Handle on hover */
.file-detail-wrapper .content-area::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.file-detail-wrapper button {
    font-size: 12px;
    color: #ffffff;
    padding: 5px 16px;
    border-radius: 3px;
    margin-right: 12px;
    background-color: #ff7a59;
    border: 1px solid #ff7a59;
    font-family: LexendDeca-Light;
}

button:hover {
    border-color: #ff8f73;
    background-color: #ff8f73;
}

.avatar-name-field {
    width: 135px;
    display: flex;
    max-width: 100%;
    min-width: 135px;
    margin-bottom: 12px;
    padding: 4px 30px 4px 4px;
    background-color: transparent;
}

.avatar-name-field:focus {
    background-color: rgb(245, 248, 250);
    box-shadow: rgba(0, 208, 228, 0.3) 0px 0px 4px 1px, rgb(0, 208, 228) 0px 0px 0px 1px !important;
}

.avatar-name-field:hover {
    background-color: rgb(245, 248, 250);
}

.avatar-name-field input {
    width: 86px;
    outline: none;
    max-width: 100%;
    font-family: LexendDeca-Medium;
}

.avatar-name-field .v-icon {
    font-size: 18px;
    color: #00a4bd;
    margin-left: 20px;
}

.image-view-box {
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-view-box img {
    width: 215px;
    height: 215px;
    object-fit: cover;
}

.label-details .v-list {
    min-height: auto;
    min-width: 250px;
    max-width: 250px;
    padding: 10px 16px;
    height: auto !important;
    margin: 0 0 15px -115px;
    background: #425b76 !important;
    box-shadow: 0 3px 8px rgba(0, 0, 0, .1) !important;
}

.label-details .v-list .top-arrow {
    position: fixed;
    pointer-events: none;
    clip-path: polygon(100% 100%, 0px 100%, 100% 0px);
    border-top-left-radius: 100%;
    border-bottom-right-radius: 3px;
    width: 16px;
    height: 16px;
    background-color: inherit;
    transform: rotate(45deg);
    top: auto;
    left: -2px;
    bottom: 8px;
    border-top-color: transparent !important;
    border-left-color: transparent !important;
}

.label-details .v-list .v-list-item {
    padding: 0;
    min-height: auto;
}

.label-details .v-list p {
    margin: 0;
    font-size: 13px;
    color: #ffffff;
    white-space: normal;
}

.label-details .v-list p a {
    color: #ffffff;
    text-decoration: none;
    font-family: LexendDeca-SemiBold;
}

.label-details .v-list p a:hover {
    color: #7fd1de;
    text-decoration: underline;
}

.label-details .v-list p a .v-icon {
    top: -2px;
    color: #ffffff;
    position: relative;
}

.label-details .v-list p span {
    font-size: 13px;
    color: #33475b;
    padding: 2px 4px;
    border-radius: 3px;
    background-color: #eaf0f6;
    font-family: LexendDeca-Regular;
}

.label-text {
    font-size: 12px;
    color: #516f90;
    line-height: 18px;
    font-family: LexendDeca-Light;
}

.label-text .v-icon {
    font-size: 12px;
    color: #7c98b6;
    margin-left: 5px;
}

.label-text .menu-box {
    font-size: 12px;
    color: #0091ae;
}

.label-text .menu-box:hover {
    color: #007a8c;
}

.label-text .menu-box:hover span {
    text-decoration: none;
}

.link-style {
    font-size: 12px;
    color: #0091ae;
    text-decoration: none;
    font-family: LexendDeca-SemiBold;
}

.link-style:hover {
    color: #007a8c;
    text-decoration: underline;
}

.link-style .v-icon {
    font-size: 14px;
    color: #7c98b6;
    margin: -2px 0 0 0;
}

.move-btn-row .move-btn {
    height: auto;
    min-width: auto;
    font-size: 12px;
    color: #506e91;
    line-height: 14px;
    padding: 5px 12px;
    letter-spacing: 0.3px;
    text-transform: capitalize;
    background-color: #eaf0f6;
    border: 1px solid #cbd6e2;
}

.personalize-modal .v-overlay__content .v-card.move-select-folder::before {
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
    left: 20px;
    border-top-color: transparent !important;
    border-left-color: transparent !important;
}

/* /// Tree Styling /// */
.tree-wrapper {
    overflow: auto;
    max-height: 320px;
    margin: 16px 0 16px 0;
    transition: all 0.3s ease;
    border: 1px solid #cbd6e2;
}

.tree-wrapper .tree-list {
    gap: 1px !important;
}

.tree-wrapper .tree-list .tree-row .tree-row-item {
    cursor: pointer;
    padding: 8px 12px 8px 8px;
    border-left: 4px solid transparent;
}

.tree-wrapper .tree-list .tree-row {
    transition: all 0.5s ease;
}

.tree-wrapper .tree-list .tree-row .selected {
    color: rgb(38 70 102);
    transition: all 0.5s ease;
    border-color: rgb(0, 164, 189);
    background-color: rgb(229, 245, 248);
}

.tree-wrapper .tree-list .tree-row .tree-row-item:hover::before {
    background-color: transparent;
}

.tree-wrapper .tree-list .tree-row .tree-row-item .v-icon {
    font-size: 22px;
    color: #00a4bd;
}

.tree-wrapper .tree-list .tree-row .tree-row-item .tree-row-txt {
    font-size: 14px;
    color: #33475b;
    margin-left: 8px;
    font-family: LexendDeca-Light;
}

.tree-wrapper .tree-list .tree-row .tree-list .tree-row {
    padding-left: 0 !important;
}

.tree-wrapper .tree-list .tree-row .tree-list .tree-row .tree-row-item {
    padding-left: 20px;
}

.tree-wrapper .tree-list .tree-row .tree-list .tree-row .tree-list .tree-row .tree-row-item {
    padding-left: 32px;
}

.tree-wrapper .tree-list .tree-row .tree-list .tree-row .tree-list .tree-row .tree-list .tree-row .tree-row-item {
    padding-left: 44px;
}

.tree-wrapper .tree-list .tree-row .tree-list .tree-row .tree-list .tree-row .tree-list .tree-row .tree-list .tree-row .tree-row-item {
    padding-left: 56px;
}

/* /// Tree Styling /// */

/* /// Custom Size Select Styling /// */
.custom-select-size .v-input__details {
    display: none;
}

.custom-select-size {
    width: auto;
    min-width: auto;
    max-width: fit-content;
}

.custom-select-size .v-input__control .v-field {
    padding: 0;
    box-shadow: 0 0 0 0 #cecece;
}

.custom-select-size .v-input__control .v-field .v-field__input {
    padding: 0;
    width: auto;
    min-height: auto;
}

.custom-select-size .v-input__control .v-field .v-field__input .v-select__selection .v-select__selection-text {
    font-size: 12px;
    color: #0091ae;
    line-height: 18px;
    font-family: LexendDeca-SemiBold;
}

.custom-select-size .v-input__control .v-field .v-field__append-inner .v-icon {
    opacity: 1;
    margin-left: 0;
    font-size: 18px;
    color: #7c98b6;
}

.image-size-modal {
    padding: 10px 0 !important;
    margin: 0 0 15px -80px !important;
}

.personalize-modal .v-overlay__content .image-size-modal::before {
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
    top: calc(100% - 26px);
    left: 16px;
    border-top-color: transparent !important;
    border-left-color: transparent !important;
}

.image-size-modal .content-value {
    display: flex;
    cursor: pointer;
    flex-direction: column;
}

.image-size-modal .content-value:hover {
    background: #e5f5f8;
}

.image-size-modal .content-value span {
    font-size: 14px;
    color: #33475b;
    padding: 9px 20px;
    font-family: LexendDeca-Light;
}

.image-size-modal .content-value p {
    font-size: 12px;
    color: #516f90;
    line-height: 18px;
    margin: -2px 0 0 0;
    padding: 0 20px 9px;
    font-family: LexendDeca-Light;
}

/* /// Custom Size Select Styling /// */
.move-select-folder {
    height: auto;
    transition: height 0.5s ease;
}

/* /// File Detail Styling /// */
</style>