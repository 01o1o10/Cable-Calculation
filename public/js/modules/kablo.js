"use strict";
/////    KABLO HESABI DEĞİŞKENLER
var kablo = {
NYYCable3: [
    [1.5, "4x1.5", 1.5, 43, undefined, undefined, 12.1, 0.366, undefined, 26, 18.5, undefined, undefined, undefined, undefined],
    [2.5, "4x2.5", 2.5, 72, undefined, undefined, 7.41, 0.34, undefined, 34, 25, undefined, undefined, undefined, undefined],
    [4, "4x4", 4, 115, undefined, undefined, 4.61, 0.339, undefined, 44, 34,  , undefined, undefined, undefined],
    [6, "4x6", 6, 173, undefined, undefined, 3.08, 0.321, undefined, 56, 43,  , undefined, undefined, undefined],
    [10, "4x10", 10, 288, undefined, undefined, 1.83, 0.301, undefined, 75, 60,  , undefined, undefined, undefined],
    [16, "4x16", 16, 461, undefined, undefined, 1.15, 0.285, undefined, 98, 80, undefined, undefined, undefined, undefined],
    [25, "3x25 / 16", 25, 921, 40.1, 3050, 0.727, 0.274, 0.255, 128, 106, undefined, undefined, undefined, undefined],
    [35, "3x35 / 16", 35, 1209, 42.8, 3565, 0.524, 0.261, 0.285, 157, 131, undefined, undefined, undefined, undefined],
    [50, "3x50 / 25", 50, 1671, 45, 4060, 0.387, 0.263, 0.312, 185, 159, undefined, undefined, undefined, undefined],
    [70, "3x70 / 35", 70, 2247, 49.5, 5110, 0.268, 0.254, 0.358, 228, 202, undefined, undefined, undefined, undefined],
    [95, "3x95 / 50", 95, 2994, 53.5, 6215, 0.193, 0.253, 0.404, 275, 244, undefined, undefined, undefined, undefined],
    [120, "3x120 / 70", 120, 3714, 56.6, 7205, 0.153, 0.25, 0.441, 313, 282, undefined, undefined, undefined, undefined],
    [150, "3x150 / 70", 150, 4638, 60.4, 8435, 0.124, 0.247, 0.479, 353, 324, undefined, undefined, undefined, undefined],
    [185, "3x185 / 95", 185, 5646, 64.5, 9890, 0.0991, 0.248, 0.525, 399, 371, undefined, undefined, undefined, undefined],
    [240, "3x240 / 120", 240, 7272, 71.3, 12260, 0.0754, 0.245, 0.574, 464, 436, undefined, undefined, undefined, undefined],
    ["1x120", "3(1x120) / 1x70", "1x120",  , undefined, undefined, 0.153, 0.294, 0.441, 326, 314, undefined, undefined, undefined, undefined],
    ["1x150", "3(1x150) / 1x70", "1x150", undefined, undefined, undefined, 0.124, 0.29, 0.479, 366, 361, undefined, undefined, undefined, undefined],
    ["1x185", "3(1x185) / 1x95", "1x185", undefined, undefined, undefined, 0.0991, 0.287, 0.525, 414, 412, undefined, undefined, undefined, undefined],
    ["1x240", "3(1x240) / 1x120", "1x240", undefined, undefined, undefined, 0.0754, 0.281, 0.574, 481, 484, undefined, undefined, undefined, undefined],
    ["1x300", "3(1x300) / 1x150", "1x300", undefined, undefined, undefined, 0.0601, 0.3, undefined, 537, 545, undefined, undefined, undefined, undefined],
    ["1x400", "3(1x400) / 1x185", "1x400", undefined, undefined, undefined, 0.047, 0.298, undefined, 612, 636, undefined, undefined, undefined, undefined],
    ["1x500", "3(1x500) / 1x240", "1x500", undefined, undefined, undefined, 0.0366, 0.291, undefined, 689, 730, undefined, undefined, undefined, undefined]
],
NYYCable1: [
    [1.5, "3x1.5", 1.5, 43, 10.5, 175, 12.1, 0.343, undefined, 26, 18.5],
    [2.5, "3x2.5", 2.5, 72, 11.3, 220, 7.41, 0.317, undefined, 34, 25],
    [4, "3x4", 4, 115, 13.2, 315, 4.61, 0.316, undefined, 44, 34],
    [6, "3x6", 6, 173, 14.3, 395, 3.08, 0.298, undefined, 56, 43],
    [10, "3x10", 10, 288, 16, 545, 1.83, 0.278, undefined, 75, 60],
    [16, "3x16", 16, 461, 18, 765, 1.15, 0.262, undefined, 98, 80],
    [25, "3x25ş", 25, 720, 22.1, 1175, 0.727, 0.257, undefined, 128, 106],
    [35, "3x35ş", 35, 1008, 24.4, 1530, 0.524, 0.248, undefined, 157, 131],
    [50, "3x50ş", 50, 1440, 27.7, 2010, 0.387, 0.247, undefined, 185, 159],
    [70, "3x70ş", 70, 2016, 31.4, 2770, 0.268, 0.238, undefined, 228, 202],
    [95, "3x95ş", 95, 2736, 36.3, 3765, 0.193, 0.238, undefined, 275, 244],
    [120, "3x120ş", 120, 3456, 39.5, 4625, 0.153, 0.233, undefined, 313, 282],
    [150, "3x150ş", 150, 4320, 43.6, 5665, 0.124, 0.233, undefined, 353, 324],
    [185, "3x185ş", 185, 5328, 48.9, 7115, 0.0991, 0.233, undefined, 399, 371],
    [240, "3x240ş", 240, 6912, 55.8, 9280, 0.0754, 0.231, undefined, 464, 436],   
],
N2XH0_0_6_1kV: [
    [1.5, "4x1.5", 1.5, 58, 11, 172, 12.1, 0.352, undefined, undefined, 24, undefined, undefined, undefined],
    [2.5, "4x2.5", 2.5, 96, 12, 220, 7.41, 0.328, undefined, undefined, 32, undefined, undefined, undefined],
    [4, "4x4", 4, 154, 13, 296, 4.61, 0.308, undefined, undefined, 42,  undefined, undefined, undefined],
    [6, "4x6", 6, 230, 14.5, 388, 3.08, 0.294, undefined, undefined, 53,  undefined, undefined, undefined],
    [10, "4x10", 10, 384, 16.5, 575, 1.83, 0.278, undefined, undefined, 72,  undefined, undefined, undefined],
    [16, "4x16", 16, 614, 18.5, 830, 1.15, 0.266, undefined, undefined, 96, undefined, undefined, undefined],
    [25, "3x25 / 16", 25, 874, 21.5, 1160, 0.727, 0.258, undefined, undefined, 128, undefined, undefined, undefined],
    [35, "3x35 / 16", 35, 1162, 23.5, 1490, 0.524, 0.247, undefined, undefined, 158, undefined, undefined, undefined],
    [50, "3x50 / 25", 50, 1680, 27, 2010, 0.387, 0.248, undefined, undefined, 186, undefined, undefined, undefined],
    [70, "3x70 / 35", 70, 2352, 31, 2801, 0.268, 0.243, undefined, undefined, 237, undefined, undefined, undefined],
    [95, "3x95 / 50", 95, 3216, 35, 3792, 0.193, 0.239, undefined, undefined, 290, undefined, undefined, undefined],
    [120, "3x120 / 70", 120, 4128, 40, 4820, 0.153, 0.239, undefined, undefined, 336, undefined, undefined, undefined],
    [150, "3x150 / 70", 150, 4992, 43, 5786, 0.124, 0.237, undefined, undefined, 387, undefined, undefined, undefined],
    [185, "3x185 / 95", 185, 6240, 48, 7300, 0.0991, 0.239, undefined, undefined, 448, undefined, undefined, undefined],
    [240, "3x240 / 120", 240, 8064, 55, 9320, 0.0754, 0.236, undefined, undefined, 530, undefined, undefined, undefined],
    ["1x120", "3(1x120) / 1x70", "1x120", 1152, "3x19 / 15", "3x1210 / 718", 0.153, 0.279, undefined, undefined, 466, undefined, undefined, undefined],
    ["1x150", "3(1x150) / 1x70", "1x150", 1440, "3x21 / 15", "3x1450 / 718", 0.124, 0.279, undefined, undefined, 536, undefined, undefined, undefined],
    ["1x185", "3(1x185) / 1x95", "1x185", 1776, "3x23 / 17", "3x1888 / 970", 0.0991, 0.278, undefined, undefined, 621, undefined, undefined, undefined],
    ["1x240", "3(1x240) / 1x120", "1x240", 2304, "3x26 / 19", "3x2412 / 1210", 0.0754, 0.273, undefined, undefined, 743, undefined, undefined, undefined]
],
xlpe_cable_0_6_1kV: [
    [1.5, "4x1,5", 1.5, 43, 10.6, 175, 12.1, undefined, undefined, 30, 24, undefined, undefined, undefined],
    [2.5, "4x2,5", 2.5, 72, 11.4, 220, 7.41, undefined, undefined, 40, 32, undefined, undefined, undefined],
    [4, "4x4", 4, 115, 12.4, 280, 4.61, undefined, undefined, 52, 42, undefined, undefined, undefined],
    [6, "4x6", 6, 173, 13.5, 360, 3.08, undefined, undefined, 64, 53, undefined, undefined, undefined],
    [10, "4x10", 10, 288, 15.2, 505, 1.83, undefined, undefined, 86, 73, undefined, undefined, undefined],
    [16, "3x16 / 10", 16, 557, 18.1, 810, 1.15, undefined, undefined, 111, 96, undefined, undefined, undefined],
    [25, "3x25 / 16", 25, 874, 22, 1250, 0.727, 0.362, undefined, 143, 130, undefined, undefined, undefined],
    [35, "3x35 / 16", 35, 1162, 24, 1580, 0.524, 0.343, undefined, 173, 160, undefined, undefined, undefined],
    [50, "3x50 / 25", 50, 1680, 27.7, 2165, 0.387, 0.328, undefined, 205, 195, undefined, undefined, undefined],
    [70, "3x70 / 35", 70, 2352, 31.8, 2985, 0.268, 0.312, undefined, 252, 247, undefined, undefined, undefined],
    [95, "3x95 / 50", 95, 3216, 36, 4010, 0.193, 0.296, undefined, 303, 305, undefined, undefined, undefined],
    [120, "3x120 / 70", 120, 4128, 40, 5075, 0.153, 0.287, undefined, 346, 355, undefined, undefined, undefined],
    [150, "3x150 / 70", 150, 4992, 43.3, 6025, 0.124, 0.279, undefined, 390, 407, undefined, undefined, undefined],
    [185, "3x185 / 95", 185, 6240, 48.9, 7650, 0.0991, 0.271, undefined, 441, 469, undefined, undefined, undefined],
    [240, "3x240 / 120", 240, 8064, 54.9, 9860, 0.0754, 0.263, undefined, 511, 551, undefined, undefined, undefined],
    ["1x16", "4(1x16)", "1x16", 154, 9.5, 215, 1.15, 0, undefined, 115, 102, undefined, undefined, undefined],
    ["1x35", "3(1x35) / 1x16", "1x35", 300, 12.5, 425, 0.524, 0.402, undefined, 178, 170, undefined, undefined, undefined],
    ["1x50", "3(1x50) / 1x25", "1x50", 404, 13.8, 555, 0.387, 0.383, undefined, 211, 208, undefined, undefined, undefined],
    ["1x70", "3(1x70) / 1x35", "1x70", 591, 15.6, 765, 0.268, 0.363, undefined, 259, 265, undefined, undefined, undefined],
    ["1x95", "3(1x95) / 1x50", "1x95", 818, 17.3, 1015, 0.193, 0.344, undefined, 310, 326, undefined, undefined, undefined],
    ["1x120", "3(1x120) / 1x70", "1x120", 1038, 18.9, 1250, 0.153, 0.334, undefined, 352, 381, undefined, undefined, undefined],
    ["1x150", "3(1x150) / 1x70", "1x150", 1278, 20.7, 1535, 0.124, 0.324, undefined, 396, 438, undefined, undefined, undefined],
    ["1x185", "3(1x185) / 1x95", "1x185", 1597, 22.8, 1900, 0.0991, 0.313, undefined, 449, 507, undefined, undefined, undefined],
    ["1x240", "3(1x240) / 1x120", "1x240", 2113, 26, 2480, 0.0754, 0.301, undefined, 521, 606, undefined, undefined, undefined]
],
xlpe_cable_3_5_6kV: [
    [25, "3x25ş / 16", 25, 921, 40.1, 3050, 0.727, 0.362, 0.255, 149, 141, undefined],
    [35, "3x35ş / 16", 35, 1209, 42.8, 3565, 0.524, 0.343, 0.285, 176, 171, undefined],
    [50, "3x50ş / 16", 50, 1671, 45, 4060, 0.387, 0.328, 0.312, 208, 196, undefined],
    [70, "3x70ş / 16", 70, 2247, 49.5, 5110, 0.268, 0.312, 0.358, 255, 249, undefined],
    [95, "3x95ş / 16", 95, 2994, 53.5, 6215, 0.193, 0.296, 0.404, 307, 307, undefined],
    [120, "3x120ş / 16", 120, 3714, 56.6, 7205, 0.153, 0.287, 0.441, 353, 353, undefined],
    [150, "3x150ş / 25", 150, 4638, 60.4, 8435, 0.124, 0.279, 0.479, 396, 406, undefined],
    [185, "3x185ş / 25", 185, 5646, 64.5, 9890, 0.0991, 0.271, 0.525, 447, 464, undefined],
    [240, "3x240ş / 25", 240, 7272, 71.3, 12260, 0.0754, 0.263, 0.574, 523, 548, undefined],
    ["1x25", "3(1x25ş / 16)", "1x25", 422, 19, 645, 0.727, 0.425, 0.255, 154, 167, undefined],
    ["1x35", "3(1x35ş / 16)", "1x35", 518, 20.1, 755, 0.524, 0.402, 0.285, 191, 199, undefined],
    ["1x50", "3(1x50ş / 16)", "1x50", 662, 21.1, 880, 0.387, 0.383, 0.312, 227, 241, undefined],
    ["1x70", "3(1x70ş / 16)", "1x70", 854, 22.8, 1105, 0.268, 0.363, 0.358, 277, 301, undefined],
    ["1x95", "3(1x95ş / 16)", "1x95", 1094, 24.9, 1395, 0.193, 0.344, 0.404, 331, 365, undefined],
    ["1x120", "3(1x120ş / 16)", "1x120", 1334, 26.3, 1645, 0.153, 0.334, 0.441, 379, 419, undefined],
    ["1x150", "3(1x150ş / 25)", "1x150", 1723, 27.7, 2000, 0.124, 0.324, 0.479, 422, 479, undefined],
    ["1x185", "3(1x185ş / 25)", "1x185", 2059, 29.4, 2360, 0.0991, 0.313, 0.525, 476, 543, undefined],
    ["1x240", "3(1x240ş / 25)", "1x240", 2587, 32.2, 2940, 0.0754, 0.301, 0.574, 550, 640, undefined]
],
xlpe_cable_6_10kV: [
    [25, "3x25ş / 16", 25, 921, 44.3, 3520, 0.727, 0.386, 0.201, 148, 143, undefined, undefined],
    [35, "3x35ş / 16", 35, 1209, 47.5, 4085, 0.524, 0.366, 0.222, 178, 173, undefined, undefined],
    [50, "3x50ş / 16", 50, 1671, 49.7, 4625, 0.387, 0.349, 0.239, 210, 206, undefined, undefined],
    [70, "3x70ş / 16", 70, 2247, 53.8, 5635, 0.268, 0.331, 0.275, 256, 257, undefined, undefined],
    [95, "3x95ş / 16", 95, 2994, 58.2, 6860, 0.193, 0.314, 0.309, 307, 313, undefined, undefined],
    [120, "3x120ş / 16", 120, 3714, 61.2, 7870, 0.153, 0.304, 0.336, 349, 360, undefined, undefined],
    [150, "3x150ş / 25", 150, 4638, 64.7, 9010, 0.124, 0.295, 0.364, 392, 410, undefined, undefined],
    [185, "3x185ş / 25", 185, 5646, 69.1, 10580, 0.0991, 0.286, 0.397, 443, 469, undefined, undefined],
    [240, "3x240ş / 25", 240, 7272, 75.8, 12840, 0.0754, 0.275, 0.447, 513, 553, undefined, undefined],
    ["1x25", "3(1x25ş / 16)", "1x25", 422, 20.8, 700, 0.727, 0.443, 0.201, 157, 162, undefined, undefined],
    ["1x35", "3(1x35ş / 16)", "1x35", 518, 21.9, 810, 0.524, 0.419, 0.222, 187, 195, undefined, undefined],
    ["1x50", "3(1x50ş / 16)", "1x50", 662, 22.9, 940, 0.387, 0.399, 0.239, 220, 234, undefined, undefined],
    ["1x70", "3(1x70ş / 16)", "1x70", 854, 25, 1195, 0.268, 0.378, 0.275, 269, 292, undefined, undefined],
    ["1x95", "3(1x95ş / 16)", "1x95", 1094, 26.7, 1465, 0.193, 0.361, 0.309, 321, 354, undefined, undefined],
    ["1x120", "3(1x120ş / 16)", "1x120", 1334, 28.1, 1720, 0.153, 0.347, 0.336, 364, 407, undefined, undefined],
    ["1x150", "3(1x150ş / 25)", "1x150", 1723, 29.5, 2080, 0.124, 0.336, 0.364, 405, 460, undefined, undefined],
    ["1x185", "3(1x185ş / 25)", "1x185", 2059, 31.2, 2445, 0.0991, 0.325, 0.397, 457, 527, undefined, undefined],
    ["1x240", "3(1x240ş / 25)", "1x240", 2587, 33.8, 3020, 0.0754, 0.311, 0.447, 528, 621, undefined, undefined]
]}
var sonuc = {}
var rapor = []



