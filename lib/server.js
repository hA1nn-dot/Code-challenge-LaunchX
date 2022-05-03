const VisualPartnerController = require("./controller/VisualPartnerController");
const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`VisualPartner API in localhost:${port}`);
});

app.get("/v1/partners/", (request, response) => {
    const partners = VisualPartnerController.getVisualPartners();
    response.json(partners);
});

app.get("/v1/partners/emails/", (request, response) => {
    const partnersWithcertification = VisualPartnerController.getStudentsEmailByCertification()
    response.json(partnersWithcertification);
});

app.get("/v1/partners/:credits", (request, response) => {
    const credits = request.params.credits;
    const partnersWithcredits = VisualPartnerController.getStudentsaboveCredits(credits)
    response.json(partnersWithcredits);
});