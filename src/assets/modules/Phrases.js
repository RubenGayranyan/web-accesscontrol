import ENG from "../img/flags/ENG.png"
import RUS from "../img/flags/RUS.png"
import ARM from "../img/flags/ARM.png"

export class NavPhrases {
    static phrase_home = ["Home", "Главная", "Գլխավոր"];
    static phrase_log = ["Log", "Журнал", "Մատյան"];
    static lang_flag = [<img src={ENG} alt="ENG" width="50%"></img>, <img src={RUS} alt="RUS" width="50%"></img>, <img src={ARM} alt="ARM" width="50%"></img>];
}

export class HomePhrases {
    static phrase_mode = [ "Mode", "Режим", "Ռեժիմ" ];
    static phrase_mask = [ "Mask", "Маска", "Դիմակ" ];
    static phrase_settings = [ "Settings", "Настройки", "Կարգավորումներ" ];
    static phrase_turnon = [ "Turn on device", "Включить устройство", "Միացնել սարքը"];
    static phrase_savephotos = [ "Save unmasked people's photos", "Сохранить картинки людей без маски", "Պահպանել առանց դիմակ մարդկանց լուսանկարները"];
    static phrase_unmaskedtoday = [ "Unmasked | This session", "Без маски | За сессию", "Առանց դիմակ | Սեսիայի ընդացքում"];
    static phrase_attemptstoday = [ "Attempts | This session", "Попытки пройти | За сессию", "Մուտք գործելու փորձեր | Սեսիայի ընդացքում"];
    static phrase_unmaskedtotal = [ "Unmasked | Total", "Без маски | За всё время", "Առանց դիմակ | Ամբողջ ընդացքում"];
    static phrase_attemptstotal = [ "Attempts | Total", "Попытки пройти | За всё время", "Մուտք գործելու փորձեր | Ամբողջ ընդացքում"];
}

export class LogPhrases {
    static phrase_image = [ "Image", "Картинка", "Լուսանկար" ];
    static phrase_date = [ "Date", "Дата", "Ամսաթիվ" ];
}