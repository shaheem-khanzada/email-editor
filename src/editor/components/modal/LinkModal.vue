<template>
    <div>
        <v-menu transition="scale-transition">
            <template v-slot:activator="{ props }">
                <div class="menu-box ml-0 rotate" v-bind="props">
                    <v-icon class="mdi mdi-link"></v-icon>
                </div>
            </template>
            <v-list>
                <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script></script>

<style></style>