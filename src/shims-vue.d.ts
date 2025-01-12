import { RouteLocationNormalized } from 'vue-router';

declare module 'vue' {
    interface ComponentCustomProperties {
        $route: RouteLocationNormalized;
    }
}

declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}