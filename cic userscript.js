// ==UserScript==
// @name         New Userscript CIC
// @version      0.1
// @description  try to take over the world!
// @author       KK112
// @match        https://cwrg.cic.hk/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.4/axios.min.js
// @require      https://unpkg.com/react@18/umd/react.development.js
// @require      https://unpkg.com/react-dom@18/umd/react-dom.development.js


// @icon         https://dev.moomoo.io/img/icons/crown.png
// @grant        none
// ==/UserScript==

(function() {

    // ---------------------- Button Creation ---------------------------------------------//
    let logInButton = document.createElement("button");
    logInButton.textContent = "Click me";
    logInButton.classList.add("btn", "btn-info");
    logInButton.style.position = 'fixed';
    logInButton.style.zIndex = '9999';
    logInButton.style.top = '10px';
    logInButton.style.left = '500px';

    let spinner = document.createElement("span");
    spinner.classList.add("spinner");
    spinner.style.display = "none";
    logInButton.appendChild(spinner);

    let attendanceButton = document.createElement("button");
    attendanceButton.textContent = "Send Attendance";
    attendanceButton.classList.add("btn", "btn-info");
    attendanceButton.style.position = "fixed";
    attendanceButton.style.zIndex = "9999";
    attendanceButton.style.top = "10px";
    attendanceButton.style.left = "600px";

    document.body.appendChild(logInButton);
    document.body.appendChild(attendanceButton);
//------------------ End of Button Creation ---------------------------------------------//

    // ---------------------- Event Listeners ---------------------------------------------//
    logInButton.addEventListener("click", function () {
        postAttendance();
    });
    // --------------------- End of Event Listeners ---------------------------------------------//


    // ---------------------- Attendance Data Object ---------------------------------------------//
    const attendanceData = [{LabourId: 'CWR08006004', CardId: '3693586', date: '09'}, {LabourId: 'CWR07029909', CardId: '3173260', date: '09'}, {LabourId: 'CWR08015975', CardId: '3696454', date: '09'}, {LabourId: 'CWR07060405', CardId: '3621091', date: '09'}, {LabourId: 'CWR07065071', CardId: '3770286', date: '09'}, {LabourId: 'CWR17045093', CardId: '3814904', date: '09'}, {LabourId: 'CWR06051610', CardId: '3428618', date: '09'}, {LabourId: 'CWR21053203', CardId: '0', date: '09'}, {LabourId: 'CWR06012497', CardId: '3143249', date: '09'}, {LabourId: 'CWR19000198', CardId: '0', date: '09'}, {LabourId: 'CWR18008021', CardId: '3852081', date: '09'}, {LabourId: 'CWR22004988', CardId: '3669798', date: '09'}, {LabourId: 'CWR15032748', CardId: '0', date: '09'}, {LabourId: 'CWR22045296', CardId: '3831437', date: '09'}, {LabourId: 'CWR11003011', CardId: '3694627', date: '09'}, {LabourId: 'CWR19005881', CardId: '3183785', date: '09'}, {LabourId: 'CWR19007965', CardId: '3202468', date: '09'}, {LabourId: 'CWR10016984', CardId: '3584584', date: '09'}, {LabourId: 'CWR17025426', CardId: '3699910', date: '09'}, {LabourId: 'CWR06056875', CardId: '3457559', date: '09'}, {LabourId: 'CWR22051105', CardId: '0', date: '09'}, {LabourId: 'CWR18018030', CardId: '0', date: '09'}, {LabourId: 'CWR15044437', CardId: '0', date: '09'}, {LabourId: 'CWR17049531', CardId: '3564372', date: '09'}, {LabourId: 'CWR12017947', CardId: '3668654', date: '09'}, {LabourId: 'CWR11011796', CardId: '3828592', date: '09'}, {LabourId: 'CWR22015318', CardId: '3772984', date: '09'}, {LabourId: 'CWR15017081', CardId: '3334138', date: '09'}, {LabourId: 'CWR07042150', CardId: '3700506', date: '09'}, {LabourId: 'CWR22038630', CardId: '3842482', date: '09'}, {LabourId: 'CWR16023505', CardId: '3173524', date: '09'}, {LabourId: 'CWR17010050', CardId: '3842471', date: '09'}, {LabourId: 'CWR06099038', CardId: '3350373', date: '09'}, {LabourId: 'CWR13022151', CardId: '3348004', date: '09'}, {LabourId: 'CWR22039279', CardId: '3824844', date: '09'}, {LabourId: 'CWR08006004', CardId: '3693586', date: '10'}, {LabourId: 'CWR07029909', CardId: '3173260', date: '10'}, {LabourId: 'CWR08015975', CardId: '3696454', date: '10'}, {LabourId: 'CWR07060405', CardId: '3621091', date: '10'}, {LabourId: 'CWR07065071', CardId: '3770286', date: '10'}, {LabourId: 'CWR17045093', CardId: '3814904', date: '10'}, {LabourId: 'CWR06051610', CardId: '3428618', date: '10'}, {LabourId: 'CWR06012497', CardId: '3143249', date: '10'}, {LabourId: 'CWR19000198', CardId: '0', date: '10'}, {LabourId: 'CWR18008021', CardId: '3852081', date: '10'}, {LabourId: 'CWR22004988', CardId: '3669798', date: '10'}, {LabourId: 'CWR22045296', CardId: '3831437', date: '10'}, {LabourId: 'CWR11003011', CardId: '3694627', date: '10'}, {LabourId: 'CWR19005881', CardId: '3183785', date: '10'}, {LabourId: 'CWR19007965', CardId: '3202468', date: '10'}, {LabourId: 'CWR10016984', CardId: '3584584', date: '10'}, {LabourId: 'CWR17025426', CardId: '3699910', date: '10'}, {LabourId: 'CWR06056875', CardId: '3457559', date: '10'}, {LabourId: 'CWR19000159', CardId: '3170853', date: '10'}, {LabourId: 'CWR22051105', CardId: '0', date: '10'}, {LabourId: 'CWR18018030', CardId: '0', date: '10'}, {LabourId: 'CWR15044437', CardId: '0', date: '10'}, {LabourId: 'CWR08020636', CardId: '3325735', date: '10'}, {LabourId: 'CWR17049531', CardId: '3564372', date: '10'}, {LabourId: 'CWR12017947', CardId: '3668654', date: '10'}, {LabourId: 'CWR11011796', CardId: '3828592', date: '10'}, {LabourId: 'CWR15017081', CardId: '3334138', date: '10'}, {LabourId: 'CWR07042150', CardId: '3700506', date: '10'}, {LabourId: 'CWR22038630', CardId: '3842482', date: '10'}, {LabourId: 'CWR16023505', CardId: '3173524', date: '10'}, {LabourId: 'CWR17010050', CardId: '3842471', date: '10'}, {LabourId: 'CWR06099038', CardId: '3350373', date: '10'}, {LabourId: 'CWR13022151', CardId: '3348004', date: '10'}, {LabourId: 'CWR22039279', CardId: '3824844', date: '10'}, {LabourId: 'CWR08006004', CardId: '3693586', date: '11'}, {LabourId: 'CWR07029909', CardId: '3173260', date: '11'}, {LabourId: 'CWR08015975', CardId: '3696454', date: '11'}, {LabourId: 'CWR07060405', CardId: '3621091', date: '11'}, {LabourId: 'CWR07065071', CardId: '3770286', date: '11'}, {LabourId: 'CWR17045093', CardId: '3814904', date: '11'}, {LabourId: 'CWR06051610', CardId: '3428618', date: '11'}, {LabourId: 'CWR21053203', CardId: '0', date: '11'}, {LabourId: 'CWR06012497', CardId: '3143249', date: '11'}, {LabourId: 'CWR19000198', CardId: '0', date: '11'}, {LabourId: 'CWR18008021', CardId: '3852081', date: '11'}, {LabourId: 'CWR22004988', CardId: '3669798', date: '11'}, {LabourId: 'CWR22045296', CardId: '3831437', date: '11'}, {LabourId: 'CWR11003011', CardId: '3694627', date: '11'}, {LabourId: 'CWR19005881', CardId: '3183785', date: '11'}, {LabourId: 'CWR06056875', CardId: '3457559', date: '11'}, {LabourId: 'CWR19000159', CardId: '3170853', date: '11'}, {LabourId: 'CWR22051105', CardId: '0', date: '11'}, {LabourId: 'CWR18018030', CardId: '0', date: '11'}, {LabourId: 'CWR15044437', CardId: '0', date: '11'}, {LabourId: 'CWR08020636', CardId: '3325735', date: '11'}, {LabourId: 'CWR06126305', CardId: '3473697', date: '11'}, {LabourId: 'CWR17049531', CardId: '3564372', date: '11'}, {LabourId: 'CWR12017947', CardId: '3668654', date: '11'}, {LabourId: 'CWR11011796', CardId: '3828592', date: '11'}, {LabourId: 'CWR15017081', CardId: '3334138', date: '11'}, {LabourId: 'CWR07042150', CardId: '3700506', date: '11'}, {LabourId: 'CWR17025426', CardId: '3699910', date: '11'}, {LabourId: 'CWR22038630', CardId: '3842482', date: '11'}, {LabourId: 'CWR16023505', CardId: '3173524', date: '11'}, {LabourId: 'CWR17010050', CardId: '3842471', date: '11'}, {LabourId: 'CWR06099038', CardId: '3350373', date: '11'}, {LabourId: 'CWR13022151', CardId: '3348004', date: '11'}, {LabourId: 'CWR22039279', CardId: '3824844', date: '11'}
    ];



    // ---------------------- End of Attendance Data Object ---------------------------------------------//

    const postAttendance = async () => {

                const headers = {
                    'Authorization': `Bearer ${await getToken()}`
                };

                for (let i = 0; i < attendanceData.length; i++) {
                    const {LabourId, CardId, date} = attendanceData[i];
                    await attendanceImport(LabourId, CardId, date, headers);
                }
                console.log("Attendance data imported");
    };

    const getToken = async () => {
        try {
            const response = await axios.post('https://cwrg.cic.hk/api/web/SecurityToken', {
                Login: 'adm00312',
                Password: 'pacific1122'
            });
            // const token = JSON.stringify(response.data.Token);
            const token = response.data.Token;
            console.log(token);
            return token;
        } catch (error) {
            console.error(error);
        }
    };

    const attendanceImport = async (labourId, cardId, date, headers) => {
        await axios.post(`https://cwrg.cic.hk/api/web/contracts/7566/registrations/${labourId}/attendances`, {
            RowId: 0,
            InOutType: "0",
            TransactionTime: `2023-03-${date}T08:00:00.000Z`,
            PractisingTrade: "GREEN",
            CardNumber: cardId,
            TimeStamp: ""
        },{headers})
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        await axios.post(`https://cwrg.cic.hk/api/web/contracts/7566/registrations/${labourId}/attendances`, {
            RowId: 0,
            InOutType: "1",
            TransactionTime: `2023-03-${date}T18:00:00.000Z`,
            PractisingTrade: "GREEN",
            CardNumber: cardId,
            TimeStamp: ""
        },{headers})
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };



})();