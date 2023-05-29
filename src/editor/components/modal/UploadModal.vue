<template>
    <div>
        <span class="editor-span" @click.stop="drawer = !drawer">
            <v-icon class="mdi mdi-image-outline txt-20"></v-icon>
            <v-tooltip activator="parent" location="top">Insert image</v-tooltip>
        </span>
        <v-navigation-drawer v-model="drawer" location="right" temporary hide-overlay>
            <div class="translate-animate" :class="urlModal && 'unactive'">
                <v-list-item class="nav-header" :class="headerActive && 'active'">
                    <div class="d-flex align-center">
                        <span class="back-icon" @click="toggleClass()">
                            <v-icon class="mdi mdi-chevron-left"></v-icon>
                        </span>
                        <h3>Insert image</h3>
                    </div>
                    <span class="icon-bg" @click.stop="drawer = !drawer">
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
                                    <img src="https://previews.123rf.com/images/pandavector/pandavector1901/pandavector190105281/126044187-isolated-object-of-avatar-and-dummy-symbol-collection-of-avatar-and-image-stock-symbol-for-web.jpg"
                                        alt="">
                                </div>
                            </div>
                            <div class="no-more-files">
                                <span>No more files to show.</span>
                            </div>
                        </div>
                        <!-- // -->
                        <div class="home-div" :class="headerActive && 'show'">
                            <div class="recent-image mb-3">
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
                                    <v-list-tile class="browse-folder" @click="dialog = true">
                                        <v-icon class="mdi mdi-plus txt-16"></v-icon>
                                        Add folder
                                    </v-list-tile>
                                </div>
                            </div>
                            <!-- /// -->
                            <div :class="folderDetail && 'hide'">
                                <h4>Home</h4>
                                <div class="folder-list">
                                    <div class="list-details" @click="toggleClassFolder()">
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
                                        <img src="https://previews.123rf.com/images/pandavector/pandavector1901/pandavector190105281/126044187-isolated-object-of-avatar-and-dummy-symbol-collection-of-avatar-and-image-stock-symbol-for-web.jpg"
                                            alt="">
                                    </div>
                                </div>
                                <div class="no-more-files">
                                    <span>No more files to show.</span>
                                </div>
                            </div>
                            <!-- /// Folder Details /// -->
                            <div class="foldr-details" :class="folderDetail && 'show'">
                                <v-list-tile class="browse-folder" @click="toggleClassFolder()">
                                    Home
                                    <v-icon class="mdi mdi-chevron-right"></v-icon>
                                </v-list-tile>
                                <h5>Dashboard</h5>
                                <h5 class="text-center mt-0 mb-4">No images are in this folder</h5>
                                <p>
                                    Drop files in here to upload or
                                    <v-list-tile class="browse-folder" @click="dialog = true">create a new
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
                    <v-list-tile class="add-url" @click="urlModalPanel()">Add from URL</v-list-tile>
                </v-list-action>
            </div>
            <!-- /// URL Box /// -->
            <div class="url-wrapper" :class="urlModal && 'active'">
                <v-list-item class="nav-header">
                    <div class="d-flex align-center">
                        <span class="back-icon" @click="urlModalPanel()">
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
            <!-- /// URL Box /// -->
        </v-navigation-drawer>

        <!-- //// Create Folder Modal //// -->
        <v-dialog v-model="dialog" class="create-folder" width="450px">
            <v-card>
                <v-card-text class="pa-0">
                    <h3>
                        Create folder
                        <span class="icon-bg" @click="dialog = false">
                            <v-icon class="mdi mdi-window-close"></v-icon>
                        </span>
                    </h3>
                    <div class="create-detail">
                        <label>Folder name</label>
                        <v-text-field class="bg-remove" density="compact" variant="solo" single-line
                            hide-details></v-text-field>
                        <div class="mt-6">
                            <v-btn variant="text" class="save-btn mr-3" disabled>Save</v-btn>
                            <v-btn variant="text" class="cancel-btn">Cancel</v-btn>
                        </div>
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>
        <!-- //// Create Folder Modal //// -->
    </div>
</template>

<script setup>

import { ref } from "vue";
const props = defineProps(['editor']);
const drawer = ref(null);
const dialog = ref(false);
const hideDiv = ref(false);
const menu = ref(false);
const folderDetail = ref(false);
const headerActive = ref(false);
const urlModal = ref(false);
function toggleClass() {
    headerActive.value = !headerActive.value
}
function toggleClassFolder() {
    folderDetail.value = !folderDetail.value
}
function urlModalPanel() {
    urlModal.value = !urlModal.value
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
    border-radius: 3px;
    margin: 0 6px 6px 0;
    background: #f5f8fa;
    outline: 1px solid #cbd6e2;
}

.images-container .upload-image:hover {
    outline: 1px solid #7fd1de;
    box-shadow: rgb(127, 209, 222) 0px 0px 0px 1px, rgba(0, 163, 189, 0.3) 0px 0px 12px 0px;
}

.images-container .upload-image img {
    width: 100%;
    max-height: 90px;
    object-fit: cover;
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
    margin: 24px 0 24px 0;
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

/* //// Create Folder Modal //// */
.create-folder .v-card .v-card-text h3 {
    display: flex;
    font-size: 20px;
    color: #ffffff;
    align-items: center;
    background-color: #00bda5;
    padding: 14px 15px 14px 30px;
    justify-content: space-between;
    font-family: LexendDeca-SemiBold;
    background-image: linear-gradient(-303deg, #00a4bd, #00afb2 56%, #00bda5);
}

.create-folder .v-card .v-card-text h3 span .v-icon {
    font-size: 26px;
}

.create-folder .v-card .v-card-text .create-detail {
    padding: 30px 40px 24px;
}

.create-folder .v-card .v-card-text .create-detail label {
    display: block;
    font-size: 14px;
    color: #33475b;
    margin-bottom: 5px;
    font-family: LexendDeca-Medium;
}

.save-btn {
    font-size: 14px;
    min-height: 40px;
    padding: 6px 24px;
    border-radius: 3px;
    letter-spacing: 0.3px;
    text-transform: capitalize;
    color: #ffffff !important;
    background-color: #ff7a59;
    border: 1px solid #ff7a59;
    font-family: LexendDeca-Medium;
}

.cancel-btn {
    font-size: 14px;
    min-height: 40px;
    padding: 6px 24px;
    letter-spacing: 0.3px;
    text-transform: capitalize;
    color: #ff7a53 !important;
    background-color: #ffffff;
    border: 1px solid #ff7a59;
    font-family: LexendDeca-Medium;
}

/* //// Create Folder Modal //// */

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
    padding: 14px 25px 14px 20px;
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

.translate-animate {
    transform: translateX(0);
    transition: all 0.5s ease;
}

.translate-animate.unactive {
    transition: all 0.5s ease;
    transform: translateX(-100%);
}

/* /// URL Box Styling /// */

/* /// v-navigation-drawer /// */</style>