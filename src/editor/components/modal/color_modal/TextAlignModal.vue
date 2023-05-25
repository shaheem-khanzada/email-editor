<template>
    <div class="alignment-menu">
        <button>
            <v-icon class="mdi mdi-format-align-left"></v-icon>
        </button>
        <button>
            <v-icon class="mdi mdi-format-align-center"></v-icon>
        </button>
        <button>
            <v-icon class="mdi mdi-format-align-right"></v-icon>
        </button>
    </div>
</template>

<script></script>

<style>
/* //// Alignment Menu //// */
.alignment-menu {
    top: 45px;
    right: 3px;
    width: 60px;
    display: none;
    padding: 5px 0;
    position: absolute;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #cbd6e2;
    box-shadow: 0 1px 24px 0 rgba(0, 0, 0, .08);
}

.alignment-menu.active {
    display: block;
}

.alignment-menu button {
    min-height: 32px;
    border: 0 !important;
    width: 100% !important;
    border-radius: 0 !important;
}

.alignment-menu button .v-icon {
    font-size: 18px;
    color: #33475b;
}

.alignment-menu button:hover {
    background: #e5f5f8;
}

/* //// Alignment Menu //// */
</style>