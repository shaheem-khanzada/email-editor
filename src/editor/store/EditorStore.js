import { defineStore } from 'pinia'
import { Editor } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Underline from '@tiptap/extension-underline'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'
import { fontSizes, fontFamilies, colors, switches, folders, cropDefaultSizes } from '../data'
import { FontSize } from '../extensions/FontSize';


export const useEditorStore = defineStore('editor-store', {
    state: () => ({ 
        fontSizes, 
        fontFamilies,
        cropDefaultSizes,
        activeCropSize: cropDefaultSizes[0],
        colors: colors,
        switches: switches,
        selectedFontFamily: null, 
        selectedFontSize: null,
        editor: null,
        toogleDrawer: null,
        toogleFileDetail: false,
        toggleCreateModal: false,
        toggleFolderDetail: false,
        toggleUrlModal: false,
        toogleMoveTrashModal: false,
        toggleCloneEditModal: false,
        toggleResizeImage: false,
        toggleCropImage: false,
        folders
    }),
    getters: {
        activeFontFamily: (state) => {
            for (const fontFamily of state.fontFamilies) {
                if (state.editor.isActive('textStyle', { fontFamily })) {
                    return fontFamily;
                }
            }
            return state.selectedFontFamily || state.fontFamilies[0];
        },
        activeFontSize: (state) => {
            for (const fontSize of state.fontSizes) {
                if (state.editor.isActive('textStyle', { fontSize: fontSize + "px"  })) {
                    console.log(' active font size is ', fontSize);
                    return fontSize;
                }
            }
            return state.selectedFontSize || state.fontSizes[0];
        }
    },
    actions: {
        initlizeEditor() {
            this.editor = new Editor({
                content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
                extensions: [StarterKit, Underline, TextStyle, FontFamily, FontSize],
            });
        },

        updateFontFamily(fontFamily) {
            this.editor.chain().focus().setFontFamily(fontFamily).run()
        },
        updateFontSize(size) {
            this.editor.chain().focus().setFontSize(size).run();
        },
        toogleState(key) {
            this[key] = !this[key];
        },
    },
})