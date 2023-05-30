<template>
    <div>
        <v-menu class="personalize-modal" v-model="menu" :close-on-content-click="false" location="top">
            <template v-slot:activator="{ props }">
                <div class="menu-box" v-bind="props">
                    <span class="btn-text">Personalize</span>
                    <v-icon class="mdi mdi-menu-down"></v-icon>
                </div>
            </template>
            <v-card min-width="400">
                <h2>Insert personalization token</h2>
                <div class="pl-6 pr-6 mb-5">
                    <label>Type</label>
                    <v-select class="fonts" label="" placeholder="Contact"
                        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                        variant="outlined"></v-select>
                </div>
                <div class="pl-6 pr-6 pb-5 border-bottom">
                    <v-text-field class="bg-remove" density="compact" variant="solo" append-inner-icon="mdi-magnify"
                        single-line hide-details placeholder="Search contact tokens"></v-text-field>
                </div>
                <div class="contact-activity">
                    <h3>Contact activity</h3>
                    <v-list :items="items"></v-list>
                    <h3>Deal information</h3>
                    <v-list :items="items"></v-list>
                    <h3>Sales properties</h3>
                    <v-list :items="items"></v-list>
                    <h3>Contact information</h3>
                    <v-list :items="items"></v-list>
                </div>
                <div class="arrow-icon-bottom"></div>
            </v-card>
        </v-menu>
    </div>
</template>

<script>

export default {
    data() {
        return {
            fav: true,
            menu: false,
            message: false,
            hints: true,
            items: [
                {
                    title: 'First conversion date',
                    value: 1,
                },
                {
                    title: 'First conversion',
                    value: 2,
                },
                {
                    title: 'Membership notes',
                    value: 3,
                },
                {
                    title: 'Status',
                    value: 4,
                },
                {
                    title: 'Last Engagement Date',
                    value: 5,
                },
                {
                    title: 'Recent sales emails clicked date',
                    value: 6,
                },
                {
                    title: 'Recent sales email open date',
                    value: 7,
                },
            ],
        };
    },
};

</script>

<style>
.menu-box:hover .btn-text {
    color: #007a8c;
    text-decoration: underline;
}

.personalize-modal .v-overlay__content .v-card {
    border-radius: 3px;
    margin-bottom: 20px;
    padding-bottom: 15px;
    background-color: #fff;
    border: 1px solid #cbd6e2;
    box-shadow: 0 5px 24px 0 rgba(0, 0, 0, .08);
}

.arrow-icon-bottom {
    position: fixed;
    pointer-events: none;
    border-width: 1px;
    border-style: solid;
    border-right-color: rgb(203, 214, 226);
    border-bottom-color: rgb(203, 214, 226);
    border-image: initial;
    clip-path: polygon(100% 100%, 0px 100%, 100% 0px);
    border-top-left-radius: 100%;
    width: 20px;
    height: 20px;
    background-color: inherit;
    transform: rotate(45deg);
    top: calc(100% - 31px);
    left: 40px;
    border-top-color: transparent !important;
    border-left-color: transparent !important;
}

.personalize-modal .v-overlay__content .v-card h2 {
    font-size: 20px;
    color: #33475b;
    padding: 16px 24px 0;
    font-family: LexendDeca-SemiBold;
}

.personalize-modal .v-overlay__content .v-card label {
    display: block;
    font-size: 14px;
    color: #33475b;
    padding: 8px 0 5px 0;
    font-family: LexendDeca-Medium;
}

.personalize-modal .v-overlay__content .v-card .v-input .v-input__details {
    display: none;
}

.personalize-modal .v-overlay__content .v-card .v-input .v-input__control {
    height: 40px;
}

.personalize-modal .v-overlay__content .v-card .v-input .v-input__control .v-field {
    background-color: #f5f8fa;
}

.personalize-modal .v-overlay__content .v-card .v-input .v-input__control .v-field .v-icon {
    color: #00a4bd;
}

.personalize-modal .v-overlay__content .v-card .v-input .v-input__control .v-field .v-field__field {
    height: 40px;
}

.personalize-modal .v-overlay__content .v-card .v-input .v-input__control .v-field .v-field__field .v-field__input {
    height: 40px;
    min-height: 40px;
    padding: 5px 15px 5px 15px;
}

.personalize-modal .v-overlay__content .v-card .v-input .v-input__control .v-field .v-field__field .v-field__input input {
    font-size: 16px;
    color: #33475b;
    font-family: LexendDeca-Regular;
}

.personalize-modal .v-overlay__content .v-card .v-input .v-input__control .v-field .v-field__field .v-field__input input::placeholder {
    top: 2px;
    opacity: 1;
    left: -10px;
    font-size: 16px;
    position: relative;
    padding: 0 0 0 10px;
    color: #33475b !important;
    font-family: LexendDeca-Regular;
}

.personalize-modal .v-overlay__content .v-card .v-input .v-select__selection-text {
    border: 0;
    width: 100%;
    height: auto;
    font-size: 16px;
    text-align: left;
    line-height: 30px;
    display: inline-block;
    color: #33475b !important;
    font-family: LexendDeca-Regular;
}

.personalize-modal .v-overlay__content .v-card .v-input .v-input__control .v-field .v-field__outline__start {
    border-color: #cbd6e2;
}

.personalize-modal .v-overlay__content .v-card .v-input .v-input__control .v-field:hover .v-field__outline__start {
    border-color: #00d0e4;
}

.personalize-modal .v-overlay__content .v-card .v-input .v-input__control .v-field .v-field__outline__end {
    border-color: #cbd6e2;
}

.personalize-modal .v-overlay__content .v-card .v-input .v-input__control .v-field:hover .v-field__outline__end {
    border-color: #00d0e4;
}

.bg-remove .v-field {
    font-size: 16px;
    color: #33475b;
    background: none !important;
    border: 1px solid #cbd6e2;
    box-shadow: 0 0 0 0 #cecece;
    font-family: LexendDeca-Regular;
}

.bg-remove .v-field.v-field--focused {
    outline: 0;
    border-color: rgba(0, 208, 228, .5);
    box-shadow: 0 0 4px 1px rgba(0, 208, 228, .3), 0 0 0 1px #00d0e4;
}

.bg-remove .v-field input::placeholder {
    opacity: 0.99;
    color: #5c9dbb;
    font-family: LexendDeca-Light;
}

.bg-remove .v-field .v-icon {
    color: #0091ae !important;
}

.border-bottom {
    border-bottom: 1px solid #cbd6e2;
}

.contact-activity {
    overflow: auto;
    max-height: 200px;
    padding: 12px 0 0 0;
}

.contact-activity h3 {
    font-size: 14px;
    color: #33475b;
    padding: 0 20px 10px 20px;
    font-family: LexendDeca-SemiBold;
}

.contact-activity .v-list {
    padding: 0;
    margin-bottom: 12px;
}

.contact-activity .v-list:last-of-type {
    margin-bottom: 0;
}

.contact-activity .v-list .v-list-item {
    min-height: 40px;
    padding: 5px 20px 5px 40px;
}

.contact-activity .v-list .v-list-item.v-list-item--active {
    background: #e5f5f8;
}

.contact-activity .v-list .v-list-item:hover {
    background: #e5f5f8;
}

.contact-activity .v-list .v-list-item--variant-text .v-list-item__overlay {
    background: #e5f5f8;
}

.contact-activity .v-list .v-list-item .v-list-item-title {
    display: block;
    font-size: 14px;
    color: #33475b;
    max-width: 321px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: LexendDeca-Light;
}
</style>