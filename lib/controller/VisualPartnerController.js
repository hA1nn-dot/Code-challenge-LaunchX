
const VisualPartnerService = require("./../services/VisualPartnerService")
const Reader = require("./../utils/Reader")
class VisualPartnerController{
    static getVisualPartners(){    
        return VisualPartnerService.getStudents();
    }

    static getStudentsEmailByCertification(){
        const students = Reader.readJsonFile("visualpartners.json");
        return VisualPartnerService.getEmailsByCertification(students);
    }

    static getStudentsaboveCredits(credits){
        const students = Reader.readJsonFile("visualpartners.json");
        return VisualPartnerService.getStudentsAboveCredits(students,credits);
    }

}

module.exports = VisualPartnerController;