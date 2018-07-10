import HumansController from "../API/Controllers/HumansController";
import AppController from "../Client/Controllers/AppController";


export default {
    controllers: () => [
        new AppController(),
        new HumansController()
    ]
};