require('website-snapshotter').capture(__dirname, 'http://slate-develop.dev01.slatepowered.net', {
    'homepage': '/',
    'dashboard': '/dashboard',
    'section': '/sections/ELA-001',

    'manage-people': {
        path: '/manage#people/search/group:class_of_2019/aabernathy/profile',
        waitFor: '[id^="people-grid-"] .x-grid-row'
    },

    'manage-section-profile': '/manage#course-sections/lookup/ELA-001/profile',
    'manage-section-participants': '/manage#course-sections/lookup/ELA-001/participants',

    'manage-settings-groups': '/manage#settings/groups',
    'manage-settings-terms': '/manage#settings/terms',
    'manage-settings-departments': '/manage#settings/departments',
    'manage-settings-courses': '/manage#settings/courses',

    'manage-progress-interims-report': '/manage#progress/interims/report',
    'manage-progress-interims-export': '/manage#progress/interims/print',
    'manage-progress-interims-email': '/manage#progress/interims/email',

    'manage-progress-terms-report': '/manage#progress/terms/report',
    'manage-progress-terms-export': '/manage#progress/terms/print',
    'manage-progress-terms-email': '/manage#progress/terms/email',

    'cms-page-create': '/pages/create?Title=Test+Page',
    'cms-blog-create': '/blog/create?Title=Test+Blog+Post'
});