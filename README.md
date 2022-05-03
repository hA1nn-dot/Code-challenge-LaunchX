# Code-challenge-LaunchX
New project by LaunchX API design and applying testing and server with Express
Requerimientos:

1) Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
2) Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
3) Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.

| Endpoint | Request | Response |
|---|---|---|
| `localhost:3000/v1/students/` | `localhost:3000/v1/students` | ![image](https://user-images.githubusercontent.com/48420854/166519975-83091476-32f4-4c5a-ad3d-0d8bc4456fcf.png) |
| `localhost:3000/v1/partners/emails/` | `localhost:3000/v1/partners/emails/` | ![image](https://user-images.githubusercontent.com/48420854/166520076-66d9708d-3592-4803-b08e-1a2213fec8fb.png) |
| `localhost:3000/v1/partners/:credits` | `localhost:3000/v1/partners/500` | ![image](https://user-images.githubusercontent.com/48420854/166520199-0addfcf6-2845-4945-b501-0aad0834f6f6.png) |

# System design
``` mermaid
graph TD;
    Reader-->VisualPartnerService;
    VisualPartnerService-->VisualPartnerController;
    VisualPartnerController-->Server;
```
# Class Design
``` mermaid
classDiagram
    Reader --> VisualPartenerService
    Reader: readJsonFile(path)
    VisualPartenerService --> VisualPartenerController
    VisualPartenerService: getStudents()
    VisualPartenerService: getEmailsByCertification(visualPartners)
    VisualPartenerService: getStudentsAboveCredits(visualPartners, credits)

    VisualPartenerController: getVisualPartners()
    VisualPartenerController: getStudentsEmailByCertification()
    VisualPartenerController: getStudentsaboveCredits(credits)
    
    VisualPartenerController --> server : Import methods
```

# Dependencies
- [Jest](https://jestjs.io/docs/api)
- [Express](https://expressjs.com/es/)
- [Eslint](https://eslint.org/)
