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
        <v-menu transition="scale-transition">
            <template v-slot:activator="{ props }">
                <div class="menu-box" v-bind="props">
                    More
                    <v-icon class="mdi mdi-menu-down"></v-icon>
                </div>
            </template>
            <v-list>
                <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <div class="divider"></div>
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
        <span>
            <v-icon class="mdi mdi-image-outline"></v-icon>
        </span>
        <v-menu transition="scale-transition">
            <template v-slot:activator="{ props }">
                <div class="menu-box" v-bind="props">
                    Personalize
                    <v-icon class="mdi mdi-menu-down"></v-icon>
                </div>
            </template>
            <v-list>
                <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu transition="scale-transition">
            <template v-slot:activator="{ props }">
                <div class="menu-box" v-bind="props">
                    Insert
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

<script>
export default {
    components: {},
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