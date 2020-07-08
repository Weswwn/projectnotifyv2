import "@babel/polyfill";

export async function courseService (params) {
    console.log(params);
    const prefix = window.location.href;
    const baseURL = `http://localhost:8000/api/course/`;
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