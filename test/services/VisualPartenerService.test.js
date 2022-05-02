const VisualPartnerService = require("./../../lib/services/VisualPartnerService");

describe("Testing VisualParterService", () => {
    test("1) Get all info of students", () => {
        const students = VisualPartnerService.getStudents();
        expect(students).toBeDefined();
    });

    test("2) Get emails of students", () => {
        const students = [{name: "Haim", email: "hgq_2000@hotmail.com", haveCertification: true}, {name: "Jose", email: "xyz@hotmail.com", haveCertification: false}]
        const studentsEmail = VisualPartnerService.getEmailsByCertification(students);
        expect(studentsEmail).toEqual(["hgq_2000@hotmail.com"]);
    });

    test("3) Get students above 500 credits", () => {
        const credits = 500;
        const students = [{name: "Haim", email: "hgq_2000@hotmail.com", credits: 100}, {name: "Jose", email: "xyz@hotmail.com", credits: 560}]
        const studentsBycredits = VisualPartnerService.getStudentsAboveCredits(students, credits);
        expect(studentsBycredits.length).toBe(1);
    });
})