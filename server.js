const express = require('express');
const bodyParser = require('body-parser');
const WebSocket = require('ws');
const port = process.env.port || 3000;

const app = express();

app.use(bodyParser.json());

//TOOk API example of ICICI direct

let currentHoldings = [
    {symbol: 'AAPL', quantity: 10},
    {symbol: 'GOOGL', quantity: 5}
]

const wss = new WebSocket.Server({port: 8080});

wss.on('connection', function connection(ws){
    ws.on('message', (message) => {
        console.log('Received Message', message);
    })
})

app.get('/holdings', (req,res) =>{
    res.json(currentHoldings)
} )

app.post('/customer/customerdetails', (req,res) =>{
    const {appKey, timeStamp, jsonPostData, checkSum} = req.body;

    let success = true;
    if(success){
        return res.status(200).json({
            "Status": 200,
            "Error": null,
            "Success": {
                "exg_trade_date": {
                    "NSE": "20-Jun-2019",
                    "BSE": "20-Jun-2019",
                    "FNO": "03-Jul-2019",
                    "NDX": "02-Jul-2019"
                },
                "exg_status": {
                    "NSE": "O",
                    "BSE": "O",
                    "FNO": "O",
                    "NDX": "O"
                },
                "segments_allowed": {
                    "Trading": "Y",
                    "Equity": "Y",
                    "Derivatives": "Y",
                    "Currency": "Y"
                },
                "Idirect_Userid": "test",
                "SessionToken": "1173201",
                "idirect_user_name": "ert ert",
                "idirect_lastlogin_time": "03-Jul-2019 12:47:37"
            }
        })
    }else{
        return res.status(500).json({success: false, error: "error"})
    }
} )



