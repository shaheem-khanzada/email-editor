<template>
    <div class="draft-extend-controls" v-if="editor">
        <span @click="editor.chain().focus().toggleBold().run()"
            :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
            <v-icon class="mdi mdi-alpha-b"></v-icon>
        </span>
        <span @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()
            " :class="{ 'is-active': editor.isActive('italic') }">
            <v-icon class="mdi mdi-format-italic"></v-icon>
        </span>
        <span @click="editor.chain().focus().toggleUnderline().run()"
            :class="{ 'is-active': editor.isActive('underline') }">
            <v-icon class="mdi mdi-format-underline"></v-icon>
        </span>
        <span @click="editor.chain().focus().clearNodes().unsetAllMarks().run()"
            :class="{ 'is-active': editor.isActive('clear-formatting') }">
            <v-icon class="mdi mdi-alpha-t"></v-icon>
        </span>
        <MoreModal />
        <div class="divider"></div>
        <LinkModal />
        <span>
            <v-icon class="mdi mdi-image-outline"></v-icon>
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

.draft-extend-controls span .v-icon {
    width: 24px;
    height: 26px;
    font-size: 20px;
    color: #425b76;
    padding-top: 2px;
}

.draft-extend-controls span {
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

.draft-extend-controls span.is-active {
    background: rgb(203, 214, 226);
    border: 1px solid rgb(153, 172, 194);
    transition: all 150ms ease-out 0s;
}

.draft-extend-controls span:hover {
    border-color: #cbd6e2;
}

.draft-extend-controls span:first-of-type .v-icon {
    padding-top: 0;
    font-size: 30px;
}

.draft-extend-controls span:nth-of-type(4) .v-icon {
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
</style>