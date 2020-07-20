import "@babel/polyfill";


const baseURL = `http://localhost:8000/api/course/`;
class CourseService {
    async postCourse(params) {
        let response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': 'http://localhost:3000/'
            },
            body: JSON.stringify({
                subjectCode: params.subjectCode.toUpperCase(),
                subjectNumber: params.subjectNumber.toUpperCase(),
                sectionNumber: params.sectionNumber.toUpperCase(),
                users: params.user
            })
        })
        let data = await response.json();
        return data;
    }

    async getCourse() {
        let response = await fetch(baseURL, {
            method: 'GET',
        })
        let data = await response.json();
        return data;
    }

}
export const courseService = new CourseService();