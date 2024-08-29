import { atom } from "jotai";
import { CourseController } from "../controller/CourseController";
import { CourseRepository } from "../data/repositories/CourseRepository";
import { CreateCourseUseCase } from "../core/usecases/CreateCourseUseCase";
import { allCourses } from "../data/mocks/allCourses";
import { PropertyLinkRepository } from "../data/repositories/PropertyLinkRepository";


export const queryAtom = atom<string>('')

const courseRepository = new CourseRepository();
const propertyLinkRepository = new PropertyLinkRepository()

    allCourses.forEach((data) => {
        const courseUseCase = new CreateCourseUseCase(
            data.course.name, 
            data.course.category, 
            data.course.author,
            data.course.price,
            data.course.modules,
            data.course.info,
            data?.course?.id
        );
        courseRepository.create(courseUseCase.execute())
    });
    
    const courseController = new CourseController(
        courseRepository,
        propertyLinkRepository
    );
    
export const controllerAtom = atom<CourseController>(courseController)