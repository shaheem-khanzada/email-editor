<template>
    <div>
        <v-menu transition="scale-transition">
            <template v-slot:activator="{ props }">
                <div class="menu-box ml-0 rotate mr-1 menu-box-btn" v-bind="props">
                    <v-icon class="mdi mdi-link mr-0 mt-0"></v-icon>
                    <v-tooltip activator="parent" location="top">Insert link</v-tooltip>
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
.menu-box-btn {
    width: 26px;
    height: 26px;
    display: flex;
    cursor: pointer;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
}

.menu-box-btn:hover {
    border-color: #cbd6e2;
}
</style>