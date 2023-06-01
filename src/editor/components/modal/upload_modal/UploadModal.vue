<template>
    <div>
        <span class="editor-span" @click.stop="store.toogleState('toogleDrawer')">
            <v-icon class="mdi mdi-image-outline txt-20"></v-icon>
            <v-tooltip activator="parent" location="top">Insert image</v-tooltip>
        </span>
        <v-navigation-drawer v-model="store.toogleDrawer" location="right" temporary hide-overlay>
            <div class="translate-animate" :class="{ unactive: store.toggleUrlModal || store.toogleFileDetail }">
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
                        <!-- // -->
                        <AddFile v-if="hideDiv" />
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
                                                <Tree class="tree-wrapper" @nodeClick="onNodeClick" :nodes="store.folders"
                                                    :selectedFolderId="selectedFolderId" :use-checkbox="false" :gap="0"
                                                    :use-icon="true">
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
                                                <!-- <div class="folder-selected-list">
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
                                                </div> -->
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
                            <div :class="{ hide: store.toggleFolderDetail }">
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
                            <div class="foldr-details" :class="{ show: store.toggleFolderDetail }">
                                <v-list-tile class="browse-folder" @click="store.toogleState('toggleFolderDetail')">
                                    Home
                                    <v-icon class="mdi mdi-chevron-right"></v-icon>
                                </v-list-tile>
                                <h5>Dashboard</h5>
                                <h5 class="text-center mt-0 mb-4">No images are in this folder</h5>
                                <p>
                                    Drop files in here to upload or
                                    <v-list-tile class="browse-folder"
                                        @click="store.toogleState('toggleCreateModal')">create a new
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
            <AddURL :class="{ active: store.toggleUrlModal }" />
            <!-- /// URL Box /// -->

            <!-- /// File Details /// -->
            <FileDetailModal :class="{ active: store.toogleFileDetail }" />
            <!-- /// File Details /// -->

        </v-navigation-drawer>

        <!-- //// Create Folder Modal //// -->
        <CreateFolderModal v-model="store.toggleCreateModal" />
        <!-- //// Create Folder Modal //// -->

        <!-- //// Move Trash Modal //// -->
        <TrashModal v-model="store.toogleMoveTrashModal" />
        <!-- //// Move Trash Modal //// -->

        <!-- //// Clone Edit Modal //// -->
        <CloneEditModal v-model="store.toggleCloneEditModal" />
        <!-- //// Clone Edit Modal //// -->

    </div>
</template>

<script setup>

import { ref } from "vue";
import CreateFolderModal from "@/editor/components/modal/upload_modal/CreateFolderModal.vue"
import TrashModal from "@/editor/components/modal/upload_modal/TrashModal.vue"
import CloneEditModal from "@/editor/components/modal/upload_modal/CloneEditModal.vue"
import AddURL from "@/editor/components/modal/upload_modal/AddURL.vue"
import FileDetailModal from "@/editor/components/modal/upload_modal/FileDetailModal.vue"
import AddFile from "@/editor/components/modal/upload_modal/AddFile.vue"
import { useEditorStore } from "@/editor/store/EditorStore";
import Tree, { getNodeById } from "@/editor/tree";

const store = useEditorStore();

const props = defineProps(['editor']);
const hideDiv = ref(false);
const menu = ref(false);
const selectedFolderId = ref(null);

const headerActive = ref(false);
function toggleClass() {
    headerActive.value = !headerActive.value
}

const onNodeClick = (node) => {
    console.log(node);
    selectedFolderId.value = node.id
};

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

/* /// Tree Styling /// */
.tree-wrapper {
    overflow: auto;
    max-height: 280px;
    margin: 16px 0 16px 0;
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

.tree-wrapper .tree-list .tree-row .selected {
    color: rgb(38 70 102);
    border-color: rgb(0, 164, 189);
    background-color: rgb(229, 245, 248);
}

.tree-wrapper .tree-list .tree-row .tree-row-item:hover::before {
    background-color: #e5f5f8;
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

/* /// v-navigation-drawer /// */
</style>