app.post('/equity/orderbook', (req, res) => {
    const {appKey, timeStamp, jsonPostData, checkSum} = req.body;

    let success = true;
    if(success){
        return res.status(200).json({
            "Status": 200,
            "Error": null,
            "Success": [
                {
                    "order_xchng_cd": "NSE",
                    "order_stock_cd": "TECMAH",
                    "order_validity": "",
                    "order_rate": "1013.00",
                    "order_product": "C",
                    "order_status": "Q",
                    "order_plctm": "30-Dec-2020 10:25",
                    "order_plc_dt": "30-Dec-2020",
                    "order_refrence": "20201230N100000002",
                    "order_quantity": "19",
                    "order_open_qty": "19",
                    "order_executed_qty": "0",
                    "order_cancelled_qty": "0",
                    "order_expired_qty": "0",
                    "order_disclosed_qty": "0",
                    "order_stp_loss_price": "0.00",
                    "order_exchsegsettlement": null,
                    "MsgTyp": "*",
                    "Remark": "*",
                    "Order_WeightedAveragePrice": "0",
                    "ordr_flw": "B"
                },
                {
                    "order_xchng_cd": "NSE",
                    "order_stock_cd": "HDFC",
                    "order_validity": "",
                    "order_rate": "2449.10",
                    "order_product": "C",
                    "order_status": "Q",
                    "order_plctm": "30-Dec-2020 10:25",
                    "order_plc_dt": "30-Dec-2020",
                    "order_refrence": "20201230N100000003",
                    "order_quantity": "3",
                    "order_open_qty": "3",
                    "order_executed_qty": "0",
                    "order_cancelled_qty": "0",
                    "order_expired_qty": "0",
                    "order_disclosed_qty": "0",
                    "order_stp_loss_price": "0.00",
                    "order_exchsegsettlement": null,
                    "MsgTyp": "*",
                    "Remark": "*",
                    "Order_WeightedAveragePrice": "0",
                    "ordr_flw": "B"
                },
                {
                    "order_xchng_cd": "NSE",
                    "order_stock_cd": "RELIND",
                    "order_validity": "",
                    "order_rate": "2238.75",
                    "order_product": "C",
                    "order_status": "Q",
                    "order_plctm": "30-Dec-2020 10:25",
                    "order_plc_dt": "30-Dec-2020",
                    "order_refrence": "20201230N100000001",
                    "order_quantity": "20",
                    "order_open_qty": "20",
                    "order_executed_qty": "0",
                    "order_cancelled_qty": "0",
                    "order_expired_qty": "0",
                    "order_disclosed_qty": "0",
                    "order_stp_loss_price": "0.00",
                    "order_exchsegsettlement": null,
                    "MsgTyp": "*",
                    "Remark": "*",
                    "Order_WeightedAveragePrice": "0",
                    "ordr_flw": "B"
                },
                {
                    "order_xchng_cd": "NSE",
                    "order_stock_cd": "NESIND",
                    "order_validity": "",
                    "order_rate": "19593.00",
                    "order_product": "C",
                    "order_status": "Q",
                    "order_plctm": "24-Dec-2020 14:38",
                    "order_plc_dt": "24-Dec-2020",
                    "order_refrence": "20201224N100000040",
                    "order_quantity": "1",
                    "order_open_qty": "1",
                    "order_executed_qty": "0",
                    "order_cancelled_qty": "0",
                    "order_expired_qty": "0",
                    "order_disclosed_qty": "0",
                    "order_stp_loss_price": "0.00",
                    "order_exchsegsettlement": null,
                    "MsgTyp": "*",
                    "Remark": "*",
                    "Order_WeightedAveragePrice": "0",
                    "ordr_flw": "B"
                },
                {
                    "order_xchng_cd": "NSE",
                    "order_stock_cd": "HINLEV",
                    "order_validity": "",
                    "order_rate": "1979.95",
                    "order_product": "C",
                    "order_status": "Q",
                    "order_plctm": "24-Dec-2020 14:38",
                    "order_plc_dt": "24-Dec-2020",
                    "order_refrence": "20201224N100000039",
                    "order_quantity": "2",
                    "order_open_qty": "2",
                    "order_executed_qty": "0",
                    "order_cancelled_qty": "0",
                    "order_expired_qty": "0",
                    "order_disclosed_qty": "0",
                    "order_stp_loss_price": "0.00",
                    "order_exchsegsettlement": null,
                    "MsgTyp": "*",
                    "Remark": "*",
                    "Order_WeightedAveragePrice": "0",
                    "ordr_flw": "B"
                },
                {
                    "order_xchng_cd": "NSE",
                    "order_stock_cd": "BRIIND",
                    "order_validity": "",
                    "order_rate": "3801.10",
                    "order_product": "C",
                    "order_status": "Q",
                    "order_plctm": "24-Dec-2020 14:38",
                    "order_plc_dt": "24-Dec-2020",
                    "order_refrence": "20201224N100000038",
                    "order_quantity": "1",
                    "order_open_qty": "1",
                    "order_executed_qty": "0",
                    "order_cancelled_qty": "0",
                    "order_expired_qty": "0",
                    "order_disclosed_qty": "0",
                    "order_stp_loss_price": "0.00",
                    "order_exchsegsettlement": null,
                    "MsgTyp": "*",
                    "Remark": "*",
                    "Order_WeightedAveragePrice": "0",
                    "ordr_flw": "B"
                },
                {
                    "order_xchng_cd": "NSE",
                    "order_stock_cd": "TCS",
                    "order_validity": "",
                    "order_rate": "2560.00",
                    "order_product": "C",
                    "order_status": "Q",
                    "order_plctm": "24-Dec-2020 14:38",
                    "order_plc_dt": "24-Dec-2020",
                    "order_refrence": "20201224N100000025",
                    "order_quantity": "1",
                    "order_open_qty": "1",
                    "order_executed_qty": "0",
                    "order_cancelled_qty": "0",
                    "order_expired_qty": "0",
                    "order_disclosed_qty": "0",
                    "order_stp_loss_price": "0.00",
                    "order_exchsegsettlement": null,
                    "MsgTyp": "*",
                    "Remark": "*",
                    "Order_WeightedAveragePrice": "0",
                    "ordr_flw": "B"
                },
                {
                    "order_xchng_cd": "NSE",
                    "order_stock_cd": "ICIBAN",
                    "order_validity": "",
                    "order_rate": "497.00",
                    "order_product": "C",
                    "order_status": "X",
                    "order_plctm": "16-Dec-2020 16:25",
                    "order_plc_dt": "16-Dec-2020",
                    "order_refrence": "20201216N100000040",
                    "order_quantity": "2",
                    "order_open_qty": "0",
                    "order_executed_qty": "0",
                    "order_cancelled_qty": "0",
                    "order_expired_qty": "2",
                    "order_disclosed_qty": "0",
                    "order_stp_loss_price": "0.00",
                    "order_exchsegsettlement": null,
                    "MsgTyp": "*",
                    "Remark": "*",
                    "Order_WeightedAveragePrice": "0",
                    "ordr_flw": "B"
                }
            ]
        })
    }else{
        return res.status(500).json({success: false, error: "error"})
    }
})

