import { defineStore } from 'pinia'
import { fontSizes, fontFamilies } from '../data'

export const useEditorStore = defineStore('editor-store', {
    state: () => ({ fontSizes, fontFamilies }),
    getters: {
       
    },
    actions: {
        
    },
})