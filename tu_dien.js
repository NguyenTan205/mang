function tu_dien() {
    const tu_tra_cuu = document.getElementById("seach").value;
    let japanes = ["一", "二", "三", "四", "五", "いちご", "マンゴ", "オレンジ", "りんご", "メロン", "牛肉", "豚肉",
        "鶏肉", "行く",　"来る",　"帰る",　"プログラム",　"開発"];
    let vietnames = ["một", "hai", "ba", "bốn", "năm",　"quả dâu tây", "quả xoài", "quả cam", "quả táo",
        "quả dưa vàng", "thịt bò", "thịt lợn", "thịt gà", "Đi", "Đến", "về", "chương trình", "Phát triển"];
    for (let i = 0; i < japanes.length; i++) {
        if(tu_tra_cuu === japanes[i]) {
            document.getElementById("result").innerHTML = vietnames[i];
            return;
        }
    }
    document.getElementById("result").innerHTML = "Không tìm thấy từ phù hợp!!!"
}

document.getElementById("btnseach").addEventListener("click", tu_dien);

