<template>
    <div class="color-picker-menu">
        <v-card>
            <v-tabs v-model="tab">
                <v-tab value="one">Simple</v-tab>
                <v-tab value="two">Advanced</v-tab>
            </v-tabs>
            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="one">
                        <v-color-picker width="100%" hide-canvas hide-sliders hide-inputs class="ma-2" :swatches="swatches"
                            show-swatches></v-color-picker>
                    </v-window-item>
                    <v-window-item value="two">
                        <v-color-picker width="100%" canvas-height="100"></v-color-picker>
                    </v-window-item>
                </v-window>
                <div class="pt-3">
                    <button class="reset-default">Reset to default</button>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>

export default {
    data() {
        return {
            tab: null,
        };
    },
};

</script>