/////    KABLO HESABI FONKSİYONLARI
var alert = function(id, message, succes){
    var alrt = $('#' + id)
    alrt.html('')
    if(succes){
        alrt.html('<strong>Succes!</strong> ' + message)
    }
    else{
        alrt.html('<strong>Failed!</strong> ' + message)
    }
    alrt.slideToggle('slow');
    setTimeout(function(){
        alrt.slideToggle('slow');
    }, 3000);
}

var kabloVeriOku = function(){
    var veri = {}
    veri.U = parseFloat(document.getElementById('kablo-hesabi-u').value)
    veri.P = parseFloat(document.getElementById('kablo-hesabi-p').value)
    veri.cosfi = parseFloat(document.getElementById('kablo-hesabi-cosfi').value)
    veri.verim = parseFloat(document.getElementById('kablo-hesabi-verim').value)
    veri.dFaktoru = parseFloat(document.getElementById('kablo-hesabi-duzeltme-faktoru').value)
    veri.sFaktoru = parseFloat(document.getElementById('kablo-hesabi-sicaklik-faktoru').value)
    veri.tipi = document.getElementById('kablo-hesabi-tipi').value
    veri.l1 = parseFloat(document.getElementById('kablo-hesabi-l1').value)
    veri.l2 = parseFloat(document.getElementById('kablo-hesabi-l2').value)
    veri.l3 = parseFloat(document.getElementById('kablo-hesabi-l3').value)
    console.log(veri)
    kabloVeriGecerle(veri)
}

