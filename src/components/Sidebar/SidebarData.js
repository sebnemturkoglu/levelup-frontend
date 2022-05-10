import React from "react";
import { AiFillHome } from 'react-icons/ai';
import { FaBookOpen, FaUserCheck } from 'react-icons/fa';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { IoIosSchool, IoMdChatbubbles, IoIosPaper } from 'react-icons/io';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';

export const UserSidebarData = [
  {
    title: "Dashboard",
    path: "/user/",
    icon: <AiFillHome />
  },
  {
    title: "My Classes",
    path: "/user/my-classes",
    icon: <FaBookOpen />
  },
  {
    title: "Find Classes",
    path: "/user/find-classes",
    icon: <IoIosSchool />
  },
  {
    title: "Speaking Lessons",
    path: "/user/speaking-lessons",
    icon: <IoMdChatbubbles />
  },
  {
    title: "Grades",
    path: "/user/grades",
    icon: <BsFillPatchCheckFill />
  },
  {
    title: "Blog",
    path: "/user/blog",
    icon: <IoChatbubbleEllipsesSharp />
  },
];

export const TeacherSidebarData = [
  {
    title: "Dashboard",
    path: "/teacher/",
    icon: <AiFillHome />
  },
  {
    title: "Classes",
    path: "/teacher/classes",
    icon: <FaBookOpen />,
    classname: "sidebar-rows",
  },
  {
    title: "Assignment",
    path: "/teacher/assignments",
    icon: <IoIosPaper />
  },
  {
    title: "Blog",
    path: "/teacher/blog",
    icon: <IoChatbubbleEllipsesSharp />
  },
];

export const NativeSidebarData = [
    {
        title: "Dashboard",
        path: "/native/",
        icon: <AiFillHome />
      },
      {
        title: "Exercises",
        path: "/native/exercises",
        icon: <FaBookOpen />,
        classname: "sidebar-rows",
      },
      {
        title: "Requests",
        path: "/native/requests",
        icon: <FaUserCheck />
      },
      {
        title: "Blog",
        path: "/native/blog",
        icon: <IoChatbubbleEllipsesSharp />
      },
  ];

export const AdminSidebarData = [
  {
    title: "Dashboard",
    path: "/admin/",
    icon: <AiFillHome />,
  }
];
