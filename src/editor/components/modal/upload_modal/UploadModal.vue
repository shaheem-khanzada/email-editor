<template>
    <div>
        <span class="editor-span" @click.stop="store.toogleState('toogleDrawer')">
            <v-icon class="mdi mdi-image-outline txt-20"></v-icon>
            <v-tooltip activator="parent" location="top">Insert image</v-tooltip>
        </span>
        <v-navigation-drawer v-model="store.toogleDrawer" location="right" temporary hide-overlay>
            <div class="translate-animate" :class="{unactive: store.toggleUrlModal, unactive: store.toogleFileDetail}">
                <v-list-item class="nav-header" :class="headerActive && 'active'">
                    <div class="d-flex align-center">
                        <span class="back-icon" @click="toggleClass()">
                            <v-icon class="mdi mdi-chevron-left"></v-icon>
                        </span>
                        <h3>Insert image</h3>
                    </div>
                    <span class="icon-bg" @click.stop="store.toogleState('toogleDrawer')">
                        <v-icon class="mdi mdi-window-close"></v-icon>
                    </span>
                </v-list-item>
                <v-list density="compact" class="pa-0 content-container" nav>
                    <div class="content-wrapper">
                        <v-text-field class="bg-remove" density="compact" variant="solo" single-line hide-details
                            placeholder="Search images and folders" append-inner-icon="mdi-magnify">
                        </v-text-field>
                        <div class="file-adding-wrapper" v-if="hideDiv">
                            <img src="https://static.hsappstatic.net/FileManagerImages/static-1.15068/images/empty-dashboard.svg"
                                alt="">
                            <h5>Start adding files.</h5>
                            <p>Drag and drop right onto this screen or upload from your desktop.</p>
                        </div>
                        <!-- /// -->
                        <div class="recent-div" :class="headerActive && 'hide'">
                            <div class="recent-image">
                                <h4>
                                    Recent images
                                    <v-list-tile class="browse-folder" @click="toggleClass()">Browse folders</v-list-tile>
                                </h4>
                            </div>
                            <div class="images-container">
                                <div class="upload-image">
                                    <v-menu class="image-details" open-on-hover :close-on-content-click="false">
                                        <template v-slot:activator="{ props }">
                                            <img v-bind="props"
                                                src="https://previews.123rf.com/images/pandavector/pandavector1901/pandavector190105281/126044187-isolated-object-of-avatar-and-dummy-symbol-collection-of-avatar-and-image-stock-symbol-for-web.jpg"
                                                alt="">
                                            <button @click="store.toogleState('toogleFileDetail')">Details</button>
                                        </template>
                                        <v-list>
                                            <v-list-item>
                                                <v-list-item-title>
                                                    <span>avatar-four</span>
                                                    <span><small>Folder : </small> Home</span>
                                                    <span><small>Uploaded : </small> May 29, 2023 3:09 PM</span>
                                                    <span><small>Type : </small> png</span>
                                                    <span><small>Size : </small> 5 KB</span>
                                                    <span><small>Dimensions : </small> 215 x 215 px</span>
                                                </v-list-item-title>
                                            </v-list-item>
                                            <div class="top-arrow"></div>
                                        </v-list>
                                    </v-menu>
                                </div>
                            </div>
                            <div class="no-more-files">
                                <span>No more files to show.</span>
                            </div>
                        </div>
                        <!-- // -->
                        <div class="home-div" :class="headerActive && 'show'">
                            <div class="recent-image mb-1">
                                <div class="d-flex justify-end">
                                    <v-menu class="select-folder-modal" v-model="menu" :close-on-content-click="false"
                                        location="bottom">
                                        <template v-slot:activator="{ props }">
                                            <v-list-tile class="browse-folder mr-5" v-bind="props">Browse all
                                                folders</v-list-tile>
                                        </template>

                                        <v-card min-width="400" class="select-folder">
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
                                            <v-card-actions class="action-box">
                                                <v-btn color="primary" variant="text" @click="menu = false" disabled>
                                                    Select
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-menu>
                                    <v-list-tile class="browse-folder" @click="store.toogleState('toggleCreateModal')">
                                        <v-icon class="mdi mdi-plus txt-16"></v-icon>
                                        Add folder
                                    </v-list-tile>
                                </div>
                            </div>
                            <!-- /// -->
                            <div :class="{hide: store.toggleFolderDetail}">
                                <h4>Home</h4>
                                <div class="folder-list">
                                    <div class="list-details" @click="store.toogleState('toggleFolderDetail')">
                                        <v-icon class="mdi mdi-folder"></v-icon>
                                        Dashboard
                                    </div>
                                    <div class="list-details">
                                        <v-icon class="mdi mdi-folder"></v-icon>
                                        Images
                                    </div>
                                    <div class="list-details">
                                        <v-icon class="mdi mdi-folder"></v-icon>
                                        Documents
                                    </div>
                                </div>
                                <div class="images-container">
                                    <div class="upload-image">
                                        <v-menu class="image-details" open-on-hover :close-on-content-click="false">
                                            <template v-slot:activator="{ props }">
                                                <img v-bind="props"
                                                    src="https://previews.123rf.com/images/pandavector/pandavector1901/pandavector190105281/126044187-isolated-object-of-avatar-and-dummy-symbol-collection-of-avatar-and-image-stock-symbol-for-web.jpg"
                                                    alt="">
                                                <button @click="store.toogleState('toogleFileDetail')">Details</button>
                                            </template>
                                            <v-list>
                                                <v-list-item>
                                                    <v-list-item-title>
                                                        <span>avatar-four</span>
                                                        <span><small>Folder : </small> Home</span>
                                                        <span><small>Uploaded : </small> May 29, 2023 3:09 PM</span>
                                                        <span><small>Type : </small> png</span>
                                                        <span><small>Size : </small> 5 KB</span>
                                                        <span><small>Dimensions : </small> 215 x 215 px</span>
                                                    </v-list-item-title>
                                                </v-list-item>
                                                <div class="top-arrow"></div>
                                            </v-list>
                                        </v-menu>
                                    </div>
                                </div>
                                <div class="no-more-files">
                                    <span>No more files to show.</span>
                                </div>
                            </div>
                            <!-- /// Folder Details /// -->
                            <div class="foldr-details" :class="{show: store.toggleFolderDetail}">
                                <v-list-tile class="browse-folder" @click="store.toogleState('toggleFolderDetail')">
                                    Home
                                    <v-icon class="mdi mdi-chevron-right"></v-icon>
                                </v-list-tile>
                                <h5>Dashboard</h5>
                                <h5 class="text-center mt-0 mb-4">No images are in this folder</h5>
                                <p>
                                    Drop files in here to upload or
                                    <v-list-tile class="browse-folder" @click="store.toogleState('toggleCreateModal')">create a new
                                        folder.</v-list-tile>
                                </p>
                            </div>
                            <!-- /// Folder Details /// -->
                        </div>
                    </div>
                </v-list>
                <v-list-action class="action-wrapper">
                    <div class="upload-btn-wrapper">
                        <button class="btn">Upload images</button>
                        <input type="file" name="myfile" />
                    </div>
                    <v-list-tile class="add-url" @click="store.toogleState('toggleUrlModal')">Add from URL</v-list-tile>
                </v-list-action>
            </div>
            <!-- /// URL Box /// -->
            <AddURL :class="urlModal && 'active'" />
            <!-- /// URL Box /// -->
            <!-- /// File Details /// -->
            <div class="file-detail-wrapper" :class="{active: store.toogleFileDetail}">
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
                            <v-menu class="personalize-modal" v-model="menuMove" :close-on-content-click="false"
                                location="top">
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
                            <v-btn variant="text" class="mr-3 move-btn" @click="store.toogleState('toogleMoveTrashModal')">Move to trash</v-btn>
                        </div>
                    </div>
                </div>
                <v-list-action class="action-wrapper">
                    <button>Insert</button>
                </v-list-action>
            </div>
            <!-- /// File Details /// -->
        </v-navigation-drawer>

        <!-- //// Create Folder Modal //// -->
        <CreateFolderModal v-model="store.toggleCreateModal" />
        <!-- //// Create Folder Modal //// -->

        <!-- //// Move Trash Modal //// -->
        <TrashModal v-model="store.toogleMoveTrashModal" />
        <!-- //// Move Trash Modal //// -->
    </div>