var kabloVeriGecerle = function(veri){
    if(!veri){
        alert('kablo-hesabi-failed', 'Entered data is empty!', false)
    }
    else if(!(0 <= veri.cosfi && veri.cosfi <= 1) || !(0 <= veri.verim && veri.verim <= 1) || !(0 <= veri.dFaktoru && veri.dFaktoru <= 1)){
        alert('kablo-hesabi-failed', 'cos, yield, corr. factor must be between 0 and 1!', false)
    }
    else{
        veri.L = veri.l1 + veri.l2 + veri.l3
        hesapla(veri)
    }
}

var hesapla = function(veri){
    var sinfi = Math.sin(Math.acos(veri.cosfi))
    var ekipmanI = (veri.P * 1000) / (Math.sqrt(3, 2) * veri.U* veri.cosfi * veri.verim)

    for(var i = 1; i < 20; i++){
        for(var j = 0; j < kablo[veri.tipi].length; j++){
            var Rl = kablo[veri.tipi][j][6]
            var Ll = kablo[veri.tipi][j][7]
            var kabloI = kablo[veri.tipi][j][10]
            var Xl = (314 * Ll) / 1000
            var duzeltilmis = kabloI * veri.dFaktoru * veri.sFaktoru
            var KabloSY = ekipmanI / duzeltilmis
            var Du = (1 / i) * Math.sqrt(3, 2) * (veri.L / 1000) * ekipmanI * (Rl * veri.cosfi + Xl * sinfi)
            var yuzdeE =  Du / veri.U+ 0.0025
            //var klasikYuzdeE = veri.L * 1000 * veri.P / (56 * kablo[veri.tipi][j][0] * veri.U * veri.U) + 0.0025

            if((duzeltilmis / ekipmanI > 1) && (yuzdeE < 0.05) /*&& (klasikYuzdeE < 0.05)*/){
                console.log({sinfi: sinfi, ekipmanI: ekipmanI, Rl: Rl, Ll: Ll, kabloI: kabloI, Xl: Xl, duzeltilmis: duzeltilmis, KabloSY: KabloSY, Du: Du, yuzdeE: yuzdeE, kablo: {kabloSayisi: i, kabloKesiti: kablo[veri.tipi][j][0]}})
                
                if(!sonuc[veri.tipi]){
                    sonuc[veri.tipi] = {kabloTipi: veri.tipi}
                }
                
                if(!sonuc[veri.tipi]['kod_' + i + '_' + kablo[veri.tipi][j][0]]){
                    sonuc[veri.tipi]['kod_' + i + '_' + kablo[veri.tipi][j][0]] = {uzunluk: veri.L, kabloKesiti: kablo[veri.tipi][j][1]}
                }
                else{
                    sonuc[veri.tipi]['kod_' + i + '_' + kablo[veri.tipi][j][0]].uzunluk += veri.L
                }

                document.getElementById('l-list').value = ' | ' + veri.L + document.getElementById('l-list').value
                return
            }
        }
    }
}

