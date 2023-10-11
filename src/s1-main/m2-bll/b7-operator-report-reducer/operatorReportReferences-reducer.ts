import {ThunkAction} from "redux-thunk";
import {StoreType} from "../store";
import {operatorReportAPI} from "../../m3-dal/d2-api/operatorReportAPI";
import {operatorReportReferencesAPI} from "../../m3-dal/d2-api/operatorReportReferencesAPI";

const SET_OPERATOR_REPORT_REFERENCES_DATA = "SET_OPERATOR_REPORT_REFERENCES_DATA";
const SET_OPERATOR_REPORT_REFERENCES_STATUS = "SET_OPERATOR_REPORT_REFERENCES_STATUS"
const SET_OPERATOR_REPORT_REFERENCES_ERROR = "SET_OPERATOR_REPORT_REFERENCES_ERROR"





type DataThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionDataType>;
type ActionDataType = ReturnType<typeof setOperatorReportReferencesData>
    |ReturnType<typeof setOperatorReportReferencesStatus> | ReturnType<typeof setError>
type OperatorReportReferencesDataType = {
    operators: string[],
    reasons: {key: number, value:string}[]
}
export type StatusType = "init" | "loading" | "loaded" | "error"
type InitState = {
    data: OperatorReportReferencesDataType,
    status: StatusType,
    errorMessage: string,
}
const initialState: InitState = {
    data: {
        operators: [
            "Будницкая Татьяна Александровна",
            "Маханькова Мария Викторовна",
            "Николаевич Оксана Александровна",
            "Полунина Алина Александровна",
            "Витенкова Валентина Юрьевна",
            "Тимошенко Лилия Анатольевна",
            "Бурдукова Татьяна Сергеевна",
            "Евменова Наталья Николаевна",
            "Жарикова Наталья Михайловна (ДО)",
            "Докшина Татьяна Александровна",
            "Власенко Мария Александровна (ДО)",
            "web_user",
            "Куксова Диана Игоревна (ДО)",
            "Шарубина Анна Андреевна",
            "Кисель Карина Александровна (ДО)",
            "Семиненко Янина Сергеевна (ДО)",
            "Венглинская Яна Геннадьевна",
            "Денисенко Светлана Викторовна (ДО)",
            "Панкратова Татьяна Святославовна",
            "Виногродская Анна Юрьевна (ДО)",
            "Сарадоева Наталья Юрьевна",
            "Тарасевич Игорь Александрович",
            "Ермолицкая Ангелина Викторовна",
            "Сугакова Татьяна Вячеславовна",
            "Лабзо Александра Михайловна",
            "Рыжкова Фаина Петровна (ДО)",
            "Волчек Юлия Александровна",
            "Войтенкова Яна Александровна (ДО)",
            "Толочко Наталья Вацлавовна",
            "Шабловская Татьяна Игоревна (ДО)",
            "Терехова Татьяна Николаевна",
            "Красовская Вероника Александровна (ДО)",
            "Кусаева Гульнара Хазиуловна",
            "Тихамиров Эдуард Борисович",
            "Сычева Ирина Игоревна",
            "Моргунова Наталья Брониславовна",
            "Мартынова Кристина Владимировна",
            "Соловей Елена Анатольевна",
            "Гормаш Полина Станиславовна",
            "Якушева-Марахонькина Анна Викторовна",
            "Таран Мария Александровна",
            "Кузьмичева Оксана Николаевна",
            "Ермоленко Оксана Анатольевна",
            "Парковка телефона",
            "Инженер по ТО",
            "Парусова Лилия Алексеевна",
            "Архипчук Юлия Юрьевна (ДО)",
            "Неладнова Оксана Михайловна",
            "Мисникова Оксана Михайловна",
            "Загреднюк Светлана Викторовна",
            "Иванцова Мария Николаевна",
            "Шугаева Ирина Ивановна (ДО)",
            "Притула Наталья Николаевна (ДО)",
            "Воробьева Виктория Владимировна",
            "Дмитроченко Марина Михайловна",
            "Ковшун Вероника Валентиновна",
            "web",
            "Гарбузова Жанна Николаевна",
            "Ващелина Марина Игоревна (ДО)",
            "Уголева Марина Михайловна",
            "Грищенкова Валерия Сергеевна",
            "Ковалева Елена Владимировна",
            "Иванова Татьяна Васильевна (ДО)",
            "Витковская Виктория Александровна (ДО)",
            "Кулешова Мария Валерьевна",
            "Модулева Анна Анатольевна",
            "Волчкова Кристина Васильевна",
            "web-dashboard",
            "Неладнова Юлия Игоревна",
            "Титова Марина Игоревна (ДО)",
            "Тараканова Надежда Владимировна (ДО)",
            "Салтанова Ксения Александровна (ДО)",
            "Сердюкова Анжелика Владимировна (ДО)",
            "Гомонова Елизавета Сергеевна",
            "Бурко Станислав",
            "Бурлуцкая Мария Ивановна",
            "Рябцева Марина Игоревна",
            "Прудникова Ольга Аркадьевна (ДО)",
            "Игнатович Алла Викторовна",
            "Дмитрук Екатерина Викторовна",
            "Степанова Светлана Владимировна",
            "Скворцова Алеся Игоревна",
            "Смага Юлия Николаевна (ДО)",
            "Минич Алексей Вадимович",
            "Куценко Лариса Николаевна",
            "Администратор",
            "Баранчук Светлана Григорьевна",
            "Сергеева Виктория Григорьевна",
            "Черкасова Татьяна Адамовна",
            "Мацуль Ольга Петровна",
            "Касперавичус Яна Игоревна",
            "Малюшицкая Наталья Федоровна",
            "Специалист Контакт-центра",
            "Листратенко Алеся Владимировна",
            "Минина Марина Михайловна (ДО)",
            "Чумакова Виктория Викторовна",
            "Мороз Наталья Венакентьевна",
            "Михальцова Ирина Сергеевна",
            "Исмагилов Павел Радикович",
            "Павлова Аксана Александровна",
            "Лужанкова Ольга Николаевна",
            "Мамонова Ольга Николаевна",
            "Гаврилова Виктория Владимировна",
            "Маскалева Анастасия Сергеевна",
            "Коцур Анастасия Александровна",
            "Ковганова Марина Леонидовна (ДО)",
            "Тихамирова Кристина Сергеевна",
            "Иванова Марина Александровна",
            "Лозовская Елена Евгеньевна",
            "Гридюшко Ирина Владимировна"
        ],
        reasons: [
            {
                key: 1002,
                value: "Прочие"
            },
            {
                key: 1003,
                value: "Блокировка компьютера"
            },
            {
                key: 1004,
                value: "Восстановлен перерыв после рестарта клиентского приложения"
            },
            {
                key: 10101,
                value: "Авто"
            },
            {
                key: 10102,
                value: "Вход по умолчанию"
            },
            {
                key: 10103,
                value: "Вышел"
            },
            {
                key: 10104,
                value: "Отвалился"
            },
            {
                key: 10105,
                value: "Авторизовался"
            },
            {
                key: 10201,
                value: ""
            },
            {
                key: 10202,
                value: "Авторизация"
            },
            {
                key: 10203,
                value: "Вход в СС"
            },
            {
                key: 0,
                value: "Перерыв"
            },
            {
                key: 1,
                value: "Обед"
            },
            {
                key: 2,
                value: "Вход в Call-центр"
            }
        ]
    },
    status: 'init',
    errorMessage: ''
}

