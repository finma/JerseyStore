import React from 'react';
import {
  IconChangePassword,
  IconUserEdit,
  IconHistoryJersey,
  IconSignOut,
} from '../../assets';

export const menus = [
  {
    id: 1,
    title: 'Edit Profile',
    icon: <IconUserEdit />,
    page: 'EditProfile',
  },
  {
    id: 2,
    title: 'Change Password',
    icon: <IconChangePassword />,
    page: 'ChangePassword',
  },
  {
    id: 3,
    title: 'History Pemesanan',
    icon: <IconHistoryJersey />,
    page: 'History',
  },
  {
    id: 4,
    title: 'Sign Out',
    icon: <IconSignOut />,
    page: 'Login',
  },
];