var writeExcelFile = function(data){
    var file = document.getElementById('target-file').files[0]
    if(file){
        const ex = require('xlsx')
        console.log(data)
        var ws = ex.utils.json_to_sheet(data)
    
        /* add to workbook */
        var wb = ex.utils.book_new()
        ex.utils.book_append_sheet(wb, ws, "Sheet1")
        
        /* generate an XLSX file */
        ex.writeFile(wb, file.path, function(err){
            console.log(err)
        })
        alert('export-excel-succes', 'Data exported succesfully!', true)
    }
    else {
        alert('export-excel-failed', 'Please eslect a target file!', false)
    }
}

var readExcelFile = function(){
    var file = document.getElementById('source-file').files[0]
    if(file){
        const ex = require('xlsx')
        var workbook = ex.readFile(file.path);
        var worksheet = workbook.Sheets[workbook.SheetNames[0]]
        var data = readExcelAsArray(worksheet)
        return data
    }
    else {
        alert('export-excel-failed', 'Please eslect a source file!', false)
    }
}

var readExcelAsArray = function(worksheet){
    const ex = require('xlsx')
    var result = []
    var row
    var rowNum
    var colNum
    var range = ex.utils.decode_range(worksheet['!ref'])
    for(rowNum = range.s.r; rowNum <= range.e.r; rowNum++){
        row = []
        for(colNum=range.s.c; colNum<=range.e.c; colNum++){
            var nextCell = worksheet [
                ex.utils.encode_cell({r: rowNum, c: colNum})
            ]
            if( typeof nextCell === 'undefined' ){
                row.push(void 0)
            } else row.push(nextCell.w)
        }
        result.push(row)
    }
    return result
}

