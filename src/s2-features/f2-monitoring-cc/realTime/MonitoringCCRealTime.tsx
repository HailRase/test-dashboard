import React, {ReactComponentElement, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {PATH} from "../../../common/routes/routes";
import s from "./MonitoringCCRealTime.module.scss";
import HomeIcon from "../../../common/components/HomeIcon/HomeIcon";
import Table from '../../../common/components/Table/Table'
import Histogram from "../../../common/components/Histogram/Histogram";
import useIsAuth from "../../../common/hooks/useIsAuth";
import {useAppSelector} from "../../../s1-main/m2-bll/store";
import {useDispatch} from "react-redux";
import {
    fetchRealTimeHistogramData
} from "../../../s1-main/m2-bll/b1-monitoring-real-time-reducer/realTimeHistogram-reducer";
import {
    fetchRealTimeTodayPieData,
    StatusType
} from "../../../s1-main/m2-bll/b1-monitoring-real-time-reducer/realTimeTodayPie-reducer";
import Loader from "../../../common/components/Loader/Loader";
import {
    fetchRealMonthTodayPieData
} from "../../../s1-main/m2-bll/b1-monitoring-real-time-reducer/realTimeMonthPie-reducer";
import ErrorWindow from "../../../common/components/ErrorWindow/ErrorWindow";
import {findMaxAcceptAndNotAcceptSum} from "../../../common/utils/findMaxAcceptAndNotAcceptSum";
import {fetchRealTimeTableData} from "../../../s1-main/m2-bll/b1-monitoring-real-time-reducer/realTimeTable-reducer";
import {useScale} from "../../../common/hooks/useScale";
import TestDoublePie from "./TestDoublePie";
import {
    fetchRealTimeData,
    setRealTimeData
} from "../../../s1-main/m2-bll/b1-monitoring-real-time-reducer/realTime-reducer";


const MonitoringCCRealTime = () => {
    const scale = useScale()

    const realTimeHistogramData = useAppSelector(state => state.realTimeData.data.schema)
    const realTimeTableData = useAppSelector(state => state.realTimeData.data.tableTotal)
    const realTimeTodayOuterPieData = useAppSelector(state => state.realTimeData.data.providers)
    const realTimeTodayInnerPieData = useAppSelector(state => state.realTimeData.data.totalDay)
    const realTimeMonthOuterPieData = useAppSelector(state => state.realTimeData.data.providersTotal)
    const realTimeMonthInnerPieData = useAppSelector(state => state.realTimeData.data.total)
    const dataStatus = useAppSelector(state => state.realTimeData.status)
    const dataError = useAppSelector(state => state.realTimeData.errorMessage)
    const navigate = useNavigate()
    const isAuth = useIsAuth()
    const dispatch = useDispatch<any>()

    console.log("Scale: " + scale)
    useEffect(() => {
        if (!isAuth) navigate('/')
    }, [])
    useEffect(() => {
        dispatch(fetchRealTimeData())
        console.log("Fethcing")
        const intervalId = setInterval(() => {
            dispatch(fetchRealTimeData())
        }, 20 * 60 * 1000);

        return () => clearInterval(intervalId);

    }, []);
    const onHomeHandler = () => {
        navigate(`${PATH.HOME}`)
    }


    const columns = [
        {
            Header: '№ за сегодня',
            accessor: 'ratingToday',
            width: 60/scale
        },
        {
            Header: '№ за месяц',
            accessor: 'ratingMonth',
            width: 60/scale
        },
        {
            Header: 'Оператор',
            accessor: 'operatorName',
            width: 200/scale
        },
        {
            Header: 'Принял',
            accessor: 'accept',
            width: 70/scale,
        },
        {
            Header: 'Пропустил',
            accessor: 'skip',
            width: 90/scale
        },
        {
            Header: 'Уровень обслуживания',
            accessor: 'serviceLevel',
            title: '',
            width: 120/scale
        },
        {
            Header: 'Среднее время разговора',
            accessor: 'avgServiceTime',
            width: 85/scale
        },
        {
            Header: 'Среднее время разговора за месяц',
            accessor: 'avgServiceTimeMonth',
            width: 85/scale
        },
        {
            Header: 'Рейтинг за месяц',
            accessor: 'monthRating',
            width: 85/scale
        },
        {
            Header: 'Загруженность',
            accessor: 'workload',
            width: 120/scale
        },
        {
            Header: 'Загруженность за месяц',
            accessor: 'workloadMonth',
            width: 120/scale
        }
    ]
    /*useEffect( () => {
        setTimeout(
            () => {
                dispatch(setRealTimeData({
                    "tableMonth": [
                        {
                            "id": "78b11766-0283-4511-bf44-6c13adde4932",
                            "operatorName": "Гормаш Полина Станиславовна",
                            "success": 2288,
                            "unsuccess": 0,
                            "avgServiceTime": "00:01:41",
                            "workLoad": 76
                        },
                        {
                            "id": "ef5c03ee-4285-471b-927a-afb8319b2719",
                            "operatorName": "Гомонова Елизавета Сергеевна",
                            "success": 856,
                            "unsuccess": 1,
                            "avgServiceTime": "00:01:48",
                            "workLoad": 85
                        },
                        {
                            "id": "0ed06b1f-e74b-4f5f-b85c-c6426b70d26b",
                            "operatorName": "Скворцова Алеся Игоревна",
                            "success": 1083,
                            "unsuccess": 4,
                            "avgServiceTime": "00:01:50",
                            "workLoad": 76
                        },
                        {
                            "id": "da5d92d2-e3ec-4413-920c-e20c0fa48312",
                            "operatorName": "Специалист Контакт-центра",
                            "success": 311,
                            "unsuccess": 1,
                            "avgServiceTime": "00:01:31",
                            "workLoad": 35
                        },
                        {
                            "id": "49736e72-cdcf-4117-bd45-0bd4e7093e34",
                            "operatorName": "Тимошенко Лилия Анатольевна",
                            "success": 228,
                            "unsuccess": 0,
                            "avgServiceTime": "00:01:17",
                            "workLoad": 20
                        },
                        {
                            "id": "5b791304-cea1-4e68-9cc9-d7f1547d612d",
                            "operatorName": "Касперавичус Яна Игоревна",
                            "success": 2255,
                            "unsuccess": 0,
                            "avgServiceTime": "00:01:33",
                            "workLoad": 74
                        },
                        {
                            "id": "863ce94c-cfe4-43f8-9651-31d9557c0ca9",
                            "operatorName": "Ермолицкая Ангелина Викторовна",
                            "success": 2324,
                            "unsuccess": 3,
                            "avgServiceTime": "00:01:32",
                            "workLoad": 70
                        },
                        {
                            "id": "b1b43f24-9f61-426d-b158-cce4344959b0",
                            "operatorName": "Куценко Лариса Николаевна",
                            "success": 2561,
                            "unsuccess": 0,
                            "avgServiceTime": "00:01:24",
                            "workLoad": 71
                        },
                        {
                            "id": "cfda6bad-6bb6-4f17-bcd2-c10aff73f832",
                            "operatorName": "Игнатович Алла Викторовна",
                            "success": 2230,
                            "unsuccess": 6,
                            "avgServiceTime": "00:01:48",
                            "workLoad": 77
                        },
                        {
                            "id": "47a2d6a1-f9ce-4b1f-a95e-9a9b3ff5f4b4",
                            "operatorName": "Уголева Марина Михайловна",
                            "success": 2165,
                            "unsuccess": 1,
                            "avgServiceTime": "00:02:03",
                            "workLoad": 82
                        },
                        {
                            "id": "f3ac409d-4fd0-4a50-9ecf-3d414f950219",
                            "operatorName": "Сугакова Татьяна Вячеславовна",
                            "success": 654,
                            "unsuccess": 14,
                            "avgServiceTime": "00:01:24",
                            "workLoad": 24
                        },
                        {
                            "id": "cf739884-f690-4263-aa87-30cd0f9880f4",
                            "operatorName": "Сарадоева Наталья Юрьевна",
                            "success": 2297,
                            "unsuccess": 4,
                            "avgServiceTime": "00:01:18",
                            "workLoad": 60
                        },
                        {
                            "id": "61d8e4d6-56f2-4030-870d-0430a81e8ace",
                            "operatorName": "Будницкая Татьяна Александровна",
                            "success": 1578,
                            "unsuccess": 6,
                            "avgServiceTime": "00:01:53",
                            "workLoad": 76
                        },
                        {
                            "id": "e1639704-f9e0-4e43-a6d3-ff126ef4df1b",
                            "operatorName": "Гридюшко Ирина Владимировна",
                            "success": 2957,
                            "unsuccess": 4,
                            "avgServiceTime": "00:01:24",
                            "workLoad": 79
                        },
                        {
                            "id": "eb84d5e2-0d3c-4557-ac9c-e0921fb205d1",
                            "operatorName": "Малюшицкая Наталья Федоровна",
                            "success": 2355,
                            "unsuccess": 2,
                            "avgServiceTime": "00:01:16",
                            "workLoad": 70
                        },
                        {
                            "id": "1d64247e-7819-465e-a2e8-0f08aa460105",
                            "operatorName": "Евменова Наталья Николаевна",
                            "success": 839,
                            "unsuccess": 1,
                            "avgServiceTime": "00:01:34",
                            "workLoad": 80
                        },
                        {
                            "id": "16fc4e64-f518-4dd1-be43-6f8e3aaea7cd",
                            "operatorName": "Якушева-Марахонькина Анна Викторовна",
                            "success": 2240,
                            "unsuccess": 2,
                            "avgServiceTime": "00:01:26",
                            "workLoad": 63
                        },
                        {
                            "id": "db4cffe2-87e0-49d2-8da2-d23c5109083d",
                            "operatorName": "Баранчук Светлана Григорьевна",
                            "success": 73,
                            "unsuccess": 4,
                            "avgServiceTime": "00:01:29",
                            "workLoad": 25
                        },
                        {
                            "id": "9cc0dc0e-c735-4b12-8424-4a9a297fd049",
                            "operatorName": "Толочко Наталья Вацлавовна",
                            "success": 2565,
                            "unsuccess": 2,
                            "avgServiceTime": "00:01:42",
                            "workLoad": 83
                        },
                        {
                            "id": "ecd81a28-eb53-43ee-8a13-f9e4716f299e",
                            "operatorName": "Маскалева Анастасия Сергеевна",
                            "success": 1937,
                            "unsuccess": 7,
                            "avgServiceTime": "00:02:35",
                            "workLoad": 91
                        },
                        {
                            "id": "69053338-21f2-4257-9a65-1964b08c3d06",
                            "operatorName": "Шарубина Анна Андреевна",
                            "success": 1753,
                            "unsuccess": 1,
                            "avgServiceTime": "00:01:09",
                            "workLoad": 71
                        },
                        {
                            "id": "97fc6b07-c292-4b00-9c49-1c57a070b373",
                            "operatorName": "Венглинская Яна Геннадьевна",
                            "success": 538,
                            "unsuccess": 4,
                            "avgServiceTime": "00:01:42",
                            "workLoad": 21
                        },
                        {
                            "id": "76d51052-460e-4338-a5b8-d3b0adf15a58",
                            "operatorName": "Черкасова Татьяна Адамовна",
                            "success": 2225,
                            "unsuccess": 2,
                            "avgServiceTime": "00:02:17",
                            "workLoad": 89
                        },
                        {
                            "id": "34b3a6ca-1ff6-45a4-9efd-69f7a2df4333",
                            "operatorName": "Мартынова Кристина Владимировна",
                            "success": 2338,
                            "unsuccess": 1,
                            "avgServiceTime": "00:01:46",
                            "workLoad": 79
                        },
                        {
                            "id": "a8fe883d-7357-4cb0-bdde-ef50ae078830",
                            "operatorName": "Чумакова Виктория Викторовна",
                            "success": 2301,
                            "unsuccess": 3,
                            "avgServiceTime": "00:01:35",
                            "workLoad": 76
                        },
                        {
                            "id": "240c1e2a-1dca-4a7d-ae56-fae0b1d9e62e",
                            "operatorName": "Коцур Анастасия Александровна",
                            "success": 1807,
                            "unsuccess": 0,
                            "avgServiceTime": "00:01:57",
                            "workLoad": 82
                        },
                        {
                            "id": "9816ff4a-82d6-436d-8366-e75ded116ebb",
                            "operatorName": "Листратенко Алеся Владимировна",
                            "success": 228,
                            "unsuccess": 0,
                            "avgServiceTime": "00:01:16",
                            "workLoad": 66
                        },
                        {
                            "id": "85745644-7608-40c7-a16a-6a45dc84dcc0",
                            "operatorName": "Соловей Елена Анатольевна",
                            "success": 217,
                            "unsuccess": 4,
                            "avgServiceTime": "00:01:24",
                            "workLoad": 22
                        },
                        {
                            "id": "bd35df11-f53a-49a1-b0c8-766046a5128d",
                            "operatorName": "Инженер по ТО",
                            "success": 24,
                            "unsuccess": 3,
                            "avgServiceTime": "00:00:44",
                            "workLoad": 1
                        },
                        {
                            "id": "49cbb044-a7b5-4468-83b5-d2eb87994f89",
                            "operatorName": "Сергеева Виктория Григорьевна",
                            "success": 15,
                            "unsuccess": 5,
                            "avgServiceTime": "00:00:56",
                            "workLoad": 84
                        },
                        {
                            "id": "2b9f7a4a-59ba-4cfc-af13-b4a523af620e",
                            "operatorName": "Бурлуцкая Мария Ивановна",
                            "success": 77,
                            "unsuccess": 32,
                            "avgServiceTime": "00:01:45",
                            "workLoad": 5
                        },
                        {
                            "id": "fac2461a-e04f-4966-8608-9bb8cca7e73b",
                            "operatorName": "Ковалева Елена Владимировна",
                            "success": 1835,
                            "unsuccess": 1,
                            "avgServiceTime": "00:02:05",
                            "workLoad": 80
                        },
                        {
                            "id": "d732aed1-fad5-4ebc-bf41-8be9544cedea",
                            "operatorName": "Дмитроченко Марина Михайловна",
                            "success": 2174,
                            "unsuccess": 1,
                            "avgServiceTime": "00:01:50",
                            "workLoad": 79
                        },
                        {
                            "id": "1ad16f6f-2a4e-4be1-a121-3d6e10e30896",
                            "operatorName": "Лабзо Александра Михайловна",
                            "success": 2106,
                            "unsuccess": 3,
                            "avgServiceTime": "00:01:36",
                            "workLoad": 74
                        },
                        {
                            "id": "4e368f49-7e65-4568-9c55-7f290fa56e21",
                            "operatorName": "Мисникова Оксана Михайловна",
                            "success": 1868,
                            "unsuccess": 3,
                            "avgServiceTime": "00:01:50",
                            "workLoad": 76
                        },
                        {
                            "id": "14e5128d-a6c9-47e8-9a69-648f4d406255",
                            "operatorName": "Моргунова Наталья Брониславовна",
                            "success": 163,
                            "unsuccess": 1,
                            "avgServiceTime": "00:01:26",
                            "workLoad": 6
                        },
                        {
                            "id": "120722b4-de62-404e-ad77-22eea03ee4cf",
                            "operatorName": "Панкратова Татьяна Святославовна",
                            "success": 2061,
                            "unsuccess": 1,
                            "avgServiceTime": "00:01:26",
                            "workLoad": 62
                        },
                        {
                            "id": "aaeef391-b242-4260-9846-0d8451e5b596",
                            "operatorName": "Бурдукова Татьяна Сергеевна",
                            "success": 2234,
                            "unsuccess": 10,
                            "avgServiceTime": "00:01:34",
                            "workLoad": 75
                        },
                        {
                            "id": "b8b94e0f-7906-44b5-9d9e-0a10046bddb6",
                            "operatorName": "Витенкова Валентина Юрьевна",
                            "success": 2782,
                            "unsuccess": 1,
                            "avgServiceTime": "00:01:04",
                            "workLoad": 66
                        },
                        {
                            "id": "12d89a1a-b917-4593-8a01-d3e6dfca8147",
                            "operatorName": "Мацуль Ольга Петровна",
                            "success": 2901,
                            "unsuccess": 4,
                            "avgServiceTime": "00:01:09",
                            "workLoad": 75
                        },
                        {
                            "id": "36aa9192-001f-4e66-84af-f3005ada4970",
                            "operatorName": "Лужанкова Ольга Николаевна",
                            "success": 465,
                            "unsuccess": 4,
                            "avgServiceTime": "00:01:32",
                            "workLoad": 20
                        },
                        {
                            "id": "2710ffe0-82da-4184-9c1d-9d7986feb0ad",
                            "operatorName": "Кулешова Мария Валерьевна",
                            "success": 503,
                            "unsuccess": 9,
                            "avgServiceTime": "00:01:02",
                            "workLoad": 14
                        },
                        {
                            "id": "58c6924f-051e-46f7-9629-914be0da25b6",
                            "operatorName": "Гарбузова Жанна Николаевна",
                            "success": 2318,
                            "unsuccess": 0,
                            "avgServiceTime": "00:01:37",
                            "workLoad": 78
                        },
                        {
                            "id": "ef108f19-4268-4445-a0ae-806bc307f947",
                            "operatorName": "Иванцова Мария Николаевна",
                            "success": 157,
                            "unsuccess": 7,
                            "avgServiceTime": "00:01:42",
                            "workLoad": 79
                        },
                        {
                            "id": "d5ff850e-520f-4a70-bfbd-433972e8ec51",
                            "operatorName": "Волчек Юлия Александровна",
                            "success": 405,
                            "unsuccess": 3,
                            "avgServiceTime": "00:01:05",
                            "workLoad": 15
                        },
                        {
                            "id": "153101db-3878-4378-84e5-fcabdfb84239",
                            "operatorName": "Иванова Марина Александровна",
                            "success": 2247,
                            "unsuccess": 1,
                            "avgServiceTime": "00:01:31",
                            "workLoad": 76
                        },
                        {
                            "id": "aca6d6fa-e9f9-4fdf-b291-c2fefc8714a7",
                            "operatorName": "Дмитрук Екатерина Викторовна",
                            "success": 2265,
                            "unsuccess": 1,
                            "avgServiceTime": "00:01:32",
                            "workLoad": 75
                        },
                        {
                            "id": "62e7c778-262d-4c63-9e01-f270c94fd507",
                            "operatorName": "Павлова Аксана Александровна",
                            "success": 1417,
                            "unsuccess": 1,
                            "avgServiceTime": "00:01:16",
                            "workLoad": 76
                        },
                        {
                            "id": "217887b0-e1b4-44e9-a278-9b10ae277e6f",
                            "operatorName": "Грищенкова Валерия Сергеевна",
                            "success": 2471,
                            "unsuccess": 2,
                            "avgServiceTime": "00:01:43",
                            "workLoad": 82
                        },
                        {
                            "id": "7055e751-d3bf-4509-a4bf-526860b28d1e",
                            "operatorName": "Терехова Татьяна Николаевна",
                            "success": 1990,
                            "unsuccess": 1,
                            "avgServiceTime": "00:01:28",
                            "workLoad": 78
                        },
                        {
                            "id": "c64f1007-21d7-409c-a496-7cc88375cafd",
                            "operatorName": "Неладнова Оксана Михайловна",
                            "success": 595,
                            "unsuccess": 6,
                            "avgServiceTime": "00:01:33",
                            "workLoad": 21
                        },
                        {
                            "id": "43c9d49a-0770-494f-baf6-fedc0b914c47",
                            "operatorName": "Лозовская Елена Евгеньевна",
                            "success": 2320,
                            "unsuccess": 3,
                            "avgServiceTime": "00:01:40",
                            "workLoad": 75
                        },
                        {
                            "id": "c5c48fc5-64ca-44b4-adf1-788de701ff4e",
                            "operatorName": "Парусова Лилия Алексеевна",
                            "success": 504,
                            "unsuccess": 4,
                            "avgServiceTime": "00:01:40",
                            "workLoad": 19
                        },
                        {
                            "id": "1c56fc64-beda-4713-a94e-802150c01683",
                            "operatorName": "Загреднюк Светлана Викторовна",
                            "success": 2342,
                            "unsuccess": 4,
                            "avgServiceTime": "00:01:48",
                            "workLoad": 85
                        },
                        {
                            "id": "575f3298-c410-4371-9b7d-f1350fd1f6f2",
                            "operatorName": "Михальцова Ирина Сергеевна",
                            "success": 1,
                            "unsuccess": 1,
                            "avgServiceTime": "00:01:51",
                            "workLoad": 24
                        },
                        {
                            "id": "31d5f631-1ef4-4a1e-8de4-04c2651bc4ec",
                            "operatorName": "Николаевич Оксана Александровна",
                            "success": 10,
                            "unsuccess": 1,
                            "avgServiceTime": "00:03:32",
                            "workLoad": 99
                        },
                        {
                            "id": "f7735f38-fb8c-4a81-90e1-cc3cc91b27cd",
                            "operatorName": "Минич Алексей Вадимович",
                            "success": 70,
                            "unsuccess": 1,
                            "avgServiceTime": "00:01:12",
                            "workLoad": 98
                        },
                        {
                            "id": "7b8ab4fd-f37f-44cb-89ca-a6d55dec8758",
                            "operatorName": "Неладнова Юлия Игоревна",
                            "success": 67,
                            "unsuccess": 3,
                            "avgServiceTime": "00:01:34",
                            "workLoad": 77
                        },
                        {
                            "id": "fa4a6fb6-d7dc-4f4b-9563-04a4a539d264",
                            "operatorName": "Маханькова Мария Викторовна",
                            "success": 2386,
                            "unsuccess": 3,
                            "avgServiceTime": "00:01:22",
                            "workLoad": 77
                        },
                        {
                            "id": "b5e6ae5d-9815-4661-97d0-8ecda91526ae",
                            "operatorName": "Ковшун Вероника Валентиновна",
                            "success": 1832,
                            "unsuccess": 0,
                            "avgServiceTime": "00:01:27",
                            "workLoad": 72
                        },
                        {
                            "id": "e74eb55e-c184-4188-8668-f46e599d244a",
                            "operatorName": "Мамонова Ольга Николаевна",
                            "success": 13,
                            "unsuccess": 6,
                            "avgServiceTime": "00:01:27",
                            "workLoad": 2
                        },
                        {
                            "id": "d0b16bff-fcac-414d-a2a3-bb62e0bddf56",
                            "operatorName": "Рябцева Марина Игоревна",
                            "success": 1525,
                            "unsuccess": 1,
                            "avgServiceTime": "00:01:11",
                            "workLoad": 54
                        },
                        {
                            "id": "c2b20962-28b3-4ace-87fc-5b0358e56aa3",
                            "operatorName": "Кусаева Гульнара Хазиуловна",
                            "success": 1169,
                            "unsuccess": 1,
                            "avgServiceTime": "00:01:32",
                            "workLoad": 70
                        },
                        {
                            "id": "6cd75e76-f944-4933-8494-c455538af6fa",
                            "operatorName": "Степанова Светлана Владимировна",
                            "success": 115,
                            "unsuccess": 2,
                            "avgServiceTime": "00:02:05",
                            "workLoad": 98
                        },
                        {
                            "id": "e4822326-9a8d-4c79-8eb6-9e4a45f0b175",
                            "operatorName": "Модулева Анна Анатольевна",
                            "success": 999,
                            "unsuccess": 0,
                            "avgServiceTime": "00:01:28",
                            "workLoad": 70
                        }
                    ],
                    "tableTotal": [
                        {
                            "id": "78b11766-0283-4511-bf44-6c13adde4932",
                            "operatorName": "Гормаш Полина Станиславовна",
                            "accept": 26,
                            "acceptMonth": 2314,
                            "skip": 0,
                            "avgServiceTime": "00:01:15",
                            "avgServiceTimeMonth": "00:01:41",
                            "workload": 59,
                            "workloadMonth": 76,
                            "monthRating": 100,
                            "serviceLevel": 100
                        },
                        {
                            "id": "217887b0-e1b4-44e9-a278-9b10ae277e6f",
                            "operatorName": "Грищенкова Валерия Сергеевна",
                            "accept": 17,
                            "acceptMonth": 2488,
                            "skip": 0,
                            "avgServiceTime": "00:02:06",
                            "avgServiceTimeMonth": "00:01:43",
                            "workload": 61,
                            "workloadMonth": 81,
                            "monthRating": 99,
                            "serviceLevel": 100
                        },
                        {
                            "id": "120722b4-de62-404e-ad77-22eea03ee4cf",
                            "operatorName": "Панкратова Татьяна Святославовна",
                            "accept": 118,
                            "acceptMonth": 2179,
                            "skip": 0,
                            "avgServiceTime": "00:01:14",
                            "avgServiceTimeMonth": "00:01:25",
                            "workload": 40,
                            "workloadMonth": 60,
                            "monthRating": 99,
                            "serviceLevel": 100
                        },
                        {
                            "id": "2710ffe0-82da-4184-9c1d-9d7986feb0ad",
                            "operatorName": "Кулешова Мария Валерьевна",
                            "accept": 12,
                            "acceptMonth": 515,
                            "skip": 1,
                            "avgServiceTime": "00:00:54",
                            "avgServiceTimeMonth": "00:01:02",
                            "workload": 5,
                            "workloadMonth": 13,
                            "monthRating": 98,
                            "serviceLevel": 0
                        },
                        {
                            "id": "da5d92d2-e3ec-4413-920c-e20c0fa48312",
                            "operatorName": "Специалист Контакт-центра",
                            "accept": 12,
                            "acceptMonth": 323,
                            "skip": 0,
                            "avgServiceTime": "00:01:12",
                            "avgServiceTimeMonth": "00:01:30",
                            "workload": 23,
                            "workloadMonth": 34,
                            "monthRating": 99,
                            "serviceLevel": 100
                        },
                        {
                            "id": "4e368f49-7e65-4568-9c55-7f290fa56e21",
                            "operatorName": "Мисникова Оксана Михайловна",
                            "accept": 100,
                            "acceptMonth": 1968,
                            "skip": 0,
                            "avgServiceTime": "00:01:35",
                            "avgServiceTimeMonth": "00:01:49",
                            "workload": 67,
                            "workloadMonth": 76,
                            "monthRating": 99,
                            "serviceLevel": 100
                        },
                        {
                            "id": "d732aed1-fad5-4ebc-bf41-8be9544cedea",
                            "operatorName": "Дмитроченко Марина Михайловна",
                            "accept": 99,
                            "acceptMonth": 2273,
                            "skip": 0,
                            "avgServiceTime": "00:01:43",
                            "avgServiceTimeMonth": "00:01:50",
                            "workload": 72,
                            "workloadMonth": 78,
                            "monthRating": 99,
                            "serviceLevel": 100
                        },
                        {
                            "id": "b5e6ae5d-9815-4661-97d0-8ecda91526ae",
                            "operatorName": "Ковшун Вероника Валентиновна",
                            "accept": 104,
                            "acceptMonth": 1936,
                            "skip": 0,
                            "avgServiceTime": "00:01:18",
                            "avgServiceTimeMonth": "00:01:27",
                            "workload": 63,
                            "workloadMonth": 71,
                            "monthRating": 100,
                            "serviceLevel": 100
                        },
                        {
                            "id": "1ad16f6f-2a4e-4be1-a121-3d6e10e30896",
                            "operatorName": "Лабзо Александра Михайловна",
                            "accept": 91,
                            "acceptMonth": 2197,
                            "skip": 0,
                            "avgServiceTime": "00:01:22",
                            "avgServiceTimeMonth": "00:01:35",
                            "workload": 67,
                            "workloadMonth": 73,
                            "monthRating": 99,
                            "serviceLevel": 100
                        },
                        {
                            "id": "a8fe883d-7357-4cb0-bdde-ef50ae078830",
                            "operatorName": "Чумакова Виктория Викторовна",
                            "accept": 91,
                            "acceptMonth": 2392,
                            "skip": 0,
                            "avgServiceTime": "00:01:17",
                            "avgServiceTimeMonth": "00:01:34",
                            "workload": 66,
                            "workloadMonth": 75,
                            "monthRating": 99,
                            "serviceLevel": 100
                        },
                        {
                            "id": "240c1e2a-1dca-4a7d-ae56-fae0b1d9e62e",
                            "operatorName": "Коцур Анастасия Александровна",
                            "accept": 81,
                            "acceptMonth": 1888,
                            "skip": 0,
                            "avgServiceTime": "00:01:24",
                            "avgServiceTimeMonth": "00:01:55",
                            "workload": 72,
                            "workloadMonth": 82,
                            "monthRating": 100,
                            "serviceLevel": 100
                        },
                        {
                            "id": "e4822326-9a8d-4c79-8eb6-9e4a45f0b175",
                            "operatorName": "Модулева Анна Анатольевна",
                            "accept": 103,
                            "acceptMonth": 1102,
                            "skip": 0,
                            "avgServiceTime": "00:01:13",
                            "avgServiceTimeMonth": "00:01:27",
                            "workload": 69,
                            "workloadMonth": 70,
                            "monthRating": 100,
                            "serviceLevel": 100
                        },
                        {
                            "id": "f3ac409d-4fd0-4a50-9ecf-3d414f950219",
                            "operatorName": "Сугакова Татьяна Вячеславовна",
                            "accept": 33,
                            "acceptMonth": 687,
                            "skip": 1,
                            "avgServiceTime": "00:01:42",
                            "avgServiceTimeMonth": "00:01:25",
                            "workload": 32,
                            "workloadMonth": 25,
                            "monthRating": 97,
                            "serviceLevel": 0
                        },
                        {
                            "id": "ef108f19-4268-4445-a0ae-806bc307f947",
                            "operatorName": "Иванцова Мария Николаевна",
                            "accept": 9,
                            "acceptMonth": 166,
                            "skip": 0,
                            "avgServiceTime": "00:01:26",
                            "avgServiceTimeMonth": "00:01:42",
                            "workload": 100,
                            "workloadMonth": 80,
                            "monthRating": 95,
                            "serviceLevel": 100
                        },
                        {
                            "id": "b8b94e0f-7906-44b5-9d9e-0a10046bddb6",
                            "operatorName": "Витенкова Валентина Юрьевна",
                            "accept": 102,
                            "acceptMonth": 2884,
                            "skip": 0,
                            "avgServiceTime": "00:01:03",
                            "avgServiceTimeMonth": "00:01:04",
                            "workload": 75,
                            "workloadMonth": 66,
                            "monthRating": 99,
                            "serviceLevel": 100
                        },
                        {
                            "id": "fa4a6fb6-d7dc-4f4b-9563-04a4a539d264",
                            "operatorName": "Маханькова Мария Викторовна",
                            "accept": 75,
                            "acceptMonth": 2461,
                            "skip": 0,
                            "avgServiceTime": "00:01:16",
                            "avgServiceTimeMonth": "00:01:22",
                            "workload": 75,
                            "workloadMonth": 77,
                            "monthRating": 99,
                            "serviceLevel": 100
                        },
                        {
                            "id": "fac2461a-e04f-4966-8608-9bb8cca7e73b",
                            "operatorName": "Ковалева Елена Владимировна",
                            "accept": 48,
                            "acceptMonth": 1883,
                            "skip": 0,
                            "avgServiceTime": "00:01:58",
                            "avgServiceTimeMonth": "00:02:05",
                            "workload": 80,
                            "workloadMonth": 80,
                            "monthRating": 99,
                            "serviceLevel": 100
                        },
                        {
                            "id": "1d64247e-7819-465e-a2e8-0f08aa460105",
                            "operatorName": "Евменова Наталья Николаевна",
                            "accept": 44,
                            "acceptMonth": 883,
                            "skip": 0,
                            "avgServiceTime": "00:01:24",
                            "avgServiceTimeMonth": "00:01:33",
                            "workload": 72,
                            "workloadMonth": 79,
                            "monthRating": 99,
                            "serviceLevel": 100
                        },
                        {
                            "id": "eb84d5e2-0d3c-4557-ac9c-e0921fb205d1",
                            "operatorName": "Малюшицкая Наталья Федоровна",
                            "accept": 61,
                            "acceptMonth": 2416,
                            "skip": 0,
                            "avgServiceTime": "00:01:34",
                            "avgServiceTimeMonth": "00:01:17",
                            "workload": 82,
                            "workloadMonth": 70,
                            "monthRating": 99,
                            "serviceLevel": 100
                        },
                        {
                            "id": "e74eb55e-c184-4188-8668-f46e599d244a",
                            "operatorName": "Мамонова Ольга Николаевна",
                            "accept": 0,
                            "acceptMonth": 13,
                            "skip": 1,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:27",
                            "workload": 100,
                            "workloadMonth": 2,
                            "monthRating": 65,
                            "serviceLevel": 0
                        },
                        {
                            "id": "36aa9192-001f-4e66-84af-f3005ada4970",
                            "operatorName": "Лужанкова Ольга Николаевна",
                            "accept": 16,
                            "acceptMonth": 481,
                            "skip": 0,
                            "avgServiceTime": "00:01:15",
                            "avgServiceTimeMonth": "00:01:31",
                            "workload": 38,
                            "workloadMonth": 21,
                            "monthRating": 99,
                            "serviceLevel": 100
                        },
                        {
                            "id": "34b3a6ca-1ff6-45a4-9efd-69f7a2df4333",
                            "operatorName": "Мартынова Кристина Владимировна",
                            "accept": 41,
                            "acceptMonth": 2379,
                            "skip": 1,
                            "avgServiceTime": "00:01:40",
                            "avgServiceTimeMonth": "00:01:46",
                            "workload": 85,
                            "workloadMonth": 80,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "ecd81a28-eb53-43ee-8a13-f9e4716f299e",
                            "operatorName": "Маскалева Анастасия Сергеевна",
                            "accept": 33,
                            "acceptMonth": 1970,
                            "skip": 0,
                            "avgServiceTime": "00:02:10",
                            "avgServiceTimeMonth": "00:02:35",
                            "workload": 87,
                            "workloadMonth": 91,
                            "monthRating": 99,
                            "serviceLevel": 100
                        },
                        {
                            "id": "f7735f38-fb8c-4a81-90e1-cc3cc91b27cd",
                            "operatorName": "Минич Алексей Вадимович",
                            "accept": 3,
                            "acceptMonth": 73,
                            "skip": 0,
                            "avgServiceTime": "00:02:06",
                            "avgServiceTimeMonth": "00:01:15",
                            "workload": 100,
                            "workloadMonth": 98,
                            "monthRating": 98,
                            "serviceLevel": 100
                        },
                        {
                            "id": "76d51052-460e-4338-a5b8-d3b0adf15a58",
                            "operatorName": "Черкасова Татьяна Адамовна",
                            "accept": 16,
                            "acceptMonth": 2241,
                            "skip": 0,
                            "avgServiceTime": "00:01:26",
                            "avgServiceTimeMonth": "00:02:17",
                            "workload": 84,
                            "workloadMonth": 89,
                            "monthRating": 99,
                            "serviceLevel": 100
                        },
                        {
                            "id": "0ed06b1f-e74b-4f5f-b85c-c6426b70d26b",
                            "operatorName": "Скворцова Алеся Игоревна",
                            "accept": 14,
                            "acceptMonth": 1097,
                            "skip": 0,
                            "avgServiceTime": "00:01:40",
                            "avgServiceTimeMonth": "00:01:50",
                            "workload": 86,
                            "workloadMonth": 76,
                            "monthRating": 99,
                            "serviceLevel": 100
                        },
                        {
                            "id": "aaeef391-b242-4260-9846-0d8451e5b596",
                            "operatorName": "Бурдукова Татьяна Сергеевна",
                            "accept": 16,
                            "acceptMonth": 2250,
                            "skip": 0,
                            "avgServiceTime": "00:01:17",
                            "avgServiceTimeMonth": "00:01:34",
                            "workload": 81,
                            "workloadMonth": 75,
                            "monthRating": 99,
                            "serviceLevel": 100
                        },
                        {
                            "id": "ef5c03ee-4285-471b-927a-afb8319b2719",
                            "operatorName": "Гомонова Елизавета Сергеевна",
                            "accept": 0,
                            "acceptMonth": 856,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:48",
                            "workload": 0,
                            "workloadMonth": 85,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "49736e72-cdcf-4117-bd45-0bd4e7093e34",
                            "operatorName": "Тимошенко Лилия Анатольевна",
                            "accept": 0,
                            "acceptMonth": 228,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:17",
                            "workload": 0,
                            "workloadMonth": 20,
                            "monthRating": 100,
                            "serviceLevel": 0
                        },
                        {
                            "id": "5b791304-cea1-4e68-9cc9-d7f1547d612d",
                            "operatorName": "Касперавичус Яна Игоревна",
                            "accept": 0,
                            "acceptMonth": 2255,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:33",
                            "workload": 0,
                            "workloadMonth": 74,
                            "monthRating": 100,
                            "serviceLevel": 0
                        },
                        {
                            "id": "863ce94c-cfe4-43f8-9651-31d9557c0ca9",
                            "operatorName": "Ермолицкая Ангелина Викторовна",
                            "accept": 0,
                            "acceptMonth": 2324,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:32",
                            "workload": 0,
                            "workloadMonth": 70,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "b1b43f24-9f61-426d-b158-cce4344959b0",
                            "operatorName": "Куценко Лариса Николаевна",
                            "accept": 0,
                            "acceptMonth": 2561,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:24",
                            "workload": 0,
                            "workloadMonth": 71,
                            "monthRating": 100,
                            "serviceLevel": 0
                        },
                        {
                            "id": "cfda6bad-6bb6-4f17-bcd2-c10aff73f832",
                            "operatorName": "Игнатович Алла Викторовна",
                            "accept": 0,
                            "acceptMonth": 2230,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:48",
                            "workload": 0,
                            "workloadMonth": 77,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "47a2d6a1-f9ce-4b1f-a95e-9a9b3ff5f4b4",
                            "operatorName": "Уголева Марина Михайловна",
                            "accept": 0,
                            "acceptMonth": 2165,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:02:03",
                            "workload": 0,
                            "workloadMonth": 82,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "cf739884-f690-4263-aa87-30cd0f9880f4",
                            "operatorName": "Сарадоева Наталья Юрьевна",
                            "accept": 0,
                            "acceptMonth": 2297,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:18",
                            "workload": 0,
                            "workloadMonth": 60,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "61d8e4d6-56f2-4030-870d-0430a81e8ace",
                            "operatorName": "Будницкая Татьяна Александровна",
                            "accept": 0,
                            "acceptMonth": 1578,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:53",
                            "workload": 0,
                            "workloadMonth": 76,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "e1639704-f9e0-4e43-a6d3-ff126ef4df1b",
                            "operatorName": "Гридюшко Ирина Владимировна",
                            "accept": 0,
                            "acceptMonth": 2957,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:24",
                            "workload": 0,
                            "workloadMonth": 79,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "16fc4e64-f518-4dd1-be43-6f8e3aaea7cd",
                            "operatorName": "Якушева-Марахонькина Анна Викторовна",
                            "accept": 0,
                            "acceptMonth": 2240,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:26",
                            "workload": 0,
                            "workloadMonth": 63,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "db4cffe2-87e0-49d2-8da2-d23c5109083d",
                            "operatorName": "Баранчук Светлана Григорьевна",
                            "accept": 0,
                            "acceptMonth": 73,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:29",
                            "workload": 0,
                            "workloadMonth": 25,
                            "monthRating": 94,
                            "serviceLevel": 0
                        },
                        {
                            "id": "9cc0dc0e-c735-4b12-8424-4a9a297fd049",
                            "operatorName": "Толочко Наталья Вацлавовна",
                            "accept": 0,
                            "acceptMonth": 2565,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:42",
                            "workload": 0,
                            "workloadMonth": 83,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "69053338-21f2-4257-9a65-1964b08c3d06",
                            "operatorName": "Шарубина Анна Андреевна",
                            "accept": 0,
                            "acceptMonth": 1753,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:09",
                            "workload": 0,
                            "workloadMonth": 71,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "97fc6b07-c292-4b00-9c49-1c57a070b373",
                            "operatorName": "Венглинская Яна Геннадьевна",
                            "accept": 0,
                            "acceptMonth": 538,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:42",
                            "workload": 0,
                            "workloadMonth": 21,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "9816ff4a-82d6-436d-8366-e75ded116ebb",
                            "operatorName": "Листратенко Алеся Владимировна",
                            "accept": 0,
                            "acceptMonth": 228,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:16",
                            "workload": 0,
                            "workloadMonth": 66,
                            "monthRating": 100,
                            "serviceLevel": 0
                        },
                        {
                            "id": "85745644-7608-40c7-a16a-6a45dc84dcc0",
                            "operatorName": "Соловей Елена Анатольевна",
                            "accept": 0,
                            "acceptMonth": 217,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:24",
                            "workload": 0,
                            "workloadMonth": 22,
                            "monthRating": 98,
                            "serviceLevel": 0
                        },
                        {
                            "id": "bd35df11-f53a-49a1-b0c8-766046a5128d",
                            "operatorName": "Инженер по ТО",
                            "accept": 0,
                            "acceptMonth": 24,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:00:44",
                            "workload": 0,
                            "workloadMonth": 1,
                            "monthRating": 88,
                            "serviceLevel": 0
                        },
                        {
                            "id": "49cbb044-a7b5-4468-83b5-d2eb87994f89",
                            "operatorName": "Сергеева Виктория Григорьевна",
                            "accept": 0,
                            "acceptMonth": 15,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:00:56",
                            "workload": 0,
                            "workloadMonth": 84,
                            "monthRating": 75,
                            "serviceLevel": 0
                        },
                        {
                            "id": "2b9f7a4a-59ba-4cfc-af13-b4a523af620e",
                            "operatorName": "Бурлуцкая Мария Ивановна",
                            "accept": 0,
                            "acceptMonth": 77,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:45",
                            "workload": 0,
                            "workloadMonth": 5,
                            "monthRating": 70,
                            "serviceLevel": 0
                        },
                        {
                            "id": "14e5128d-a6c9-47e8-9a69-648f4d406255",
                            "operatorName": "Моргунова Наталья Брониславовна",
                            "accept": 0,
                            "acceptMonth": 163,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:26",
                            "workload": 0,
                            "workloadMonth": 6,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "12d89a1a-b917-4593-8a01-d3e6dfca8147",
                            "operatorName": "Мацуль Ольга Петровна",
                            "accept": 0,
                            "acceptMonth": 2901,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:09",
                            "workload": 0,
                            "workloadMonth": 75,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "58c6924f-051e-46f7-9629-914be0da25b6",
                            "operatorName": "Гарбузова Жанна Николаевна",
                            "accept": 0,
                            "acceptMonth": 2318,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:37",
                            "workload": 0,
                            "workloadMonth": 78,
                            "monthRating": 100,
                            "serviceLevel": 0
                        },
                        {
                            "id": "d5ff850e-520f-4a70-bfbd-433972e8ec51",
                            "operatorName": "Волчек Юлия Александровна",
                            "accept": 0,
                            "acceptMonth": 405,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:05",
                            "workload": 0,
                            "workloadMonth": 15,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "153101db-3878-4378-84e5-fcabdfb84239",
                            "operatorName": "Иванова Марина Александровна",
                            "accept": 0,
                            "acceptMonth": 2247,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:31",
                            "workload": 0,
                            "workloadMonth": 76,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "aca6d6fa-e9f9-4fdf-b291-c2fefc8714a7",
                            "operatorName": "Дмитрук Екатерина Викторовна",
                            "accept": 0,
                            "acceptMonth": 2265,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:32",
                            "workload": 0,
                            "workloadMonth": 75,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "62e7c778-262d-4c63-9e01-f270c94fd507",
                            "operatorName": "Павлова Аксана Александровна",
                            "accept": 0,
                            "acceptMonth": 1417,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:16",
                            "workload": 0,
                            "workloadMonth": 76,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "7055e751-d3bf-4509-a4bf-526860b28d1e",
                            "operatorName": "Терехова Татьяна Николаевна",
                            "accept": 0,
                            "acceptMonth": 1990,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:28",
                            "workload": 0,
                            "workloadMonth": 78,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "c64f1007-21d7-409c-a496-7cc88375cafd",
                            "operatorName": "Неладнова Оксана Михайловна",
                            "accept": 0,
                            "acceptMonth": 595,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:33",
                            "workload": 0,
                            "workloadMonth": 21,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "43c9d49a-0770-494f-baf6-fedc0b914c47",
                            "operatorName": "Лозовская Елена Евгеньевна",
                            "accept": 0,
                            "acceptMonth": 2320,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:40",
                            "workload": 0,
                            "workloadMonth": 75,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "c5c48fc5-64ca-44b4-adf1-788de701ff4e",
                            "operatorName": "Парусова Лилия Алексеевна",
                            "accept": 0,
                            "acceptMonth": 504,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:40",
                            "workload": 0,
                            "workloadMonth": 19,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "1c56fc64-beda-4713-a94e-802150c01683",
                            "operatorName": "Загреднюк Светлана Викторовна",
                            "accept": 0,
                            "acceptMonth": 2342,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:48",
                            "workload": 0,
                            "workloadMonth": 85,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "575f3298-c410-4371-9b7d-f1350fd1f6f2",
                            "operatorName": "Михальцова Ирина Сергеевна",
                            "accept": 0,
                            "acceptMonth": 1,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:51",
                            "workload": 0,
                            "workloadMonth": 24,
                            "monthRating": 50,
                            "serviceLevel": 0
                        },
                        {
                            "id": "31d5f631-1ef4-4a1e-8de4-04c2651bc4ec",
                            "operatorName": "Николаевич Оксана Александровна",
                            "accept": 0,
                            "acceptMonth": 10,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:03:32",
                            "workload": 0,
                            "workloadMonth": 99,
                            "monthRating": 90,
                            "serviceLevel": 0
                        },
                        {
                            "id": "7b8ab4fd-f37f-44cb-89ca-a6d55dec8758",
                            "operatorName": "Неладнова Юлия Игоревна",
                            "accept": 0,
                            "acceptMonth": 67,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:34",
                            "workload": 0,
                            "workloadMonth": 77,
                            "monthRating": 95,
                            "serviceLevel": 0
                        },
                        {
                            "id": "d0b16bff-fcac-414d-a2a3-bb62e0bddf56",
                            "operatorName": "Рябцева Марина Игоревна",
                            "accept": 0,
                            "acceptMonth": 1525,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:11",
                            "workload": 0,
                            "workloadMonth": 54,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "c2b20962-28b3-4ace-87fc-5b0358e56aa3",
                            "operatorName": "Кусаева Гульнара Хазиуловна",
                            "accept": 0,
                            "acceptMonth": 1169,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:01:32",
                            "workload": 0,
                            "workloadMonth": 70,
                            "monthRating": 99,
                            "serviceLevel": 0
                        },
                        {
                            "id": "6cd75e76-f944-4933-8494-c455538af6fa",
                            "operatorName": "Степанова Светлана Владимировна",
                            "accept": 0,
                            "acceptMonth": 115,
                            "skip": 0,
                            "avgServiceTime": "00:00:00",
                            "avgServiceTimeMonth": "00:02:05",
                            "workload": 0,
                            "workloadMonth": 98,
                            "monthRating": 98,
                            "serviceLevel": 0
                        }
                    ],
                    "schema": [
                        {
                            "name": "00:00",
                            "accept": 66,
                            "notAccept": 19,
                            "avgCalls": 1.5,
                            "maxSimultaneousCall": 12,
                            "opActivity": 4,
                            "oplnSys": 0
                        },
                        {
                            "name": "01:00",
                            "accept": 16,
                            "notAccept": 0,
                            "avgCalls": 1.2,
                            "maxSimultaneousCall": 2,
                            "opActivity": 1,
                            "oplnSys": 0
                        },
                        {
                            "name": "02:00",
                            "accept": 7,
                            "notAccept": 0,
                            "avgCalls": 1.8,
                            "maxSimultaneousCall": 2,
                            "opActivity": 1,
                            "oplnSys": 0
                        },
                        {
                            "name": "03:00",
                            "accept": 7,
                            "notAccept": 0,
                            "avgCalls": 1.7,
                            "maxSimultaneousCall": 1,
                            "opActivity": 1,
                            "oplnSys": 0
                        },
                        {
                            "name": "04:00",
                            "accept": 13,
                            "notAccept": 0,
                            "avgCalls": 1.2,
                            "maxSimultaneousCall": 3,
                            "opActivity": 2,
                            "oplnSys": 0
                        },
                        {
                            "name": "05:00",
                            "accept": 34,
                            "notAccept": 1,
                            "avgCalls": 1.1,
                            "maxSimultaneousCall": 3,
                            "opActivity": 5,
                            "oplnSys": 0
                        },
                        {
                            "name": "06:00",
                            "accept": 86,
                            "notAccept": 0,
                            "avgCalls": 1.5,
                            "maxSimultaneousCall": 7,
                            "opActivity": 5,
                            "oplnSys": 0
                        },
                        {
                            "name": "07:00",
                            "accept": 191,
                            "notAccept": 6,
                            "avgCalls": 1.3,
                            "maxSimultaneousCall": 16,
                            "opActivity": 11,
                            "oplnSys": 1
                        },
                        {
                            "name": "08:00",
                            "accept": 336,
                            "notAccept": 1,
                            "avgCalls": 1.4,
                            "maxSimultaneousCall": 20,
                            "opActivity": 15,
                            "oplnSys": 2
                        },
                        {
                            "name": "09:00",
                            "accept": 383,
                            "notAccept": 33,
                            "avgCalls": 1.5,
                            "maxSimultaneousCall": 28,
                            "opActivity": 17,
                            "oplnSys": 1
                        },
                        {
                            "name": "10:00",
                            "accept": 226,
                            "notAccept": 8,
                            "avgCalls": 1.4,
                            "maxSimultaneousCall": 27,
                            "opActivity": 18,
                            "oplnSys": 2
                        },
                        {
                            "name": "11:00",
                            "accept": 0,
                            "notAccept": 0,
                            "avgCalls": 0,
                            "maxSimultaneousCall": 0,
                            "opActivity": 0,
                            "oplnSys": 0
                        },
                        {
                            "name": "12:00",
                            "accept": 0,
                            "notAccept": 0,
                            "avgCalls": 0,
                            "maxSimultaneousCall": 0,
                            "opActivity": 0,
                            "oplnSys": 0
                        },
                        {
                            "name": "13:00",
                            "accept": 0,
                            "notAccept": 0,
                            "avgCalls": 0,
                            "maxSimultaneousCall": 0,
                            "opActivity": 0,
                            "oplnSys": 0
                        },
                        {
                            "name": "14:00",
                            "accept": 0,
                            "notAccept": 0,
                            "avgCalls": 0,
                            "maxSimultaneousCall": 0,
                            "opActivity": 0,
                            "oplnSys": 0
                        },
                        {
                            "name": "15:00",
                            "accept": 0,
                            "notAccept": 0,
                            "avgCalls": 0,
                            "maxSimultaneousCall": 0,
                            "opActivity": 0,
                            "oplnSys": 0
                        },
                        {
                            "name": "16:00",
                            "accept": 0,
                            "notAccept": 0,
                            "avgCalls": 0,
                            "maxSimultaneousCall": 0,
                            "opActivity": 0,
                            "oplnSys": 1
                        },
                        {
                            "name": "17:00",
                            "accept": 0,
                            "notAccept": 0,
                            "avgCalls": 0,
                            "maxSimultaneousCall": 0,
                            "opActivity": 0,
                            "oplnSys": 1
                        },
                        {
                            "name": "18:00",
                            "accept": 0,
                            "notAccept": 0,
                            "avgCalls": 0,
                            "maxSimultaneousCall": 0,
                            "opActivity": 0,
                            "oplnSys": 0
                        },
                        {
                            "name": "19:00",
                            "accept": 0,
                            "notAccept": 0,
                            "avgCalls": 0,
                            "maxSimultaneousCall": 0,
                            "opActivity": 0,
                            "oplnSys": 0
                        },
                        {
                            "name": "20:00",
                            "accept": 0,
                            "notAccept": 0,
                            "avgCalls": 0,
                            "maxSimultaneousCall": 0,
                            "opActivity": 0,
                            "oplnSys": 0
                        },
                        {
                            "name": "21:00",
                            "accept": 0,
                            "notAccept": 0,
                            "avgCalls": 0,
                            "maxSimultaneousCall": 0,
                            "opActivity": 0,
                            "oplnSys": 0
                        },
                        {
                            "name": "22:00",
                            "accept": 0,
                            "notAccept": 0,
                            "avgCalls": 0,
                            "maxSimultaneousCall": 0,
                            "opActivity": 0,
                            "oplnSys": 0
                        },
                        {
                            "name": "23:00",
                            "accept": 0,
                            "notAccept": 0,
                            "avgCalls": 0,
                            "maxSimultaneousCall": 0,
                            "opActivity": 0,
                            "oplnSys": 0
                        }
                    ],
                    "schemaTotal": [
                        {
                            "name": "00:00",
                            "accept": 811,
                            "notAccept": 107,
                            "avgCalls": 2,
                            "maxSimultaneousCall": 12,
                            "opActivity": 27,
                            "oplnSys": 2
                        },
                        {
                            "name": "01:00",
                            "accept": 271,
                            "notAccept": 16,
                            "avgCalls": 1.5,
                            "maxSimultaneousCall": 4,
                            "opActivity": 14,
                            "oplnSys": 0
                        },
                        {
                            "name": "02:00",
                            "accept": 170,
                            "notAccept": 6,
                            "avgCalls": 1.4,
                            "maxSimultaneousCall": 3,
                            "opActivity": 12,
                            "oplnSys": 0
                        },
                        {
                            "name": "03:00",
                            "accept": 171,
                            "notAccept": 6,
                            "avgCalls": 1.5,
                            "maxSimultaneousCall": 3,
                            "opActivity": 7,
                            "oplnSys": 0
                        },
                        {
                            "name": "04:00",
                            "accept": 227,
                            "notAccept": 5,
                            "avgCalls": 1.2,
                            "maxSimultaneousCall": 3,
                            "opActivity": 13,
                            "oplnSys": 0
                        },
                        {
                            "name": "05:00",
                            "accept": 595,
                            "notAccept": 32,
                            "avgCalls": 0.9,
                            "maxSimultaneousCall": 5,
                            "opActivity": 22,
                            "oplnSys": 0
                        },
                        {
                            "name": "06:00",
                            "accept": 1661,
                            "notAccept": 37,
                            "avgCalls": 1.1,
                            "maxSimultaneousCall": 10,
                            "opActivity": 34,
                            "oplnSys": 2
                        },
                        {
                            "name": "07:00",
                            "accept": 3302,
                            "notAccept": 20,
                            "avgCalls": 1.2,
                            "maxSimultaneousCall": 16,
                            "opActivity": 54,
                            "oplnSys": 7
                        },
                        {
                            "name": "08:00",
                            "accept": 5769,
                            "notAccept": 86,
                            "avgCalls": 1.3,
                            "maxSimultaneousCall": 27,
                            "opActivity": 70,
                            "oplnSys": 10
                        },
                        {
                            "name": "09:00",
                            "accept": 6859,
                            "notAccept": 591,
                            "avgCalls": 1.4,
                            "maxSimultaneousCall": 44,
                            "opActivity": 76,
                            "oplnSys": 9
                        },
                        {
                            "name": "10:00",
                            "accept": 7678,
                            "notAccept": 533,
                            "avgCalls": 1.6,
                            "maxSimultaneousCall": 40,
                            "opActivity": 78,
                            "oplnSys": 11
                        },
                        {
                            "name": "11:00",
                            "accept": 7374,
                            "notAccept": 470,
                            "avgCalls": 1.6,
                            "maxSimultaneousCall": 43,
                            "opActivity": 63,
                            "oplnSys": 10
                        },
                        {
                            "name": "12:00",
                            "accept": 6949,
                            "notAccept": 494,
                            "avgCalls": 1.6,
                            "maxSimultaneousCall": 42,
                            "opActivity": 60,
                            "oplnSys": 8
                        },
                        {
                            "name": "13:00",
                            "accept": 6696,
                            "notAccept": 343,
                            "avgCalls": 1.7,
                            "maxSimultaneousCall": 38,
                            "opActivity": 60,
                            "oplnSys": 7
                        },
                        {
                            "name": "14:00",
                            "accept": 6179,
                            "notAccept": 241,
                            "avgCalls": 1.7,
                            "maxSimultaneousCall": 33,
                            "opActivity": 59,
                            "oplnSys": 11
                        },
                        {
                            "name": "15:00",
                            "accept": 5820,
                            "notAccept": 136,
                            "avgCalls": 1.7,
                            "maxSimultaneousCall": 31,
                            "opActivity": 58,
                            "oplnSys": 11
                        },
                        {
                            "name": "16:00",
                            "accept": 5860,
                            "notAccept": 90,
                            "avgCalls": 1.7,
                            "maxSimultaneousCall": 32,
                            "opActivity": 57,
                            "oplnSys": 8
                        },
                        {
                            "name": "17:00",
                            "accept": 5604,
                            "notAccept": 110,
                            "avgCalls": 1.7,
                            "maxSimultaneousCall": 25,
                            "opActivity": 58,
                            "oplnSys": 12
                        },
                        {
                            "name": "18:00",
                            "accept": 5297,
                            "notAccept": 227,
                            "avgCalls": 1.6,
                            "maxSimultaneousCall": 32,
                            "opActivity": 60,
                            "oplnSys": 9
                        },
                        {
                            "name": "19:00",
                            "accept": 4869,
                            "notAccept": 151,
                            "avgCalls": 1.6,
                            "maxSimultaneousCall": 25,
                            "opActivity": 56,
                            "oplnSys": 7
                        },
                        {
                            "name": "20:00",
                            "accept": 4285,
                            "notAccept": 242,
                            "avgCalls": 1.6,
                            "maxSimultaneousCall": 28,
                            "opActivity": 50,
                            "oplnSys": 5
                        },
                        {
                            "name": "21:00",
                            "accept": 3425,
                            "notAccept": 114,
                            "avgCalls": 1.7,
                            "maxSimultaneousCall": 21,
                            "opActivity": 48,
                            "oplnSys": 3
                        },
                        {
                            "name": "22:00",
                            "accept": 2078,
                            "notAccept": 34,
                            "avgCalls": 1.8,
                            "maxSimultaneousCall": 15,
                            "opActivity": 41,
                            "oplnSys": 3
                        },
                        {
                            "name": "23:00",
                            "accept": 993,
                            "notAccept": 78,
                            "avgCalls": 1.7,
                            "maxSimultaneousCall": 10,
                            "opActivity": 25,
                            "oplnSys": 2
                        }
                    ],
                    "providers": [
                        {
                            "name": "Белтел Минская",
                            "value": 910
                        },
                        {
                            "name": "Белтел Брестская",
                            "value": 343
                        },
                        {
                            "name": "Белтел Витебская",
                            "value": 54
                        },
                        {
                            "name": "НОД-2",
                            "value": 20
                        },
                        {
                            "name": "Белтел Гомельская",
                            "value": 86
                        },
                        {
                            "name": "Белтел Гродненская",
                            "value": 43
                        },
                        {
                            "name": "Life",
                            "value": 55
                        },
                        {
                            "name": "НОД-3",
                            "value": 6
                        },
                        {
                            "name": "Белтел Могилевская",
                            "value": 48
                        },
                        {
                            "name": "НОД-1",
                            "value": 40
                        },
                        {
                            "name": "НОД-6",
                            "value": 6
                        },
                        {
                            "name": "НОД-5",
                            "value": 9
                        },
                        {
                            "name": "НОД-4",
                            "value": 13
                        },
                        {
                            "name": "International",
                            "value": 2
                        }
                    ],
                    "providersTotal": [
                        {
                            "name": "Белтел Минская",
                            "value": 60492
                        },
                        {
                            "name": "Белтел Брестская",
                            "value": 22242
                        },
                        {
                            "name": "Белтел Витебская",
                            "value": 3772
                        },
                        {
                            "name": "НОД-2",
                            "value": 795
                        },
                        {
                            "name": "Белтел Гомельская",
                            "value": 5609
                        },
                        {
                            "name": "Белтел Гродненская",
                            "value": 2566
                        },
                        {
                            "name": "Life",
                            "value": 3714
                        },
                        {
                            "name": "НОД-3",
                            "value": 286
                        },
                        {
                            "name": "Белтел Могилевская",
                            "value": 4249
                        },
                        {
                            "name": "НОД-1",
                            "value": 2402
                        },
                        {
                            "name": "НОД-6",
                            "value": 337
                        },
                        {
                            "name": "НОД-5",
                            "value": 1108
                        },
                        {
                            "name": "НОД-4",
                            "value": 736
                        },
                        {
                            "name": "International",
                            "value": 70
                        }
                    ],
                    "totalDay": [
                        {
                            "name": "Принято",
                            "value": 1365
                        },
                        {
                            "name": "Пропущенно",
                            "value": 68
                        }
                    ],
                    "total": [
                        {
                            "name": "Принято",
                            "value": 92943
                        },
                        {
                            "name": "Пропущенно",
                            "value": 4169
                        }
                    ]
                }))
            }, 2000
        )
    },[])*/
    const renderComponent = (component: ReactComponentElement<any>, status: StatusType, error: string) => {
        if (status === "loaded") {
            return component
        } else if (status === "loading") {
            return <div className={s.centringLoader}>
                <Loader width={280} height={18}/>
            </div>
        } else if (status === "error") {
            return <div className={s.centringLoader}>
                <ErrorWindow errorMessage={error}/>
            </div>
        }
    }
    const domainYAxisCalls = findMaxAcceptAndNotAcceptSum(realTimeHistogramData)
    return (
        <div className={s.monitoringCCWrapper}>

            {/*{renderComponent(
                ,
                dataStatus,
                dataError
            )}*/}
            <div className={s.monitoringCCContainer}>
                <div className={s.monitoringCCHeader}>
                    <HomeIcon onClick={onHomeHandler}/>
                    <span>Мониторинг Контакт-центра</span>
                </div>
                <div className={s.callAndOperatorRating}>
                    <div className={s.callTodayPie}>
                        <span>Звонков сегодня</span>
                        <TestDoublePie
                            chartData={realTimeTodayOuterPieData}
                            chartData1={realTimeTodayInnerPieData}
                            height={"60%"}
                        />
                    </div>
                    <div className={s.tableContainer}>
                        <span>Рейтинг операторов</span>
                        <div className={s.table}>
                            <Table columns={columns} data={realTimeTableData} height={"36vh"}/>
                        </div>
                    </div>
                    <div className={s.callMonthPie}>
                        <span>Звонков за текущий месяц</span>
                        <TestDoublePie chartData={realTimeMonthOuterPieData}
                                       chartData1={realTimeMonthInnerPieData}
                                       height={"60%"}
                        />
                    </div>
                </div>
                <div className={s.histogramContainer}>
                    <Histogram data={realTimeHistogramData} callYAxisDomain={domainYAxisCalls}/>,
                </div>
            </div>
        </div>
    );
};

export default MonitoringCCRealTime;