<template>
    <div class="image-description">
        <div class="icon-box">
            <textarea name="" id="" placeholder="A short description of the image (up to 150 characters)"></textarea>
            <v-icon class="mdi mdi-marker marker-icon"></v-icon>
        </div>
        <div class="description-btn mt-2 mb-6">
            <v-btn variant="text" class="default-save-btn mr-3" disabled>Save</v-btn>
            <v-btn variant="text" class="default-cancel-btn">Cancel</v-btn>
        </div>
    </div>
</template>

<script></script>

<style>
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
</style>