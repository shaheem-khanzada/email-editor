<template>
    <v-dialog class="move-trash-modal" width="500px">
        <v-card>
            <v-card-text class="pa-0">
                <h3>
                    Move file to trash?
                </h3>
                <div class="move-detail">
                    <p>
                        <span>avatar-four</span> can be restored for up to 30 days.
                    </p>
                    <p>
                        Moving this file will remove it from any pages or posts.
                        Go to <a href="">Files</a> to see where it's being used.
                    </p>
                    <div class="mt-6">
                        <v-btn variant="text" class="save-btn mr-3">Move file to trash</v-btn>
                        <v-btn variant="text" class="cancel-btn"
                            @click="store.toogleState('toogleMoveTrashModal')">Cancel</v-btn>
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
const moveTrash = ref(false);

</script>

<style>
.move-trash-modal .v-card {
    box-shadow: 0 0 10px 0 #939393 !important;
}

.move-trash-modal h3 {
    padding: 40px;
    font-size: 32px;
    color: #ffffff;
    font-family: LexendDeca-Bold;
    background-image: repeating-linear-gradient(135deg, #f04b51, #f04b51 24px, #f2545b 0, #f2545b 48px);
}

.move-trash-modal .move-detail {
    padding: 24px 40px;
}

.move-trash-modal .move-detail p {
    font-size: 14px;
    color: #33475b;
    margin: 0 0 12px 0;
    letter-spacing: 0.3px;
    font-family: LexendDeca-Light;
}

.move-trash-modal .move-detail p a {
    text-decoration: none;
}

.move-trash-modal .move-detail p a:hover {
    text-decoration: underline;
}

.move-trash-modal .move-detail p span {
    font-family: LexendDeca-SemiBold;
}

.move-trash-modal .move-detail .save-btn {
    font-size: 14px;
    color: #ffffff;
    line-height: 16px;
    padding: 11px 24px;
    background-color: #f2545b;
    border: 1px solid #f2545b;
}

.move-trash-modal .move-detail .cancel-btn {
    font-size: 14px;
    line-height: 16px;
    padding: 11px 24px;
    color: #506e91 !important;
    background-color: #eaf0f6;
    border: 1px solid #cbd6e2;
}
</style>