function startform() {
    // disable 
    document.f2.mark.disabled = true;
}

function total_mark() {
    var PlasticBottle = document.getElementById("plastic_bottle").value;
    var AluminiumCans = document.f2.cans.value;
    var index = document.f2.paper.selectedIndex;
    var paper = document.f2.paper.options[index].value;
    var GlassBottle;
    if (document.f2.glass_bottle[0].checked) {
        GlassBottle = document.f2.glass_bottle[0].value;
    }
    if (document.f2.glass_bottle[1].checked) {
        GlassBottle = document.f2.glass_bottle[1].value;
    }
    if (document.f2.glass_bottle[2].checked) {
        GlassBottle = document.f2.glass_bottle[2].value;
    }
    if (document.f2.glass_bottle[3].checked) {
        GlassBottle = document.f2.glass_bottle[3].value;
    }
    if (document.f2.glass_bottle[4].checked) {
        GlassBottle = document.f2.glass_bottle[4].value;
    }
    if (document.f2.glass_bottle[5].checked) {
        GlassBottle = document.f2.glass_bottle[5].value;
    }
    if (document.f2.glass_bottle[6].checked) {
        GlassBottle = document.f2.glass_bottle[6].value;
    }
    if (document.f2.glass_bottle[7].checked) {
        GlassBottle = document.f2.glass_bottle[7].value;
    }
    if (document.f2.glass_bottle[8].checked) {
        GlassBottle = document.f2.glass_bottle[8].value;
    }
    if (document.f2.glass_bottle[9].checked) {
        GlassBottle = document.f2.glass_bottle[9].value;
    }
    if (document.f2.glass_bottle[10].checked) {
        GlassBottle = document.f2.glass_bottle[10].value;
    }

    document.f2.mark.value = PlasticBottle * 5 + AluminiumCans * 4 + paper * 1 + GlassBottle * 2;

}



function print_result() {
    var PlasticBottle = document.getElementById("plastic_bottle").value;
    var AluminiumCans = document.f2.cans.value;
    var index = document.f2.paper.selectedIndex;
    var paper = document.f2.paper.options[index].value;
    var GlassBottle;
    if (document.f2.glass_bottle[0].checked) {
        GlassBottle = document.f2.glass_bottle[0].value;
    }
    if (document.f2.glass_bottle[1].checked) {
        GlassBottle = document.f2.glass_bottle[1].value;
    }
    if (document.f2.glass_bottle[2].checked) {
        GlassBottle = document.f2.glass_bottle[2].value;
    }
    if (document.f2.glass_bottle[3].checked) {
        GlassBottle = document.f2.glass_bottle[3].value;
    }
    if (document.f2.glass_bottle[4].checked) {
        GlassBottle = document.f2.glass_bottle[4].value;
    }
    if (document.f2.glass_bottle[5].checked) {
        GlassBottle = document.f2.glass_bottle[5].value;
    }
    if (document.f2.glass_bottle[6].checked) {
        GlassBottle = document.f2.glass_bottle[6].value;
    }
    if (document.f2.glass_bottle[7].checked) {
        GlassBottle = document.f2.glass_bottle[7].value;
    }
    if (document.f2.glass_bottle[8].checked) {
        GlassBottle = document.f2.glass_bottle[8].value;
    }
    if (document.f2.glass_bottle[9].checked) {
        GlassBottle = document.f2.glass_bottle[9].value;
    }
    if (document.f2.glass_bottle[10].checked) {
        GlassBottle = document.f2.glass_bottle[10].value;
    }


    var total_mark = PlasticBottle * 5 + AluminiumCans * 4 + paper * 1 + GlassBottle * 2;
    if (total_mark >= 50) {
        alert("你的分數是" + total_mark + "你真環保呢")
    } else if (total_mark < 50 & total_mark > 0) {
        alert("你的分數是" + total_mark + "有待改善")
    } else if (total_mark == 0) {
        alert("你的分數是" + total_mark + "你真環保呢")
    }

}