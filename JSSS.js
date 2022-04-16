
function processForm() {
                    var sum = 0;
                    hc = new Array(5);
                    //如果识别到文档中表单see中第一个问题的第一个选项被选中就使sum+该选项得分
                    if (document.see.c1[0].checked == 1) sum += 0;
                    if (document.see.c1[1].checked == 1) sum += 1;
                    if (document.see.c1[2].checked == 1) sum += 2;
                    if (document.see.c1[3].checked == 1) sum += 3;

                    if (document.see.c2[0].checked == 1) sum += 0;
                    if (document.see.c2[1].checked == 1) sum += 1;
                    if (document.see.c2[2].checked == 1) sum += 2;
                    if (document.see.c2[3].checked == 1) sum += 3;

                    if (document.see.c3[0].checked == 1) sum += 0;
                    if (document.see.c3[1].checked == 1) sum += 1;
                    if (document.see.c3[2].checked == 1) sum += 2;
                    if (document.see.c3[3].checked == 1) sum += 3;

                    if (document.see.c4[0].checked == 1) sum += 0;
                    if (document.see.c4[1].checked == 1) sum += 1;
                    if (document.see.c4[2].checked == 1) sum += 2;
                    if (document.see.c4[3].checked == 1) sum += 3;

                    if (document.see.c5[0].checked == 1) sum += 0;
                    if (document.see.c5[1].checked == 1) sum += 1;
                    if (document.see.c5[2].checked == 1) sum += 2;
                    if (document.see.c5[3].checked == 1) sum += 3;

                    if (sum <= 3) document.see.answer.value = "为你写诗，点击A按钮收获你的诗歌~";
                    if (sum <= 7 && sum >= 4) document.see.answer.value = "为你写诗，按钮B收获你的诗歌~";
                    if (sum <= 11 && sum >= 8) document.see.answer.value = "为你写诗，按钮C收获你的诗歌~";
                    if (sum <= 9 && sum >= 15) document.see.answer.value = "为你写诗，按钮D收获你的诗歌~";
                                      }
function A(){
window.location.href="1.html";
}
function B(){
window.location.href="2.html";
}
function C(){
window.location.href="3.html";
}
function D(){
window.location.href="4.html";
}
