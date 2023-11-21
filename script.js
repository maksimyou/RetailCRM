//'http://94.241.143.164:8000/api/v5/orders'
//http://94.241.143.164:8000/site/add_site_data/
//http://94.241.143.164:8000/site/add_site_items/

//api_key = FjqFa87rUgdvxFhrhyPQQiy41kl5AnXq

//site = app-riche-skin

//api_url = https://b7w2x7a.retailcrm.ru/api/v5/orders


fetch('https://b7w2x7a.retailcrm.ru/api/v5/orders?apiKey=FjqFa87rUgdvxFhrhyPQQiy41kl5AnXq')
    .then(response => response)
    .then(data => console.log(data))

//  fetch('https://b7w2x7a.retailcrm.ru/api/v5/orders?apiKey=FjqFa87rUgdvxFhrhyPQQiy41kl5AnXq',{
//    method: "POST", // *GET, POST, PUT, DELETE, etc.
//    mode: "cors", // no-cors, *cors, same-origin
//    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//    credentials: "same-origin", // include, *same-origin, omit
//    headers: {
//      "Content-Type": "application/json",
//      // 'Content-Type': 'application/x-www-form-urlencoded',
//    },
//    redirect: "follow", // manual, *follow, error
//    referrerPolicy: "no-referrer", // no-referrer, *client
//    body: JSON.stringify(data), // body data type must match "Content-Type" header
//  })




