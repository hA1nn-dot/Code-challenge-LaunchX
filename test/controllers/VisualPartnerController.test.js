const VisualPartnerController = require("./../../lib/controller/VisualPartnerController");
describe("Testing VisualPartnerController", () => {
    test("1) Get all info of students", () => {
        const students = VisualPartnerController.getVisualPartners();
        expect(students).toBeDefined();
    });

    test("2) Get emails of students if have certification", () => {
        const studentsEmail = VisualPartnerController.getStudentsEmailByCertification();
        expect(studentsEmail.length).toBe(29);
        expect(studentsEmail.some(email => email == undefined)).toBeFalsy()
    });

    test("3) Get students above 500 credits", () => {
        const credits = 500;
        const studentsBycredits = VisualPartnerController.getStudentsaboveCredits(credits);
        expect(studentsBycredits.length).toBe(27);
    });
})