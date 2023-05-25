<template>
    <div>
        <v-menu transition="scale-transition">
            <template v-slot:activator="{ props }">
                <div class="menu-box" v-bind="props">
                    <span class="btn-text">Insert</span>
                    <v-icon class="mdi mdi-menu-down"></v-icon>
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

<style>
.menu-box:hover .btn-text {
    color: #007a8c;
    text-decoration: underline;
}
</style>