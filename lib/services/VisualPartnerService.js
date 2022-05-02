const Reader = require("./../utils/Reader")
class VisualPartenerService{
    static getStudents(){
        return Reader.readJsonFile("visualpartners.json");
    }
    static getEmailsByCertification(visualPartners){
        const emails = visualPartners.map((student) => {
            if(student.haveCertification){ return student.email }
        });
        return emails;
    }
    static getStudentsAboveCredits(visualPartners, credits){
        return visualPartners.filter(student => student.credits > credits);
    }
    
}

module.exports = VisualPartenerService;