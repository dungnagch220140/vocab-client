import Vue from 'vue';
import Router from 'vue-router';
import Words from './views/Words.vue';
import New from './views/New.vue';
import Show from './views/Show.vue';
import Edit from './views/Edit.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'words',
            component: Words
        },
        {
            path: '/words',
            name: 'words',
            component: Words
        },
        {
            path: '/new',
            name: 'New',
            component: New
        },
        {
            path: '/words/:id',
            name: 'Show',
            component: Show
        },
        {
            path: '/words/:id/edit',
            name: 'Edit',
            component: Edit
        },

    ]
});