const order = {
    "slug": 1068854,
    "bonusesCreditTotal": 0,
    "bonusesChargeTotal": 0,
    "id": 1068854,
    "number": "1068854C",
    "orderType": "eshop-individual",
    "privilegeType": "none",
    "countryIso": "RU",
    "createdAt": "2023-11-21 09:37:21",
    "statusUpdatedAt": "2023-11-21 09:37:21",
    "summ": 0,
    "totalSumm": 0,
    "prepaySum": 0,
    "purchaseSumm": 0,
    "markDatetime": "2023-11-21 09:37:21",
    "firstName": "МАШКИНА ЕЛЕНА ПАВЛОВНА",
    "phone": "+7 (982) 810-71-41",
    "email": "novo.docs2@gmail.com",
    "call": false,
    "expired": false,
    "customer": {
        "type": "customer",
        "id": 823187,
        "isContact": false,
        "createdAt": "2023-11-21 09:34:25",
        "vip": false,
        "bad": false,
        "site": "app-riche-skin",
        "contragent": {
            "contragentType": "enterpreneur",
            "legalName": "МАШКИНА ЕЛЕНА ПАВЛОВНА",
            "legalAddress": "Московская область. г. Химки, ул. Молодежная 7к1, кв. 184",
            "INN": "434579671267",
            "OGRNIP": "322508100339653",
            "BIK": "044525225",
            "bank": "ПАО Сбербанк",
            "corrAccount": "30101810400000000225",
            "bankAccount": "40802810840000036050"
        },
        "tags": [

        ],
        "customFields": {
            "ssylka": "www.instagram.com/",
            "nds_plat": false,
            "uchastvovat_v_rassylke": true,
            "kolichestvo_vypolnennyh_zakazov": 0
        },
        "marginSumm": 0,
        "totalSumm": 0,
        "averageSumm": 0,
        "ordersCount": 2,
        "costSumm": 0,
        "personalDiscount": 0,
        "segments": [

        ],
        "firstName": "МАШКИНА ЕЛЕНА ПАВЛОВНА",
        "email": "novo.docs2@gmail.com",
        "phones": [
            {
                "number": "+7 (982) 810-71-41"
            }
        ],
        "mgCustomers": [

        ]
    },
    "contact": {
        "type": "customer",
        "id": 823187,
        "isContact": false,
        "createdAt": "2023-11-21 09:34:25",
        "vip": false,
        "bad": false,
        "site": "app-riche-skin",
        "contragent": {
            "contragentType": "enterpreneur",
            "legalName": "МАШКИНА ЕЛЕНА ПАВЛОВНА",
            "legalAddress": "Московская область. г. Химки, ул. Молодежная 7к1, кв. 184",
            "INN": "434579671267",
            "OGRNIP": "322508100339653",
            "BIK": "044525225",
            "bank": "ПАО Сбербанк",
            "corrAccount": "30101810400000000225",
            "bankAccount": "40802810840000036050"
        },
        "tags": [

        ],
        "customFields": {
            "ssylka": "www.instagram.com/",
            "nds_plat": false,
            "uchastvovat_v_rassylke": true,
            "kolichestvo_vypolnennyh_zakazov": 0
        },
        "marginSumm": 0,
        "totalSumm": 0,
        "averageSumm": 0,
        "ordersCount": 2,
        "costSumm": 0,
        "personalDiscount": 0,
        "segments": [

        ],
        "firstName": "МАШКИНА ЕЛЕНА ПАВЛОВНА",
        "email": "novo.docs2@gmail.com",
        "phones": [
            {
                "number": "+7 (982) 810-71-41"
            }
        ],
        "mgCustomers": [

        ]
    },
    "contragent": {
        "contragentType": "enterpreneur",
        "legalName": "МАШКИНА ЕЛЕНА ПАВЛОВНА",
        "legalAddress": "Московская область. г. Химки, ул. Молодежная 7к1, кв. 184",
        "INN": "434579671267",
        "OGRNIP": "322508100339653",
        "BIK": "044525225",
        "bank": "ПАО Сбербанк",
        "corrAccount": "30101810400000000225",
        "bankAccount": "40802810840000036050"
    },
    "delivery": {
        "cost": 0,
        "netCost": 0,
        "address": {
            "countryIso": "RU",
            "metro": ""
        }
    },
    "site": "app-riche-skin",
    "status": "new",
    "items": [

    ],
    "payments": {

    },
    "fromApi": false,
    "weight": 250,
    "length": 450,
    "width": 200,
    "height": 150,
    "shipmentStore": "5post",
    "shipped": false,
    "customFields": {
        "inst": "https://t.me/lenin_dom",
        "vidan": "Отделом УФМС России Кировской области в ленинском районе г. Кирова",
        "ym_uid": "0",
        "blocked": false,
        "economy": 0,
        "is_post": false,
        "coverage": 0,
        "passport": "3317 481731",
        "pvz_ozon": "false",
        "is_zagran": false,
        "complector": "empty",
        "checked_okk": false,
        "no_comments": true,
        "format_reklamy": "post-v-telegram-kanale",
        "sms_trek_nomer": false,
        "foreign_address": false,
        "izmenit_magazin": false,
        "peredavat_v_ord": true,
        "website_payment": false,
        "okk_cabinet_link": "http://riche.me/okk-cabinet/",
        "re_collaboration": false,
        "checked_okk_check": false,
        "post_count_modeli": 0,
        "udalit_menedzhera": false,
        "perezvon_ustanovka": 0,
        "product_evaluation": 0,
        "dzhurnal_po_clientu": "https://b7w2x7a.retailcrm.ru/orders/?filter[customer]=+7 (982) 810-71-41&filter[extendedStatus]=1,121,19,59,5,129,7,67,10,11,2",
        "storis_count_modeli": 0,
        "registration_address": "Московская область. г. Химки, ул. Молодежная 7к1, кв. 184",
        "srok_okazaniia_uslug": "2023-12-19",
        "ya_metrika_client_id": "0",
        "cost_of_accommodation": 27500,
        "uchastvovat_v_rassylke": true,
        "kolichestvo_podpischikov": 0,
        "gruzopoluchatel_i_ego_address": "МАШКИНА ЕЛЕНА ПАВЛОВНА",
        "sending_sms_not_delivered_on_time": true
    },
    "currency": "RUB"
}