app.post('/equity/orderbookmodifyorder', (req, res) => {
    const {jsonPostData, checkSum} = req.body;

    let success = true;
    if(success){
        return res.status(200).json({
            "Status": 200,
            "Error": null,
            "Success": {
               "message": "Your Order Modified successfully.",
               "order_refrence": "20201216N100000040"
            }
         })
    }else{
        return res.status(500).json({success: false, error: "error"})
    }
})


app.post('/equity/cancelorder', (req, res) => {
    const {appKey, timeStamp, jsonPostData, checkSum} = req.body;

    let success = true;
    if(success){
        return res.status(200).json({
            "Status": 200,
            "Error": null,
            "Success": {
                "message": "Your Order Cancelled successfully.",
                "order_refrence": "20201216N100000040"
            }
        })
    }else{
        return res.status(500).json({success: false, error: "error"})
    }
})

app.post('/equity/portfolio', (req, res) => {
    const {appKey, timeStamp, jsonPostData, checkSum} = req.body;

    let success = true;
    if(success){
        return res.status(200).json({
            "Status": 200,
            "Error": null,
            "Success": [
                {
                    "portfolio_stock_cd": "KINAIR",
                    "SectorName": "Alcoholic Beverages",
                    "Exchange": "BSE",
                    "Quantity": 1,
                    "AvgrageCastPrice": 2.83,
                    "BookedProfitLoss": -7066.63,
                    "CurrentMarketPrice": 1.36,
                    "ChangePersentage": 36,
                    "AnswerFlag": "N"
                },
                {
                    "portfolio_stock_cd": "BAAUTO",
                    "SectorName": "Auto/Auto ancillary",
                    "Exchange": "BSE",
                    "Quantity": 1,
                    "AvgrageCastPrice": 2854.3,
                    "BookedProfitLoss": 0,
                    "CurrentMarketPrice": 3658.65,
                    "ChangePersentage": -0.15963978714695,
                    "AnswerFlag": "N"
                },
                {
                    "portfolio_stock_cd": "SPEIND",
                    "SectorName": "Textile",
                    "Exchange": "BSE",
                    "Quantity": 669,
                    "AvgrageCastPrice": 3.23,
                    "BookedProfitLoss": -4659.75,
                    "CurrentMarketPrice": 0.75,
                    "ChangePersentage": 0,
                    "AnswerFlag": "N"
                }
            ]
        }
        )
    }else{
        return res.status(500).json({success: false, error: "error"})
    }
})

app.post('/equity/placement', (req, res) => {
    const {jsonPostData, checkSum} = req.body;

    let success = true;
    if(success){
        return res.status(200).json({
            "Status": 200,
            "Error": null,
            "Success": {
                "message": "Equity CASH Order placed successfully through RI reference no 20210330N100000054",
                "MsgTyp": null,
                "Remark": null
            }
        })  
    }else{
        return res.status(500).json({success: false, error: "error"})
    }
})

app.post('/postback', (req, res) => {
    console.log('Received postback:', req.body);
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})

