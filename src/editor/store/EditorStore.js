import { defineStore } from 'pinia'
import { Editor } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Underline from '@tiptap/extension-underline'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'
import { fontSizes, fontFamilies, colors } from '../data'


export const useEditorStore = defineStore('editor-store', {
    state: () => ({ 
        fontSizes, 
        fontFamilies,
        colors: colors,
        selectedFontFamily: null, 
        selectedFontSize: null,
        editor: null
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
                if (state.editor.isActive('textStyle', { fontSize })) {
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
                extensions: [StarterKit, Underline, TextStyle, FontFamily],
            });

            console.log('this.editor', this.editor )
        },

        updateFontFamily(value) {
            this.editor.chain().focus().setFontFamily(value).run()
        }
    },
})