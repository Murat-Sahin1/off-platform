import {
  home,
  headphones,
  save,
  history,
  download,
  trending,
  categories,
  followers,
  setting,
  help,
  speaking,
} from "../assets/leftDrawer";

export const LEFT_DRAWER_BUTTONS = [
  [
    { id: 0, label: "Home", icon: home },
    { id: 1, label: "Audio Book", icon: headphones },
    { id: 2, label: "Saved", icon: save },
    { id: 3, label: "Read History", icon: history },
    { id: 4, label: "Downloaded", icon: download },
  ],
  [
    { id: 5, label: "Now Trending", icon: trending },
    { id: 6, label: "Categories", icon: categories },
    { id: 7, label: "Following", icon: followers },
  ],
  [
    { id: 8, label: "Settings", icon: setting },
    { id: 9, label: "Help", icon: help },
    { id: 10, label: "Send Feedback", icon: speaking },
  ],
];
