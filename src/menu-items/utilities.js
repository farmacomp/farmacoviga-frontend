// assets
import { IconBrandGoogle, IconBrandTwitter } from '@tabler/icons';

// constant
const icons = {
    IconBrandGoogle: IconBrandGoogle,
    IconBrandTwitter: IconBrandTwitter
};

//-----------------------|| UTILITIES MENU ITEMS ||-----------------------//

export const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Twitter',
            type: 'item',
            url: '/tweets',
            icon: icons['IconBrandTwitter'],
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Google Trends',
            type: 'item',
            url: '/gtrends',
            icon: icons['IconBrandGoogle'],
            breadcrumbs: false
        }
    ]
};
