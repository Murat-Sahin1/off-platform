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
    { id: 0, label: "Home", icon: home, path: "/" },
    { id: 1, label: "Podcasts", icon: headphones, path: "podcasts" },
    { id: 2, label: "Saved", icon: save, path: "saved" },
    { id: 3, label: "Read History", icon: history, path: "history" },
    { id: 4, label: "Downloaded", icon: download, path: "downloaded" },
  ],
  [
    { id: 5, label: "Now Trending", icon: trending, path: "trending" },
    { id: 6, label: "Categories", icon: categories, path: "categories" },
    { id: 7, label: "Following", icon: followers, path: "following" },
  ],
  [
    { id: 8, label: "Settings", icon: setting, path: "settings" },
    { id: 9, label: "Help", icon: help, path: "help" },
    { id: 10, label: "Send Feedback", icon: speaking, path: "feedback" },
  ],
];
