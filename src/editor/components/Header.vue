<template>
    <div>
        <div class="name-box">
            <span> Name: </span>
            <input type="text" />
            <span> Owner: <span>zubair khanzada</span> </span>
        </div>
        <!-- // -->
        <div class="subject-box">
            <span> Subject: </span>
            <input type="text" />
            <v-menu transition="scale-transition">
                <template v-slot:activator="{ props }">
                    <div class="menu-box" v-bind="props">
                        <v-icon class="mdi mdi-account"></v-icon>
                        Shared with everyone
                        <v-icon class="mdi mdi-menu-down"></v-icon>
                    </div>
                </template>
                <v-list class="demo123">
                    <v-list-item class="demo">
                        <v-list-item-title>Hello World</v-list-item-title>
                        <v-list-item-title>Hello World</v-list-item-title>
                        <v-list-item-title>Hello World</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-menu transition="scale-transition">
                <template v-slot:activator="{ props }">
                    <div class="menu-box" v-bind="props">
                        <v-icon class="mdi mdi-folder"></v-icon>
                        Select a Folder
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
    </div>
</template>

<script></script>

<style>
.name-box {
    display: flex;
    padding: 3px 15px;
    align-items: center;
    border-bottom: 1px solid #cbd6e2;
}

.name-box input {
    flex: 1;
    outline: none;
    font-size: 14px;
    color: #33475b;
    min-height: 34px;
    padding: 0 10px 0 10px;
    font-family: LexendDeca-Light;
}

.name-box span {
    font-size: 14px;
    color: #33475b;
    font-family: LexendDeca-SemiBold;
}

.name-box span span {
    font-size: 14px;
    color: #33475b;
    font-family: LexendDeca-Light;
}

.subject-box {
    display: flex;
    padding: 3px 15px;
    align-items: center;
    border-bottom: 1px solid #cbd6e2;
}

.subject-box input {
    flex: 1;
    outline: none;
    font-size: 14px;
    color: #33475b;
    min-height: 34px;
    padding: 0 10px 0 10px;
    font-family: LexendDeca-Light;
}

.subject-box span {
    font-size: 14px;
    color: #33475b;
    font-family: LexendDeca-SemiBold;
}
</style>