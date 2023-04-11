export type CallReportDataType = {
    id: number
    dateStart: string
    dateEnd: string
    initiator: number
    recipient: number
    direction: "Входящий" | "Исходящий"
    status: "Отвечен" | "Не отвечен"
    type: "Обычный" | "Липкость"
    queue: string
    totalTime: string
    talkTime: string
    connectionTime: string
    holdTime: string
    queueTime: string
    initiatorContact: string
    recipientContact: string
    operator: string
    wasOnQueue: number
    wasOnOperators: number
}
export const callReportData:CallReportDataType[] = [{
    id: 1,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 2,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 3,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Исходящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 4,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 5,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 6,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 7,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745562,
    recipient: 106,
    direction: "Исходящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 8,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Не отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 9,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Исходящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 10,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 11,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 12,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Не отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 13,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 14,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Исходящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 15,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 16,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 17,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 18,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Не отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 19,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 20,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 21,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Не отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 22,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 23,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 24,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 25,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Не отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 26,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 27,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 28,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 29,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 30,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 31,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 32,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 33,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},{
    id: 34,
    dateStart: "04.03.23 14:48:03",
    dateEnd: "04.03.23 14:50:01",
    initiator: 80293745561,
    recipient: 105,
    direction: "Входящий",
    status: "Отвечен",
    type: "Обычный",
    queue: "105 GSM",
    totalTime: "0:01:57",
    talkTime: "0:01:42",
    connectionTime: "0:00:01",
    holdTime: "0:00:00",
    queueTime: "0:00:00",
    initiatorContact: "Лида",
    recipientContact: "",
    operator: "Ковшун Виолетта Константиновна",
    wasOnQueue: 1,
    wasOnOperators: 0
},
]