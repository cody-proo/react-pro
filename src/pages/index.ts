import HomePage from './home/HomePage';
import SignupPage from './auth/SignupPage';
import LoginPage from './auth/LoginPage';
import ArchiveCoursesPage from './courses/ArchiveCoursesPage';
import SingleCoursePage from './courses/SingleCoursePage';
import ArchiveBlogsPage from './blogs/ArchiveBlogsPage';
import SingleBlogPage from './blogs/SingleBlogPage';
import NotFoundPage from './notfound/NotFoundPage';

export const pages = {
 home: HomePage,
 login: LoginPage,
 signup: SignupPage,
 courses: ArchiveCoursesPage,
 singleCourse: SingleCoursePage,
 blogs: ArchiveBlogsPage,
 singleBlogs: SingleBlogPage,
 notFoundPage: NotFoundPage,
};
