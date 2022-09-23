import { IMenuLinks } from '../models/link';import { HEADER_LINK_ICONS } from '../assets/icons/icons';export const menuLinks: IMenuLinks[] = [    {        label: 'Кинотеатры',        link: '/cinemas',        icon: HEADER_LINK_ICONS.cinema,        permissions: ['ROLE_ADMIN'],    },    {        label: 'Сейчас в кино',        link: '/nowInCinema',        icon: HEADER_LINK_ICONS.nowInCinema,        permissions: ['ROLE_ADMIN'],    },    {        label: 'Новости',        link: '/news',        icon: HEADER_LINK_ICONS.news,        permissions: ['ROLE_ADMIN'],    },    {        label: 'Аккаунт',        link: '/account',        icon: HEADER_LINK_ICONS.account,        permissions: ['ROLE_ADMIN'],    },];