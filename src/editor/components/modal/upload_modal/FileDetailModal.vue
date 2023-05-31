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
            <div class="image-description">
                <div class="icon-box">
                    <textarea name="" id=""
                        placeholder="A short description of the image (up to 150 characters)"></textarea>
                    <v-icon class="mdi mdi-marker marker-icon"></v-icon>
                </div>
                <div class="description-btn mt-2 mb-6">
                    <v-btn variant="text" class="default-save-btn mr-3" disabled>Save</v-btn>
                    <v-btn variant="text" class="default-cancel-btn">Cancel</v-btn>
                </div>
            </div>
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
                            <v-menu transition="scale-transition">
                                <template v-slot:activator="{ props }">
                                    <div class="menu-box ml-2" v-bind="props">
                                        <span class="btn-text">Default</span>
                                        <v-icon class="mdi mdi-menu-down ma-0"></v-icon>
                                    </div>
                                </template>
                                <v-list>
                                    <v-list-item v-for="(item, i) in items" :key="i">
                                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
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
                                <div class="folder-selected-list">
                                    <ul>
                                        <li class="active">
                                            <v-icon class="mdi mdi-folder-open"></v-icon>
                                            Home
                                        </li>
                                        <ul>
                                            <li>
                                                <v-icon class="mdi mdi-folder"></v-icon>
                                                Dashboard
                                            </li>
                                            <li>
                                                <v-icon class="mdi mdi-folder"></v-icon>
                                                Setting
                                            </li>
                                        </ul>
                                        <li>
                                            <v-icon class="mdi mdi-folder-open"></v-icon>
                                            My Tasks
                                        </li>
                                        <ul>
                                            <li>
                                                <v-icon class="mdi mdi-folder"></v-icon>
                                                Dashboard
                                            </li>
                                            <li>
                                                <v-icon class="mdi mdi-folder"></v-icon>
                                                Setting
                                            </li>
                                        </ul>
                                    </ul>
                                </div>
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
                    <v-btn variant="text" class="mr-3 move-btn">Clone and edit</v-btn>
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
const store = useEditorStore()
const props = defineProps(['editor']);
const menuMove = ref(false);

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

.image-description {
    margin: 10px 0 0 0;
}

.image-description textarea {
    width: 100%;
    resize: none;
    height: 40px;
    outline: none;
    font-size: 14px;
    color: #33475b;
    padding: 10px 5px 7px;
    font-family: LexendDeca-Light;
    border-bottom: 1px solid transparent;
}

.image-description textarea:focus {
    border-color: #00a4bd;
    box-shadow: rgba(0, 208, 228, 0.3) 0px 0px 4px 1px, rgb(0, 208, 228) 0px 0px 0px 1px !important;
}

.image-description .default-save-btn {
    height: auto;
    min-width: auto;
    font-size: 12px;
    color: #ffffff;
    line-height: 14px;
    padding: 5px 12px;
    letter-spacing: 0.3px;
    text-transform: capitalize;
    background-color: #425b76;
    border: 1px solid #425b76;
}

.image-description .default-cancel-btn {
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

.image-description .icon-box {
    display: flex;
    position: relative;
    margin-bottom: 15px;
    border-bottom: 1px solid transparent;
}

.image-description .icon-box:hover {
    border-color: #00a4bd;
}

.image-description .icon-box:hover .marker-icon {
    opacity: 1;
    visibility: visible;
}

.image-description textarea:focus~.marker-icon {
    opacity: 0 !important;
    visibility: hidden !important;
}

.image-description .icon-box .marker-icon {
    top: 0;
    right: 0;
    opacity: 0;
    width: 20px;
    height: 20px;
    cursor: pointer;
    font-size: 12px;
    color: #00a4bd;
    position: absolute;
    visibility: hidden;
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

/* /// File Detail Styling /// */
</style>