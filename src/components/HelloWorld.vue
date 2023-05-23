<template>
  <div class="pa-5">
    <v-dialog v-model="dialog" width="900">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Open Dialog </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span
            >New Template
            <v-icon class="mdi mdi-close" @click="dialog = false"></v-icon
          ></span>
        </v-card-title>
        <v-card-text>
          <card-box class="card-box">
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

                <v-list>
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
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
            <!-- // -->
            <div class="draft-extend-editor">
              <textarea class="textarea-content"></textarea>
              <div class="draft-extend-controls">
                <span>
                  <v-icon class="mdi mdi-alpha-b"></v-icon>
                </span>
                <span>
                  <v-icon class="mdi mdi-format-italic"></v-icon>
                </span>
                <span>
                  <v-icon class="mdi mdi-format-underline"></v-icon>
                </span>
                <span>
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
                <span>
                  <v-icon class="mdi mdi-link"></v-icon>
                </span>
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
            </div>
          </card-box>
          <!-- // -->

          <br />
          <card-box class="card-box">
            <!--  -->
            <editor-content :editor="editor" />
            <div v-if="editor">
              <ul style="list-style: none">
                <li>
                  <button
                    @click="editor.chain().focus().toggleBold().run()"
                    :disabled="!editor.can().chain().focus().toggleBold().run()"
                    :class="{ 'is-active': editor.isActive('bold') }"
                  >
                    bold
                  </button>
                </li>
                <li>
                  <button
                    @click="editor.chain().focus().toggleItalic().run()"
                    :disabled="
                      !editor.can().chain().focus().toggleItalic().run()
                    "
                    :class="{ 'is-active': editor.isActive('italic') }"
                  >
                    Italic
                  </button>
                </li>
                <li>
                  <button
                    @click="editor.chain().focus().toggleUnderline().run()"
                    :class="{ 'is-active': editor.isActive('underline') }"
                  >
                    Underline
                  </button>
                </li>
                <li>
                  <button
                    @click="editor.chain().focus().clearNodes().unsetAllMarks().run()"
                    :class="{ 'is-active': editor.isActive('clear-formatting') }"
                  >
                    Clear Formatting
                  </button>
                </li>
              </ul>
            </div>
            <!--  -->
          </card-box>

          <p>
            <v-icon class="mdi mdi-draw"></v-icon>
            Your signature will be included when you use this template.
            <router-link
              >Edit signature <v-icon class="mdi mdi-open-in-new"></v-icon
            ></router-link>
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="green-darken-1" variant="text" @click="dialog = false">
            Save Template
          </v-btn>
          <v-btn color="green-darken-1" variant="text" @click="dialog = false">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Underline from '@tiptap/extension-underline'

// import Underline from "@tiptap/extension-clear-formating"
export default {
  components: {
    EditorContent,
  },
  data() {
    return {
      dialog: false,
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
      editor: null,
    };
  },

  mounted() {
    this.editor = new Editor({
      content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
      extensions: [StarterKit, Underline],
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>

<style scoped>
/* /// Fonts /// */
@font-face {
  font-family: LexendDeca-Black;
  src: url(./../../public/fonts/LexendDeca-Black.ttf);
}

@font-face {
  font-family: LexendDeca-ExtraBold;
  src: url(./../../public/fonts/LexendDeca-ExtraBold.ttf);
}

@font-face {
  font-family: LexendDeca-Bold;
  src: url(./../../public/fonts/LexendDeca-Bold.ttf);
}

@font-face {
  font-family: LexendDeca-SemiBold;
  src: url(./../../public/fonts/LexendDeca-SemiBold.ttf);
}

@font-face {
  font-family: LexendDeca-Medium;
  src: url(./../../public/fonts/LexendDeca-Medium.ttf);
}

@font-face {
  font-family: LexendDeca-Regular;
  src: url(./../../public/fonts/LexendDeca-Regular.ttf);
}

@font-face {
  font-family: LexendDeca-Light;
  src: url(./../../public/fonts/LexendDeca-Light.ttf);
}

@font-face {
  font-family: LexendDeca-ExtraLight;
  src: url(./../../public/fonts/LexendDeca-ExtraLight.ttf);
}

@font-face {
  font-family: LexendDeca-Thin;
  src: url(./../../public/fonts/LexendDeca-Thin.ttf);
}

/* /// Fonts /// */
.v-dialog:deep(.v-card .v-card-title) {
  line-height: 2rem;
  padding: 17px 20px 15px 20px;
  background-color: #00bda5;
  background-image: linear-gradient(-303deg, #00a4bd, #00afb2 56%, #00bda5);
  color: #fff;
}

.v-dialog:deep(.v-card .v-card-title span) {
  display: flex;
  font-size: 20px;
  line-height: normal;
  align-items: center;
  justify-content: space-between;
  font-family: LexendDeca-SemiBold;
}

.v-dialog:deep(.v-card .v-card-title span i) {
  font-size: 28px;
}

.v-dialog:deep(.v-card .v-card-text) {
  padding: 24px 40px 24px;
}

.v-dialog:deep(.v-card .v-card-text .card-box) {
  width: 100%;
  display: block;
  border-radius: 3px;
  border: 1px solid #cbd6e2;
}

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

.draft-extend-editor {
  padding: 12px;
}

.draft-extend-editor .textarea-content {
  width: 100%;
  resize: none;
  height: 300px;
  outline: none;
  display: block;
  font-size: 14px;
  color: #33475b;
  font-family: LexendDeca-Light;
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

.draft-extend-controls span:hover {
  border-color: #cbd6e2;
}

.draft-extend-controls span:first-of-type .v-icon {
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

p {
  font-size: 14px;
  color: #33475b;
  margin-top: 15px;
  line-height: 24px;
  font-family: LexendDeca-Light;
}

p .v-icon {
  font-size: 20px;
}

p router-link {
  color: #0091ae;
  font-family: LexendDeca-SemiBold;
}

p router-link .v-icon {
  font-size: 18px;
  color: #7c98b6;
}

.v-card-actions {
  padding: 15px 24px 15px 24px;
}

.v-card-actions .v-btn {
  font-size: 14px;
  min-height: 40px;
  text-transform: capitalize;
  padding: 5px 15px 5px 15px;
  font-family: LexendDeca-Medium;
}

.v-card-actions .v-btn:first-of-type {
  background-color: #00bda5;
  background-image: linear-gradient(-303deg, #00a4bd, #00afb2 56%, #00bda5);
}

.v-card-actions .v-btn:first-of-type:deep(.v-btn__content) {
  color: #ffffff;
}

.v-card-actions .v-btn:last-of-type {
  background-color: #fff;
  color: #ff7a53 !important;
  border: 1px solid #ff7a59;
}
</style>