</template>

<script setup>

import { ref } from "vue";
import CreateFolderModal from "@/editor/components/modal/upload_modal/CreateFolderModal.vue"
import TrashModal from "@/editor/components/modal/upload_modal/TrashModal.vue"
import AddURL from "@/editor/components/modal/upload_modal/AddURL.vue"
import { useEditorStore } from "@/editor/store/EditorStore";
const store = useEditorStore()

const props = defineProps(['editor']);
const hideDiv = ref(false);
const menu = ref(false);
const menuMove = ref(false);
const headerActive = ref(false);
const urlModal = ref(false);
function toggleClass() {
    headerActive.value = !headerActive.value
}

</script>

<style>
/* /// v-navigation-drawer /// */
.v-navigation-drawer~.v-navigation-drawer__scrim {
    display: none;
}

.v-navigation-drawer {
    width: 590px !important;
    box-shadow: rgba(66, 91, 118, 0.21) -3px 0px 8px 0px !important;
}

.v-navigation-drawer .nav-header {
    color: #ffffff;
    padding: 14px 25px 14px 40px;
    background-image: linear-gradient(-303deg, #00a4bd, #00afb2 56%, #00bda5);
}

.v-navigation-drawer .nav-header.active {
    padding: 14px 25px 14px 20px;
}

.v-navigation-drawer .nav-header.active .back-icon {
    display: flex;
}

.v-navigation-drawer .nav-header .v-list-item__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.v-navigation-drawer .nav-header .v-list-item__content h3 {
    font-size: 20px;
    color: #ffffff;
    font-family: LexendDeca-SemiBold;
}

.icon-bg {
    width: 40px;
    height: 40px;
    display: flex;
    cursor: pointer;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background: transparent;
    transition: all 0.5s ease;
}

.icon-bg:hover {
    transition: all 0.5s ease;
    background: rgba(255, 255, 255, 0.1) !important;
}

.back-icon {
    width: 40px;
    height: 40px;
    display: none;
    cursor: pointer;
    position: relative;
    border-radius: 50%;
    margin: 0 30px 0 0;
    align-items: center;
    justify-content: center;
    background: transparent;
    transition: all 0.5s ease;
}

.back-icon::after {
    top: 50%;
    width: 1px;
    content: "";
    height: 32px;
    opacity: 0.5;
    right: -10px;
    position: absolute;
    transform: translateY(-50%);
    background-color: rgb(255, 255, 255);
}

.back-icon:hover {
    transition: all 0.5s ease;
    background: rgba(255, 255, 255, 0.1) !important;
}

.v-navigation-drawer .nav-header .v-list-item__content .v-icon {
    font-size: 26px;
    cursor: pointer;
}

.content-container {
    min-height: calc(100vh - 149px);
}

.content-wrapper {
    padding: 24px 40px;
}

.content-wrapper .bg-remove .v-field input::placeholder {
    opacity: 0.99;
    color: #819696;
    font-family: LexendDeca-Light;
}

.content-wrapper .bg-remove .v-field .v-icon {
    color: #055b6c !important;
}

.content-wrapper .recent-image {
    margin-top: 20px;
    margin-bottom: 18px;
}

.content-wrapper .recent-image h4 {
    display: flex;
    font-size: 16px;
    color: #33475b;
    align-items: center;
    justify-content: space-between;
    font-family: LexendDeca-SemiBold;
}

.content-wrapper .recent-image .browse-folder {
    font-size: 12px;
    cursor: pointer;
    color: #0091ae;
    font-family: LexendDeca-SemiBold;
}

.content-wrapper .recent-image .browse-folder:hover {
    color: #007a8c;
    text-decoration: underline;
}

.images-container {
    display: flex;
    overflow: auto;
    flex-wrap: wrap;
    padding-top: 2px;
    padding-left: 2px;
    max-height: 290px;
    align-items: center;
}

.images-container .upload-image {
    width: 120px;
    height: 90px;
    cursor: pointer;
    position: relative;
    border-radius: 3px;
    margin: 0 6px 6px 0;
    background: #f5f8fa;
    outline: 1px solid #cbd6e2;
}

.images-container .upload-image:hover {
    outline: 1px solid #7fd1de;
    box-shadow: rgb(127, 209, 222) 0px 0px 0px 1px, rgba(0, 163, 189, 0.3) 0px 0px 12px 0px;
}

.images-container .upload-image:hover button {
    display: block;
}

.images-container .upload-image img {
    width: 100%;
    max-height: 90px;
    object-fit: cover;
}

.images-container .upload-image button {
    left: 0;
    bottom: 0;
    display: none;
    font-size: 12px;
    color: #ffffff;
    line-height: 14px;
    padding: 5px 12px;
    position: absolute;
    border-radius: 3px;
    background-color: #425b76;
    border: 1px solid #425b76;
    font-family: LexendDeca-Light;
}

.image-details .v-list {
    min-height: auto;
    min-width: 300px;
    max-width: 300px;
    margin-top: 10px;
    padding: 10px 16px;
    height: auto !important;
    background: #425b76 !important;
}

.image-details .v-list .v-list-item {
    padding: 0;
    min-height: auto;
}

.image-details .v-list .v-list-item span {
    display: block;
    font-size: 13px;
    color: #ffffff;
    line-height: 22px;
    font-family: LexendDeca-Light;
}

.image-details .v-list .v-list-item span small {
    font-size: 13px;
    font-family: LexendDeca-Medium;
}

.image-details .v-list .top-arrow {
    position: fixed;
    pointer-events: none;
    clip-path: polygon(100% 100%, 0px 100%, 100% 0px);
    border-top-left-radius: 100%;
    border-bottom-right-radius: 3px;
    width: 16px;
    height: 16px;
    background-color: inherit;
    transform: rotate(-135deg);
    top: 3px;
    left: 52px;
    border-top-color: transparent !important;
    border-left-color: transparent !important;
}

.images-container .upload-image button:hover {
    border-color: #516f90;
    background-color: #516f90;
}

.no-more-files {
    padding: 4px;
    display: flex;
    margin-top: 5px;
    border-radius: 3px;
    align-items: center;
    background: #f5f8fa;
    justify-content: center;
    border: 1px solid rgb(223, 227, 235);
}

.no-more-files span {
    font-size: 12px;
    color: #33475b;
    font-family: LexendDeca-Light;
}

.action-wrapper {
    display: flex;
    padding: 24px 40px;
    background-color: #f5f8fa;
    border-top: 1px solid #cbd6e2;
}

.action-wrapper .upload-btn-wrapper {
    overflow: hidden;
    position: relative;
}

.action-wrapper .upload-btn-wrapper .btn {
    font-size: 12px;
    color: #ffffff;
    padding: 5px 16px;
    border-radius: 3px;
    margin-right: 12px;
    background-color: #ff7a59;
    border: 1px solid #ff7a59;
    font-family: LexendDeca-Light;
}

.action-wrapper .upload-btn-wrapper .btn:hover {
    border-color: #ff8f73;
    background-color: #ff8f73;
}

.action-wrapper .upload-btn-wrapper input[type=file] {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    cursor: pointer;
    font-size: 100px;
    position: absolute;
}

.action-wrapper .add-url {
    cursor: pointer;
    font-size: 12px;
    color: #ff7a53;
    padding: 5px 16px;
    border-radius: 3px;
    background-color: #ffffff;
    border: 1px solid #ff7a59;
    font-family: LexendDeca-Light;
}

.action-wrapper .add-url:hover {
    color: #ff7a53;
    background-color: #fff8f6;
}

.action-wrapper .add-url:focus {
    background: #ffebe6;
}

.txt-16 {
    font-size: 16px;
}

.recent-div.hide {
    display: none;
}

.home-div {
    display: none;
}

.home-div.show {
    display: block;
}

.txt-20 {
    font-size: 20px !important;
}

.select-folder-modal .select-folder .top-arrow {
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
    transform: rotate(-135deg);
    top: 6px;
    left: auto;
    right: 45px;
    border-top-color: transparent !important;
    border-left-color: transparent !important;
}

.select-folder {
    margin-top: 15px;
    position: relative;
    padding: 20px 24px;
    border: 1px solid #cbd6e2;
    border-radius: 3px !important;
    background-color: #fff !important;
    box-shadow: 0 1px 24px 0 rgba(0, 0, 0, .08) !important;
}

.select-folder .v-list {
    padding: 0;
}

.select-folder .v-list .v-list-item {
    padding: 0;
    min-height: auto;
}

.select-folder .v-list .v-list-item .v-list-item__content {
    font-size: 16px;
    color: #33475b;
    font-family: LexendDeca-SemiBold;
}

.select-folder .v-card-actions {
    padding: 0;
    min-height: auto;
}

.select-folder .folder-selected-list {
    border-radius: 3px;
    margin: 20px 0 25px 0;
    border: 1px solid #cbd6e2;
}

.select-folder .folder-selected-list ul {
    margin: 0;
    padding: 0;
}

.select-folder .folder-selected-list ul li {
    display: flex;
    cursor: pointer;
    font-size: 14px;
    color: #33475b;
    align-items: center;
    padding: 10px 10px 9px 10px;
    font-family: LexendDeca-Light;
}

.select-folder .folder-selected-list ul li.active {
    background-color: #e5f5f8;
    border-left: 4px solid #00a4bd;
}

.select-folder .folder-selected-list ul li .v-icon {
    color: #00a4bd;
    margin-right: 8px;
}

.select-folder .folder-selected-list ul ul li {
    padding-left: 25px;
}

.select-folder-modal .v-card-actions.action-box .v-btn {
    height: auto;
    font-size: 12px;
    line-height: 14px;
    min-height: inherit;
    color: #ffffff !important;
    padding: 8px 14px !important;
    font-family: LexendDeca-Light;
    background-image: none !important;
    background-color: #425b76 !important;
    border: 1px solid #425b76 !important;
}

.select-folder-modal .v-card-actions.action-box .v-btn:disabled {
    opacity: 0.9;
    color: #b0c1d4 !important;
    background: #eaf0f6 !important;
    border-color: #eaf0f6 !important;
}

.folder-list {
    border-radius: 3px;
    margin: 20px 0 20px 0;
    border: 1px solid #cbd6e2;
}

.folder-list .list-details {
    display: flex;
    cursor: pointer;
    font-size: 14px;
    color: #0091ae;
    align-items: center;
    padding: 5px 15px 4px;
    font-family: LexendDeca-SemiBold;
    border-bottom: 1px solid #cbd6e2;
}

.folder-list .list-details:last-of-type {
    border-bottom: 0;
}

.folder-list .list-details .v-icon {
    font-size: 30px;
    color: #00a4bd;
    margin-right: 15px;
}

/* //// Start Adding File ////  */
.file-adding-wrapper {
    display: flex;
    align-items: center;
    margin: 35px 0 35px 0;
    flex-direction: column;
    justify-content: center;
}

.file-adding-wrapper img {
    width: 180px;
    height: 143.83px;
    object-fit: cover;
    margin-bottom: 30px;
}

.file-adding-wrapper h5 {
    font-size: 16px;
    color: #33475b;
    margin-bottom: 16px;
    font-family: LexendDeca-SemiBold;
}

.file-adding-wrapper p {
    margin: 0;
    font-size: 14px;
    color: #33475b;
    line-height: 24px;
    font-family: LexendDeca-Light;
}

/* //// Start Adding File ////  */

/* /// Folder Details /// */
.foldr-details {
    display: none;
}

.foldr-details.show {
    display: block;
}

.hide {
    display: none;
}

.foldr-details .browse-folder {
    font-size: 12px;
    cursor: pointer;
    color: #0091ae;
    font-family: LexendDeca-SemiBold;
}

.foldr-details .browse-folder:hover {
    text-decoration: underline;
}

.foldr-details .browse-folder .v-icon {
    font-size: 14px;
    color: #7c98b6;
}

.foldr-details h5 {
    font-size: 16px;
    color: #33475b;
    margin: 8px 0 24px 0;
    font-family: LexendDeca-SemiBold;
}

.foldr-details p {
    font-size: 14px;
    color: #33475b;
    line-height: 24px;
    text-align: center;
    font-family: LexendDeca-Light;
}

.foldr-details p .browse-folder {
    font-size: 14px;
    color: #0091ae;
    font-family: LexendDeca-SemiBold;
}

/* /// Folder Details /// */

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
    padding: 14px 25px 14px 20px;
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

.action-box .default-save-btn {
    min-width: auto;
    font-size: 12px;
    line-height: 14px;
    padding: 8px 12px;
    letter-spacing: 0.3px;
    height: auto !important;
    text-transform: capitalize;
    color: #ffffff !important;
    background-color: #425b76;
    border: 1px solid #425b76;
}

.action-box .default-cancel-btn {
    min-width: auto;
    font-size: 12px;
    line-height: 14px;
    padding: 8px 12px;
    letter-spacing: 0.3px;
    height: auto !important;
    text-transform: capitalize;
    color: #506e91 !important;
    background-color: #eaf0f6;
    border: 1px solid #cbd6e2;
}

.translate-animate {
    transform: translateX(0);
    transition: all 0.5s ease;
}

.translate-animate.unactive {
    transition: all 0.5s ease;
    transform: translateX(-100%);
}

/* /// v-navigation-drawer /// */
</style>