var sonucFormatlandir = function(){
    sonuc.toplam = 0
    for(var i in sonuc){
        if(i != 'toplam' && i != 'kabloTipi'){
            sonuc[i].toplam = 0
            for(var j in sonuc[i]){
                if(j != 'toplam' && j != 'kabloTipi'){
                    sonuc[i].toplam += sonuc[i][j].uzunluk
                    sonuc.toplam += sonuc[i][j].uzunluk
                    rapor.push({Kablo_Tipi: sonuc[i].kabloTipi, Kablo_Kesiti: sonuc[i][j].kabloKesiti, Uzunluk: sonuc[i][j].uzunluk})
                }
            }
        }
    }
    console.log(sonuc)
}

$(document).ready(function(){
    document.getElementById('kablo-hesabi-u').value = 400
    document.getElementById('kablo-hesabi-p').value = 30
    document.getElementById('kablo-hesabi-cosfi').value = 0.87
    document.getElementById('kablo-hesabi-verim').value = 0.92
    document.getElementById('kablo-hesabi-duzeltme-faktoru').value = 0.82
    document.getElementById('kablo-hesabi-sicaklik-faktoru').value = 0.94
    document.getElementById('kablo-hesabi-l1').value = 0
    document.getElementById('kablo-hesabi-l2').value = 0
    document.getElementById('kablo-hesabi-l3').value = 290
    document.getElementById('l-list').value = ' |'
})

