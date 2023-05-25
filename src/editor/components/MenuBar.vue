<template>
    <div class="draft-extend-controls" v-if="editor">
        <span class="editor-span" @click="editor.chain().focus().toggleBold().run()"
            :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
            <v-icon class="mdi mdi-alpha-b"></v-icon>
            <v-tooltip activator="parent" location="top">Bold</v-tooltip>
        </span>
        <span class="editor-span" @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()
            " :class="{ 'is-active': editor.isActive('italic') }">
            <v-icon class="mdi mdi-format-italic"></v-icon>
            <v-tooltip activator="parent" location="top">Italic</v-tooltip>
        </span>
        <span class="editor-span" @click="editor.chain().focus().toggleUnderline().run()"
            :class="{ 'is-active': editor.isActive('underline') }">
            <v-icon class="mdi mdi-format-underline"></v-icon>
            <v-tooltip activator="parent" location="top">Underline</v-tooltip>
        </span>
        <span class="editor-span" @click="editor.chain().focus().clearNodes().unsetAllMarks().run()"
            :class="{ 'is-active': editor.isActive('clear-formatting') }">
            <v-icon class="mdi mdi-alpha-t"></v-icon>
            <v-tooltip activator="parent" location="top">Clear formatting</v-tooltip>
        </span>
        <MoreModal />
        <div class="divider"></div>
        <LinkModal />
        <span class="editor-span">
            <v-icon class="mdi mdi-image-outline"></v-icon>
            <v-tooltip activator="parent" location="top">Insert image</v-tooltip>
        </span>
        <PersonalizeModal />
        <InsertModal />
    </div>
</template>

<script>
import MoreModal from "@/editor/components/modal/MoreModal.vue"
import LinkModal from "@/editor/components/modal/LinkModal.vue"
import PersonalizeModal from "@/editor/components/modal/PersonalizeModal.vue"
import InsertModal from "@/editor/components/modal/InsertModal.vue"
export default {
    components: { MoreModal, LinkModal, PersonalizeModal, InsertModal },
    props: ['editor'],
};
</script>

<style>
.rotate .v-icon {
    transform: rotate(90deg);
    font-size: 20px !important;
}

.draft-extend-controls {
    display: flex;
    align-items: center;
}

.draft-extend-controls .editor-span .v-icon {
    width: 24px;
    height: 26px;
    font-size: 20px;
    color: #425b76;
    padding-top: 2px;
}

.draft-extend-controls .editor-span {
    width: 26px;
    height: 26px;
    display: flex;
    cursor: pointer;
    margin-right: 5px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
}

.draft-extend-controls .editor-span.is-active {
    background: rgb(203, 214, 226);
    border: 1px solid rgb(153, 172, 194);
    transition: all 150ms ease-out 0s;
}

.draft-extend-controls .editor-span:hover {
    border-color: #cbd6e2;
}

.draft-extend-controls .editor-span:first-of-type .v-icon {
    padding-top: 0;
    font-size: 30px;
}

.draft-extend-controls .editor-span:nth-of-type(4) .v-icon {
    font-size: 30px;
}

.draft-extend-controls .menu-box {
    margin-right: 0;
    margin-left: 10px;
}

.draft-extend-controls .divider {
    width: 1px;
    height: 26px;
    margin: 0 12px 0 5px;
    border-right: 1px solid #cbd6e2;
}

.menu-box {
    display: flex;
    cursor: pointer;
    font-size: 14px;
    color: #0091ae;
    margin-right: 20px;
    align-items: center;
    font-family: LexendDeca-SemiBold;
}

.menu-box .v-icon {
    margin-top: 2px;
    color: #7c98b6;
}

.menu-box .v-icon:first-of-type {
    font-size: 18px;
    margin-right: 5px;
}

.menu-box:last-of-type {
    margin-right: 0;
}

/* //// Tooltip //// */
.v-overlay-container .v-overlay .v-overlay__content {
    font-size: 14px;
    color: #ffffff;
    border-radius: 3px;
    background: #425b76;
    padding: 6px 10px 4px;
}

.v-overlay-container .v-overlay .v-overlay__content::before {
    content: "";
    position: absolute;
    pointer-events: none;
    clip-path: polygon(100% 100%, 0px 100%, 100% 0px);
    border-top-left-radius: 100%;
    border-bottom-right-radius: 3px;
    width: 16px;
    height: 16px;
    background-color: inherit;
    transform: rotate(45deg);
    top: calc(100% - 10px);
    left: 0;
    right: 0;
    margin: 0 auto;
    border-top-color: transparent !important;
    border-left-color: transparent !important;
}

/* //// Tooltip //// */
</style>