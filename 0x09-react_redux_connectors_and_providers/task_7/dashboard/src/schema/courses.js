import { schema, normalize } from "normalizr";

const course = new schema.Entity("courses");

const coursesNormalizer = (data) => {

    const normalizedData =  normalize(data, [course]).entities.courses;
    // console.log('normalizedData:', normalizedData);
    return normalizedData;
};

export { course, coursesNormalizer };