document.getElementById('kablo-hesabi-submit').onclick = function(){
    kabloVeriOku()
}

document.getElementById('kablo-hesabi-sifirla').onclick = function(){
    sonuc = {}
    document.getElementById('l-list').value = ' |'
}

document.getElementById('kablo-hesabi-raporla').onclick = function(){
    sonucFormatlandir()
}

document.getElementById('export-excel-submit').onclick = function(){
    writeExcelFile(rapor)
}

document.getElementById('import-excel-submit').onclick = function(){
    var data = readExcelFile(rapor)
    for(var i = 0; i < data.length && data[i][0] != undefined; i++){
        document.getElementById('kablo-hesabi-l3').value = data[i][0]
        kabloVeriOku()
    }

}

document.getElementById('kablo-hesabi-tipi').onchange = function(){
    if(this.value == 'NYYCable3' || this.value == 'NYYCable1'){
        document.getElementById('kablo-hesabi-sicaklik-faktoru').innerHTML = '<option value="1">30&#176;</option><option value="0.94">35&#176;</option><option value="0.87">40&#176;</option><option value="0.79">45&#176;</option><option value="0.71">50&#176;</option><option value="0.61">55&#176;</option>'
    }
    else {
        document.getElementById('kablo-hesabi-sicaklik-faktoru').innerHTML = '<option value="1">30&#176;</option><option value="0.96">35&#176;</option><option value="0.91">40&#176;</option><option value="0.87">45&#176;</option><option value="0.82">50&#176;</option><option value="0.79">55&#176;</option>'
    }
}
