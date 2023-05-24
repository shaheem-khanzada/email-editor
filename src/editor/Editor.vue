<template>
    <div>
        <div>
            <v-card class="box-shadow-none">
                <v-card-text>
                    <card-box class="card-box">
                        <Header />
                        <div class="draft-extend-editor">
                            <editor-content :editor="editor" />
                            <MenuBar :editor="editor" />
                        </div>
                    </card-box>
                    <p>
                        <v-icon class="mdi mdi-draw"></v-icon>
                        Your signature will be included when you use this template.
                        <router-link>Edit signature <v-icon class="mdi mdi-open-in-new"></v-icon></router-link>
                    </p>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>
  
<script>
import Header from "@/editor/components/Header.vue";
import MenuBar from "@/editor/components/MenuBar.vue"
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Underline from '@tiptap/extension-underline'

// import Underline from "@tiptap/extension-clear-formating"
export default {
    components: {
        EditorContent,
        Header,
        MenuBar
    },
    data() {
        return {
            dialog: false,
            items: [
                { title: "Click Me" },
                { title: "Click Me" },
                { title: "Click Me" },
                { title: "Click Me 2" },
            ],
            editor: null,
        };
    },

    mounted() {
        this.editor = new Editor({
            content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
            extensions: [StarterKit, Underline],
        });
    },

    beforeUnmount() {
        this.editor.destroy();
    },
};
</script>
  
<style>
/* /// Fonts /// */
@font-face {
    font-family: LexendDeca-Black;
    src: url(./../../public/fonts/LexendDeca-Black.ttf);
}

@font-face {
    font-family: LexendDeca-ExtraBold;
    src: url(./../../public/fonts/LexendDeca-ExtraBold.ttf);
}

@font-face {
    font-family: LexendDeca-Bold;
    src: url(./../../public/fonts/LexendDeca-Bold.ttf);
}

@font-face {
    font-family: LexendDeca-SemiBold;
    src: url(./../../public/fonts/LexendDeca-SemiBold.ttf);
}

@font-face {
    font-family: LexendDeca-Medium;
    src: url(./../../public/fonts/LexendDeca-Medium.ttf);
}

@font-face {
    font-family: LexendDeca-Regular;
    src: url(./../../public/fonts/LexendDeca-Regular.ttf);
}

@font-face {
    font-family: LexendDeca-Light;
    src: url(./../../public/fonts/LexendDeca-Light.ttf);
}

@font-face {
    font-family: LexendDeca-ExtraLight;
    src: url(./../../public/fonts/LexendDeca-ExtraLight.ttf);
}

@font-face {
    font-family: LexendDeca-Thin;
    src: url(./../../public/fonts/LexendDeca-Thin.ttf);
}

/* /// Fonts /// */
.v-card .v-card-title {
    line-height: 2rem;
    padding: 17px 20px 15px 20px;
    background-color: #00bda5;
    background-image: linear-gradient(-303deg, #00a4bd, #00afb2 56%, #00bda5);
    color: #fff;
}

.v-card .v-card-title span {
    display: flex;
    font-size: 20px;
    line-height: normal;
    align-items: center;
    justify-content: space-between;
    font-family: LexendDeca-SemiBold;
}

.v-card .v-card-title span i {
    font-size: 28px;
}

.v-card .v-card-text {
    padding: 24px 40px 24px;
}

.v-card .v-card-text .card-box {
    width: 100%;
    display: block;
    border-radius: 3px;
    border: 1px solid #cbd6e2;
}

.draft-extend-editor {
    padding: 12px;
}

.draft-extend-editor .ProseMirror {
    width: 100%;
    resize: none;
    height: 300px;
    outline: none;
    display: block;
    overflow: auto;
    font-size: 14px;
    color: #33475b;
    padding: 0 0 10px 0;
    font-family: LexendDeca-Light;
}

p {
    font-size: 14px;
    color: #33475b;
    margin-top: 15px;
    line-height: 24px;
    font-family: LexendDeca-Light;
}

p .v-icon {
    font-size: 20px;
}

p router-link {
    color: #0091ae;
    font-family: LexendDeca-SemiBold;
}

p router-link .v-icon {
    font-size: 18px;
    color: #7c98b6;
}

.v-card-actions {
    padding: 15px 24px 15px 24px;
}

.v-card-actions .v-btn {
    font-size: 14px;
    min-height: 40px;
    text-transform: capitalize;
    padding: 5px 15px 5px 15px;
    font-family: LexendDeca-Medium;
}

.v-card-actions .v-btn:first-of-type {
    background-color: #00bda5;
    background-image: linear-gradient(-303deg, #00a4bd, #00afb2 56%, #00bda5);
}

.v-card-actions .v-btn:first-of-type:deep(.v-btn__content) {
    color: #ffffff;
}

.v-card-actions .v-btn:last-of-type {
    background-color: #fff;
    color: #ff7a53 !important;
    border: 1px solid #ff7a59;
}

.box-shadow-none {
    box-shadow: 0 0 0 0 #cecece;
}
</style>
  