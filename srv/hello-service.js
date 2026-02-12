const cds = require('@sap/cds');

class HelloServiceClass extends cds.ApplicationService {
    sayHello(name) { return "Hello" + " " + name; }
}

module.exports = HelloServiceClass; 

// module.exports = class HelloServiceClass extends cds.ApplicationService {
//     init() {
//         this.on('sayHello', (req) => {
//             const { name } = req.data
//             return `Hello ${name}`
//         })
//         return super.init()
//     }
// }