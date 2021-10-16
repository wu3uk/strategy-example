import { Logger, LogToConsole, LogToFile, LogToRemoteServer, NoLogging } from './logger';

class SomeClass {
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    public setLogger(logger: Logger) {
        this.logger = logger;
    }

    public doSomething(): void {
        const something: string = 'В Екатеринбурге подростки устроили "Игру в кальмара" прямо у школы На детях была униформа белого цвета, "надзиратели" же были одеты в красные комбинезоны и держали в руках игрушечное оружие.';
        for (let i = 0; i < 10; i++) {
            this.logger.log(something);
        }
    }
}

export default SomeClass;