export const operatorReportReferencesReducer = (state = initialState, action: ActionDataType) => {
    switch (action.type) {
        case SET_OPERATOR_REPORT_REFERENCES_DATA: {
            return {
                ...state,
                data: {
                    operators: action.data.operators,
                    reasons: action.data.reasons,
                }
            }
        }
        case SET_OPERATOR_REPORT_REFERENCES_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_OPERATOR_REPORT_REFERENCES_ERROR: {
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        }
        default: {
            return state
        }
    }
}
const setOperatorReportReferencesData = (data: OperatorReportReferencesDataType) => {
    return {
        type: SET_OPERATOR_REPORT_REFERENCES_DATA,
        data
    } as const
};

const setOperatorReportReferencesStatus = (status: StatusType) => {
    return {
        type: SET_OPERATOR_REPORT_REFERENCES_STATUS,
        status
    } as const
}
const setError = (errorMessage: string) => {
    return {
        type: SET_OPERATOR_REPORT_REFERENCES_ERROR,
        errorMessage
    } as const
}

export const fetchOperatorReportReferencesData = (): DataThunkAction => async (dispatch) => {
    try {
        dispatch(setOperatorReportReferencesStatus("loading"))
        const data = await operatorReportReferencesAPI.getOperatorReportDataReferencesData()
        dispatch(setOperatorReportReferencesData(data.data))
        dispatch(setOperatorReportReferencesStatus("loaded"))
    } catch (e: any) {
        dispatch(setOperatorReportReferencesStatus("error"))
        dispatch(setError(e.message))
    }
}