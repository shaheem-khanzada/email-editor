<template>
    <v-dialog class="clone-edit-modal">
        <v-card>
            <v-card-text class="pa-0">
                <span class="close-icon-bg" @click="store.toogleState('toggleCloneEditModal')">
                    <v-icon class="mdi mdi-window-close"></v-icon>
                </span>
                <div class="content-area">
                    <div class="image-container">
                        <img src="https://us.v-cdn.net/6030023/uploads/5GRA3TTZ4YFB/image.png" alt="">
                    </div>
                </div>
                <div class="footer-column">
                    <div class="resize-wrapper" style="display: none">
                        <div class="">
                            <v-btn class="btn-resize mr-3" variant="text">Crop</v-btn>
                            <v-btn class="btn-resize mr-3" variant="text">Resize</v-btn>
                            <v-btn class="btn-resize mr-3" variant="text">Revert to Original</v-btn>
                        </div>
                        <div class="">
                            <v-btn class="btn-resize-text mr-5" variant="text">Cancel</v-btn>
                            <v-btn class="btn-resize" variant="text" disabled>Save Clone</v-btn>
                        </div>
                    </div>
                    <!-- // -->
                    <div class="size-wrapper">
                        <div class="d-flex align-center">
                            <p>
                                Size (width x height)
                                <a href="">Revert to original</a>
                            </p>
                            <div class="d-flex align-center">
                                <v-text-field class="bg-remove" density="compact" variant="solo" single-line hide-details
                                    placeholder="300">
                                </v-text-field>
                                <label>px</label>
                            </div>
                            <v-icon class="mdi mdi-link-variant link-icon"></v-icon>
                            <div class="d-flex align-center">
                                <v-text-field class="bg-remove" density="compact" variant="solo" single-line hide-details
                                    placeholder="300">
                                </v-text-field>
                                <label>px</label>
                            </div>
                        </div>
                        <div class="">
                            <v-btn class="btn-resize-text mr-5" variant="text">Back</v-btn>
                            <v-btn class="btn-resize" variant="text" disabled>Save Clone</v-btn>
                        </div>
                    </div>
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script setup>

import { ref } from "vue";
import { useEditorStore } from "@/editor/store/EditorStore";
const store = useEditorStore();
const props = defineProps(['editor']);
const dialog = ref(false);

</script>

<style>
.clone-edit-modal .v-overlay__scrim {
    display: none;
}

.clone-edit-modal .content-area {
    min-height: calc(100vh - 160px);
    max-height: calc(100vh - 160px);
}

.clone-edit-modal .v-overlay__content {
    left: 0;
    right: 0;
    width: 100%;
    max-width: 100%;
    max-height: 100vh;
    margin: 0 !important;
}

.clone-edit-modal .v-overlay__content .v-card {
    border-radius: 0;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.7);
}

.close-icon-bg {
    top: 14px;
    right: 24px;
    width: 40px;
    height: 40px;
    display: flex;
    cursor: pointer;
    position: absolute;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
}

.close-icon-bg .v-icon {
    color: #ffffff;
    transition: all 0.5s ease;
}

.close-icon-bg:hover .v-icon {
    color: #000000;
    transition: all 0.5s ease;
}

.clone-edit-modal .v-overlay__content .v-card .v-card-text {
    position: relative;
    padding: 70px !important;
}

.clone-edit-modal .v-card .v-card-text .image-container {
    display: flex;
    min-height: 405px;
    max-height: 405px;
    align-items: center;
    justify-content: center;
    background-repeat: repeat;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC);

}

.image-container img {
    width: 405px;
    height: 405px;
    transform: none;
    object-fit: cover;
}

.footer-column {
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    padding: 24px 70px;
    background-color: rgba(45, 62, 80, 0.89);
}

.footer-column .resize-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.btn-resize {
    font-size: 14px;
    line-height: 16px;
    padding: 11px 24px;
    letter-spacing: 0.3px;
    text-transform: inherit;
    height: auto !important;
    color: #506e91 !important;
    background-color: #eaf0f6;
    border: 1px solid #cbd6e2;
    font-family: LexendDeca-Medium;
}

.btn-resize:hover {
    border-color: #cbd6e2;
    background-color: #f5f8fa;
}

.v-btn--disabled.btn-resize {
    opacity: 0.9;
    cursor: not-allowed !important;
}

.btn-resize-text {
    border: 0;
    padding: 0;
    font-size: 14px;
    min-width: auto;
    border-radius: 0;
    background: transparent;
    text-transform: inherit;
    height: auto !important;
    text-decoration: underline;
    color: #ffffff !important;
    font-family: LexendDeca-SemiBold;
}

.btn-resize-text:hover {
    color: #7fd1de !important;
    background: transparent !important;
}

.footer-column .size-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.footer-column .size-wrapper p {
    display: flex;
    font-size: 14px;
    color: #ffffff;
    line-height: 28px;
    margin: 0 16px 0 0;
    flex-direction: column;
    font-family: LexendDeca-Light;
}

.footer-column .size-wrapper p a {
    font-size: 12px;
    color: #ffffff;
    text-align: right;
    line-height: 16px;
    text-decoration: underline;
    font-family: LexendDeca-Light;
}

.footer-column .size-wrapper .v-input {
    min-width: 75px;
}

.footer-column .size-wrapper .v-input input {
    padding: 5px 10px;
    font-family: LexendDeca-Light;
}

.footer-column .size-wrapper .v-input input::placeholder {
    color: #33475b;
    font-family: LexendDeca-Light;
}

.footer-column .size-wrapper label {
    font-size: 16px;
    color: #ffffff;
    margin-left: 8px;
    font-family: LexendDeca-Light;
}

.link-icon {
    font-size: 24px;
    color: #ffffff;
    margin: 0 8px 0 8px;
    transform: rotate(135deg);
}
</style>