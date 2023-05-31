<template>
    <v-dialog class="create-folder" width="450px">
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
                        <v-btn variant="text" class="save-btn mr-3">Save</v-btn>
                        <v-btn variant="text" class="cancel-btn">Cancel</v-btn>
                    </div>
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script setup>

import { ref } from "vue";
const props = defineProps(['editor']);
const dialog = ref(false);

</script>

<style>
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

.cancel-btn:hover {
    background-color: #ffffff;
}

/* //// Create Folder Modal //// */
</style>