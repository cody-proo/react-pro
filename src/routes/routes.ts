import React from 'react';
import { pages } from '../pages';
import {
 BLOGS_PATH,
 COURSES_PATH,
 HOME_PATH,
 LOGIN_PATH,
 NOT_FOUND_PATH,
 SIGNUP_PATH,
 SINGLE_BLOGS_PATH,
 SINGLE_COURSE_PATH,
} from './routesKey';

export interface IRoute {
 path: string;
 element: React.FC;
 layout?: Element;
}

export type IRoutes = IRoute[];

export const routes: IRoutes = [
 {
  path: HOME_PATH,
  element: pages.home,
 },
 {
  path: SIGNUP_PATH,
  element: pages.signup,
 },
 {
  path: LOGIN_PATH,
  element: pages.login,
 },
 {
  path: COURSES_PATH,
  element: pages.courses,
 },
 {
  path: SINGLE_COURSE_PATH,
  element: pages.singleCourse,
 },
 {
  path: BLOGS_PATH,
  element: pages.blogs,
 },
 {
  path: SINGLE_BLOGS_PATH,
  element: pages.singleBlogs,
 },
 {
  path: NOT_FOUND_PATH,
  element: pages.notFoundPage   ,
 },
];
