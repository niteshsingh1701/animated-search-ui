import caroline from "../assets/avatars/1.jpg";
import adam from "../assets/avatars/2.jpg";
import margareth from "../assets/avatars/3.jpg";
import randall from "../assets/avatars/4.jpg";
import kristinge from "../assets/avatars/5.jpg";

export const searchData = [
  // "Drib" search results
  {
    id: 1,
    type: "person",
    name: "Caroline Dribsson",
    status: "unactivated",
    avatar: caroline,
  },
  {
    id: 2,
    type: "person",
    name: "Adam Cadribean",
    status: "active",
    lastActive: "1w ago",
    avatar: adam,
  },
  {
    id: 3,
    type: "file",
    name: "final_dribbble_presentation.jpg",
    category: "in Presentations",
    timestamp: "Edited 1w ago",
    fileType: "image",
  },
  {
    id: 4,
    type: "person",
    name: "Margareth Cendribgssen",
    status: "active",
    lastActive: "1w ago",
    avatar: margareth,
  },
  {
    id: 5,
    type: "file",
    name: "dribbble_animation.avi",
    category: "in Videos",
    timestamp: "Added 1y ago",
    fileType: "video",
  },
  {
    id: 6,
    type: "folder",
    name: "Dribbble Folder",
    category: "in Projects",
    fileCount: 12,
    timestamp: "Edited 2m ago",
  },
  // "Rand" search results
  {
    id: 7,
    type: "person",
    name: "Randall Johnsson",
    status: "online",
    lastActive: "now",
    avatar: randall,
  },
  {
    id: 8,
    type: "folder",
    name: "Random Michal Folder",
    category: "in Photos",
    fileCount: 12,
    timestamp: "Edited 12m ago",
  },
  {
    id: 9,
    type: "file",
    name: "crative_file_frandkies.jpg",
    category: "in Photos/Assets",
    timestamp: "Edited 12m ago",
    fileType: "image",
  },
  {
    id: 10,
    type: "person",
    name: "Kristinge Karand",
    status: "active",
    lastActive: "2d ago",
    avatar: kristinge,
  },
  {
    id: 11,
    type: "file",
    name: "files_krande_michelle.avi",
    category: "in Videos",
    timestamp: "Added 12m ago",
    fileType: "video",
  },
];
